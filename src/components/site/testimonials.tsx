"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
    <section id="testimonials" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="sr-only">Testimonials</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div
            className="relative lg:col-span-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-16 select-none font-display text-[10rem] italic leading-none text-gold/[0.16] sm:-top-20 sm:text-[13rem]"
            >
              &ldquo;
            </span>

            {/*
              Both the entering and exiting quote occupy the same CSS grid
              cell (grid-area: 1/1), so the container auto-sizes to
              whichever is tallest during the transition instead of a fixed
              min-height that would clip longer quotes.
            */}
            <div className="grid">
              <AnimatePresence initial={false}>
                <motion.figure
                  key={index}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { clipPath: "inset(0 100% 0 0)", opacity: 1 }
                  }
                  animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
                  className="[grid-area:1/1]"
                >
                  <blockquote>
                    <p className="text-balance font-display text-3xl font-medium italic leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[2.6rem]">
                      {current.quote}
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 text-sm font-medium tracking-wide text-taupe-text">
                    {current.name}
                    <span className="mx-2 text-ink/40">/</span>
                    {current.role}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:col-span-3 lg:col-start-10">
            <Reveal delay={0.1}>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/70">
                Placeholder quotes, replace with real client testimonials
              </p>
            </Reveal>

            <div className="flex items-center gap-2 lg:flex-col lg:items-start">
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Select testimonial"
              >
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

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition-colors hover:text-ink"
                >
                  <ArrowLeft size={18} weight="light" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition-colors hover:text-ink"
                >
                  <ArrowRight size={18} weight="light" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
