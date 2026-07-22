"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/**
 * Subtle cursor-reactive 3D tilt, gated to fine-pointer hover devices and
 * off entirely under prefers-reduced-motion. Values live in motion values
 * (never React state) so this never re-renders on pointer move.
 */
export function TiltCard({ children, className = "", maxTilt = 8 }: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 220, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 220, damping: 20 });
  const scale = useSpring(1, { stiffness: 220, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(px * maxTilt * 2);
    rotateXRaw.set(-py * maxTilt * 2);
  }

  function handleMouseEnter() {
    scale.set(1.015);
  }

  function handleMouseLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
