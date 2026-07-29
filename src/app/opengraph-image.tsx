import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Priya Kumari — Full-stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0A",
        }}
      >
        <div style={{ color: "#F59E0B", fontSize: 28, fontFamily: "monospace" }}>
          full-stack engineer
        </div>
        <div style={{ color: "#FAFAFA", fontSize: 96, fontWeight: 700, marginTop: 20 }}>
          Priya Kumari
        </div>
        <div style={{ color: "#A1A1AA", fontSize: 32, marginTop: 24, maxWidth: 900 }}>
          Payment infrastructure, rate limiters, and systems that fail
          loudly instead of silently.
        </div>
      </div>
    ),
    { ...size }
  );
}