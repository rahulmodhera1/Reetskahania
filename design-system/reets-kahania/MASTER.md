# Design System: Reets Kahania — Master

Single-page marketing/portfolio site for Reets Kahania, an event content creator
(Reels / BTS / Candid) based in Sacramento & Reno. Client: Strive (design agency).

## How this file was produced

Ran `ui-ux-pro-max --design-system` with dials `variance=7 motion=6 density=3`
scoped to "event content creator photography videography portfolio boutique
editorial beige neutral". The tool's category auto-match returned a generic
"SaaS Mobile / High-Tech Boutique" style (electric blue, Calistoga+Inter,
glassmorphism) — a poor fit, logged here per the skill's "never present a
mismatched result as data" instruction. Supplementary domain queries against
`product`, `style`, and `typography` returned better signal:

- `style`: **Editorial Grid / Magazine** — asymmetric grid, editorial
  typography, pull quotes, reveal-on-scroll, print-inspired. Closest match
  for this brief and the pattern this site actually uses.
- `typography`: **Classic Elegant** (Playfair Display + Inter, serif+sans,
  "luxury/editorial/premium") — validates a high-contrast serif display +
  geometric sans body pairing for this register.

Both `ui-ux-pro-max` (the "premium-consumer palette ban") and
`taste-skill`/`design-taste-frontend` (serif discouraged as default, warm
beige/cream banned as default) flag beige palettes and display serifs as
common LLM-default tells — **when reached for generically**. Both skills
carve out an explicit override: it's acceptable when the brand brief
literally names the colors/font, or the identity is genuinely
editorial/heritage and the choice can be justified for that specific brand.
Here the palette is lifted directly from the client's real, pre-existing
logo (dusty beige backdrop, near-black serif monogram) and Fraunces is
explicitly requested in the brief — this is brand-identity preservation,
not a generic reach. Anchoring to it is the correct call; the layout,
motion, and copy-density rules from `design-taste-frontend` (anti-eyebrow,
anti-identical-cards, anti-gradient-text, section-layout diversity) are
still followed in full to avoid it reading as a templated AI site.

## Dials

- `DESIGN_VARIANCE: 7` — balanced/modern, editorial asymmetry over strict grid symmetry, not chaotic.
- `MOTION_INTENSITY: 6` — scroll reveals, ring stroke-draw, magnetic CTAs, portfolio hover zoom. Nothing looping/gimmicky.
- `VISUAL_DENSITY: 3` — airy, gallery-like, generous whitespace between sections.

## Color (primitive → semantic)

| Primitive | Hex | Semantic token | Usage |
|---|---|---|---|
| `beige` | `#E4D2C6` | `--color-surface-brand` | Hero backdrop, footer, ring-motif sections |
| `ivory` | `#FAF5EF` | `--color-surface` | Default section background |
| `ink` | `#1C1815` | `--color-ink` | Primary text, near-black (not pure black) |
| `taupe` | `#8C7663` | `--color-muted` | Secondary text, muted UI, borders |
| `blush` | `#D9BCAC` | `--color-accent` | Hover states, dividers, sparing accent |
| white-ish | `#FFFFFF` | `--color-on-ink` | Text on dark/ink surfaces |

Color strategy: **Committed** (per impeccable's four-step axis) — the beige/ivory
pairing carries the majority of the surface, ink for type, blush used sparingly
(<10% of surface) as the single accent. One accent color, locked page-wide.
Contrast checked: ink `#1C1815` on ivory `#FAF5EF` ≈ 15.6:1; ink on beige
`#E4D2C6` ≈ 11.9:1; taupe `#8C7663` on ivory ≈ 4.6:1 (meets AA for body text,
bumped to ink for anything under 16px to stay safely above 4.5:1).

## Typography

- **Display/serif:** Fraunces (optical sizing, high-contrast, matches the
  logo's serif monogram) — headlines, hero, pull-moments.
- **Sans/body+UI:** Inter — body copy, nav, labels, forms. Generous
  `tracking-[0.15em]` uppercase on eyebrow/label moments only, used sparingly
  (see layout rules below — not stamped above every section).
- Loaded via `next/font` (zero layout shift), variable fonts where available.
- Hero H1: `clamp(2.5rem, 5vw + 1rem, 4.5rem)`, tracking ≥ -0.03em (never past -0.04em floor).
- Body copy max-width 65ch, `leading-relaxed`.

## Layout rules applied (anti-slop discipline)

- Max 1 eyebrow label per ~3 sections (not one on every section).
- No identical 3-card icon grids repeated site-wide — Services, Portfolio,
  Testimonials, Social all use distinct layout families.
- No gradient text, no side-stripe borders, no glassmorphism-as-decoration.
- One corner-radius scale locked: soft (buttons full-pill, cards ~16px, inputs ~10px).
- Hero fits initial viewport: 2-line headline max, subtext ≤20 words, both CTAs visible without scroll.
- Nav: single line at desktop, ≤72px height, one CTA intent only ("Book Now" — never duplicated as "Contact"/"Get in touch" elsewhere with different label).
- Section-layout repetition capped: each layout family (split image/text, full-bleed, grid, marquee) used at most twice, never 3x consecutive.
- Max 1 marquee/carousel-style component on the page (used for testimonials).

## Motion

- Library: **Motion** (`motion/react`, the Framer Motion successor) for
  entrance reveals, magnetic CTA hover, and stagger; native CSS
  `stroke-dashoffset` for the ring-draw motif (cheap, GPU-friendly, no JS
  dependency for a one-shot draw-in).
- Entrance reveals: `opacity 0→1` + `y: 24→0`, `duration 0.6s`,
  `ease [0.16, 1, 0.3, 1]` (strong ease-out), `viewport once: true`.
- UI micro-interactions (button press, hover): 120–200ms, ease-out, `scale(0.97)` on `:active`.
- Ring stroke-draw: 1.4–1.8s, `ease-in-out`, triggered once on first viewport entry.
- All motion gated behind `prefers-reduced-motion` (crossfade/instant fallback, never fully removed).

## Component tokens

| Component | Radius | Shadow | Notes |
|---|---|---|---|
| Primary button | full-pill | none (tinted on hover only) | ink bg / ivory text, or ivory bg / ink text — always ≥4.5:1 |
| Card / portfolio tile | 16px | soft, tinted to beige hue, ≤8px blur | never combined with a hairline border AND wide shadow |
| Input | 10px | none | 1px border taupe/40, focus ring blush |
| Nav | n/a | none until scrolled, then soft 1px bottom border | transparent over hero |

## Source of truth

This file is the master. Section-specific overrides (if any) live in
`design-system/reets-kahania/pages/*.md`. None exist yet — the single
scrolling page uses Master rules exclusively.
