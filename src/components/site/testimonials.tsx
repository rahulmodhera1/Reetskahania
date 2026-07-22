"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [shouldReduceMotion, paused]);

  function go(dir: 1 | -1) {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-beige/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <h2 className="sr-only">Testimonials</h2>
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-ink/70">
            Placeholder quotes — replace with real client testimonials
          </p>
        </Reveal>

        <div
          className="relative mt-8 min-h-[220px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <blockquote>
                <p className="text-balance font-display text-2xl italic leading-snug tracking-[-0.01em] text-ink sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium tracking-wide text-taupe-text">
                {current.name} <span className="text-ink/70">·</span> {current.role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition-colors hover:text-ink"
          >
            <CaretLeft size={18} weight="light" aria-hidden />
          </button>

          <div className="flex items-center" role="tablist" aria-label="Select testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.name + i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="relative flex h-11 w-11 items-center justify-center"
              >
                <span
                  aria-hidden
                  className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                    i === index ? "w-6 bg-ink" : "w-1.5 bg-ink/25"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition-colors hover:text-ink"
          >
            <CaretRight size={18} weight="light" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
