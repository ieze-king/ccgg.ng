"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Campaign } from "@/lib/content";

/**
 * Swipeable campaign gallery.
 *
 * Native horizontal scrolling with CSS snap does the work, so touch
 * swipe, trackpad, keyboard and screen readers all behave correctly
 * without a carousel library. The buttons drive the same scroll.
 */
export default function PosterCarousel({ items }: { items: Campaign[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    const step = slide ? slide.offsetWidth + 20 : el.clientWidth;
    setIndex(Math.round(el.scrollLeft / step));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    const step = slide ? slide.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    const step = slide ? slide.offsetWidth + 20 : el.clientWidth;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label="CCGG campaign graphics"
    >
      <ul
        ref={trackRef}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 lg:mx-0 lg:px-0"
        tabIndex={0}
      >
        {items.map((c, i) => (
          <li
            key={c.src}
            className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
          >
            <figure className="flex h-full flex-col">
              <div className="overflow-hidden rounded-card ring-1 ring-black/10">
                <Image
                  src={c.src}
                  alt={c.title}
                  width={1080}
                  height={1350}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 31vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="font-display text-[15px] leading-snug font-bold text-forest-900">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {c.blurb}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4">
        <ul className="flex items-center gap-2" aria-hidden="true">
          {items.map((c, i) => (
            <li key={c.src}>
              <button
                type="button"
                onClick={() => goTo(i)}
                tabIndex={-1}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-forest-900" : "w-3 bg-forest-900/20"
                }`}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous campaign"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/20 text-forest-900 transition-colors hover:border-forest-900 hover:bg-forest-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-forest-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next campaign"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-900/20 text-forest-900 transition-colors hover:border-forest-900 hover:bg-forest-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-forest-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
