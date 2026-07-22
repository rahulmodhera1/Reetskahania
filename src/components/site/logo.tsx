import Image from "next/image";

type LogoProps = {
  crop?: "full" | "icon";
  size: number;
  className?: string;
  priority?: boolean;
};

const sources = { full: "/logo-mark.png", icon: "/logo-icon.png" };

/**
 * The Reets Kahania mark: broken ring, interlocked R/K serif monogram, and
 * the tracked-out wordmark curving along the lower-left arc. Extracted from
 * the client's real logo file (public/logo.jpg) as a transparent ink-on-
 * transparent PNG. `crop="icon"` is a tight square crop for small badge use
 * (nav, footer); `crop="full"` keeps the original generous padding for
 * large decorative placements (hero, section watermarks).
 *
 * The whole site is a light/neutral palette with no dark sections, so only
 * the ink colorway is needed. If a dark section returns later (e.g. a real
 * video hero), regenerate an ivory PNG the same way this one was made: see
 * the chroma-key extraction note in design-system/reets-kahania/MASTER.md.
 */
export function Logo({ crop = "icon", size, className, priority }: LogoProps) {
  return (
    <Image
      src={sources[crop]}
      alt="Reets Kahania"
      width={size}
      height={size}
      sizes={`${size}px`}
      priority={priority}
      className={className}
    />
  );
}
