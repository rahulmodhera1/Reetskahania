"use client";

import { motion, useReducedMotion } from "motion/react";
import { RingMark } from "@/components/site/ring-mark";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink text-ivory"
    >
      {/*
        PLACEHOLDER BACKGROUND — no client footage was supplied for this build.
        Swap this gradient layer for an autoplaying, muted, looping <video>
        (or a strong portrait still) once real reel/photography is available:

        <video autoPlay muted loop playsInline poster="/media/hero-poster.jpg"
               className="absolute inset-0 h-full w-full object-cover">
          <source src="/media/hero-reel.mp4" type="video/mp4" />
        </video>
      */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 12%, rgba(217,188,172,0.22), transparent 55%), radial-gradient(90% 70% at 12% 96%, rgba(140,118,99,0.35), transparent 60%), linear-gradient(160deg, #1c1815 0%, #241f1b 55%, #2a231e 100%)",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 sm:-right-16 sm:top-8"
        initial={shouldReduceMotion ? { opacity: 0.35 } : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <RingMark size={440} showWordmark animate ink="#FAF5EF" className="opacity-90" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-2xl">
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-balance font-display text-[2.75rem] font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-5 max-w-md text-lg font-light leading-relaxed text-ivory/85 sm:text-xl"
          >
            {siteConfig.slogan}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-ivory px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-200 ease-out hover:bg-blush active:scale-[0.97]"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-ivory/50 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors duration-200 ease-out hover:border-ivory hover:bg-ivory/10 active:scale-[0.97]"
            >
              Book a Session
            </a>
          </motion.div>
        </div>
      </div>

      <span className="absolute bottom-4 left-6 z-10 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/35 lg:left-10">
        Placeholder background — reel footage to be added
      </span>
    </section>
  );
}
