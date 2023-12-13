import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  process.env.CMS_API + "/api/graphql",
  {
    headers: {
      Authorization: ("users API-Key " + process.env.PAYLOAD_API_KEY) as string,
    },
    cache: process.env.NODE_ENV === "development" ? "no-cache" : "force-cache",
    next: {
      revalidate: process.env.NODE_ENV === "production" ? 20 : 0,
    },
  }
);
