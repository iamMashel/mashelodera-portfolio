import { ImageResponse } from "next/og";

// Site-wide social preview card (inherited by all routes without their own).
// Branded clay drench; no custom font load (kept robust), carried by size +
// color contrast. 1200x630 is the standard OG/Twitter large-card size.
// Satori requires display:flex on any div with multiple children, so the
// headline is built as three flex lines.
export const alt =
  "Mashel Odera — AI specialist who trains AI, builds with it, and teaches it";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CLAY = "#ec8a3d";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#2a1b0f",
          backgroundImage:
            "radial-gradient(1100px 560px at 82% -12%, rgba(196,92,33,0.6), transparent 60%)",
          color: "#f6f1e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 26 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: CLAY,
              marginRight: 14,
            }}
          />
          <span style={{ letterSpacing: 2, color: "#c9bba4" }}>MASHEL ODERA</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -3,
          }}
        >
          <div style={{ display: "flex" }}>
            <span>I{" "}</span>
            <span style={{ color: CLAY }}>train</span>
            <span>{" "}AI,</span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: CLAY }}>build</span>
            <span>{" "}with it,</span>
          </div>
          <div style={{ display: "flex" }}>
            <span>and{" "}</span>
            <span style={{ color: CLAY }}>teach</span>
            <span>{" "}it.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 30, color: "#c9bba4" }}>
          <span>AI specialist in Nairobi · trains, builds &amp; teaches AI</span>
          <span style={{ color: "#9c8e78", fontSize: 24, marginTop: 6 }}>
            mashelodera.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
