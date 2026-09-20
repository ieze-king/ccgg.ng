import type { Metadata } from "next";
import { Eyebrow, Headline, Section, ButtonLink } from "@/components/ui";
import { org, vision, mission, values, leadership, calendar2026 } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: org.nature,
};

export default function About() {
  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>About CCGG</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Faith that cares, leadership that <span className="accent-word">serves</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{org.nature}</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
          CCGG combines Catholic social teaching and the Church&rsquo;s concern for the
          common good with professional civic education, evidence-based public
          conversations, community service and digital media. It is designed as a
          continuing annual institution, not an election-season activity.
        </p>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-5 font-read text-xl leading-[1.55] text-ink text-pretty">{vision}</p>
          </div>
          <div>
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-5 font-read text-xl leading-[1.55] text-ink text-pretty">{mission}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-forest-50">
        <Eyebrow>Core Values</Eyebrow>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {values.map((v) => (
            <li key={v} className="rounded-card bg-white px-4 py-5 text-center ring-1 ring-forest-900/10">
              <span className="font-display text-sm font-bold text-forest-900">{v}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <Eyebrow>How We Are Organised</Eyebrow>
        <Headline as="h2" className="mt-5 max-w-xl text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.06] text-forest-900">
          Clear roles, documented <span className="accent-word text-gold-600">accountability</span>.
        </Headline>
        <div className="mt-10 divide-y divide-forest-900/10 border-y border-forest-900/10">
          {leadership.map((l) => (
            <div key={l.role} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
              <h3 className="font-display text-[15px] font-bold text-forest-900 md:col-span-4">
                {l.role}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/65 md:col-span-8">
                {l.responsibility}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-forest-50">
        <Eyebrow>2026 Calendar</Eyebrow>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {calendar2026.map((c) => (
            <div key={c.period} className="rounded-card bg-white p-6 ring-1 ring-forest-900/10">
              <p className="font-display text-sm font-bold text-gold-600">{c.period}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-forest-900">{c.label}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{c.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/get-involved" variant="dark">Get Involved</ButtonLink>
        </div>
      </Section>
    </>
  );
}
