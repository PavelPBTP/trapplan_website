import { ImageResponse } from "next/og";

export const runtime = "nodejs";

function clampText(s: string, maxLen: number) {
  const t = (s ?? "").trim();
  if (!t) return "";
  if (t.length <= maxLen) return t;
  return t.slice(0, maxLen - 1).trimEnd() + "…";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const { origin } = url;

  const title = clampText(url.searchParams.get("title") ?? "TrapPlan", 84) || "TrapPlan";
  const subtitle =
    clampText(
      url.searchParams.get("subtitle") ??
        "Performance-driven marketing systems for game studios.",
      110,
    ) || "Performance-driven marketing systems for game studios.";
  const tag = clampText(url.searchParams.get("tag") ?? "", 28);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#0B0B0D",
          backgroundImage:
            "radial-gradient(circle at 16% 20%, rgba(255,10,91,0.35), transparent 55%), radial-gradient(circle at 72% 18%, rgba(255,255,255,0.08), transparent 50%), radial-gradient(circle at 50% 90%, rgba(255,10,91,0.18), transparent 55%)",
          color: "#FFFFFF",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img
            src={`${origin}/images/logo.png`}
            width={64}
            height={64}
            style={{ borderRadius: 14 }}
            alt="TrapPlan"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 46,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              TrapPlan
            </div>
            <div style={{ fontSize: 22, opacity: 0.82, marginTop: 6 }}>Marketing for Games</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 26, opacity: 0.85, maxWidth: 980 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div
            style={{
              fontSize: 18,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            trapplan.com
          </div>
          {tag ? (
            <div
              style={{
                fontSize: 18,
                padding: "10px 16px",
                borderRadius: 999,
                background: "rgba(255,10,91,0.18)",
                border: "1px solid rgba(255,10,91,0.28)",
              }}
            >
              {tag}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
