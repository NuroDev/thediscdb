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
			plugins: ['typescript-operations', 'typescript-graphql-request'],
		},
	},
	documents: ['src/graphql/queries.gql'],
	ignoreNoDocuments: true,
	schema: 'https://thediscdb.com/graphql/',
} satisfies CodegenConfig;
