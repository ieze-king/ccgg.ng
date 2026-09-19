import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    email, phone, address, featuredVideoId, festivalDates, festivalVenue,
    socials
  }
`);

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, category, excerpt, coverImage
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, publishedAt, category, excerpt,
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
