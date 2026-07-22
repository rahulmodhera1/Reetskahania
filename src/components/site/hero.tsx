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
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-sm font-medium uppercase tracking-[0.32em] text-taupe-text"
          >
            Event Content Creator
          </motion.span>

          {/*
            Deliberately not motion-gated: this heading is the page's LCP
            candidate, and an opacity-0 initial state (however briefly)
            delays Largest Contentful Paint. It renders at full opacity
            immediately; only the elements around it stagger in.
          */}
          <h1 className="mt-5 text-balance font-display text-[3.25rem] font-bold leading-[0.98] tracking-[-0.02em] text-ink sm:text-7xl lg:text-[6rem]">
            {siteConfig.name}
          </h1>

          <motion.div
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mx-auto mt-6 h-px w-16 origin-center bg-ink/30"
          />

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
            className="mx-auto mt-6 max-w-md font-display text-xl italic leading-relaxed text-ink/75 sm:text-2xl"
          >
            {siteConfig.slogan}
          </motion.p>

          <motion.ul
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.54 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {services.map((service) => (
              <li
                key={service.id}
                className="rounded-full border border-ink/25 bg-ivory/60 px-4 py-1.5 text-sm font-medium tracking-wide text-ink"
              >
                {service.name}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.66 }}
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
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-taupe-text"
          >
            Sacramento &amp; Reno
          </motion.p>
        </div>
      </div>
    </section>
  );
}
