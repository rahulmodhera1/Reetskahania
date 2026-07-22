"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { RingMark } from "@/components/site/ring-mark";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out ${
        solid
          ? "bg-ivory/92 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#top"
          className={`flex items-center gap-2.5 text-sm font-medium tracking-wide transition-colors ${
            solid ? "text-ink" : "text-ivory"
          }`}
        >
          <RingMark size={34} showWordmark={false} ink={solid ? "#1C1815" : "#FAF5EF"} />
          <span className="font-display text-base tracking-normal">{siteConfig.name}</span>
        </a>

        <ul
          className={`hidden items-center gap-8 lg:flex ${solid ? "text-ink" : "text-ivory"}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 sm:inline-flex ${
              solid
                ? "bg-ink text-on-ink hover:bg-ink/90"
                : "bg-ivory text-ink hover:bg-blush"
            }`}
          >
            Book a Session
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? "text-ink" : "text-ivory"
            }`}
          >
            {menuOpen ? (
              <X size={22} weight="light" aria-hidden />
            ) : (
              <List size={22} weight="light" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2 text-ink">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-base font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-on-ink"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
