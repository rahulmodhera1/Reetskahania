import Image from "next/image";

type LogoProps = {
  variant?: "ink" | "ivory";
  crop?: "full" | "icon";
  size: number;
  className?: string;
  priority?: boolean;
};

const sources = {
  ink: { full: "/logo-mark.png", icon: "/logo-icon.png" },
  ivory: { full: "/logo-mark-ivory.png", icon: "/logo-icon-ivory.png" },
} as const;

/**
 * The Reets Kahania mark: broken ring, interlocked R/K serif monogram, and
 * the tracked-out wordmark curving along the lower-left arc. Extracted from
 * the client's real logo file (public/logo.jpg) as a transparent PNG in two
 * colorways so it can sit on either the light (ink) or dark (ivory) sections
 * of the page. `crop="icon"` is a tight square crop for small badge use
 * (nav, footer); `crop="full"` keeps the original generous padding for
 * large decorative placements (hero).
 */
export function Logo({ variant = "ink", crop = "icon", size, className, priority }: LogoProps) {
  return (
    <Image
      src={sources[variant][crop]}
      alt="Reets Kahania"
      width={size}
      height={size}
      sizes={`${size}px`}
      priority={priority}
      className={className}
    />
  );
}
