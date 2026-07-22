"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Play, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { portfolioItems, type PortfolioCategory } from "@/lib/site-config";

const filters: Array<PortfolioCategory | "All"> = ["All", "Reels", "BTS", "Candid"];

// A unique soft gradient per tile (cycled by grid position, not category) so
// the placeholder grid reads as styled and varied rather than three flat
// repeating tint blocks.
const tileGradients = [
  "linear-gradient(135deg, #EFE1D4 0%, #D9BCAC 100%)",
  "linear-gradient(135deg, #E4D2C6 0%, #8C7663 115%)",
  "linear-gradient(135deg, #F1E7DD 0%, #C9AF9C 100%)",
  "linear-gradient(135deg, #DCC8B8 0%, #F5EDE4 60%, #D9BCAC 100%)",
  "linear-gradient(135deg, #EAD9CC 0%, #B89C86 100%)",
  "linear-gradient(135deg, #F5EDE4 0%, #D9BCAC 55%, #A98F79 100%)",
];

function CornerFrame() {
  return (
    <>
      <span aria-hidden className="absolute left-3 top-3 h-3.5 w-3.5 border-l border-t border-ink/25" />
      <span aria-hidden className="absolute right-3 top-3 h-3.5 w-3.5 border-r border-t border-ink/25" />
      <span aria-hidden className="absolute bottom-3 left-3 h-3.5 w-3.5 border-b border-l border-ink/25" />
      <span aria-hidden className="absolute bottom-3 right-3 h-3.5 w-3.5 border-b border-r border-ink/25" />
    </>
  );
}

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
            <h2 className="max-w-xl text-balance font-display text-5xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-6xl">
              Selected work
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter portfolio by category"
              className="inline-flex flex-wrap gap-1 rounded-full bg-beige/40 p-1.5"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={active === filter}
                  onClick={() => setActive(filter)}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 ease-out ${
                    active === filter ? "text-on-ink" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {active === filter && (
                    <motion.span
                      layoutId="portfolio-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ink"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
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
                className={i % 5 === 0 ? "md:row-span-2" : ""}
              >
                <TiltCard
                  className={`group relative aspect-[4/5] overflow-hidden rounded-2xl ${
                    i % 5 === 0 ? "md:aspect-auto md:h-full" : ""
                  }`}
                >
                  {/* PLACEHOLDER MEDIA — real footage/photography from the client's
                      events will replace this tile. src is set on the underlying
                      data model for a straightforward swap later. When real photos
                      land, render them with next/image (fill + sizes, lazy-loaded
                      below the fold) instead of this gradient block; for real
                      reels, a muted looping <video> with poster, matching the
                      hero's original concept. */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: tileGradients[i % tileGradients.length] }}
                  />
                  <CornerFrame />

                  <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-ivory">
                    Placeholder
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center text-ink/50 transition-transform duration-500 ease-out group-hover:scale-110">
                    {item.type === "video" ? (
                      <Play size={30} weight="light" aria-hidden />
                    ) : (
                      <ImageIcon size={30} weight="light" aria-hidden />
                    )}
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-ivory/70">
                      {item.category}
                    </span>
                    <span className="mt-0.5 text-sm font-medium text-ivory">
                      {item.title}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
