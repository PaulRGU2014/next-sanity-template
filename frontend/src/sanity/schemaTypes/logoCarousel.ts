import {defineField, defineType} from 'sanity'
import {ComponentName} from './preview/ComponentName'

export const logoCarousel = defineType({
  name: 'logoCarousel',
  title: 'Logo Carousel',
  type: 'document',
  components: {preview: ComponentName('Logo Carousel')},
  preview: {
    select: {
      title: 'title',
    },
  },   
  fields: [
    defineField({
      name: 'info',
      title: 'Component Information',
      type: 'text',
      rows: 3,
      readOnly: true,
      initialValue: 'This compoenent is used to display a carousel of logos.',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      type: 'array',
      of: [{
        type: 'object',
        preview:{
          select: {
            title: 'title',
            media: 'logo',
          },
        },
        fields: [
          defineField({
            name: 'title',
            type: 'string',
          }),
          defineField({
            name: 'logo',
            title: 'Image',
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
        ],
      }],
    }),
    defineField({
      name: 'theme',
      type: 'string',
      description: 'Description here',
      options: {
        list: ['light', 'dark'],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
  ],
})