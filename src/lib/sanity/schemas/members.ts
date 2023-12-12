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
      validation: (Rule) => Rule.required().min(10).max(300),
    },
    {
      title: "Socials",
      name: "socials",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        { name: "email", type: "email", title: "Email" },
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "linkedin", type: "url", title: "Linkedin" },
        { name: "twitter", type: "url", title: "Twitter" },
      ],
    },
    {
      name: "photo",
      type: "image",
      title: "Member Photo",
      description: "Real photo to be displayed in the member page",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "3D obj file",
      name: "file",
      type: "file",
      description:
        "3d file in *.obj file, NEVER PUT ANOTHER TYPE OF FILE OTHERWISE IT WILL ERROR",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "3D material file",
      name: "mat",
      type: "file",
      description:
        "3d file in *.mat file, NEVER PUT ANOTHER TYPE OF FILE OTHERWISE IT WILL ERROR",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Textures",
      name: "textures",
      type: "array",
      of: [{ type: "file" }],
      description: "Textures",
      validation: (Rule) => Rule.required(),
    },
  ],
});
