import Image from "next/image";
import { ButtonLink, Eyebrow, Headline, Section } from "@/components/ui";
import {
  org, vision, pillars, programmes, calendar2026,
  governanceIndicators, assessmentSequence,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            background:
              "radial-gradient(70% 55% at 78% 18%, #2F7239 0%, transparent 60%), radial-gradient(60% 50% at 12% 88%, #0A5A1B 0%, transparent 62%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-7">
            <Eyebrow>Enugu State, Nigeria</Eyebrow>

            <Headline
              as="h1"
              className="mt-6 text-[clamp(2.4rem,6.4vw,4.75rem)] leading-[0.98] text-white"
            >
              We don&rsquo;t tell people{" "}
              <span className="accent-word">what</span> to think.
            </Headline>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              We help citizens learn <em className="text-gold-500 not-italic font-semibold">how</em> to
              think, ask the right questions, and make informed decisions &mdash;
              through civic education, evidence, and service to the common good.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/get-involved">Get Involved</ButtonLink>
              <ButtonLink href="/media" variant="ghost">
                Watch Civic Conversations
              </ButtonLink>
            </div>

            <p className="mt-10 border-l-2 border-gold-500 pl-4 text-sm leading-relaxed text-white/60">
              {org.principle}
            </p>
          </div>

          {/* poster collage, echoing the cut-out treatment of the brand */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto flex max-w-md justify-center lg:max-w-none">
              <div className="relative w-[58%] translate-y-6 -rotate-3">
                <Image
                  src="/posters/true-nationhood.jpg"
                  alt="CCGG campaign: True nationhood is built by care for the community"
                  width={1080} height={1350}
                  className="rounded-lg border-2 border-gold-500/70 shadow-2xl"
                />
              </div>
              <div className="relative -ml-12 w-[58%] rotate-2">
                <Image
                  src="/posters/beyond-the-vote.jpg"
                  alt="CCGG campaign: Beyond the vote, seek accountability"
                  width={1080} height={1350}
                  className="rounded-lg border-2 border-cream/80 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="torn-gold h-7 w-full" aria-hidden="true" />
      </section>

      {/* ── Vision ───────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Our Vision</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <p className="font-read text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.5] text-ink text-pretty">
              {vision}
            </p>
          </div>
        </div>
      </Section>

      {/* ── Four pillars ─────────────────────────────────────────── */}
      <Section className="bg-forest-50">
        <Eyebrow>What We Do</Eyebrow>
        <Headline as="h2" className="mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-forest-900">
          Four pillars, one <span className="accent-word text-gold-600">common</span> good.
        </Headline>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <a
              key={p.slug}
              href={`/pillars/${p.slug}`}
              className="group rounded-card border border-forest-900/10 bg-white p-7 transition-all hover:border-gold-500 hover:shadow-lg"
            >
              <span className="font-display text-sm font-bold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-forest-900">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink/70">
                {p.purpose}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.activities.slice(0, 4).map((a) => (
                  <li
                    key={a}
                    className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </Section>

      {/* ── How we assess governance ─────────────────────────────── */}
      <Section className="bg-forest-900 text-white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Evidence, not opinion</Eyebrow>
            <Headline as="h2" className="mt-5 text-[clamp(1.8rem,3.6vw,2.7rem)] leading-[1.06] text-white">
              The same questions for <span className="accent-word">every</span> administration.
            </Headline>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              CCGG applies one consistent method. We publish it so that any
              citizen can check our work &mdash; and hold us to it.
            </p>
            <div className="mt-8">
              <ButtonLink href="/standards" variant="ghost">
                Read our standards
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-3">
              {assessmentSequence.map((step, i) => (
                <li key={step} className="flex gap-4 rounded-card bg-white/[0.06] px-5 py-4">
                  <span className="font-display text-sm font-bold text-gold-500 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium text-white/90">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <p className="text-xs font-bold tracking-[0.18em] text-white/45 uppercase">
                Assessed across
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {governanceIndicators.map((g) => (
                  <li key={g} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Media ────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The CCGG Media Network</Eyebrow>
            <Headline as="h2" className="mt-5 max-w-xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-forest-900">
              Civic education you can <span className="accent-word text-gold-600">watch</span>.
            </Headline>
          </div>
          <ButtonLink href="/media" variant="dark">All programmes</ButtonLink>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.slice(0, 6).map((p) => (
            <article key={p.title} className="rounded-card border border-forest-900/10 p-6">
              <p className="text-xs font-bold tracking-[0.14em] text-gold-600 uppercase">
                {p.format}
              </p>
              <h3 className="mt-2.5 font-display text-lg font-bold text-forest-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.purpose}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── 2026 calendar ────────────────────────────────────────── */}
      <Section className="bg-forest-50">
        <Eyebrow>2026 Programme</Eyebrow>
        <Headline as="h2" className="mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-forest-900">
          Citizenship &amp; <span className="accent-word text-gold-600">good</span> governance.
        </Headline>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {calendar2026.map((c) => (
            <div key={c.period} className="rounded-card bg-white p-6 ring-1 ring-forest-900/10">
              <p className="font-display text-sm font-bold text-gold-600">{c.period}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-forest-900">{c.label}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{c.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Closing CTA ──────────────────────────────────────────── */}
      <section className="relative bg-gold-500">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <Headline as="h2" className="text-[clamp(1.8rem,3.8vw,2.8rem)] leading-[1.05] text-forest-950">
                Every parish. Every citizen. Every question worth asking.
              </Headline>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-forest-950/75">
                Register your parish, volunteer with a programme, or bring a
                community problem to the Community Solution Challenge.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <ButtonLink href="/get-involved" variant="dark">Get Involved</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
