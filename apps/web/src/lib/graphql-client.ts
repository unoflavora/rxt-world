import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "http://localhost:3001/api/graphql",
  {
    headers: {
      Authorization: ("users API-Key " + process.env.PAYLOAD_API_KEY) as string,
    },
    cache: process.env.NODE_ENV === "development" ? "no-cache" : "force-cache",
  }
);
