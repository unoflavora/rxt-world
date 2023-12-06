import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import news from "./schemas/news";
import members from "./schemas/members";
import video from "./schemas/video";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, video, members, blockContent],
};
