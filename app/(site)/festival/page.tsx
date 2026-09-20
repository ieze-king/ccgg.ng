import type { Metadata } from "next";
import { ButtonLink, Eyebrow, Headline, Section } from "@/components/ui";
import { festival } from "@/lib/content";
import { getSiteSettings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Civic Festival",
  description: `${festival.name}: ${festival.theme}`,
};

export const revalidate = 60;

export default async function Festival() {
  const settings = await getSiteSettings();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Annual Flagship Event</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          {festival.name}
        </Headline>
        <p className="mt-6 font-display text-lg font-bold tracking-[0.06em] text-gold-500 uppercase">
          {festival.theme}
        </p>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/65">
          Parishes across Enugu State compete across music, culture, civic
          intelligence, digital media, sport and community impact.
        </p>
        {(settings.festivalDates || settings.festivalVenue) && (
          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
            {settings.festivalDates && (
              <div>
                <dt className="text-xs font-bold tracking-[0.16em] text-white/45 uppercase">Dates</dt>
                <dd className="mt-1 font-display text-lg font-bold text-gold-500">{settings.festivalDates}</dd>
              </div>
            )}
            {settings.festivalVenue && (
              <div>
                <dt className="text-xs font-bold tracking-[0.16em] text-white/45 uppercase">Venue</dt>
                <dd className="mt-1 font-display text-lg font-bold text-gold-500">{settings.festivalVenue}</dd>
              </div>
            )}
          </dl>
        )}
        <div className="mt-9">
          <ButtonLink href="/get-involved">Register your parish</ButtonLink>
        </div>
      </Section>

      <Section className="bg-white">
        <Eyebrow>Competition Categories</Eyebrow>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {festival.categories.map((c) => (
            <article key={c.name} className="rounded-card border border-forest-900/10 p-6">
              <h2 className="font-display text-lg font-bold text-forest-900">{c.name}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{c.items}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-gold-500">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="text-xs font-bold tracking-[0.2em] text-forest-950/60 uppercase">
              Community Solution Challenge
            </p>
            <Headline as="h2" className="mt-4 text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.07] text-forest-950">
              Identify a problem. Research it. Propose the fix.
            </Headline>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-forest-950/75">
              Each participating parish identifies one community problem,
              researches its causes, proposes a practical solution and presents an
              implementation plan. Finalists compete for a CCGG Community Impact Grant.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <ButtonLink href="/get-involved" variant="dark">Enter the challenge</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
