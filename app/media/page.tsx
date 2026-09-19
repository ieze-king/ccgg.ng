import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { programmes, weeklyRhythm, featuredVideoId, org } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media",
  description: "The CCGG Media Network — civic education you can watch, listen to and share.",
};

export default function Media() {
  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>The CCGG Media Network</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Civic education you can <span className="accent-word">watch</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Twelve programme formats, published continuously &mdash; from deep
          conversations to sixty-second civic lessons.
        </p>
      </Section>

      {/* Featured video — YouTube-hosted */}
      <Section className="bg-white">
        <Eyebrow>Featured</Eyebrow>
        <div className="mt-8 max-w-4xl">
          {featuredVideoId ? (
            <div className="aspect-video overflow-hidden rounded-card bg-forest-950">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${featuredVideoId}`}
                title="CCGG featured video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            /* PLACEHOLDER — swap in the YouTube ID via lib/content.ts */
            <div className="flex aspect-video flex-col items-center justify-center rounded-card border-2 border-dashed border-forest-900/20 bg-forest-50 text-center">
              <p className="font-display text-lg font-bold text-forest-900">
                Launch video coming soon
              </p>
              <p className="mt-2 max-w-sm px-6 text-sm text-ink/55">
                The CCGG launch film will play here once the channel is live.
              </p>
            </div>
          )}
        </div>
      </Section>

      <Section className="bg-forest-50" id="civic-conversations">
        <Eyebrow>Programmes</Eyebrow>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <article key={p.title} className="rounded-card bg-white p-6 ring-1 ring-forest-900/10">
              <p className="text-xs font-bold tracking-[0.14em] text-gold-600 uppercase">{p.format}</p>
              <h2 className="mt-2.5 font-display text-lg font-bold text-forest-900">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.purpose}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <Eyebrow>Every Week</Eyebrow>
        <Headline as="h2" className="mt-5 max-w-xl text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.06] text-forest-900">
          A civic rhythm you can <span className="accent-word text-gold-600">follow</span>.
        </Headline>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {weeklyRhythm.map((w) => (
            <div key={w.day} className="rounded-card border border-forest-900/10 p-5">
              <p className="text-xs font-bold tracking-[0.16em] text-gold-600 uppercase">{w.day}</p>
              <p className="mt-2 font-display text-[15px] font-bold text-forest-900">{w.item}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink/55">
          Full programmes on YouTube &middot; short-form on Instagram and TikTok &middot;
          parish distribution via WhatsApp.
          {org.socials.youtube === "#" && (
            /* PLACEHOLDER — channel links pending */
            <span className="ml-1 text-ink/40">Channel links coming soon.</span>
          )}
        </p>
      </Section>
    </>
  );
}
