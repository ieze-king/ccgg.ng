export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-19";

/**
 * The whole CMS layer is optional. Until a Sanity project exists the site
 * runs on the seed data in lib/content.ts, so nothing crashes and nothing
 * renders half-empty.
 */
export const isSanityConfigured = projectId.length > 0;
