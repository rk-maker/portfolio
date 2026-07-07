import { defineField, defineType, defineArrayMember } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Web App", value: "Web App" },
          { title: "Mobile App", value: "Mobile App" },
          { title: "Other", value: "Other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "media",
      title: "Project media",
      type: "array",
      of: [
        defineArrayMember({
          name: "projectMedia",
          title: "Media item",
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.type !== "image",
            }),
            defineField({
              name: "videoUrl",
              title: "Video URL",
              type: "url",
              hidden: ({ parent }) => parent?.type !== "video",
            }),
            defineField({
              name: "altText",
              title: "Alt text",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        defineField({
          name: "live",
          title: "Live URL",
          type: "url",
        }),
        defineField({
          name: "github",
          title: "GitHub / Repo URL",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "detailedDescription",
      title: "Detailed description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Use this field to manually sort projects in the frontend.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "media.0.image",
    },
  },
});
