import { ImageResponse } from "next/og";
import { site } from "@/shared/config";

/** Social share card (Telegram, Facebook, LinkedIn, etc.). */
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #f8fafc 0%, #e8f0fe 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#6495ed",
              borderRadius: 22,
              boxShadow: "0 20px 50px rgba(79, 134, 247, 0.30)",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 11.5 12 5l8 6.5" />
              <path d="M6 10.5V19h12v-8.5" />
              <circle cx="12" cy="14" r="1.8" fill="#ffffff" stroke="none" />
            </svg>
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, color: "#0d1b2a" }}>
            {site.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0d1b2a",
              maxWidth: 980,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "#475569",
              maxWidth: 940,
            }}
          >
            {site.description}
          </div>
        </div>

        {/* Footer */}
        <div style={{ fontSize: 28, fontWeight: 600, color: "#6495ed" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
