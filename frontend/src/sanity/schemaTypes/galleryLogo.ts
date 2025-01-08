import {defineField, defineType} from 'sanity'

export const galleryLogo = defineType({
  name: 'galleryLogo',
  title: 'GalleryLogo',
  type: 'document',
  fields: [
    defineField({
      name: 'info',
      title: 'Component Information',
      type: 'text',
      rows: 3,
      readOnly: true,
      initialValue: 'Component Information Description',
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'This title is for reference only',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        accept: 'image/png, image/svg+xml',
      },
      description: 'Accept only .png and .svg format image.',
      fields: [
        {
          name: 'alt',
          title: 'Image Alt Text',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Image alt text',
        },
      ],
    }), 
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{
        type: 'object',
        preview:{
          select: {
            title: 'title',
            media: 'image',
          },
        },
        fields: [
          defineField({
            name: 'title',
            type: 'string',
          }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              accept: 'image/webp',
            },
            description: 'Accept only .webp format image.',
            fields: [
              {
                name: 'alt',
                title: 'Image Alt Text',
                type: 'string',
                validation: Rule => Rule.required(),
                initialValue: 'Image alt text',
              },
            ],
          }),         
        ],
      }],
    }),  
    // defineField({
    //   name: 'theme',
    //   type: 'string',
    //   description: 'Description here',
    //   options: {
    //     list: ['light', 'dark'],
    //     layout: 'radio',
    //   },
    //   initialValue: 'light',
    // }),
  ],
})