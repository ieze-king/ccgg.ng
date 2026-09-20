import Image from "next/image";
import Link from "next/link";
import { org } from "@/lib/content";

/**
 * The logo is green-and-white — the Nigerian flag — so it cannot sit
 * directly on the green header without the green half disappearing into
 * the background. It rides on a white plate instead, which keeps the
 * flag reading intact and, at page level, repeats it: green bar, white
 * field, green bar.
 *
 * The gold tagline pill is cropped out of this lockup; its text is
 * unreadable at header size. The full lockup lives at
 * /brand/ccgg-logo-full.png for light backgrounds and social cards.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-md"
      aria-label={`${org.name} home`}
      title="Go to homepage"
    >
      <span
        className={`inline-flex items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-all group-hover:ring-gold-500 ${
          compact ? "px-2 py-1.5" : "px-2.5 py-1.5"
        }`}
      >
        <Image
          src="/brand/ccgg-logo-lockup.png"
          alt=""
          width={1143}
          height={440}
          priority
          className={compact ? "h-8 w-auto" : "h-12 w-auto"}
        />
      </span>

      {!compact && (
        <span className="hidden max-w-[16ch] text-[11px] leading-tight font-medium text-white/70 transition-colors group-hover:text-gold-500 sm:block">
          {org.fullName}
        </span>
      )}
    </Link>
  );
}
