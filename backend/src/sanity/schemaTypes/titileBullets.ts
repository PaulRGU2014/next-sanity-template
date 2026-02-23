import {defineField, defineType} from 'sanity'
import {ComponentName} from './preview/ComponentName'

export const titileBullets = defineType({
  name: 'titileBullets',
  title: 'TitileBullets',
  type: 'document',
  components: {preview: ComponentName('TitileBullets')},
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
      name: 'bullets',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})