@AGENTS.md

# Meyer Motorsport — Project notes

Vienna supercar dealership site rebuild. Static export Next.js 16, self-hosted, German only, no backend.

## Hard constraints

- `output: 'export'` — no API routes, no Server Actions, no middleware/proxy, no `cookies()`/`headers()`.
- `next/image` runs with `images.unoptimized: true`. Provide `width`/`height` and a `blurDataURL` where appropriate.
- Dynamic routes (e.g. `/fahrzeuge/[slug]`) require `generateStaticParams`.
- Contact form is `mailto:` only — pre-encoded subject + body, no fetch.
- Redirects from old Joomla URLs live in the nginx config, NOT `next.config.ts`.

## Stack

- Next.js 16.2.6 App Router · React 19 · Tailwind v4 (CSS-first config in `app/globals.css` via `@theme`)
- GSAP 3 + ScrollTrigger for the hero pin/scrub · Lenis for smooth scroll
- react-hook-form + zod · lucide-react for icons (sparingly)
- Fonts: Inter Tight (UI) + Fraunces (display/serif) via `next/font/google`

## Design tokens

Defined in `@theme` in `app/globals.css`. Use Tailwind utilities like `bg-ink`, `text-bone`, `text-mute`, `border-line`, `text-gold`, plus the per-car hero gradients `hero-teal | hero-cream | hero-blush | hero-sage | hero-sky | hero-slate`.

## Reference

The hero scroll animation reference video lives at `public/reference/hero-animation.mp4`. The motion is GSAP ScrollTrigger pin + scrub, NOT autoplay.
