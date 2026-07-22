# Reets Kahania

Marketing/portfolio site for Reets Kahania, an event content creator (Reels, BTS,
Candid) based in Sacramento & Reno. Built with Next.js 16 (App Router, TypeScript),
Tailwind CSS v4, and Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Before launch — placeholders to replace

Everything below is clearly marked in the UI and/or code comments as a
placeholder. Search the codebase for `PLACEHOLDER` to find every instance.

- **Logo** — no logo file was attached when this site was built. `public/logo.svg`,
  `src/app/icon.svg`, `src/app/apple-icon.tsx`, and `src/components/site/ring-mark.tsx`
  are a recreation of the described mark (broken ring + interlocked R/K serif
  monogram + curved wordmark). Swap in the client's real logo file and update
  these references.
- **Hero background** — `src/components/site/hero.tsx` uses a gradient placeholder.
  Swap for the autoplaying/muted/looping reel or portrait still (markup for the
  `<video>` tag is already commented in the file).
- **About bio copy** — `src/components/site/about.tsx`, flagged inline as
  `[PLACEHOLDER — replace with real client copy]`.
- **Portfolio media** — `src/lib/site-config.ts` (`portfolioItems`). Currently
  labeled placeholder tiles; swap `src` paths for real photos/reels and update
  `src/components/site/portfolio.tsx` to render real media instead of the
  placeholder icon tiles.
- **Testimonials** — `src/lib/site-config.ts` (`testimonials`), placeholder quotes
  clearly labeled in the UI.
- **Social links** — `src/lib/site-config.ts` (`socialLinks`). The third platform
  (`@Reetskahanita`) wasn't specified by the client — swap the icon/href once
  the platform is confirmed.

## Contact form

The form in `src/components/site/contact.tsx` posts to a Server Action
(`src/lib/actions.ts`) that validates input and logs the submission
server-side. **No email service is connected yet.** See the `TODO` in
`src/lib/actions.ts` to wire up Formspree or Resend, e.g.:

```bash
RESEND_API_KEY=...
# or
CONTACT_FORM_ENDPOINT=...
```

## Design system

Palette, typography, motion, and layout decisions are documented in
[`design-system/reets-kahania/MASTER.md`](./design-system/reets-kahania/MASTER.md),
generated with the `ui-ux-pro-max` skill and anchored to the client's real
brand palette/logo.

## Deploy

Push to `main` and connect the repo on [Vercel](https://vercel.com/new).
