import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export type CardItem = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  meta?: string;
  coverImage?: { alt?: string } & Record<string, unknown>;
};

export default function ArticleCard({ item, href }: { item: CardItem; href: string }) {
  return (
    <article className="group">
      <Link href={href} className="block">
        <div className="overflow-hidden rounded-card border border-forest-900/10 transition-all group-hover:border-gold-500 group-hover:shadow-lg">
          {item.coverImage ? (
            <Image
              src={urlFor(item.coverImage)!.width(800).height(500).fit("crop").auto("format").url()}
              alt={(item.coverImage as { alt?: string }).alt?.trim() || item.title}
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
          ) : null}
          <div className="p-6">
            {item.meta && (
              <p className="text-xs font-bold tracking-[0.14em] text-gold-600 uppercase">
                {item.meta}
              </p>
            )}
            <h2 className="mt-2.5 font-display text-lg leading-snug font-bold text-forest-900">
              {item.title}
            </h2>
            {item.excerpt && (
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{item.excerpt}</p>
            )}
            <time dateTime={item.publishedAt} className="mt-5 block text-xs text-ink/45">
              {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}
