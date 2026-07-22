import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getGoogleFont } from "@/lib/og-fonts";

export const alt = "Reets Kahania, capturing your story one moment at a time.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [frauncesMedium, interMedium, logoBuffer] = await Promise.all([
    getGoogleFont("Fraunces", 600, "Reets Kahania"),
    getGoogleFont(
      "Inter",
      500,
      "CAPTURING YOUR STORY ONE MOMENT AT A TIMESACRAMENTO RENO REELS BTS CANDID"
    ),
    readFile(join(process.cwd(), "public/logo.jpg")),
  ]);
  const logoDataUri = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF5EF",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 380,
            height: 380,
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: 64,
          }}
        >
          <img src={logoDataUri} width={380} height={380} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 76,
              fontWeight: 600,
              color: "#1C1815",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Reets Kahania
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 28,
              fontWeight: 500,
              color: "#8C7663",
              marginTop: 20,
            }}
          >
            Capturing your story, one moment at a time.
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 19,
              fontWeight: 500,
              letterSpacing: 3,
              color: "#1C1815",
              marginTop: 32,
              textTransform: "uppercase",
            }}
          >
            Sacramento and Reno, Reels, BTS, Candid
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesMedium, weight: 600, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
