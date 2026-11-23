import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { urlFor } from "@/sanity/lib/image";
import { getNewsletter } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsletter(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const item = await getNewsletter(slug);
  if (!item) notFound();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>Newsletter</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05] text-white">
          {item.title}
        </Headline>
        <p className="mt-6 flex flex-wrap gap-x-4 text-sm text-white/55">
          {item.publishedAt && (
            <time dateTime={item.publishedAt}>
              {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </time>
          )}
          {item.issue && <span>{item.issue}</span>}
        </p>
      </Section>

      {item.coverImage ? (
        <div className="bg-white">
          <div className="px-5 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Image
                src={urlFor(item.coverImage)!.width(1600).height(900).fit("crop").auto("format").url()}
                alt={(item.coverImage as { alt?: string }).alt?.trim() || item.title}
                width={1600}
                height={900}
                priority
                className="-mt-10 w-full rounded-card shadow-lg ring-1 ring-forest-900/10 sm:-mt-14"
              />
            </div>
          </div>
        </div>
      ) : null}

      <Section className="bg-white">
        <div className="max-w-2xl">
          {item.excerpt && (
            <p className="font-read text-xl leading-[1.55] text-ink text-pretty">
              {item.excerpt}
            </p>
          )}
          {item.pdfUrl && (
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-forest-800"
            >
              Download the PDF edition
            </a>
          )}
          {item.body ? (
            <div className="prose-ccgg mt-8 font-read text-[17px] leading-[1.7] text-ink/85">
              <PortableText value={item.body as PortableTextBlock[]} />
            </div>
          ) : null}
        </div>
      </Section>
    </>
  );
}
