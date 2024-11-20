import {defineField, defineType} from 'sanity'

export const fullPageHero = defineType({
  name: 'fullPageHero',
  title: 'FullPageHero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})