"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const variantClasses: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
  primary: "bg-ink text-on-ink ring-1 ring-transparent hover:bg-ink/90 hover:ring-gold/60",
  secondary: "bg-transparent text-ink border border-ink/70 hover:bg-ink hover:text-on-ink hover:border-gold/60",
  ghost: "bg-ivory text-ink hover:bg-blush",
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ease-out ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
