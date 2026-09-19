export type SiteSettings = {
  email?: string;
  phone?: string;
  address?: string;
  featuredVideoId?: string;
  festivalDates?: string;
  festivalVenue?: string;
  socials?: Partial<Record<
    "youtube" | "facebook" | "instagram" | "tiktok" | "x" | "whatsapp",
    string
  >>;
} | null;

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  category?: string;
  excerpt?: string;
  coverImage?: { alt?: string } & Record<string, unknown>;
};

export type Post = PostSummary & { body?: unknown };

export type Episode = {
  _id: string;
  title: string;
  slug?: string;
  youtubeId: string;
  publishedAt?: string;
  description?: string;
  programme?: string;
};
