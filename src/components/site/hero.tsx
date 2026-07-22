"use client";

import { motion, useReducedMotion } from "motion/react";
import { CtaButton } from "@/components/ui/cta-button";
import { services, siteConfig } from "@/lib/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-beige">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(250,245,239,0.95), transparent 60%), radial-gradient(100% 80% at 50% 100%, rgba(140,118,99,0.22), transparent 65%), linear-gradient(180deg, #FAF5EF 0%, #EEDFD3 50%, #E4D2C6 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 text-center lg:px-10">
        <div className="mx-auto max-w-2xl">
          <motion.span
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-sm font-medium uppercase tracking-[0.32em] text-taupe-text"
          >
            Event Content Creator
          </motion.span>

          {/*
            The h1 itself renders at full opacity immediately (it's the
            page's LCP candidate, and hiding it — via opacity or clip-path
            — delays Largest Contentful Paint). The "being drawn" effect
            comes from an ivory panel sitting on top of it that wipes away
            left-to-right on load. The panel is a plain color box (not
            text/an image), so it isn't itself an LCP candidate, and the
            h1 underneath is already fully painted the instant it mounts —
            only what's visually covering it changes. Cheap too: it's a
            single `scaleX` transform, which the compositor handles
            without triggering layout or repaint on every frame.
          */}
          <div className="relative mx-auto mt-5 inline-block">
            <h1 className="text-balance font-display text-[3.25rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-ink sm:text-7xl lg:text-[6rem]">
              {siteConfig.name}
            </h1>
            {!shouldReduceMotion && (
              <motion.div
                aria-hidden
                className="absolute inset-0"
                // Sampled directly from the hero gradient at the headline's
                // position (rgb 243,232,223) rather than reusing a design
                // token like ivory (250,245,239) — close as those look side
                // by side, that gap is exactly what made the first version
                // of this panel visible as a mismatched white box instead of
                // blending into the background. No blur here: on mobile,
                // blurring an element that's simultaneously being scaled
                // produced faint ghosted lines through the letterforms as
                // the soft edge crossed the text strokes. The sampled color
                // match is close enough that a hard edge is not visible.
                style={{ transformOrigin: "right", backgroundColor: "rgb(243, 232, 223)" }}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
              />
            )}
          </div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            className="mx-auto mt-6 whitespace-nowrap font-display text-sm italic leading-relaxed text-ink/75 sm:text-xl md:text-2xl"
          >
            {siteConfig.slogan}
          </motion.p>

          <motion.ul
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2"
          >
            {services.map((service, i) => (
              <li key={service.id} className="flex items-center gap-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/75">
                  {service.name}
                </span>
                {i < services.length - 1 && (
                  <span aria-hidden className="h-1 w-1 shrink-0 rotate-45 bg-gold/70" />
                )}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <CtaButton href="#portfolio" variant="primary">
              View Portfolio
            </CtaButton>
            <CtaButton href="#contact" variant="secondary">
              Book a Session
            </CtaButton>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-taupe-text"
          >
            Sacramento &amp; Reno
          </motion.p>
        </div>
      </div>
    </section>
  );
}
