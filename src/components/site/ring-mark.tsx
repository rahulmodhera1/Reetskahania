"use client";

import { useId } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";

type RingMarkProps = {
  size?: number;
  showWordmark?: boolean;
  showBackdrop?: boolean;
  animate?: boolean;
  className?: string;
  ink?: string;
  backdrop?: string;
};

/**
 * Placeholder recreation of the Reets Kahania mark (no logo file was attached
 * to this session): a broken circular ring with an interlocked R/K serif
 * monogram and the tracked-out wordmark curving along the lower-left arc.
 * Swap for the client's real logo file at /public/logo.svg when available.
 */
export function RingMark({
  size = 96,
  showWordmark = true,
  showBackdrop = false,
  animate = false,
  className,
  ink = "#1C1815",
  backdrop = "#E4D2C6",
}: RingMarkProps) {
  const rawId = useId();
  const pathId = `rk-wordmark-path-${rawId}`;
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<SVGSVGElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.6 });

  const drawPath = animate && !shouldReduceMotion;
  const ringVisible = !drawPath || inView;

  return (
    <svg
      ref={containerRef}
      width={size}
      height={size}
      viewBox="0 0 260 260"
      fill="none"
      className={className}
      role="img"
      aria-label="Reets Kahania ring and monogram mark"
    >
      {showBackdrop && <circle cx="130" cy="130" r="128" fill={backdrop} />}

      {/* broken ring, two arcs */}
      <motion.path
        d="M 167.46 222.72 A 100 100 0 1 1 104.12 33.41"
        stroke={ink}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={drawPath ? { pathLength: 0, opacity: 0 } : false}
        animate={
          drawPath
            ? ringVisible
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
            : undefined
        }
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d="M 147.36 31.52 A 100 100 0 0 1 204.31 196.91"
        stroke={ink}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={drawPath ? { pathLength: 0, opacity: 0 } : false}
        animate={
          drawPath
            ? ringVisible
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
            : undefined
        }
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      />

      {/* interlocked serif monogram */}
      <g style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
        <text
          x="110"
          y="150"
          fontSize="116"
          fontWeight="600"
          fill={ink}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="-4"
        >
          R
        </text>
        <text
          x="156"
          y="150"
          fontSize="116"
          fontWeight="600"
          fill={ink}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="-4"
          opacity="0.92"
        >
          K
        </text>
      </g>

      {showWordmark && (
        <>
          <path
            id={pathId}
            d="M 12.07 134.12 A 118 118 0 0 0 109.51 246.21"
            fill="none"
          />
          <text
            fontSize="12.5"
            fontWeight="500"
            fill={ink}
            letterSpacing="3.4"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            <textPath href={`#${pathId}`} startOffset="2">
              REETS KAHANIA
            </textPath>
          </text>
        </>
      )}
    </svg>
  );
}
