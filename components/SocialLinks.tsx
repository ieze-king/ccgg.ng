import type { SiteSettings } from "@/sanity/lib/types";

/** Brand marks as inline SVG: no icon dependency, no extra request. */
const icons = {
  youtube: (
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6Z" />
  ),
  facebook: (
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96H15.83c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
  ),
  tiktok: (
    <path d="M16.6 0h-3.4v16.2a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6 0 .9.1V9.9a6.4 6.4 0 0 0-.9-.1A6.4 6.4 0 0 0 4 16.2a6.4 6.4 0 0 0 6.3 6.3 6.4 6.4 0 0 0 6.3-6.3V7.9a7.9 7.9 0 0 0 4.6 1.5V6a4.6 4.6 0 0 1-4.6-4.6V0Z" />
  ),
  x: (
    <path d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.4l-5.9-7.6-6.7 7.6H.3l8.6-9.9L0 1.2h7.6l5.3 7 6-7Zm-1.3 19.4h2L6.5 3.3H4.4l13.2 17.3Z" />
  ),
  whatsapp: (
    <path d="M.06 24l1.69-6.16a11.87 11.87 0 0 1-1.6-5.95C.16 5.33 5.5 0 12.06 0a11.8 11.8 0 0 1 8.4 3.49 11.8 11.8 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24ZM6.6 20.2c1.68 1 3.28 1.6 5.4 1.6 5.45 0 9.89-4.43 9.9-9.89a9.9 9.9 0 0 0-16.9-7 9.85 9.85 0 0 0-2.9 7 9.85 9.85 0 0 0 1.52 5.27l-.99 3.62 3.72-.98Zm11.1-5.4c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a8.98 8.98 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41Z" />
  ),
} as const;

const labels: Record<keyof typeof icons, string> = {
  youtube: "YouTube",
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
  whatsapp: "WhatsApp",
};

export default function SocialLinks({
  socials,
  className = "",
}: {
  socials?: SiteSettings extends null ? never : NonNullable<SiteSettings>["socials"];
  className?: string;
}) {
  const entries = (Object.keys(icons) as (keyof typeof icons)[]).map((key) => ({
    key,
    href: socials?.[key]?.trim() ?? "",
  }));

  const live = entries.filter((e) => e.href.length > 0);

  // Before any handle exists, show the set in a muted, non-interactive state
  // so the footer reads as finished rather than broken.
  const shown = live.length > 0 ? live : entries;
  const isPlaceholder = live.length === 0;

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-1.5">
        {shown.map(({ key, href }) => {
          const content = (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              {icons[key]}
            </svg>
          );

          return (
            <li key={key}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={labels[key]}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-forest-950"
                >
                  {content}
                </a>
              ) : (
                <span
                  aria-hidden="true"
                  title={`${labels[key]}: link not set yet`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/25"
                >
                  {content}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      {isPlaceholder && (
        <p className="mt-3 text-xs text-white/35">
          Social channels launching soon.
        </p>
      )}
    </div>
  );
}
