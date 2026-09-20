import type { Metadata } from "next";
import { Eyebrow, Headline, Section } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Register your parish, volunteer, or partner with CCGG.",
};

const sponsorshipAreas = [
  { area: "Digital Media", support: "Studio, cameras, editing, production costs" },
  { area: "Education", support: "Scholarships, books, learning materials" },
  { area: "Sports", support: "Equipment, logistics, prizes" },
  { area: "Community Care", support: "Health outreach, welfare and community grants" },
  { area: "Youth", support: "Skills training and entrepreneurship" },
  { area: "Festival", support: "Venue, transport, awards, publicity and production" },
];

export default function GetInvolved() {
  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Get Involved</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] text-white">
          Every parish. Every <span className="accent-word">citizen</span>.
        </Headline>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Register a parish for the festival, volunteer with a programme, or
          partner with us &mdash; without ever compromising editorial independence.
        </p>
      </Section>

      <Section className="bg-white" id="parish">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Parish Registration</Eyebrow>
            <Headline as="h2" className="mt-5 text-[clamp(1.7rem,3.2vw,2.3rem)] leading-[1.08] text-forest-900">
              Bring your parish into the <span className="accent-word text-gold-600">festival</span>.
            </Headline>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
              Every participating parish appoints a Parish CCGG Coordinator, and may
              also appoint a Youth Lead and a Media Lead. Parishes register their
              chosen competition categories and receive the official rules and
              media guidelines.
            </p>
            <p className="mt-5 rounded-card bg-forest-50 px-5 py-4 text-sm leading-relaxed text-ink/70">
              Participant lists and consent or safeguarding documentation are
              collected separately, as applicable to each category.
            </p>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm
              kind="parish-registration"
              submitLabel="Register parish"
              fields={[
                { name: "parish", label: "Parish name", required: true },
                { name: "name", label: "Parish priest or authorised representative", required: true },
                { name: "role", label: "Parish CCGG coordinator", required: true },
                { name: "email", label: "Email address", type: "email", required: true },
                { name: "phone", label: "Phone number", type: "tel" },
                {
                  name: "categories",
                  label: "Competition categories",
                  type: "textarea",
                  placeholder: "Music, Culture, Civic Intelligence, Digital, Sports, Community Impact",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-forest-50" id="volunteer">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Volunteer</Eyebrow>
            <Headline as="h2" className="mt-5 text-[clamp(1.7rem,3.2vw,2.3rem)] leading-[1.08] text-forest-900">
              Give your time and <span className="accent-word text-gold-600">skill</span>.
            </Headline>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
              Research, media production, community outreach, youth work, event
              logistics &mdash; there is room for many kinds of contribution.
            </p>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm
              kind="volunteer"
              submitLabel="Offer to help"
              fields={[
                { name: "name", label: "Full name", required: true },
                { name: "email", label: "Email address", type: "email", required: true },
                { name: "phone", label: "Phone number", type: "tel" },
                { name: "parish", label: "Parish or community" },
                { name: "message", label: "How would you like to help?", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white" id="partner">
        <Eyebrow>Partner &amp; Sponsor</Eyebrow>
        <Headline as="h2" className="mt-5 max-w-2xl text-[clamp(1.7rem,3.2vw,2.3rem)] leading-[1.08] text-forest-900">
          Support the work, without <span className="accent-word text-gold-600">steering</span> it.
        </Headline>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
          Sponsors may support specific programmes without controlling editorial
          decisions. All sponsorships are documented, approved through the
          appropriate authority, and reported transparently.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsorshipAreas.map((s) => (
            <div key={s.area} className="rounded-card border border-forest-900/10 p-6">
              <h3 className="font-display text-[17px] font-bold text-forest-900">{s.area}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.support}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl">
          <EnquiryForm
            kind="partnership"
            submitLabel="Start a conversation"
            fields={[
              { name: "name", label: "Your name", required: true },
              { name: "email", label: "Email address", type: "email", required: true },
              { name: "phone", label: "Phone number", type: "tel" },
              { name: "message", label: "How would you like to partner?", type: "textarea", required: true },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
