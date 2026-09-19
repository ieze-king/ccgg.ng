import { defineField, defineType } from "sanity";

export const programme = defineType({
  name: "programme",
  title: "Programmes",
  type: "document",
  description: "The CCGG Media Network formats.",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "format",
      type: "string",
      description: "e.g. '30–45 min podcast'",
    }),
    defineField({ name: "purpose", type: "text", rows: 3 }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [
    { title: "Display order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "format" } },
});
