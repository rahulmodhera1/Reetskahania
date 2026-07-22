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

## Revision 4: screenshot-driven bug pass + elegance reference

Client sent five screenshots of the live Revision 3 build with specific,
itemized complaints, then separately shared screenshots of an external
reference site ("elegant and beautiful... NOT looking for something
EXACTLY like this but the same vibe") for tone, not for copying.

**Hero**: "remove the logo from the hero." The Revision 3 hero used the
620px scroll-parallaxed logo as its visual anchor; the client rejected
that outright rather than asking for a resize. Rebuilt as a centered,
logo-free composition: eyebrow → headline → thin rule → italic slogan →
service pills → CTAs → location tag, all on the same warm beige gradient.
The H1 stays un-motion-gated for LCP, per the Revision 2 lesson.

**About**: "why is this not aligned in the box... dislike the way the
text is written, looks unprofessional." The offset decorative frame and
drop-cap treatment were both removed — the frame's absolute-positioned
second layer wasn't lining up against its parent at non-4:5 viewport
widths, and the drop-cap forced an ugly ragged wrap on the first
paragraph. Replaced with a single centered placeholder panel (logo on
beige, labeled "portrait to be added") and plain-set body copy.

**Portfolio**: "'Selected work' and the buttons... super boring."
Heading bumped to `text-5xl sm:text-6xl`. Filter tabs rebuilt with a
`layoutId`-based sliding pill background (spring physics) instead of a
static active-state color swap. Placeholder tiles were flat single-tint
blocks; replaced with six cycled diagonal gradients (not tied to
category, so the grid doesn't read as three repeating blocks), a
corner-bracket frame per tile (the reference-site motif — thin unfilled
L-brackets at each corner), and an always-visible "Placeholder" pill so
the gradient reads as an intentional placeholder rather than a missing
image.

**Service Area**: "remove the logo in the background... add some cool
animations." The large low-opacity logo watermark is gone. Added a
`border-y` for a crisp handoff from Hero, and a small dot that travels
back and forth along the Sacramento–Reno route line on a 5s loop
(`whileInView` gated, starts once, `prefers-reduced-motion` disables it)
to visualize "we come to you" instead of decorating with the brand mark.

**Service Area / Testimonials separation**: "should be separate, also
super boring." The two sections previously shared near-identical
`bg-beige/40` tints and sat flush against each other with no seam.
Service Area is now `bg-beige/50` with a top/bottom border; Testimonials
moved to `bg-ivory`, giving the two sections distinct, clearly separated
fields.

**Testimonials transition**: "the animation to go through the
testimonials is stupid, remove that." Replaced the fade+slide crossfade
with a clip-path wipe (`inset(0 100% 0 0)` → `inset(0 0% 0 0)`,
`cubic-bezier(0.77,0,0.175,1)`, 700ms) using the CSS Grid overlap
technique (`grid` container, each quote on `grid-area: 1/1`) so the
container auto-sizes to whichever quote is tallest instead of clipping
longer ones against a fixed height. Verified deliberately (scroll to
section before the 6s auto-advance fires, then trigger the "Next"
button by hand and screenshot mid-transition) that the wipe animates
clean with no overlap/ghosting between outgoing and incoming quotes.
Quote type also set to italic display serif to match the reference
site's pull-quote treatment.

**Dead code**: `MagneticButton`'s `hero-primary`/`hero-outline`
variants, added in Revision 2 for the since-removed dark hero, were
unused after the Revision 3 all-light palette and Revision 4 hero
rebuild. Removed along with their type union members.

## Revision 5: gold accent system + Services rebuild + a real Portfolio bug

**Gold accent color**: added `--color-gold` (#AE8A45, decorative use —
rules, dots, rings, numerals) and `--color-gold-deep` (#7C6029, clears
4.5:1 on ivory, for the rare case gold is used as actual text) as new
design tokens, per "incorporate gold accents... throughout the website."
Applied as a restrained, one-touch-per-section accent rather than a
loud repaint: the hero's ornament dot, signature-stroke underline, and
service-label separators; the Services numeral watermark and hover
accent bar; the Portfolio active-tab ring and corner-frame hover state;
the nav's scroll-progress bar; the testimonials' oversized quote mark;
the service-area travel dot; and a hover ring on the primary button.

**Services**: "I hate how it says 'Three ways to keep the day'... the
layout seems kinda boring." Heading changed to "Three ways to capture
your day" (matches the "capturing your story" verb already used in the
site's slogan — more professional than "keep"). The flat divided-list
layout was rebuilt with a large faint gold numeral (01/02/03) watermarked
behind each row, a gold accent bar that grows in on hover, and a gold
underline beneath each service name — same information architecture,
considerably more editorial.

**Portfolio filter tabs — real bug, not just taste**: "whatever tab
you're on... it makes it white which makes it blended in with the
background." The active tab's shared-layout pill (`layoutId`, `bg-ink`,
`-z-10`) was rendering behind the entire tablist rather than behind its
own button: the button had `position: relative` but no stacking context
of its own, so a child at `z-index: -10` escaped to the nearest ancestor
stacking context instead of staying scoped locally, painting behind the
whole row's shared background rather than immediately behind the tab
text. Fixed by adding `isolate` to each tab button (forces a local
stacking context), confirmed by screenshotting the active "Reels" tab
in isolation — now a crisp, unmistakable dark pill. Also added a
`ring-gold/50` to the active pill as this round's gold touch.

**Hero**: "it looks kinda boring, with no character... make the font
match her logo... add some animation like it's being written on the
screen... fix the boxes that say Reels, BTS, Candid." Headline weight
bumped to extrabold (800, the heaviest loaded cut) for a more dramatic
thick/thin contrast closer to the logo's Didone monogram. The "written
on screen" ask is delivered by a signature-stroke SVG underline beneath
the headline that draws itself in via `pathLength` — decorative and off
the LCP element, so safe to animate. The boxy bordered service pills
(Reels / BTS / Candid) were replaced with small-caps labels separated by
rotated gold-diamond dividers, a lighter, more editorial treatment that
echoes the ornament dot added above the eyebrow.

**Performance regression caught and reverted before shipping**: the
first pass of this hero also gave the italic slogan a `clip-path`
handwriting-reveal (text wiping in left-to-right) plus a blinking gold
cursor. Lighthouse afterward showed Performance down from 93 to 89 —
Total Blocking Time roughly doubled (100ms → 260ms) and max-potential-FID
went from 140ms to 190ms, both driven by a jump in the "Rendering" and
"Style & Layout" main-thread buckets. Isolated the cause by reverting
just that one animation and re-measuring: TBT dropped to 40ms and the
score returned to 93, confirming the `clip-path` reveal animating across
the full paragraph width every frame (as opposed to `transform`/`opacity`,
which the compositor can handle off the main thread) was the entire
regression. Replaced with a plain opacity/y fade; the "written on
screen" feel is still delivered by the (much cheaper, much smaller)
SVG signature stroke under the headline.

## Revision 6: hero ornament pullback, a real "drawn on load" headline, gold everywhere

**Hero ornament removal**: "remove the star at the top, remove the gold
scribble line." The Revision 5 hero had picked up a small rotated-gold
ornament above the eyebrow and a signature-stroke SVG underline beneath
the headline; both read as clutter once shipped, so both are gone. The
diamond dividers between the service labels (Reels · BTS · Candid) stay
— those weren't called out and still serve a purpose separating the
labels.

**Slogan, one line**: the italic slogan was wrapping to two lines at the
width in the client's screenshot because of a `max-w-md` (448px) cap
that was narrower than it needed to be. Removed the cap, added
`whitespace-nowrap`, and stepped the font size down at the smallest
breakpoint (`text-sm sm:text-xl md:text-2xl`) so it still fits without
wrapping or overflowing on a phone-width viewport.

**CTA buttons, simplified**: "remove the stupid drag animation... I
don't like how it moves depending on the cursor." The button component
tracked the cursor with a spring-physics offset (a "magnetic" pull
toward the pointer). Removed entirely and replaced with a plain
`whileHover={{ scale: 1.03 }}` / `whileTap={{ scale: 0.97 }}` — since it
no longer does anything magnetic, the component was renamed
`MagneticButton` → `CtaButton` (`magnetic-button.tsx` →
`cta-button.tsx`) rather than keep a name that misdescribes what it
does.

**A real "drawn on load" headline**: earlier revisions avoided
animating the H1 itself because hiding it (opacity or clip-path) at
mount delays Largest Contentful Paint — LCP measures when the element's
own pixels are painted, and a hidden/clipped element doesn't count as
painted until revealed. This revision gets the "text being drawn"
effect without that tradeoff: the H1 renders at full opacity from the
first frame (so LCP is untouched), and a plain ivory-colored panel sits
on top of it, covering the text and then wiping away left-to-right via
a single `scaleX` transform anchored to the right edge. The panel is a
content-free div (no text or image), so it isn't itself an LCP
candidate, and because only `transform` is animating, the compositor
handles it without a single per-frame repaint — unlike the `clip-path`
approach reverted in Revision 5. Verified with a screenshot at ~250ms
into the load that the panel is genuinely mid-wipe (the last few
characters of "Kahania" still covered), and confirmed via a second
Lighthouse pass that Performance held (91–94 across two runs, consistent
with normal simulated-throttling run-to-run variance, not a regression).

**Gold, applied broadly**: "I don't want just the soft pink, add gold
accents everywhere you see fit." Previously gold was confined to Hero,
Services, and the Portfolio tab fix. This pass adds it to every
remaining section, each with a restrained, purpose-fitting touch rather
than a blanket repaint: About's placeholder badge (was blush/pink,
now a gold-outlined pill plus a gold rule under the heading — directly
answers the "not just pink" note), Contact's input focus state and
submit-button hover ring, the email link's border and hover color,
Footer's section-label bullets and link/icon hover states and top
divider, Social Proof's card borders and icon hover color, Portfolio's
corner frames (now gold-tinted by default, not only on hover), the
Testimonials active pagination dot, and the Nav's "Book a Session"
hover ring.

**Two more direct fixes**: the Service Area travel dot was "going too
fast" — its loop duration went from 5s to 9s. The Testimonials
oversized quote mark read as misplaced sitting almost flush with the
quote text; shifted further left (`-left-3` → `-left-10`, `sm:-left-14`)
so it reads clearly as a decorative mark rather than crowding the copy.

## Source of truth

This file is the master. Section-specific overrides (if any) live in
`design-system/reets-kahania/pages/*.md`. None exist yet, the single
scrolling page uses Master rules exclusively.
