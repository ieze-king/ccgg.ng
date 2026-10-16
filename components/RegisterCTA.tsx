import { festival } from "@/lib/content";

/**
 * Registration lives on a Google Form run by CIDJAB, so responses stay in
 * their hands and never touch this site.
 *
 * It is linked rather than embedded: an iframe creates a nested scroll box
 * that is awkward on phones, and Google's own mobile form is better than
 * anything we would wrap it in.
 *
 * The Google sign-in notice is deliberate. The form takes file uploads, and
 * Google requires an account for those, so a login screen is unavoidable.
 * Saying so here means nobody meets it as a surprise.
 */
export default function RegisterCTA({
  variant = "light",
}: {
  variant?: "light" | "gold";
}) {
  const gold = variant === "gold";

  return (
    <div
      className={`rounded-card p-7 sm:p-9 ${
        gold
          ? "bg-forest-900 text-white"
          : "bg-gold-500 text-forest-950"
      }`}
    >
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase ${
          gold ? "text-gold-500" : "text-forest-950/70"
        }`}
      >
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            gold ? "bg-gold-500" : "bg-forest-900"
          }`}
          aria-hidden="true"
        />
        Registration is open
      </p>

      <h2
        className={`mt-4 font-display text-[clamp(1.6rem,3.2vw,2.3rem)] leading-[1.08] font-bold tracking-[-0.02em] ${
          gold ? "text-white" : "text-forest-950"
        }`}
      >
        Register for the {festival.name}
      </h2>

      <p
        className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${
          gold ? "text-white/75" : "text-forest-950/75"
        }`}
      >
        {festival.openTo} are all invited to take part, across talent,
        creativity, music, culture, sports and civic engagement. Choose your
        programme on the form and it will take you to the right section.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <a
          href={festival.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-colors ${
            gold
              ? "bg-gold-500 text-forest-950 hover:bg-gold-600"
              : "bg-forest-900 text-white hover:bg-forest-800"
          }`}
        >
          Open the registration form
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <p className={`text-xs ${gold ? "text-white/50" : "text-forest-950/60"}`}>
          Opens in a new tab
        </p>
      </div>

      <div
        className={`mt-7 border-t pt-5 ${
          gold ? "border-white/15" : "border-forest-950/15"
        }`}
      >
        <p className={`text-[13px] leading-relaxed ${gold ? "text-white/65" : "text-forest-950/70"}`}>
          <span className="font-bold">Before you start:</span> the form asks you
          to upload files, so you will need to be signed in to a Google account.
          Participants are also asked to follow CCGG on Instagram, TikTok and
          Facebook.
        </p>
        <p className={`mt-2 text-[13px] ${gold ? "text-white/45" : "text-forest-950/55"}`}>
          Powered by CIDJAB in collaboration with CCGG.
        </p>
      </div>
    </div>
  );
}
