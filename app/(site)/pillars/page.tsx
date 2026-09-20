import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work",
  description: "The four pillars of CCGG: civic education, good governance, community care and digital evangelisation.",
};

export default function Pillars() {
  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Our Work</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Four pillars, one <span className="accent-word">common</span> good.
        </Headline>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Link
              key={p.slug}
              href={`/pillars/${p.slug}`}
              className="group rounded-card border border-forest-900/10 p-7 transition-all hover:border-gold-500 hover:shadow-lg"
            >
              <span className="font-display text-sm font-bold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-forest-900">{p.title}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink/70">{p.purpose}</p>
              <span className="mt-5 inline-block text-sm font-bold text-forest-700 group-hover:text-gold-600">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
