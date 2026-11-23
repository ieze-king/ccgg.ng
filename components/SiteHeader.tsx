"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { quoteThemes } from "@/lib/content";

type Leaf = { href: string; label: string };
type Item = Leaf & { children?: (Leaf & { children?: Leaf[] })[] };

const nav: Item[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pillars", label: "Our Work" },
  { href: "/media", label: "Media" },
  {
    href: "/news",
    label: "News",
    children: [
      { href: "/news/newsletter", label: "Newsletter" },
      {
        href: "/news/quotes",
        label: "Quotes",
        children: quoteThemes.map((t) => ({
          href: `/news/quotes/${t.value}`,
          label: t.title,
        })),
      },
      { href: "/news/blog", label: "Blog" },
      { href: "/news/articles", label: "Articles" },
    ],
  },
  { href: "/community-care", label: "Community Care" },
  { href: "/festival", label: "Festival" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // close the desktop panel on Escape, or on a click outside it
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (submenu) setSubmenu(null);
      else setMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setMenu(null);
        setSubmenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menu, submenu]);

  // a route change should always dismiss both menus
  useEffect(() => {
    setMenu(null);
    setSubmenu(null);
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-forest-900/95 backdrop-blur supports-[backdrop-filter]:bg-forest-900/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="relative" ref={menu === item.href ? dropdownRef : undefined}>
                <button
                  type="button"
                  onClick={() => setMenu(menu === item.href ? null : item.href)}
                  aria-expanded={menu === item.href}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-500 ${
                    isActive(item.href)
                      ? "text-gold-500 underline decoration-2 underline-offset-[6px]"
                      : "text-white/85"
                  }`}
                >
                  {item.label}
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                    className={`transition-transform ${menu === item.href ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {menu === item.href && (
                  <div className="absolute left-1/2 top-full z-50 mt-3 w-60 -translate-x-1/2 rounded-card border border-forest-900/10 bg-white p-2 shadow-xl">
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-bold text-forest-900 hover:bg-forest-50"
                    >
                      All news
                    </Link>
                    <div className="my-1 h-px bg-forest-900/10" />
                    {item.children.map((child) =>
                      child.children ? (
                        <div
                          key={child.href}
                          className="relative"
                          onMouseEnter={() => setSubmenu(child.href)}
                          onMouseLeave={() => setSubmenu(null)}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setSubmenu(submenu === child.href ? null : child.href)
                            }
                            aria-expanded={submenu === child.href}
                            aria-haspopup="true"
                            className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-ink/80 hover:bg-forest-50 hover:text-forest-900"
                          >
                            {child.label}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>

                          {submenu === child.href && (
                            <div className="absolute left-full top-0 z-50 ml-1 w-56 rounded-card border border-forest-900/10 bg-white p-2 shadow-xl">
                              <Link
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm font-bold text-forest-900 hover:bg-forest-50"
                              >
                                All quotes
                              </Link>
                              <div className="my-1 h-px bg-forest-900/10" />
                              {child.children.map((g) => (
                                <Link
                                  key={g.href}
                                  href={g.href}
                                  className="block rounded-md px-3 py-2 text-sm text-ink/75 hover:bg-forest-50 hover:text-forest-900"
                                >
                                  {g.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm font-medium text-ink/80 hover:bg-forest-50 hover:text-forest-900"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  isActive(item.href)
                    ? "text-gold-500 underline decoration-2 underline-offset-[6px]"
                    : "text-white/85"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/get-involved"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-forest-950 transition-colors hover:bg-gold-600"
          >
            Get Involved
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 lg:hidden" aria-label="Mobile">
          <div className="space-y-1 px-5 pb-5 pt-3">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-md px-2 py-2.5 text-base font-medium hover:bg-white/5 hover:text-gold-500 ${
                    isActive(item.href) ? "bg-white/5 text-gold-500" : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="mb-1 ml-3 space-y-0.5 border-l border-white/15 pl-3">
                    {item.children.map((child) => (
                      <div key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-2 py-2 text-[15px] text-white/70 hover:bg-white/5 hover:text-gold-500"
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <ul className="ml-3 space-y-0.5 border-l border-white/10 pl-3">
                            {child.children.map((g) => (
                              <li key={g.href}>
                                <Link
                                  href={g.href}
                                  className="block rounded-md px-2 py-1.5 text-sm text-white/55 hover:bg-white/5 hover:text-gold-500"
                                >
                                  {g.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/get-involved"
              className="mt-2 block rounded-full bg-gold-500 px-5 py-3 text-center text-base font-bold text-forest-950"
            >
              Get Involved
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
