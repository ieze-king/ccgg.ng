import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Headline, Section } from "@/components/ui";
import QuoteCard from "@/components/news/QuoteCard";
import EmptySection from "@/components/news/EmptySection";
import { getQuotesByTheme } from "@/lib/site";
import { quoteThemes } from "@/lib/content";

type Params = { params: Promise<{ theme: string }> };

export const revalidate = 60;

export function generateStaticParams() {
  return quoteThemes.map((t) => ({ theme: t.value }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { theme } = await params;
  const match = quoteThemes.find((t) => t.value === theme);
  if (!match) return {};
  return { title: `${match.title} quotes`, description: `CCGG quotes on ${match.title.toLowerCase()}.` };
}

export default async function QuoteTheme({ params }: Params) {
  const { theme } = await params;
  const match = quoteThemes.find((t) => t.value === theme);
  if (!match) notFound();

  const quotes = await getQuotesByTheme(theme);

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Quotes</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          {match.title}
        </Headline>
      </Section>

      <Section className="bg-white">
        <nav aria-label="Quote themes" className="flex flex-wrap gap-2">
          <Link
            href="/news/quotes"
            className="rounded-full border border-forest-900/15 px-4 py-2 text-sm font-medium text-forest-900 transition-colors hover:border-gold-500 hover:bg-forest-50"
          >
            All
          </Link>
          {quoteThemes.map((t) =>
            t.value === theme ? (
              <span key={t.value} className="rounded-full bg-forest-900 px-4 py-2 text-sm font-bold text-white">
                {t.title}
              </span>
            ) : (
              <Link
                key={t.value}
                href={`/news/quotes/${t.value}`}
                className="rounded-full border border-forest-900/15 px-4 py-2 text-sm font-medium text-forest-900 transition-colors hover:border-gold-500 hover:bg-forest-50"
              >
                {t.title}
              </Link>
            )
          )}
        </nav>

        <div className="mt-10">
          {quotes.length === 0 ? (
            <EmptySection
              heading={`No ${match.title.toLowerCase()} quotes yet`}
              note="Quotes added under this theme will appear here."
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
