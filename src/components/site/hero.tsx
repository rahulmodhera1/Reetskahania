"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services, siteConfig } from "@/lib/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 100]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 6]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-beige"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 85% at 8% 8%, rgba(250,245,239,0.9), transparent 55%), radial-gradient(90% 75% at 95% 100%, rgba(140,118,99,0.28), transparent 60%), linear-gradient(155deg, #FAF5EF 0%, #EEDFD3 45%, #E4D2C6 100%)",
        }}
      />

      {/*
        The client's real logo, large and bleeding off the edge, is the
        hero's visual anchor instead of stock/placeholder photography.
        Scroll-linked drift only (y/rotate); opacity stays constant from
        first paint so this large element can never delay LCP the way a
        fade-in entrance would.
      */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-24"
        style={{ y: markY, rotate: markRotate }}
      >
        <Image
          src="/logo-mark.png"
          alt=""
          width={720}
          height={720}
          sizes="(min-width: 1280px) 620px, 480px"
          priority
          className="h-[420px] w-[420px] opacity-90 xl:h-[560px] xl:w-[560px]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="max-w-2xl">
          <motion.span
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-sm font-medium uppercase tracking-[0.24em] text-taupe-text"
          >
            Event Content Creator
          </motion.span>

          {/*
            Deliberately not motion-gated: this heading is the page's LCP
            candidate, and an opacity-0 initial state (however briefly)
            delays Largest Contentful Paint. It renders at full opacity
            immediately; only the elements around it stagger in.
          */}
          <h1 className="mt-3 text-balance font-display text-[3.25rem] font-extrabold leading-[0.95] tracking-[-0.02em] text-ink sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink/75 sm:text-xl"
          >
            {siteConfig.slogan}
          </motion.p>

          <motion.ul
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-2.5"
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#portfolio" variant="primary">
              View Portfolio
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Book a Session
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
