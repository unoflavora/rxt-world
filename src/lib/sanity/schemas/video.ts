import { defineType } from "sanity";

export default defineType({
  name: "homepageVideo",
  type: "document",
  title: "Homepage Video",
  fields: [
    {
      title: "file",
      name: "file",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
  ],
});
