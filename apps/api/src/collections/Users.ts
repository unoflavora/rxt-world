import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },

  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
