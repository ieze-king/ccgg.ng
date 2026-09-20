import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";
import { org } from "@/lib/content";
import { getSiteSettings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${org.fullName}.`,
};

export default async function Contact() {
  const settings = await getSiteSettings();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Contact</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Ask us a <span className="accent-word">question</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Citizen questions shape our programming. Send yours, and it may be
          answered on <em className="not-italic font-semibold text-gold-500">The People&rsquo;s Question</em>.
        </p>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Reach Us</Eyebrow>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-bold tracking-[0.16em] text-ink/45 uppercase">Location</dt>
                <dd className="mt-1.5 text-[15px] text-ink/80">{settings.address}</dd>
              </div>
              {settings.email && (
                <div>
                  <dt className="text-xs font-bold tracking-[0.16em] text-ink/45 uppercase">Email</dt>
                  <dd className="mt-1.5 text-[15px] text-ink/80">
                    <a href={`mailto:${settings.email}`} className="underline decoration-gold-500 underline-offset-2">
                      {settings.email}
                    </a>
                  </dd>
                </div>
              )}
              {settings.phone && (
                <div>
                  <dt className="text-xs font-bold tracking-[0.16em] text-ink/45 uppercase">Phone</dt>
                  <dd className="mt-1.5 text-[15px] text-ink/80">{settings.phone}</dd>
                </div>
              )}
            </dl>

            <p className="mt-8 rounded-card bg-forest-50 px-5 py-4 text-sm leading-relaxed text-ink/70">
              If you believe we have published something inaccurate, tell us. Our{" "}
              <a href="/standards" className="font-bold text-forest-900 underline decoration-gold-500 underline-offset-2">
                corrections policy
              </a>{" "}
              sets out what happens next.
            </p>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm
              kind="contact"
              submitLabel="Send message"
              fields={[
                { name: "name", label: "Your name", required: true },
                { name: "email", label: "Email address", type: "email", required: true },
                { name: "parish", label: "Parish or community" },
                { name: "message", label: "Your message or question", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
