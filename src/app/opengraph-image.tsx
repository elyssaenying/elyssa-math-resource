import { ImageResponse } from "next/og";

export const alt = "Elyssa Moo Math — Secondary Math Resources";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F7F2E8",
          color: "#202020",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.55,
            backgroundImage:
              "linear-gradient(#E4DCC9 2px, transparent 2px), linear-gradient(90deg, #E4DCC9 2px, transparent 2px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: "760px" }}>
            <div
              style={{
                display: "flex",
                color: "#A8432A",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Elyssa Moo Math
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontFamily: "Georgia, serif",
                fontSize: 76,
                lineHeight: 1.02,
              }}
            >
              Math resources.
            </div>
            <div style={{ display: "flex", marginTop: 32, fontSize: 28, color: "#4A4642" }}>
              Secondary E-Math and A-Math notes, practice and revision resources.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 230,
              height: 230,
              borderRadius: 56,
              alignItems: "center",
              justifyContent: "center",
              background: "#202020",
              color: "#F7F2E8",
              fontFamily: "Georgia, serif",
              fontSize: 82,
              boxShadow: "14px 14px 0 #BCD8E8",
            }}
          >
            EM
          </div>
        </div>
      </div>
    ),
    size,
  );
}
