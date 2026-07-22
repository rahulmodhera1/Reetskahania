import { ImageResponse } from "next/og";
import { getGoogleFont } from "@/lib/og-fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const frauncesBold = await getGoogleFont("Fraunces", 700, "RK");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E4D2C6",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 96,
            fontWeight: 700,
            color: "#1C1815",
            letterSpacing: -4,
          }}
        >
          RK
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fraunces", data: frauncesBold, weight: 700, style: "normal" }],
    }
  );
}
