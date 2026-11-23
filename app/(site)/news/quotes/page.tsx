import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Headline, Section } from "@/components/ui";
import QuoteCard from "@/components/news/QuoteCard";
import EmptySection from "@/components/news/EmptySection";
import { getQuotes } from "@/lib/site";
import { quoteThemes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quotes",
  description: "Short lines on civic wisdom, governance and values for living.",
};

export const revalidate = 60;

export default async function Quotes() {
  const quotes = await getQuotes();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Quotes</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Lines worth <span className="accent-word">carrying</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Short enough to share, grounded enough to act on.
        </p>
      </Section>

      <Section className="bg-white">
        <nav aria-label="Quote themes" className="flex flex-wrap gap-2">
          <span className="rounded-full bg-forest-900 px-4 py-2 text-sm font-bold text-white">
            All
          </span>
          {quoteThemes.map((t) => (
            <Link
              key={t.value}
              href={`/news/quotes/${t.value}`}
              className="rounded-full border border-forest-900/15 px-4 py-2 text-sm font-medium text-forest-900 transition-colors hover:border-gold-500 hover:bg-forest-50"
            >
              {t.title}
            </Link>
          ))}
        </nav>

        <div className="mt-10">
          {quotes.length === 0 ? (
            <EmptySection
              heading="No quotes yet"
              note="Short lines on civic wisdom, governance and values will appear here."
            />
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {quotes.map((q) => (
                <li key={q._id}>
                  <QuoteCard quote={q} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </>
  );
}
