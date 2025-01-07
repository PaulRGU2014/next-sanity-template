import {defineField, defineType} from 'sanity'

export const logoCarousel = defineType({
  name: 'logoCarousel',
  title: 'Logo Carousel',
  type: 'document',
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
        fields: [
          defineField({
            name: 'logo',
            title: 'Image',
            type: 'image',
            options: {
              accept: 'image/webp, image/svg+xml',
            },
            description: 'Accept only .webp and .svg format image.',
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