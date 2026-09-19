import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resources & Reports",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Annual Report", value: "annual-report" },
          { title: "Research Brief", value: "research-brief" },
          { title: "Governance Scorecard", value: "scorecard" },
          { title: "Guide", value: "guide" },
        ],
        layout: "radio",
      },
    }),
    defineField({ name: "publishedAt", title: "Published on", type: "datetime" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "file",
      title: "PDF",
      type: "file",
      options: { accept: ".pdf" },
    }),
  ],
  preview: { select: { title: "title", subtitle: "kind" } },
});
