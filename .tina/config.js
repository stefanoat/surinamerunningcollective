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
  clientId: "5106844b-dc8e-454a-bbad-9bba15ad6729", // Get this from tina.io
  token: "5d89d1ee065c445686748f0da5222f0df79b214e", // Get this from tina.io
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
