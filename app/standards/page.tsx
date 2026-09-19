import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { governanceIndicators, assessmentSequence } from "@/lib/content";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description:
    "CCGG's non-partisanship code, assessment method and corrections policy.",
};

const code = [
  "CCGG neither endorses nor campaigns for any political party or candidate.",
  "The same indicators are applied to every administration, past and present.",
  "Verifiable public achievements are recognised; legitimate shortcomings are acknowledged.",
  "Responsible criticism is given space, and institutions are given a fair opportunity to explain.",
  "Claims are checked against credible evidence before publication.",
  "CCGG branding is never used to endorse a candidate or political party.",
];

export default function Standards() {
  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Our Standards</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Published so you can <span className="accent-word">check</span> our work.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          A civic organisation that assesses others must be open about its own
          method. This page sets out how CCGG works and how to hold us to it.
        </p>
      </Section>

      <Section className="bg-white">
        <Eyebrow>Non-Partisanship Code</Eyebrow>
        <ul className="mt-8 max-w-3xl space-y-4">
          {code.map((c) => (
            <li key={c} className="flex gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              <span className="text-[16px] leading-relaxed text-ink/80">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-forest-50">
        <Eyebrow>How We Assess Governance</Eyebrow>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
          Every assessment follows the same sequence, across the same indicators,
          regardless of who is in office.
        </p>
        <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {assessmentSequence.map((s, i) => (
            <li key={s} className="rounded-card bg-white p-5 ring-1 ring-forest-900/10">
              <span className="font-display text-sm font-bold text-gold-600 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-[15px] font-medium text-forest-900">{s}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-xs font-bold tracking-[0.18em] text-ink/45 uppercase">
          Indicators
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {governanceIndicators.map((g) => (
            <li key={g} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-forest-700 ring-1 ring-forest-900/10">
              {g}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl">
          <Eyebrow>Corrections Policy</Eyebrow>
          <p className="mt-5 font-read text-lg leading-[1.6] text-ink text-pretty">
            When CCGG publishes a material factual error, we correct it promptly and
            clearly, without deleting evidence of the correction where the platform
            allows. A correction identifies what was wrong and states the verified
            information. Repeated factual errors trigger editorial review.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/65">
            If you believe we have published something inaccurate, please tell us.
            We would rather be corrected than be wrong.
          </p>
        </div>
      </Section>
    </>
  );
}
