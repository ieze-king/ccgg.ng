import Image from "next/image";
import Link from "next/link";
import { org } from "@/lib/content";

/**
 * PLACEHOLDER MARK — extracted from the official posters so the layout reads
 * correctly. Replace /public/brand/ccgg-logo-white.png with the supplied
 * SVG and nothing else needs to change.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${org.name} home`}>
      <Image
        src="/brand/ccgg-logo-white.png"
        alt=""
        width={291}
        height={221}
        priority
        className={compact ? "h-9 w-auto" : "h-11 w-auto"}
      />
      {!compact && (
        <span className="hidden max-w-[15ch] text-[11px] leading-tight font-medium text-white/70 sm:block">
          {org.fullName}
        </span>
      )}
    </Link>
  );
}
