import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import ArticleCard from "@/components/news/ArticleCard";
import EmptySection from "@/components/news/EmptySection";
import { getNewsletters } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "CCGG newsletter editions.",
};

export const revalidate = 60;

export default async function Page() {
  const items = await getNewsletters();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Newsletter</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Every edition, in one <span className="accent-word">place</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Periodic editions covering programmes, parishes and the work ahead.
        </p>
      </Section>

      <Section className="bg-white">
        {items.length === 0 ? (
          <EmptySection
            heading="The first edition is coming"
            note="Newsletter editions will be listed here, with a PDF to download where one exists."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ArticleCard
                key={item._id}
                href={`/news/newsletter/${item.slug}`}
                item={{ ...item, meta: item.issue }}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
