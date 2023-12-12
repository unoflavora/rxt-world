import express from "express";
import payload from "payload";
import path from "path";
require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

app.get("/graphql-schema", (_, res) => {
  res.sendFile(path.resolve(__dirname, "generated-schema.graphql"));
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3001);
};

start();
