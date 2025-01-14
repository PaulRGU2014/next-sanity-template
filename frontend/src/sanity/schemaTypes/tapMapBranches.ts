import {defineField, defineType} from 'sanity'
import {ComponentName} from './preview/ComponentName'

export const tapMapBranches = defineType({
  name: 'tapMapBranches',
  title: 'TapMapBranches',
  type: 'document',
  components: {preview: ComponentName('TapMapBranches')},
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