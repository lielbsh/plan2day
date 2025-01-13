import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'habit',
  title: 'Habit',
  type: 'document',
  icon: TagIcon,
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
      name: 'frequancy',
      type: 'text',
      validation: (Rule) => Rule.min(1).max(7).required().error("Please enter a frequancy")
    }),
    defineField({
        name: 'created at',
        type: 'date',
    }),
    defineField({
        name: 'user',
        type: "reference",
        to: {type: "user"}
      }),
    defineField({
        name: 'user',
        type: "reference",
        to: {type: "user"}
    }),
    defineField({
        name: 'user',
        type: "reference",
        to: {type: "user"}
    }),

  ],
})
