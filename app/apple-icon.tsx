import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #123449 0%, #1B4E68 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 110,
            color: "#78C6E8",
          }}
        >
          S
        </div>
      </div>
    ),
    size,
  );
}
