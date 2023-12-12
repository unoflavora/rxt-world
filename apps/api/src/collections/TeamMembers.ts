import { CollectionConfig } from "payload/types";
import { validateUrl } from "../lib/validation";

const TeamMembers: CollectionConfig = {
  slug: "members",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "socials",
      type: "array",
      required: true,
      fields: [
        { name: "email", type: "email" },
        { name: "facebook", type: "text", validate: validateUrl },
        { name: "instagram", type: "text", validate: validateUrl },
        { name: "linkedin", type: "text", validate: validateUrl },
        { name: "twitter", type: "text", validate: validateUrl },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "obj",
      type: "upload",
      required: true,
      relationTo: "file",
    },
    {
      name: "mat",
      type: "upload",
      required: true,
      relationTo: "file",
    },
    {
      name: "textures",
      type: "array",
      fields: [
        { name: "tex1", type: "upload", relationTo: "texture" },
        { name: "tex2", type: "upload", relationTo: "texture" },
        { name: "tex3", type: "upload", relationTo: "texture" },
        { name: "tex4", type: "upload", relationTo: "texture" },
      ],
    },
  ],
};

export default TeamMembers;
