"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 140]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 8]);

  return (
    <section
      ref={sectionRef}
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

      {/*
        Also deliberately not opacity-gated on mount: this decorative mark is
        large enough in the viewport to become the LCP candidate itself, so
        an initial opacity:0 here reintroduces the same delayed-paint problem
        the hero heading has to avoid. Only the scroll-linked parallax
        (y/rotate) animates; opacity stays constant from first paint.
      */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 opacity-90 sm:-right-6 sm:top-4"
        style={{ y: markY, rotate: markRotate }}
      >
        <Image
          src="/logo-mark-ivory.png"
          alt=""
          width={460}
          height={460}
          sizes="(min-width: 1024px) 460px, (min-width: 640px) 400px, 300px"
          priority
          className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-2xl">
          {/*
            Deliberately not motion-gated: this heading is the page's LCP
            candidate, and an opacity-0 initial state (however briefly)
            delays Largest Contentful Paint. It renders at full opacity
            immediately; only the elements below it stagger in.
          */}
          <h1 className="text-balance font-display text-[3rem] font-medium leading-[0.98] tracking-[-0.025em] sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-6 max-w-md text-lg font-light leading-relaxed text-ivory/85 sm:text-xl"
          >
            {siteConfig.slogan}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#portfolio" variant="hero-primary">
              View Portfolio
            </MagneticButton>
            <MagneticButton href="#contact" variant="hero-outline">
              Book a Session
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <span className="absolute bottom-4 right-6 z-10 max-w-[220px] text-right text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-ivory/55 lg:right-10">
        Placeholder background, reel footage to be added
      </span>
    </section>
  );
}
