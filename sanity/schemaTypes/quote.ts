import { defineField, defineType } from "sanity";

export const quoteThemes = [
  { title: "Civic Wisdom", value: "civic-wisdom" },
  { title: "Governance & Leadership", value: "governance-leadership" },
  { title: "Values for Living", value: "values-for-living" },
] as const;

export const quote = defineType({
  name: "quote",
  title: "Quotes",
  type: "document",
  description:
    "Short, shareable lines. These do not need a headline or body; the quote is the content.",
  fields: [
    defineField({
      name: "text",
      title: "The quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required().max(400),
    }),
    defineField({
      name: "attribution",
      title: "Said by",
      type: "string",
      description: "Who said it. Leave empty if it is CCGG's own line.",
    }),
    defineField({
      name: "attributionRole",
      title: "Their role",
      type: "string",
      description: "Optional. e.g. Project Lead, CCGG",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      options: { list: [...quoteThemes], layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published on",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Optional. A portrait, or the shareable graphic.",
      options: { hotspot: true },
      validation: (r) =>
        r.custom((img?: { asset?: unknown; alt?: string }) =>
          !img?.asset || img?.alt?.trim()
            ? true
            : "Add alt text so the image is described for people who cannot see it."
        ),
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "newest", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "text", subtitle: "attribution", media: "image" },
    prepare: ({ title, subtitle }) => ({
      title: title?.slice(0, 70),
      subtitle: subtitle || "CCGG",
    }),
  },
});
