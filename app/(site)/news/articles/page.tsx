import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import ArticleCard from "@/components/news/ArticleCard";
import EmptySection from "@/components/news/EmptySection";
import { getPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles from CCGG on citizenship, governance and community care.",
};

export const revalidate = 60;

export default async function Page() {
  const items = await getPosts();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Articles</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Reporting, explained with <span className="accent-word">evidence</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Longer pieces on citizenship, governance and the work of the Church in public life.
        </p>
      </Section>

      <Section className="bg-white">
        {items.length === 0 ? (
          <EmptySection
            heading="The first articles are on their way"
            note="Reporting and civic explainers will appear here as they are published."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ArticleCard
                key={item._id}
                href={`/news/${item.slug}`}
                item={{ ...item, meta: item.categories?.[0] ? item.categories[0].replace(/-/g, " ") : undefined }}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
