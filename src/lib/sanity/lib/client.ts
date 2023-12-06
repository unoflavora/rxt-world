import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
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
  value: any;
  isInline: boolean;
}) =>
  urlBuilder({ clientConfig: { projectId, dataset } })
    .image(value.asset)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();
