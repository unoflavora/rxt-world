import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import news from "./schemas/news";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, blockContent],
};
