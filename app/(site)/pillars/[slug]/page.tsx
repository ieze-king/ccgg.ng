import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink, Eyebrow, Headline, Section } from "@/components/ui";
import { pillars } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return {};
  return { title: pillar.title, description: pillar.purpose };
}

export default async function PillarPage({ params }: Params) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) notFound();

  const others = pillars.filter((p) => p.slug !== slug);

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Pillar</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          {pillar.title}
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{pillar.purpose}</p>
      </Section>

      <Section className="bg-white">
        <Eyebrow>Priority Activities</Eyebrow>
        <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {pillar.activities.map((a) => (
            <li key={a} className="rounded-card bg-forest-50 px-5 py-4 text-[15px] font-medium text-forest-900">
              {a}
            </li>
          ))}
        </ul>
        {/* PLACEHOLDER — long-form description per pillar, pending copy */}
      </Section>

      <Section className="bg-forest-50">
        <Eyebrow>Other Pillars</Eyebrow>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/pillars/${o.slug}`}
              className="rounded-card bg-white p-6 ring-1 ring-forest-900/10 transition-shadow hover:shadow-md"
            >
              <h2 className="font-display text-lg font-bold text-forest-900">{o.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{o.purpose}</p>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/get-involved" variant="dark">Get Involved</ButtonLink>
        </div>
      </Section>
    </>
  );
}
