import {defineField, defineType} from 'sanity'
import {ComponentName} from './preview/ComponentName'

export const processFlow = defineType({
  name: 'processFlow',
  title: 'ProcessFlow',
  type: 'document',
  components: {preview: ComponentName('ProcessFlow')},
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
      initialValue: 'Component Information Description',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Step Icon',
            },
            {
              name: 'stepTitle',
              type: 'string',
              title: 'Step Title',
            },
            {
              name: 'stepDescription',
              type: 'text',
              title: 'Step Description',
              rows: 4,
            },
          ],
        },
      ],
    }),
  ],
})