export const siteConfig = {
  name: "Reets Kahania",
  slogan: "Capturing your story, one moment at a time.",
  email: "hello@reetskahania.com",
  serviceAreas: ["Sacramento", "Reno"],
};

export const eventTypes = ["Wedding", "Sangeet", "Corporate", "Portrait", "Other"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Service Area", href: "#service-area" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: "reels",
    name: "Reels",
    tagline: "Short-form, built to travel",
    description:
      "Vertical highlight edits cut for Instagram and TikTok — the fast-moving, music-led recap that gets your event seen beyond the room it happened in.",
  },
  {
    id: "bts",
    name: "BTS",
    tagline: "The story behind the story",
    description:
      "Documentary-style behind-the-scenes coverage: prep, pacing, the quiet moments before doors open. For clients who want the full arc, not just the highlight.",
  },
  {
    id: "candid",
    name: "Candid",
    tagline: "Unposed, in the moment",
    description:
      "Photography and videography that doesn't ask anyone to pose. Real reactions, real timing — the coverage that reads true a year later.",
  },
] as const;

export type PortfolioCategory = "Reels" | "BTS" | "Candid";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  type: "video" | "photo";
  src: string;
  poster?: string;
};

// [PLACEHOLDER MEDIA] — swap src paths with real client footage/photography
// before launch. Filenames describe the intended shot for the client's reference.
export const portfolioItems: PortfolioItem[] = [
  { id: "p1", category: "Reels", title: "Sangeet highlight reel", type: "video", src: "/media/placeholder-reel-1.mp4" },
  { id: "p2", category: "Candid", title: "First look, unposed", type: "photo", src: "/media/placeholder-candid-1.jpg" },
  { id: "p3", category: "BTS", title: "Getting-ready prep", type: "photo", src: "/media/placeholder-bts-1.jpg" },
  { id: "p4", category: "Reels", title: "Reception recap reel", type: "video", src: "/media/placeholder-reel-2.mp4" },
  { id: "p5", category: "Candid", title: "Guest reactions", type: "photo", src: "/media/placeholder-candid-2.jpg" },
  { id: "p6", category: "BTS", title: "Vendor walkthrough", type: "photo", src: "/media/placeholder-bts-2.jpg" },
  { id: "p7", category: "Reels", title: "Baraat teaser", type: "video", src: "/media/placeholder-reel-3.mp4" },
  { id: "p8", category: "Candid", title: "Golden hour, in between shots", type: "photo", src: "/media/placeholder-candid-3.jpg" },
  { id: "p9", category: "BTS", title: "Crew setting up the frame", type: "photo", src: "/media/placeholder-bts-3.jpg" },
];

// [PLACEHOLDER COPY — REPLACE WITH REAL CLIENT TESTIMONIALS]
export const testimonials = [
  {
    quote:
      "She caught moments we didn't even know were happening. The reel had the whole family sending it to relatives within an hour.",
    name: "Placeholder Client",
    role: "Sangeet, Sacramento",
  },
  {
    quote:
      "Zero direction needed. She just moved through the day and somehow ended up with the shots we didn't know we wanted.",
    name: "Placeholder Client",
    role: "Wedding weekend, Reno",
  },
  {
    quote:
      "The BTS footage alone was worth it — seeing the setup and the nerves before doors opened made the final video hit different.",
    name: "Placeholder Client",
    role: "Corporate launch, Sacramento",
  },
] as const;

export const socialLinks = [
  {
    id: "instagram-business",
    label: "Instagram",
    sublabel: "@reetskahania",
    href: "https://instagram.com/reetskahania",
  },
  {
    id: "instagram-personal",
    label: "Instagram (personal)",
    sublabel: "@Navreetkp02",
    href: "https://instagram.com/Navreetkp02",
  },
  {
    id: "second-platform",
    // Platform unspecified by client — swap `href`/icon once confirmed.
    label: "@Reetskahanita",
    sublabel: "Platform TBD",
    href: "#",
  },
] as const;
