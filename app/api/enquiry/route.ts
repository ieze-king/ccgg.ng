import { NextResponse } from "next/server";

/**
 * Form delivery.
 *
 * Uses Resend's REST API directly (no SDK dependency). Until
 * RESEND_API_KEY and ENQUIRY_TO are set, the route refuses rather than
 * silently discarding a submission — a registration that vanishes is
 * worse than one that reports a problem.
 */

export const runtime = "nodejs";

type Payload = Record<string, string>;

const FIELDS = [
  "kind", "name", "email", "phone", "parish",
  "role", "categories", "message",
] as const;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please provide your name and email address." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 }
    );
  }
  // honeypot
  if ((body.company ?? "").length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Citizen questions go to the civic desk; everything else is
  // administrative. ENQUIRY_TO_CIVIC is optional — without it both
  // streams fall back to the single ENQUIRY_TO address.
  const to =
    body.kind === "contact"
      ? process.env.ENQUIRY_TO_CIVIC ?? process.env.ENQUIRY_TO
      : process.env.ENQUIRY_TO;
  // Must be an address on the Resend-verified domain. Resend's shared
  // onboarding@resend.dev sender stays restricted even after you verify
  // your own domain, so it is not a usable default here.
  const from = process.env.ENQUIRY_FROM ?? "CCGG Website <forms@ccgg.ng>";

  if (!apiKey || !to) {
    console.error("[enquiry] delivery not configured; submission not stored", {
      kind: body.kind,
    });
    return NextResponse.json(
      {
        error:
          "Our form is not accepting submissions yet. Please reach us through the contact details on this page.",
      },
      { status: 503 }
    );
  }

  const lines = FIELDS.filter((f) => body[f])
    .map((f) => `${f}: ${body[f]}`)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `CCGG website — ${body.kind ?? "enquiry"} — ${name}`,
      text: lines,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[enquiry] resend failed", res.status, detail);
    return NextResponse.json(
      {
        error: "We could not send that just now. Please try again shortly.",
        // Resend's own error text. It names the misconfiguration (sender
        // domain, recipient restriction, bad key) and contains no secrets.
        detail: detail.slice(0, 300),
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
