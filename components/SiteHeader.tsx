"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const nav = [
  { href: "/about", label: "About" },
  { href: "/pillars", label: "Our Work" },
  { href: "/media", label: "Media" },
  { href: "/community-care", label: "Community Care" },
  { href: "/festival", label: "Festival" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-forest-900/95 backdrop-blur supports-[backdrop-filter]:bg-forest-900/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold-500"
            >
              {item.label}
            </Link>
          ))}
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-base font-medium text-white/90 hover:bg-white/5 hover:text-gold-500"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              onClick={() => setOpen(false)}
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
