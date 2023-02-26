// Different field variables
// 
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
    component: 'color',
    description: 'Edit the background color here',
    colorFormat: 'hex',
    colors: ['#EC4815', '#241748', '#B4F4E0', '#E6FAF8'],
    widget: 'sketch',
  },
  {
    name: 'text_color',
    label: 'Text Color',
    type: 'string',
    component: 'color',
    description: 'Edit the text color here',
    colorFormat: 'hex',
    colors: ['#EC4815', '#241748', '#B4F4E0', '#E6FAF8'],
    widget: 'sketch',
  },
];
const content_field = [
  {
    name: 'content',
    label: 'Description', 
    type: 'string',
    ui: {
      component: 'textarea',
    },
  },
];
const logo_field = [
  {
    name: 'image',
    label: 'Logo', 
    type: 'image',
  },
];
const button_fields = [
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
const image_fields = [
  {
    name: 'image',
    label: 'Full Image', 
    type: 'image',
  },
  {
    name: 'thumb',
    label: 'Thumbnail', 
    type: 'image',
  }
];
const menu_item_fields = [
  {
    name: 'name',
    label: 'Text', 
    type: 'string',
  },
  {
    name: 'url',
    label: 'Link', 
    type: 'string',
  }
];
const weekly_item_fields = [
  {
    name: 'days',
    label: 'Days', 
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
  common_fields[3],
  ...logo_field,
];
const gallery_item__fields_one = [
  common_fields[0],
  ...content_field,
  ...button_fields,
  ...image_fields,
];
const menu_fields = [
  {
    name: 'description',
    label: 'Meta data website description',
    type: 'string',
    ui: {
      component: 'textarea',
    },
  },
];
const footer_fields = [
  {
    name: 'inverse',
    label: 'Inverse Icons',
    type: 'boolean',
    description: 'only works if no text color is set',
  },
  {
    name: 'instagram',
    label: 'Instagram',
    type: 'string',
  },
  {
    name: 'whatsapp',
    label: 'Whatsapp',
    type: 'string',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'string',
  },
  {
    name: 'since',
    label: 'Since',
    type: 'string',
  },
];
const banner_fields = [
  common_fields[0],
  {
    name: 'subtitle',
    label: 'Sub Title', 
    type: 'string',
  },
  ...content_field,
  ...button_fields,
  image_fields[0],
];

// 
// Optional custom list templates
// 

const list_fields_options = [
  {
    label: "Custom Items",
    name: "items",
    type: "object",
    list: true,
    templates: [
      {
        name: 'gallery_two',
        label: 'Pictures',
        ui:{
          itemProps (item){
            return { label: item.image || 'Gallery'}
          }
        },
        fields: image_fields
      },
      {
        name: 'run',
        label: 'Weekly Run',
        ui:{
          itemProps (item){
            return { label: item.days || 'Days'}
          }
        },
        fields: weekly_item_fields
      },
      {
        name: 'gallery_one',
        label: 'Events/Routes',
        ui:{
          itemProps (item){
            return { label: item.title || 'Gallery'}
          }
        },
        fields: gallery_item__fields_one
      },
      {
        name: 'menu_one',
        label: 'Menu Item',
        ui:{
          itemProps (item){
            return { label: item.name || 'Menu Item'}
          }
        },
        fields: menu_item_fields
      },

    ],
  },
];


// 
// Templates
// 

const weekly_template = {
    name: 'weekly_template',
    label: 'Weekly',
    fields: [...common_fields, ...content_field, ...list_fields_options]
};

const upcoming_routes_template = {
    name: 'upcoming_routes_template',
    label: 'Events/Routes',
    fields: [...common_fields, ...content_field, ...list_fields_options]
};

const menu_template = {
  name: 'menu_template',
  label: 'Menu',
  fields: [ ...menu_fields, ...list_fields_options, common_fields[2], ...logo_field, ]
};

const gallery_template = {
  name: 'gallery_template',
  label: 'Pictures',
  fields: list_fields_options
};

const banner_template = {
  name: 'banner_template',
  label: 'Banner',
  fields: [...banner_fields,]
};
const about_template = {
  name: 'about_template',
  label: 'Footer',
  fields: [ common_fields[0], common_fields[1], ...content_field, ...button_fields, common_fields[2], common_fields[3], ...logo_field,  ]
};
const footer_template = {
  name: 'footer_template',
  label: 'Footer',
  fields: [ ...common_fields, ...footer_fields, ]
};


export default {
  label: 'Home Page',
  name: 'site',
  path: 'data',
  format: 'json',
  templates: [ 
    menu_template,
    banner_template,
    weekly_template,
    upcoming_routes_template,
    gallery_template,
    about_template,
    footer_template,

  ],
}