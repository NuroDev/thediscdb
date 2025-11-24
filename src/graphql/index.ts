import { GraphQLClient } from 'graphql-request';

import { getSdk } from '~/graphql/sdk.gen';

const GRAPHQL_ENDPOINT = 'https://thediscdb.com/graphql/';

const client = new GraphQLClient(GRAPHQL_ENDPOINT);

export const query = getSdk(client);
