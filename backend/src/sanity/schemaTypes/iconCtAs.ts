import { defineField, defineType } from "sanity";
import { ComponentName } from "./preview/ComponentName";

export const iconCtAs = defineType({
  name: "iconCtAs",
  title: "IconCTAs",
  type: "document",
  components: { preview: ComponentName("IconCTAs") },
  preview: {
    select: {
      title: "title",
    },
  },
  fields: [
    defineField({
      name: "info",
      title: "Component Information",
      type: "text",
      rows: 3,
      readOnly: true,
      initialValue: "Component Information Description",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "ctas",
      title: "CTAs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "image",
            },
            {
              name: "title",
              type: "string",
            },
            {
              name: "link",
              type: "object",
              fields: [
                {
                  name: "label",
                  type: "string",
                },
                {
                  name: "href",
                  type: "string",
                },
                {
                  name: "isExternal",
                  type: "boolean",
                  title: "Open in new tab",
                  initialValue: false,
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
