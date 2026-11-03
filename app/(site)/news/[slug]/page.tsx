import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { getPost } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsArticle({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Section className="bg-forest-900 text-white">
        <Eyebrow>News</Eyebrow>
        <Headline as="h1" className="mt-6 max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05] text-white">
          {post.title}
        </Headline>
        {post.publishedAt && (
          <time dateTime={post.publishedAt} className="mt-6 block text-sm text-white/55">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </time>
        )}
      </Section>

      {post.coverImage ? (
        <div className="bg-white">
          {/* Mirrors Section exactly: padding on the outer element, measure on
              the inner one. Nesting them the other way puts the image 32px
              right of the headline above 1440px. */}
          <div className="px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Image
              src={urlFor(post.coverImage)!.width(1600).height(900).fit("crop").auto("format").url()}
              alt={
                (post.coverImage as { alt?: string }).alt?.trim() || post.title
              }
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
          {post.excerpt && (
            <p className="font-read text-xl leading-[1.55] text-ink text-pretty">
              {post.excerpt}
            </p>
          )}
          {post.body ? (
            <div className="prose-ccgg mt-8 font-read text-[17px] leading-[1.7] text-ink/85">
              <PortableText value={post.body as PortableTextBlock[]} />
            </div>
          ) : null}
        </div>
      </Section>
    </>
  );
}
