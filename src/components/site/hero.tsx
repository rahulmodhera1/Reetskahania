"use client";

import { motion, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";
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
            aria-hidden
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-5 block h-2 w-2 rotate-45 bg-gold"
          />

          <motion.span
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="block text-sm font-medium uppercase tracking-[0.32em] text-taupe-text"
          >
            Event Content Creator
          </motion.span>

          {/*
            Deliberately not motion-gated: this heading is the page's LCP
            candidate, and a clipped/opacity-0 initial state (however
            briefly) delays Largest Contentful Paint. It renders at full
            opacity immediately; only the ornament around it animates.
          */}
          <h1 className="mt-5 text-balance font-display text-[3.25rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-ink sm:text-7xl lg:text-[6rem]">
            {siteConfig.name}
          </h1>

          {/*
            A signature-stroke underline that draws itself in, like a pen
            crossing the page, rather than a static rule. Purely
            decorative (not the LCP element), so the reveal is safe here.
          */}
          <svg
            aria-hidden
            viewBox="0 0 220 20"
            className="mx-auto mt-5 h-4 w-40 overflow-visible sm:w-48"
          >
            <motion.path
              d="M4 12 C 46 2, 84 18, 122 8 S 190 0, 216 10"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
            />
          </svg>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            className="mx-auto mt-6 max-w-md font-display text-xl italic leading-relaxed text-ink/75 sm:text-2xl"
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
            <MagneticButton href="#portfolio" variant="primary">
              View Portfolio
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Book a Session
            </MagneticButton>
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
