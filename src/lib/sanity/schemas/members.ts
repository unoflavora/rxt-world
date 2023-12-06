import { defineType } from "sanity";

export default defineType({
  name: "members",
  type: "document",
  title: "Team Members",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      title: "Socials",
      name: "socials",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        { name: "email", type: "email", title: "Email" },
        { name: "facebook", type: "string", title: "Facebook" },
        { name: "instagram", type: "string", title: "Instagram" },
        { name: "linkedin", type: "string", title: "Linkedin" },
        { name: "twitter", type: "string", title: "Twitter" },
      ],
    },
    {
      title: "3d file",
      name: "file",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
  ],
});
