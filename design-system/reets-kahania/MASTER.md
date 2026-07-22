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

## Revision 2: redesign-overhaul pass

Client feedback on the v1 build: didn't like the aesthetic, wanted it to
read as agency-crafted rather than templated. Re-ran `design-taste-frontend`
(now properly loaded via the Skill tool, not read from disk) as a redesign
classification.

**Design read**: redesign-overhaul of an event content creator's single-page
marketing/portfolio site, for engaged couples and event clients researching
photographers, with a premium editorial-creative language, leaning toward
native Tailwind + Motion with no official design system. Brand palette and
the (now real) logo are fixed client-owned constraints, not up for
reinvention.

**Dials**: redesign-overhaul adds +2/+2 to variance/motion, density matched.
`VARIANCE: 9` (was 7), `MOTION: 8` (was 6), `DENSITY: 3` (unchanged).

**What changed**:
- **Real logo integrated everywhere.** The client's actual logo
  (`public/logo.jpg`) replaced the hand-drawn recreation (`ring-mark.tsx`,
  deleted). Two transparent PNG colorways were extracted from it via local
  chroma-key (flat near-uniform background, so a distance-threshold alpha
  ramp gave a clean cutout without a background-removal service) for use on
  light and dark sections, plus tight-crop icon variants for small badge
  use. Wired into nav, footer, favicon, apple-icon, OG image, and used as a
  large scroll-parallaxed decorative mark in the hero and a low-opacity
  watermark in the Service Area section.
- **Zero em-dashes.** `design-taste-frontend`'s Section 9.G is explicit and
  non-negotiable on this: the em-dash is the single most-tested AI tell.
  Audited every visible string site-wide (metadata titles, section copy,
  form messages, alt text) and rewrote each one with a period, comma, or
  colon instead.
- **Fixed a real anti-pattern**: Social Proof was three equal-width cards,
  exactly the banned "3-column equal feature cards" pattern (Section 9.C).
  Rebuilt as an asymmetric featured-plus-two layout.
- **Fixed a real technical violation**: Nav's scroll-based nav-solidify
  logic used a raw `window.addEventListener('scroll', ...)`, which Section
  5.D bans outright (jank-prone, no batching). Replaced with Motion's
  `useScroll` + `useMotionValueEvent`, and added a scroll-progress hairline
  under the nav as a cheap, motivated bonus (shows reading progress, costs
  nothing extra since the motion value already existed).
- **Testimonials** rebuilt from a centered carousel-in-a-box (generic,
  low-confidence type) into an asymmetric editorial pull-quote: large
  left-aligned serif quote, giant low-opacity decorative quotation mark,
  controls and the placeholder label moved to a distinct right-hand column.
- **Contact** rebuilt from a centered narrow form (the same layout family as
  the old Testimonials, contributing to the templated feel) into an
  asymmetric split: copy and direct-email link on the left, form on the
  right.
- **About** gained an editorial drop-cap on the bio's first letter and an
  offset hairline frame behind the portrait placeholder, both real print/
  editorial techniques, not decoration for its own sake.
- **Services** gained a hover-interactive state (row tints, name nudges
  right) and bumped display type one step larger for more typographic
  confidence.
- **Portfolio** tiles gained a cursor-reactive 3D tilt (`TiltCard`,
  `ui/tilt-card.tsx`): motion values only, no React state, gated behind
  `prefers-reduced-motion` and effectively inert on touch (no continuous
  `mousemove` on touch devices).
