"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const variantClasses: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary: "bg-ink text-on-ink ring-1 ring-transparent hover:bg-ink/90 hover:ring-gold/60",
  secondary: "bg-transparent text-ink border border-ink/70 hover:bg-ink hover:text-on-ink hover:border-gold/60",
  ghost: "bg-ivory text-ink hover:bg-blush",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: CtaButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ease-out ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
