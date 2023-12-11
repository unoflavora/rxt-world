import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "./config";
import urlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const buildUrl = ({
  value,
  isInline,
}: {
  value: string;
  isInline: boolean;
}) =>
  urlBuilder({ clientConfig: { projectId, dataset } })
    .image(value)
    .fit("max")
    .auto("format")
    .url();
