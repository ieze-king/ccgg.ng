"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
};

export default function EnquiryForm({
  kind,
  fields,
  submitLabel = "Submit",
}: {
  kind: string;
  fields: Field[];
  submitLabel?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong.");
        setState("error");
        return;
      }
      setState("sent");
    } catch {
      setError("Network problem. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-card border border-forest-900/15 bg-forest-50 p-8">
        <p className="font-display text-lg font-bold text-forest-900">Thank you.</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
          We have received your details and will be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* honeypot */}
      <input
        type="text" name="company" tabIndex={-1} autoComplete="off"
        aria-hidden="true" className="hidden"
      />

      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="block text-sm font-bold text-forest-900">
            {f.label}
            {f.required && <span className="ml-1 text-gold-600">*</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name} name={f.name} required={f.required} rows={5}
              placeholder={f.placeholder}
              className="mt-2 w-full rounded-card border border-forest-900/20 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-gold-500"
            />
          ) : (
            <input
              id={f.name} name={f.name} type={f.type ?? "text"}
              required={f.required} placeholder={f.placeholder}
              className="mt-2 w-full rounded-card border border-forest-900/20 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-gold-500"
            />
          )}
        </div>
      ))}

      {state === "error" && (
        <p role="alert" className="rounded-card bg-gold-100 px-4 py-3 text-sm text-ink/80">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-forest-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-forest-800 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
