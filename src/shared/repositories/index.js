import { ApolloClient, InMemoryCache } from "@apollo/client";
import { FETCH_CORS_MODE, MUSIC_BRAINS_SERVER } from "../../configs";

export const client = new ApolloClient({
  uri: MUSIC_BRAINS_SERVER,
  fetchOptions: {
    mode: FETCH_CORS_MODE,
  },
  connectToDevTools: true,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            keyArgs: [],
            merge(existing = {}, incoming, args) {
              if (
                !existing ||
                !Object.keys(existing).length ||
                !args.variables.endCursor
              ) {
                return incoming;
              }

              const merged = JSON.parse(JSON.stringify(existing));
              const existingKey = Object.keys(existing)[1];
              const incomingKey = Object.keys(incoming)[1];
              merged[existingKey].pageInfo = incoming[incomingKey].pageInfo;
              merged[existingKey].edges.push(...incoming[incomingKey].edges);
              return merged;
            },
          },
        },
      },
    },
  }),
});
