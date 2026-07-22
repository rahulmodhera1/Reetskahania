"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Play, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems, type PortfolioCategory } from "@/lib/site-config";

const filters: Array<PortfolioCategory | "All"> = ["All", "Reels", "BTS", "Candid"];

const categoryTint: Record<PortfolioCategory, string> = {
  Reels: "bg-taupe/25",
  BTS: "bg-blush/45",
  Candid: "bg-beige",
};

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shouldReduceMotion = useReducedMotion();

  const items = useMemo(
    () => (active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="portfolio" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="max-w-xl text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
              Selected work
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter portfolio by category"
              className="flex flex-wrap gap-2"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={active === filter}
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ease-out ${
                    active === filter
                      ? "bg-ink text-on-ink"
                      : "bg-transparent text-ink/70 hover:text-ink"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative aspect-[4/5] overflow-hidden rounded-2xl ${categoryTint[item.category]} ${
                  i % 5 === 0 ? "md:row-span-2 md:aspect-auto" : ""
                }`}
              >
                {/* PLACEHOLDER MEDIA — real footage/photography from the client's
                    events will replace this tile. src is set on the underlying
                    data model for a straightforward swap later. */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink/70 transition-transform duration-500 ease-out group-hover:scale-105">
                  {item.type === "video" ? (
                    <Play size={32} weight="light" />
                  ) : (
                    <ImageIcon size={32} weight="light" />
                  )}
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
                    Placeholder {item.type}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-ivory/70">
                    {item.category}
                  </span>
                  <span className="mt-0.5 text-sm font-medium text-ivory">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
