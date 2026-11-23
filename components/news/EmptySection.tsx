export default function EmptySection({ heading, note }: { heading: string; note: string }) {
  return (
    <div className="rounded-card border-2 border-dashed border-forest-900/20 bg-forest-50 px-8 py-16 text-center">
      <p className="font-display text-lg font-bold text-forest-900">{heading}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/60">{note}</p>
    </div>
  );
}
