const FONT_CACHE = new Map<string, ArrayBuffer>();

/**
 * Fetches a Google Font file at build time for use inside next/og
 * ImageResponse (icon/OG generation), which cannot use next/font.
 */
export async function getGoogleFont(
  family: string,
  weight: number,
  text?: string
): Promise<ArrayBuffer> {
  const cacheKey = `${family}-${weight}-${text ?? ""}`;
  const cached = FONT_CACHE.get(cacheKey);
  if (cached) return cached;

  const params = new URLSearchParams({
    family: `${family}:wght@${weight}`,
  });
  if (text) params.set("text", text);

  const cssResponse = await fetch(
    `https://fonts.googleapis.com/css2?${params.toString()}`,
    { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" } }
  );
  const css = await cssResponse.text();
  const fontUrlMatch = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!fontUrlMatch) {
    throw new Error(`Could not resolve font URL for ${family} ${weight}`);
  }

  const fontResponse = await fetch(fontUrlMatch[1]);
  const buffer = await fontResponse.arrayBuffer();
  FONT_CACHE.set(cacheKey, buffer);
  return buffer;
}
