import { CollectionConfig } from "payload/types";

const TeamDescription: CollectionConfig = {
  slug: "allTeam",
  fields: [
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
  ],
};

export default TeamDescription;
