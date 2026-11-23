import { defineField, defineType } from "sanity";

/** Slugs that would collide with a section route and become unreachable. */
const RESERVED = ["articles", "newsletter", "blog", "quotes"];

export const newsletter = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  description: "Periodic editions, with an optional PDF.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required().max(140),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) =>
        r.required().custom((v) =>
          v?.current && RESERVED.includes(v.current)
            ? `"${v.current}" is reserved for a section page. Choose another slug.`
            : true
        ),
    }),
    defineField({
      name: "publishedAt",
      title: "Published on",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "issue",
      title: "Issue",
      type: "string",
      description: "Optional. e.g. Issue 3, November 2026",
    }),
    defineField({
      name: "pdf",
      title: "PDF edition",
      type: "file",
      description: "Optional. Readers can download the printed version.",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "excerpt",
      title: "Summary",
      type: "text",
      rows: 3,
      description:
        "One or two sentences. Shown in listings and in WhatsApp and Facebook link previews.",
      validation: (r) => r.max(280),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Describe the image for people who cannot see it.",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Issue",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
  },
});
