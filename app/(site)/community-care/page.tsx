import type { Metadata } from "next";
import { ButtonLink, Eyebrow, Headline, Section } from "@/components/ui";
import { careProgrammes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community Care",
  description: "Turning concern for the common good into practical service — scholarships, health outreach, skills, and community grants.",
};

export default function CommunityCare() {
  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Community Care</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          True nationhood is built by <span className="accent-word">care</span> for the community.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Because any strong nation begins with citizens who take responsibility
          for one another and the places they call home.
        </p>
      </Section>

      <Section className="bg-white">
        <Eyebrow>Programmes</Eyebrow>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careProgrammes.map((c) => (
            <article key={c.title} className="rounded-card border border-forest-900/10 p-6">
              <h2 className="font-display text-[17px] leading-snug font-bold text-forest-900">
                {c.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{c.purpose}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-forest-50">
        <div className="max-w-3xl">
          <Eyebrow>How Assistance Is Handled</Eyebrow>
          <p className="mt-5 font-read text-lg leading-[1.6] text-ink text-pretty">
            All assistance programmes use documented eligibility criteria,
            transparent records, safeguarding procedures and appropriate financial
            controls. Support is given on the basis of need and published criteria
            &mdash; never on the basis of politics.
          </p>
          <div className="mt-8">
            <ButtonLink href="/get-involved" variant="dark">Support this work</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
