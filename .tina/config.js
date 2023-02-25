import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const fields = [
  {
    name: "title",
    label: "Title",
    type: "string",  
  },
  {
    name: "idee",
    label: "Id",
    type: "string",  
  },
  {
    name: "text_color",
    label: "Text Color",
    type: "string",  
  },
  {
    name: "background_color",
    label: "Background Color",
    type: "string",  
  },
];


const about_fields = [
  {
    name: 'content',
    label: 'Content', 
    type: 'string',
  },
];

const about_fields2 = [
  {
    name: 'content',
    label: 'Content', 
    type: 'string',
  },
];



export default defineConfig({
  branch,
  clientId: "0e20ddc0-7b7f-4bb8-876e-153c551c5ed5", // Get this from tina.io
  token: "38e3312db5b2d68921d6ec089ba0ad882e6f1ebd", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "images",
    },
  },
  schema: {
    collections: [{
        label: 'Home Page',
        name: 'home',
        path: 'data/',
        format: 'json',
        fields: [
          {
            label: "Page Blocks",
            name: "pageBlocks",
            type: "object",
            list: true,
            templates: [
            {
              name: 'about',
              label: 'About',
              fields: about_fields,
            },
            {
              name: 'banner',
              label: 'Banner',
              fields: about_fields2,
            },
            ],
          },
          {
            name: 'content',
            label: 'Content', 
            type: 'string',
          },
        ],
    }],
  },
});
