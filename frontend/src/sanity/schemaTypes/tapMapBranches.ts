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
  groups: [
    {
      name: 'usa',
      title: 'USA'
    },
    {
      name: 'uganda',
      title: 'Uganda'
    }
  ],
  fields: [
    defineField({
      name: 'info',
      title: 'Component Information',
      type: 'text',
      rows: 3,
      readOnly: true,
      initialValue: 'This compoenent is partly hardcoded and partly dynamic. The title and content are dynamic and the maps are hardcoded. If you need to add a new branch, you need to contact frontend team.',
      group:['usa', 'uganda']
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'branches_usa',
      title: 'USA Branches',
      type: 'array',
      of: [{
        name:'branch',
        type:'object',
        fields: [
          {
            name: 'branch_name',
            title: 'Branch Name',
            type: 'string'
          },
          {
            name: 'branch_id',
            title: 'Branch ID',
            description: 'The value in this field needs to be matched to the ID provided by the frontend team',
            type: 'string'
          },
          {
            name: 'body',
            title: 'Content',
            type: 'text',
            rows: 3
          }
        ]
      }],
      group:['usa']
    }),
    defineField({
      name: 'branches_uganda',
      title: 'Uganda Branches',
      type: 'array',
      of: [{
        name:'branch',
        type:'object',
        fields: [
          {
            name: 'branch_name',
            title: 'Branch Name',
            type: 'string'
          },
          {
            name: 'branch_id',
            title: 'Branch ID',
            description: 'The value in this field needs to be matched to the ID provided by the frontend team',
            type: 'string'
          },
          {
            name: 'body',
            title: 'Content',
            type: 'text',
            rows: 3
          }
        ]
      }],
      group:['uganda']
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