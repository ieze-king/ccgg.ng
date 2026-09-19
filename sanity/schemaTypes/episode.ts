import { defineField, defineType } from "sanity";

export const episode = defineType({
  name: "episode",
  title: "Media Episodes",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "programme",
      title: "Programme",
      type: "reference",
      to: [{ type: "programme" }],
      description: "Which CCGG programme this episode belongs to.",
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube video ID",
      type: "string",
      description: "From youtube.com/watch?v=ABC123 use ABC123.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published on",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({ name: "description", type: "text", rows: 4 }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "programme.title" } },
});