- **Global**: added a fixed, `pointer-events-none`, ~5%-opacity film-grain
  texture overlay for tactile depth against the flat brand palette. This is
  the one explicitly-endorsed exception in the anti-pattern rules (Section
  6.E permits grain on a fixed viewport-level layer; it only bans it on
  scrolling containers, which this isn't).
- **Performance regression caught and fixed**: the redesign initially
  dropped Lighthouse Performance from 94 to 74 (production build). Root
  causes: an oversized 512px favicon (trimmed to 256px), missing `sizes`
  hints on the new logo `<Image>` usages (added), and the hero's decorative
  logo image inheriting the same "opacity:0 initial state delays LCP"
  mistake documented below (see Motion section) despite being purely
  decorative. Fixed by removing the opacity/scale entrance on that image
  and keeping only the scroll-linked parallax, which doesn't block first
  paint. Final: Performance 93, Accessibility/Best Practices/SEO 100/100/100
  (production build, simulated throttling).

## Revision 3: client rejected the hero and font, went all-light

Direct client feedback after seeing Revision 2: "I hate the way the site
looks... I hate the hero, looks so boring. Doesn't even say what she
offers. I dislike the font throughout the whole site... make the colours
around the whole site Beige and Neutral Shades." This is a stronger, more
specific signal than the Revision 2 taste-skill pass and takes priority
over it wherever they conflict.

**Font**: swapped Fraunces for **Playfair Display**. Fraunces is a soft,
warm, "wonky"-contrast serif; the client's actual logo monogram (the R/K)
is a high-contrast Didone with thin hairlines and dramatic thick strokes.
Playfair Display is a much closer match to that specific mark, and the
client explicitly asked for the site font to match the logo, which is the
documented override condition for reaching past Fraunces/serif defaults in
the first place.

**Color**: removed every dark (`bg-ink`) section site-wide. Hero, Service
Area, and Footer all moved from near-black backgrounds to the beige/ivory/
neutral family, ink used only for text and buttons from here on. Rationale:
"beige and neutral shades... around the WHOLE site" is unambiguous, and the
dark hero in particular was reading as generic stock-photography-hero
cliché rather than the client's actual (warm, pastel) brand identity.

**Hero**: full rebuild. Previous version was a dark gradient with no
mention of services; new version states the offering directly (an
"Event Content Creator" eyebrow plus Reels/BTS/Candid pills next to the
headline, not buried in a later section) and leans on the real logo at
dramatic scale (620px, bleeding off the right edge, scroll-parallaxed) as
the visual anchor instead of a photo/video placeholder. This is the
brief's "no photo asset, still needs a real hero" problem solved with the
one real, on-brand asset available (the logo) rather than another gradient.

**Logo colorways**: with no dark sections left, the ivory PNG variants
(`logo-mark-ivory.png`, `logo-icon-ivory.png`) became dead code and were
deleted; `Logo` component simplified to ink-only. If a future revision
reintroduces a dark section, regenerate the ivory PNGs with the same local
chroma-key script used originally:

```python
from PIL import Image
import numpy as np
im = Image.open("public/logo.jpg").convert("RGB")
arr = np.array(im).astype(np.float32)
bg = np.array([223, 206, 198], dtype=np.float32)  # sampled corner pixel
dist = np.sqrt(((arr - bg) ** 2).sum(axis=2))
alpha = np.clip((dist - 12) / (60 - 12), 0, 1) * 255  # low=12, high=60 thresholds
out = np.zeros((*arr.shape[:2], 4), dtype=np.uint8)
out[..., :3] = [250, 245, 239]  # ivory, or [28, 24, 21] for ink
out[..., 3] = alpha.astype(np.uint8)
Image.fromarray(out, "RGBA").save("public/logo-mark-ivory.png")
```

**Social links**: client specified exact display rules per account, none of
which the v1/v2 schema supported (it printed the word "Instagram" for both
IG accounts and had a "Platform TBD" placeholder for the TikTok account,
which the client has now named explicitly). New schema is
`{ platform: "instagram" | "tiktok", handle, descriptor }`: platform drives
the icon (so the platform is shown, never stated in text for the two
Instagram accounts), `descriptor` is "Business" / "Personal" / "TikTok".

**Nav**: was built assuming a dark hero (ivory text over a transparent
header, solidifying to ink text on scroll). With the hero now light, that
produced near-invisible ivory-on-beige nav text, caught in this session's
own screenshot QA before shipping. Simplified: nav text is always ink;
only the background (transparent to blurred-ivory) changes on scroll.

## Source of truth

This file is the master. Section-specific overrides (if any) live in
`design-system/reets-kahania/pages/*.md`. None exist yet, the single
scrolling page uses Master rules exclusively.
