import type { Metadata } from "next";

/**
 * The Studio gets its own root layout: no site header, no footer, and
 * crucially no globals.css, because Tailwind's preflight fights Sanity's own
 * styling, which is what put an unstyled CCGG logo above the editor.
 */
export const metadata: Metadata = {
  title: "CCGG Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
