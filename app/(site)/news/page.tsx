import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { getPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "News",
  description: "News, announcements and articles from CCGG.",
};

export const revalidate = 60;

const categoryLabels: Record<string, string> = {
  "civic-education": "Civic Education",
  "good-governance": "Good Governance",
  "community-care": "Community Care",
  festival: "Festival",
  announcement: "Announcement",
};

export default async function News() {
  const posts = await getPosts();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>News</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          What we are doing, and what we are <span className="accent-word">learning</span>.
        </Headline>
      </Section>

      <Section className="bg-white">
        {posts.length === 0 ? (
          <div className="rounded-card border-2 border-dashed border-forest-900/20 bg-forest-50 px-8 py-16 text-center">
            <p className="font-display text-lg font-bold text-forest-900">
              The first articles are on their way
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/60">
              News, announcements and civic explainers will appear here as they
              are published.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p._id} className="group">
                <Link href={`/news/${p.slug}`} className="block">
                  <div className="rounded-card border border-forest-900/10 p-6 transition-all group-hover:border-gold-500 group-hover:shadow-lg">
                    {p.category && (
                      <p className="text-xs font-bold tracking-[0.14em] text-gold-600 uppercase">
                        {categoryLabels[p.category] ?? p.category}
                      </p>
                    )}
                    <h2 className="mt-2.5 font-display text-lg leading-snug font-bold text-forest-900">
                      {p.title}
                    </h2>
                    {p.excerpt && (
                      <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                        {p.excerpt}
                      </p>
                    )}
                    <time
                      dateTime={p.publishedAt}
                      className="mt-5 block text-xs text-ink/45"
                    >
                      {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric", month: "long", year: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
