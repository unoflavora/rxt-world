import "server-only";

import type { QueryParams } from "@sanity/client";
import { client } from "../client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
  query,
  tags = DEFAULT_TAGS,
  params = DEFAULT_PARAMS,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-cache",
    headers: {
      Authorization: "bearer " + process.env.SANITY_SECRET,
    },
    next: {
      tags,
    },
  });
}
