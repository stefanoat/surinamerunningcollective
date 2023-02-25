import { defineConfig } from "tinacms";
import dotenv from 'dotenv';
import homePage from './collections/home.js';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "90de3673-afce-4ddc-a628-a467a865f688", // Get this from tina.io
  token: process.env.TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      homePage
    ],
  },
});
