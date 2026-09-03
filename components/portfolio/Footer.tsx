"use client";

import { colors, fonts, sectionWrap } from "@/lib/theme";
import { profile } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer style={{ background: colors.bg, borderTop: `1px solid ${colors.hairline}` }}>
      <div
        style={{
          ...sectionWrap,
          paddingTop: 32,
          paddingBottom: 32,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.inkFaint, margin: 0 }}>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ fontFamily: fonts.body, fontSize: 13, color: colors.inkFaint, textDecoration: "none" }}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: fonts.body, fontSize: 13, color: colors.inkFaint, textDecoration: "none" }}>
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} style={{ fontFamily: fonts.body, fontSize: 13, color: colors.inkFaint, textDecoration: "none" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}