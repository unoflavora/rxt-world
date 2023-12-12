import { CollectionConfig } from "payload/types";

const HomepageVideo: CollectionConfig = {
  slug: "homeVideo",
  fields: [
    {
      name: "video",
      type: "upload",
      relationTo: "file",
      required: true,
    },
  ],
};

export default HomepageVideo;
