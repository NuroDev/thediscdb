import type { CodegenConfig } from '@graphql-codegen/cli';

export default {
	generates: {
		'src/graphql/sdk.gen.ts': {
			config: {
				enumsAsTypes: true,
				rawRequest: false,
				skipTypename: false,
				useTypeImports: true,
			},
			plugins: [
				'typescript',
				'typescript-graphql-request',
				'typescript-operations',
			],
		},
	},
	documents: ['src/graphql/queries.gql'],
	ignoreNoDocuments: true,
	schema: 'https://raw.githubusercontent.com/TheDiscDb/data/refs/heads/main/tools/ImportBuddy/source/ImportBuddy/TheDiscDb.Client/schema.graphql',
} satisfies CodegenConfig;
