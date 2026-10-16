import Link from "next/link";
import { festival } from "@/lib/content";

/**
 * Site-wide announcement strip, above the header.
 *
 * The festival is the organisation's flagship event and it is imminent, so
 * it gets the first line of the page on every route rather than waiting to
 * be discovered. Kept to one line on desktop and two on phones.
 */
export default function FestivalBanner() {
  return (
    <div className="bg-gold-500 text-forest-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2.5 text-center lg:px-8">
        <p className="text-[13px] font-bold">
          {festival.name}
        </p>
        <p className="text-[13px]">
          Flag-off{" "}
          <time dateTime={festival.flagOffISO} className="font-bold">
            {festival.flagOff}
          </time>
        </p>
        <Link
          href="/festival"
          className="text-[13px] font-bold underline decoration-2 underline-offset-2 hover:text-forest-900"
        >
          Register now
        </Link>
      </div>
    </div>
  );
}
