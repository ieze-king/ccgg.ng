import { client } from "./client";

/**
 * Query Sanity, falling back to a supplied default.
 *
 * The site must render correctly before the CMS exists and must not go
 * blank if a query fails in production, so every fetch carries its own
 * fallback rather than throwing.
 */
export async function sanityFetch<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {},
  revalidate = 60
): Promise<T> {
  if (!client) return fallback;
  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate },
    });
    return data ?? fallback;
  } catch (error) {
    console.error("[sanity] query failed, using fallback:", error);
    return fallback;
  }
}
