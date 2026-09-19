import Link from "next/link";
import Logo from "./Logo";
import { org } from "@/lib/content";

const columns = [
  {
    heading: "The Work",
    links: [
      { href: "/pillars", label: "Four Pillars" },
      { href: "/pillars/civic-education", label: "Civic Education" },
      { href: "/pillars/good-governance", label: "Good Governance" },
      { href: "/community-care", label: "Community Care" },
    ],
  },
  {
    heading: "Media",
    links: [
      { href: "/media", label: "All Programmes" },
      { href: "/media#civic-conversations", label: "Civic Conversations" },
      { href: "/standards", label: "Editorial Standards" },
    ],
  },
  {
    heading: "Participate",
    links: [
      { href: "/festival", label: "Civic Festival" },
      { href: "/get-involved", label: "Parish Registration" },
      { href: "/get-involved#volunteer", label: "Volunteer" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="torn-gold h-6 w-full" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {org.nature}
            </p>
            <p className="mt-4 text-sm font-bold text-gold-500">{org.tagline}</p>
            <p className="mt-1 text-xs tracking-[0.18em] text-white/45 uppercase">
              {org.rhythm}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-xs font-bold tracking-[0.18em] text-gold-500 uppercase">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="max-w-3xl text-sm leading-relaxed text-white/55">
            <span className="font-semibold text-white/80">Non-partisan by constitution.</span>{" "}
            CCGG neither endorses nor campaigns for any political party or candidate.
            We recognise verifiable public achievements, acknowledge legitimate
            shortcomings, and encourage citizens to make informed decisions through
            lawful and peaceful democratic participation.
          </p>

          <div className="mt-7 flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {org.fullName}. {org.geography}.
            </p>
            <p>
              {/* PLACEHOLDER — real contact details pending */}
              {org.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
