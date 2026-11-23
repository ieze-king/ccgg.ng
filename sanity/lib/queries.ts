import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    email, phone, address, featuredVideoId, festivalDates, festivalVenue,
    socials
  }
`);

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, excerpt,
    // articles written before the field became a list still hold a single
    // string, so fall back to wrapping it
    "categories": select(
      defined(categories) => categories,
      defined(category) => [category],
      []
    ),
    coverImage{..., "alt": coalesce(alt, "")}
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, publishedAt, excerpt,
    "categories": select(
      defined(categories) => categories,
      defined(category) => [category],
      []
    ),
    coverImage, body
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)][].slug.current
`);

export const episodesQuery = defineQuery(`
  *[_type == "episode"] | order(publishedAt desc){
    _id, title, "slug": slug.current, youtubeId, publishedAt, description,
    "programme": programme->title
  }
`);

export const resourcesQuery = defineQuery(`
  *[_type == "resource"] | order(publishedAt desc){
    _id, title, "slug": slug.current, kind, publishedAt, description,
    "fileUrl": file.asset->url
  }
`);

/* ── Newsletter ─────────────────────────────────────────────────────── */

export const newslettersQuery = defineQuery(`
  *[_type == "newsletter" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, issue, excerpt,
    coverImage{..., "alt": coalesce(alt, "")}
  }
`);

export const newsletterBySlugQuery = defineQuery(`
  *[_type == "newsletter" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, publishedAt, issue, excerpt,
    coverImage, body, "pdfUrl": pdf.asset->url
  }
`);

/* ── Blog ───────────────────────────────────────────────────────────── */

export const blogPostsQuery = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, author, excerpt,
    coverImage{..., "alt": coalesce(alt, "")}
  }
`);

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, publishedAt, author, excerpt,
    coverImage, body
  }
`);

/* ── Quotes ─────────────────────────────────────────────────────────── */

export const quotesQuery = defineQuery(`
  *[_type == "quote"] | order(publishedAt desc){
    _id, text, attribution, attributionRole, theme, publishedAt,
    image{..., "alt": coalesce(alt, "")}
  }
`);

export const quotesByThemeQuery = defineQuery(`
  *[_type == "quote" && theme == $theme] | order(publishedAt desc){
    _id, text, attribution, attributionRole, theme, publishedAt,
    image{..., "alt": coalesce(alt, "")}
  }
`);
