import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Quote } from "@/sanity/lib/types";

export default function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-forest-900/10 bg-white p-7">
      {quote.image ? (
        <Image
          src={urlFor(quote.image)!.width(160).height(160).fit("crop").auto("format").url()}
          alt={(quote.image as { alt?: string }).alt?.trim() || quote.attribution || ""}
          width={160}
          height={160}
          className="mb-5 h-14 w-14 rounded-full object-cover"
        />
      ) : null}

      <blockquote className="font-read text-[19px] leading-[1.5] text-ink text-pretty">
        <span aria-hidden="true" className="text-gold-500">&ldquo;</span>
        {quote.text}
        <span aria-hidden="true" className="text-gold-500">&rdquo;</span>
      </blockquote>

      <figcaption className="mt-5 border-t border-forest-900/10 pt-4">
        <p className="font-display text-sm font-bold text-forest-900">
          {quote.attribution || "CCGG"}
        </p>
        {quote.attributionRole && (
          <p className="mt-0.5 text-xs text-ink/55">{quote.attributionRole}</p>
        )}
      </figcaption>
    </figure>
  );
}
