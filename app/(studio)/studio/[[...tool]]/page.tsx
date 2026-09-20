import type { Metadata } from "next";
import { isSanityConfigured } from "@/sanity/env";
import StudioClient from "./StudioClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24">
        <h1 className="font-display text-2xl font-bold text-forest-900">
          Studio not connected yet
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
          The CMS is fully built. Schemas, structure and queries are all in
          the repository. It needs a Sanity project to connect to.
        </p>
        <ol className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/75">
          <li>
            1. Create a free project at{" "}
            <a
              className="font-bold text-forest-900 underline decoration-gold-500 underline-offset-2"
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noreferrer"
            >
              sanity.io/manage
            </a>
          </li>
          <li>
            2. Set <code className="rounded bg-forest-50 px-1.5 py-0.5 text-sm">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
            and <code className="rounded bg-forest-50 px-1.5 py-0.5 text-sm">NEXT_PUBLIC_SANITY_DATASET</code>{" "}
            in the Vercel project&rsquo;s environment variables
          </li>
          <li>
            3. Add <code className="rounded bg-forest-50 px-1.5 py-0.5 text-sm">https://ccgg.ng</code>{" "}
            as a CORS origin in the Sanity project settings, with credentials allowed
          </li>
          <li>4. Redeploy. This page becomes the editing studio.</li>
        </ol>
        <p className="mt-8 text-sm text-ink/55">
          Until then the site runs on its built-in content, so nothing is broken.
        </p>
      </div>
    );
  }

  return <StudioClient />;
}
