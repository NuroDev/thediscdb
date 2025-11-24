import type { APIRoute } from 'astro';
import { query } from '~/graphql';
import { getImageUrl } from '~/utils/image';

export const GET: APIRoute = async ({ url }) => {
	const searchQuery = url.searchParams.get('q') || '';

	if (!searchQuery.trim())
		return new Response(JSON.stringify({ results: [] }), {
			headers: { 'Content-Type': 'application/json' },
			status: 200,
		});

	try {
		// Query all three types in parallel
		const [moviesData, seriesData, boxsetsData] = await Promise.all([
			query.GetAllMovies({
				first: 3,
				order: [{ latestReleaseDate: 'DESC' }],
				where: {
					title: { contains: searchQuery },
					type: { eq: 'Movie' },
				},
			}),
			query.GetAllSeries({
				first: 3,
				order: [{ latestReleaseDate: 'DESC' }],
				where: {
					title: { contains: searchQuery },
					type: { eq: 'Series' },
				},
			}),
			query.GetAllBoxSets({
				first: 3,
				order: [{ title: 'ASC' }],
				where: {
					title: { contains: searchQuery },
				},
			}),
		]);

		return new Response(
			JSON.stringify({
				results: [
					{
						items:
							moviesData.mediaItems?.edges?.map((edge) => ({
								id: edge.node.id,
								title: edge.node.title,
								slug: edge.node.slug,
								imageUrl: edge.node.imageUrl
									? getImageUrl(edge.node.imageUrl)
									: null,
								type: edge.node.type,
								year: edge.node.year,
							})) || [],
						path: '/movies',
						totalCount: moviesData.mediaItems?.edges?.length || 0,
						type: 'Movie',
					},
					{
						items:
							seriesData.mediaItems?.edges?.map((edge) => ({
								id: edge.node.id,
								title: edge.node.title,
								slug: edge.node.slug,
								imageUrl: edge.node.imageUrl
									? getImageUrl(edge.node.imageUrl)
									: null,
								type: edge.node.type,
								year: edge.node.year,
							})) || [],
						path: '/series',
						totalCount: seriesData.mediaItems?.edges?.length || 0,
						type: 'Series',
					},
					{
						items:
							boxsetsData.boxsets?.edges?.map((edge) => ({
								id: edge.node.id,
								title: edge.node.title,
								slug: edge.node.slug,
								imageUrl: edge.node.imageUrl
									? getImageUrl(edge.node.imageUrl)
									: null,
								type: edge.node.type,
								year: edge.node.release?.year,
							})) || [],
						path: '/boxsets',
						totalCount: boxsetsData.boxsets?.edges?.length || 0,
						type: 'BoxSet',
					},
				],
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	} catch (error) {
		console.error('Search API error:', error);
		return new Response(JSON.stringify({ error: 'Search failed', results: [] }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
