import {defineField, defineType} from 'sanity'

export const pages = defineType({
  name: 'pages',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      type: 'string',
    }),
    defineField({
      name: 'page_url',
      type: 'slug',
    }),
    defineField({
      name: 'components',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
          //associateHere
	{ type : 'fullPageHero' },
            {type: 'footer'},
            {type: 'hero'},
            {type: 'gridLinksCarousel'},
            {type: 'hardcodedBlocks'},
            {type: 'textTwoImages'},
          ]
        }
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to: [{type: 'footer'}]
    }),
  ],
})