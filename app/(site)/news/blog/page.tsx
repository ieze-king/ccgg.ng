import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import ArticleCard from "@/components/news/ArticleCard";
import EmptySection from "@/components/news/EmptySection";
import { getBlogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "The CCGG blog.",
};

export const revalidate = 60;

export default async function Page() {
  const items = await getBlogPosts();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Blog</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Shorter thoughts, written <span className="accent-word">plainly</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Reflections from the team on faith, service and civic life.
        </p>
      </Section>

      <Section className="bg-white">
        {items.length === 0 ? (
          <EmptySection
            heading="Nothing posted yet"
            note="Blog posts from the CCGG team will appear here."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ArticleCard
                key={item._id}
                href={`/news/blog/${item.slug}`}
                item={{ ...item, meta: item.author }}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
