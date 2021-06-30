import { ApolloClient, InMemoryCache } from "@apollo/client";
import {MUSIC_BRAINS_SERVER} from "../../configs";

export const client = new ApolloClient({
  uri: MUSIC_BRAINS_SERVER,
  cache: new InMemoryCache(),
});
