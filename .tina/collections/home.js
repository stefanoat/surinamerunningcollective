const common_fields = [
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
    name: "background_color",
    label: "Background Color",
    type: "string",  
  },
  {
    name: 'text_color',
    label: 'Text Color', 
    type: 'string',
  },
  {
    name: 'content',
    label: 'Content', 
    type: 'rich-text',
  },
];

const logo = [
  {
    name: 'image',
    label: 'Logo', 
    type: 'image',
  },
]

const weekly_fields = [
  {
    name: 'days',
    label: 'Days', 
    type: 'string',
  },
  {
    name: 'text_color',
    label: 'Text Color', 
    type: 'string',
  },
  {
    name: 'logo',
    label: 'Logo', 
    type: 'string',
  },
  {
    name: 'time',
    label: 'Time', 
    type: 'string',
  },
  {
    name: 'location_name',
    label: 'Location Text', 
    type: 'string',
  },
  {
    name: 'location_link',
    label: 'Location Link', 
    type: 'string',
  },
  {
    name: 'contact',
    label: 'Contact Number', 
    type: 'string',
  },
  {
    name: 'name',
    label: 'Contact Name', 
    type: 'string',
  },
];
const about_button_fields = [
  {
    name: 'label',
    label: 'Button Text', 
    type: 'string',
  },
  {
    name: 'link',
    label: 'Button Link', 
    type: 'string',
  },
];
const gallery_fields = [
  {
    name: 'title',
    label: 'Event Name', 
    type: 'string',
  },
  {
    name: 'content',
    label: 'Description', 
    type: 'string',
  },
  {
    name: 'image',
    label: 'Full Image', 
    type: 'image',
  },
  {
    name: 'thumb',
    label: 'Thumbnail', 
    type: 'image',
  },
  {
    name: 'button_text',
    label: 'Button Text', 
    type: 'string',
  },
  {
    name: 'button_link',
    label: 'Button Link', 
    type: 'string',
  },
];

const item_template = [
  {
    label: "Custom Items",
    name: "items",
    type: "object",
    list: true,
    templates: [
      {
        name: 'run',
        label: 'Weekly Run',
        ui:{
          itemProps (item){
            return { label: item.days || 'Days'}
          }
        },
        fields: weekly_fields
      },
      {
        name: 'gallery',
        label: 'Events/Routes',
        ui:{
          itemProps (item){
            return { label: item.title || 'Gallery'}
          }
        },
        fields: gallery_fields
      },
      {
        name: 'button',
        label: 'About Button',
        ui:{
          itemProps (item){
            return { label: item.label || 'Button'}
          }
        },
        fields: about_button_fields
      },
    ],
  },
];



export default {
  label: 'Home Page',
  name: 'home',
  path: 'data/home',
  format: 'json',
  fields: [...common_fields, ...item_template, ...logo],

}