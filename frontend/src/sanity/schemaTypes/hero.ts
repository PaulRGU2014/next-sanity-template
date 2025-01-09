import {defineField, defineType} from 'sanity'
import {ComponentName} from './preview/ComponentName'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  components: {preview: ComponentName('Hero')},
  preview: {
    select: {
      title: 'title',
    },
  },      
  fields: [
    defineField({
      name: 'hero_title',
      type: 'string',
    }),
    defineField({
      name: 'hero_subtitle',
      type: 'string',
    }),
  ],
})