import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://reetskahania.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reets Kahania | Event Content Creator — Sacramento & Reno",
    template: "%s | Reets Kahania",
  },
  description:
    "Reets Kahania is an event content creator based in Sacramento & Reno specializing in Reels, BTS, and Candid coverage. Capturing your story, one moment at a time.",
  keywords: [
    "event content creator Sacramento",
    "event content creator Reno",
    "wedding reels videographer Sacramento",
    "behind the scenes event content",
    "candid event photography Sacramento Reno",
  ],
  authors: [{ name: "Reets Kahania" }],
  openGraph: {
    title: "Reets Kahania | Event Content Creator — Sacramento & Reno",
    description:
      "Reels, BTS, and Candid event content. Capturing your story, one moment at a time.",
    url: siteUrl,
    siteName: "Reets Kahania",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reets Kahania | Event Content Creator — Sacramento & Reno",
    description:
      "Reels, BTS, and Candid event content. Capturing your story, one moment at a time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e4d2c6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ivory text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
