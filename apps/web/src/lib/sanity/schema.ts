import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import news from "./schemas/news";
import members from "./schemas/members";
import video from "./schemas/video";
import allMembers from "./schemas/allMembers";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, video, members, allMembers, blockContent],
};
