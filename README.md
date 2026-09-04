# ccgg.ng

Static coming soon page. One file, no dependencies, no build step.

## Editing the copy

Everything you'd want to change is in `index.html`:

- The `<!-- EDIT ME -->` block in `<head>` — page title, description, social preview text.
- The `<main>` element — eyebrow, headline, paragraph.

The word wrapped in `<em>` renders in italic accent colour. Move it to change emphasis.

## Local preview

    npx serve .        # or: python3 -m http.server 8000

Or just open `index.html` in a browser — it has no server dependencies.

## Deploying

Vercel is connected to this GitHub repo. Pushing to `main` deploys to production;
any other branch gets a preview URL.

## DNS (Whogohost → Vercel)

The exact record values are **project-specific** and shown on the domain card in
Vercel → Project → Settings → Domains. Copy them from there rather than from any
guide — Vercel now assigns per-project anycast IPs and CNAME targets.

Typical shape, set in Whogohost's DNS manager:

| Type  | Host / Name | Value                             |
|-------|-------------|-----------------------------------|
| A     | `@`         | IP shown on the Vercel domain card |
| CNAME | `www`       | target shown on the Vercel domain card |

Delete any pre-existing `@` A record or `www` CNAME that points at Whogohost's
parking / cPanel server first — duplicates cause intermittent failures.

If a CAA record exists, it must permit Let's Encrypt, or TLS certificate
issuance will fail.
