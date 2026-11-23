import { sanityFetch } from "@/sanity/lib/fetch";
import {
  siteSettingsQuery, postsQuery, postBySlugQuery, episodesQuery,
  newslettersQuery, newsletterBySlugQuery,
  blogPostsQuery, blogPostBySlugQuery,
  quotesQuery, quotesByThemeQuery,
} from "@/sanity/lib/queries";
import type {
  SiteSettings, PostSummary, Post, Episode,
  Newsletter, BlogPost, Quote,
} from "@/sanity/lib/types";
import { org, featuredVideoId as seedVideoId } from "./content";

/**
 * Resolved site settings: CMS values where present, seed values otherwise.
 * A placeholder in lib/content.ts is treated as absent, so an unedited
 * field never reaches the page.
 */
export async function getSiteSettings() {
  const cms = await sanityFetch<SiteSettings>(siteSettingsQuery, null);

  const clean = (v?: string) => (v && v.trim().length > 0 ? v.trim() : undefined);
  // phone is still a placeholder; the addresses are real
  const seedOrNothing = (v: string) => (v.includes("000 000") ? undefined : v);

  return {
    email: clean(cms?.email) ?? org.email,
    civicEmail: org.civicEmail,
    phone: clean(cms?.phone) ?? seedOrNothing(org.phone),
    address: clean(cms?.address) ?? org.address,
    featuredVideoId: clean(cms?.featuredVideoId) ?? seedVideoId ?? "",
    festivalDates: clean(cms?.festivalDates),
    festivalVenue: clean(cms?.festivalVenue),
    // CMS wins per channel; anything unset there falls back to the seed,
    // so a single handle can be changed in the studio without clearing
    // the others.
    socials: { ...org.socials, ...(cms?.socials ?? {}) },
  };
}

export async function getPosts() {
  return sanityFetch<PostSummary[]>(postsQuery, []);
}

export async function getPost(slug: string) {
  return sanityFetch<Post | null>(postBySlugQuery, null, { slug });
}

export async function getEpisodes() {
  return sanityFetch<Episode[]>(episodesQuery, []);
}

export async function getNewsletters() {
  return sanityFetch<Newsletter[]>(newslettersQuery, []);
}

export async function getNewsletter(slug: string) {
  return sanityFetch<Newsletter | null>(newsletterBySlugQuery, null, { slug });
}

export async function getBlogPosts() {
  return sanityFetch<BlogPost[]>(blogPostsQuery, []);
}

export async function getBlogPost(slug: string) {
  return sanityFetch<BlogPost | null>(blogPostBySlugQuery, null, { slug });
}

export async function getQuotes() {
  return sanityFetch<Quote[]>(quotesQuery, []);
}

export async function getQuotesByTheme(theme: string) {
  return sanityFetch<Quote[]>(quotesByThemeQuery, [], { theme });
}
