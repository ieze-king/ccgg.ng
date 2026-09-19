import Link from "next/link";
import type { ReactNode } from "react";

/** Headline where a single word carries the gold italic, as on the posters. */
export function Headline({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={`font-display font-bold tracking-[-0.025em] text-balance ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
      {children}
      <span className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" aria-hidden="true" />
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
}) {
  const styles = {
    primary: "bg-gold-500 text-forest-950 hover:bg-gold-600",
    ghost: "border border-white/35 text-white hover:border-gold-500 hover:text-gold-500",
    dark: "bg-forest-900 text-white hover:bg-forest-800",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
