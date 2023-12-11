import { defineType } from "sanity";

export default defineType({
  name: "news",
  type: "document",
  title: "News",
  fields: [
    {
      name: "title",
      description: "Title of the news",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().min(5).max(80),
    },
    {
      name: "description",
      description: "Short Description of the news",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: "date",
      description: "Published date of the news",
      type: "date",
      title: "Published Date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Url",
      name: "Url",
      type: "url",
      description: "Link to the news site",
      validation: (Rule) => Rule.required(),
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
