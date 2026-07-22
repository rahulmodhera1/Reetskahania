import { ImageResponse } from "next/og";
import { getGoogleFont } from "@/lib/og-fonts";

export const alt = "Reets Kahania — Capturing your story, one moment at a time.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [frauncesBold, interMedium] = await Promise.all([
    getGoogleFont("Fraunces", 600, "ReetsKahaniaRK"),
    getGoogleFont(
      "Inter",
      500,
      "CAPTURING YOUR STORY ONE MOMENT AT A TIMESACRAMENTO RENO REELS BTS CANDID"
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF5EF",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 640,
            height: 640,
            borderRadius: "50%",
            border: "1.5px solid #1C1815",
            top: -180,
            right: -160,
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1.5px solid #8C7663",
            bottom: -140,
            left: -120,
            opacity: 0.45,
          }}
        />

        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 40,
            fontWeight: 600,
            color: "#1C1815",
            marginBottom: 18,
          }}
        >
          RK
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 86,
            fontWeight: 600,
            color: "#1C1815",
            letterSpacing: -2,
          }}
        >
          Reets Kahania
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 30,
            fontWeight: 500,
            color: "#8C7663",
            marginTop: 22,
          }}
        >
          Capturing your story, one moment at a time.
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 4,
            color: "#1C1815",
            marginTop: 36,
            textTransform: "uppercase",
          }}
        >
          Sacramento &amp; Reno · Reels · BTS · Candid
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesBold, weight: 600, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
