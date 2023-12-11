import { defineType } from "sanity";

export default defineType({
  name: "allTeam",
  type: "document",
  title: "All Team Members",
  description: "All team members that is shown on the homepage",
  fields: [
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required().min(10).max(300),
    },
    {
      name: "image",
      type: "image",
      title: "Header Image",
      description: "Image to be displayed",
      validation: (Rule) => Rule.required(),
    },
  ],
});
