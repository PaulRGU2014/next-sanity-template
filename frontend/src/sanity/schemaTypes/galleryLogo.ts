import {defineField, defineType} from 'sanity'
import {ComponentName} from './preview/ComponentName'

export const galleryLogo = defineType({
  name: 'galleryLogo',
  title: 'GalleryLogo',
  type: 'document',
  components: {preview: ComponentName('Gallery Logo')},
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
      initialValue: 'This component is used to display a gallery of  4 images with a logo.',
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
      description: '4 images needed',
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
            name: 'description',
            type: 'text',
          }),
          defineField({
            name: 'link',
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
      validation: Rule => Rule.required().min(4).max(4),
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