# ccgg.ng

Website for **CCGG — The Church for Community Care & Good Governance**, a
Church-inspired, non-partisan civic education and community-care initiative in
Enugu State, Nigeria.

Next.js 16 (App Router) + Tailwind 4, deployed on Vercel.

## Running locally

    npm install
    npm run dev        # http://localhost:3000

## Where the content lives

`lib/content.ts` holds all site content as typed data, sourced from the 2026
Master Project & Implementation Workbook. Page components read from it, so
copy changes happen in one file.

Items marked `PLACEHOLDER` need real values before launch — see
"Outstanding" below.

## Brand

Sampled from the official CCGG posters and defined as Tailwind tokens in
`app/globals.css`:

| Token | Value |
|---|---|
| `forest-900` | `#064B15` — primary green |
| `forest-950` | `#03260A` |
| `gold-500` | `#F9BD1F` — accent |
| `cream` | `#FFF8E7` |

Type: **Archivo** for display and UI, **Newsreader** for long-form reading.
The poster signature — a white headline with one word in gold italic — is the
`.accent-word` class.

## Forms

Contact, parish registration, volunteer and partnership forms all post to
`/api/enquiry`. Delivery uses the Resend REST API and requires:

    RESEND_API_KEY=...
    ENQUIRY_TO=someone@example.com
    ENQUIRY_FROM="CCGG Website <noreply@yourdomain>"   # optional

Until those are set the endpoint returns `503` with an explanatory message
rather than silently discarding a submission.

## Outstanding

- Real logo file (SVG) — currently a placeholder extracted from the posters
- YouTube channel URL and launch video ID (`featuredVideoId` in `lib/content.ts`)
- Contact address, phone, social handles
- Leadership names and photographs
- Festival dates and venue
- CMS wiring (Sanity) for news, blog and episode listings

## Note on this repository

This repo is **public**. `ccgg.assets/` is git-ignored because the workbook
contains internal budget, risk and staffing material.
