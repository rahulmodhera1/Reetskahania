"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

export function ServiceArea() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="service-area" className="bg-ink py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] sm:text-5xl">
                Sacramento &amp; Reno — and the road between.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg">
                Reets is based across both cities and books events throughout
                the greater Sacramento and Reno–Tahoe areas. Travel further
                out is available for the right event — reach out with your
                location and date.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-0 py-8">
                <div className="flex flex-col items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-ivory" />
                  <span className="text-sm font-medium tracking-wide">Sacramento</span>
                </div>

                <svg
                  className="mx-3 flex-1"
                  height="2"
                  viewBox="0 0 200 2"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.line
                    x1="0"
                    y1="1"
                    x2="200"
                    y2="1"
                    stroke="#FAF5EF"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    strokeOpacity="0.5"
                    initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>

                <div className="flex flex-col items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-ivory" />
                  <span className="text-sm font-medium tracking-wide">Reno</span>
                </div>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-ivory/60">
                Travel available beyond both cities
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
