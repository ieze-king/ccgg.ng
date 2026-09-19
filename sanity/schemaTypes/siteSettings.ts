import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Public email address",
      type: "string",
      validation: (r) => r.email(),
    }),
    defineField({ name: "phone", title: "Phone number", type: "string" }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "socials",
      title: "Social media",
      description:
        "Leave a field empty and that icon is hidden from the site automatically.",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "youtube", title: "YouTube channel URL", type: "url" }),
        defineField({ name: "facebook", title: "Facebook page URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "tiktok", title: "TikTok URL", type: "url" }),
        defineField({ name: "x", title: "X (Twitter) URL", type: "url" }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp link",
          type: "url",
          description: "e.g. https://wa.me/234... or a group invite link",
        }),
      ],
    }),
    defineField({
      name: "featuredVideoId",
      title: "Featured YouTube video ID",
      type: "string",
      description:
        "Just the ID, not the whole URL. From youtube.com/watch?v=ABC123 use ABC123.",
    }),
    defineField({
      name: "festivalDates",
      title: "Festival dates",
      type: "string",
      description: "Shown on the Festival page, e.g. '12–14 December 2026'.",
    }),
    defineField({ name: "festivalVenue", title: "Festival venue", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
