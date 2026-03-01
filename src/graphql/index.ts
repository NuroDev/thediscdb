import { waitUntil } from 'cloudflare:workers';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '~/graphql/sdk.gen';

const GRAPHQL_ENDPOINT = 'https://thediscdb.com/graphql/';

const DEFAULT_TTL = 300; // 5 minutes

const TTL_MAP: Record<string, number> = {
	GetAllBoxSets: 300, // 5 min
	GetAllMovies: 300, // 5 min
	GetAllSeries: 300, // 5 min
	GetBoxSetBySlug: 600, // 10 min
	GetMovieBySlug: 600, // 10 min
	GetSeriesBySlug: 600, // 10 min
};

/**
 * Builds a synthetic {@link Request} to use as a Cloudflare Cache API key.
 * Each query variable is encoded as an individual search param, with
 * nested objects/arrays JSON-stringified. Params are sorted for determinism.
 *
 * @param operationName - The GraphQL operation name (e.g. `"GetAllMovies"`).
 * @param variables - The query variables to encode into the key.
 *
 * @returns A {@link Request} suitable for use with `cache.match()` / `cache.put()`.
 */
function getCacheKey(operationName: string, variables: unknown): Request {
	const params = new URLSearchParams();

	if (variables && typeof variables === 'object') {
		for (const [key, value] of Object.entries(variables)) {
			if (value === undefined || value === null) continue;

			params.set(
				key,
				typeof value === 'object' ? JSON.stringify(value) : String(value),
			);
		}
	}

	params.sort();

	return new Request(
		`https://cache.thediscdb.internal/graphql/${operationName}?${params}`,
	);
}

const client = new GraphQLClient(GRAPHQL_ENDPOINT);

export const query = getSdk(
	client,
	async (action, operationName, _operationType, variables) => {
		let cache: Cache | null = null;
		if (typeof caches !== 'undefined') {
			cache = (caches as unknown as { default: Cache }).default;
		}

		if (!cache) return action();

		const cacheKey = getCacheKey(operationName, variables);
		const ttl = TTL_MAP[operationName] ?? DEFAULT_TTL;

		try {
			const cached = await cache.match(cacheKey);
			if (cached) return cached.json();
		} catch {
			// Cache read failed, fall through to live query
		}

		const result = await action();

		const response = new Response(JSON.stringify(result), {
			headers: {
				'Cache-Control': `public, s-maxage=${ttl}`,
				'Content-Type': 'application/json',
			},
		});

		waitUntil(cache.put(cacheKey, response));

		return result;
	},
);
