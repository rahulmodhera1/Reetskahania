"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

export function ServiceArea() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="service-area" className="border-y border-ink/10 bg-beige/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
                Sacramento &amp; Reno, and the road between.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink/75 sm:text-lg">
                Reets is based across both cities and books events throughout
                the greater Sacramento and Reno-Tahoe areas. Travel further
                out is available for the right event. Reach out with your
                location and date.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <div className="relative flex items-center gap-0 py-8">
                <div className="flex flex-col items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink" />
                  <span className="text-sm font-medium tracking-wide text-ink">Sacramento</span>
                </div>

                <div className="relative mx-3 h-2 flex-1">
                  <svg
                    className="absolute inset-0 h-full w-full"
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
                      stroke="#1C1815"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                      strokeOpacity="0.4"
                      initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </svg>
                  {/* A small mark travels the route, back and forth, visualizing "we come to you." */}
                  {!shouldReduceMotion && (
                    <motion.span
                      aria-hidden
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(174,138,69,0.18)]"
                      initial={{ left: "0%", opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      animate={{ left: ["0%", "100%", "0%"] }}
                      transition={{
                        opacity: { duration: 0.6, delay: 1 },
                        left: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                      }}
                    />
                  )}
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink" />
                  <span className="text-sm font-medium tracking-wide text-ink">Reno</span>
                </div>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-taupe-text">
                Travel available beyond both cities
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
