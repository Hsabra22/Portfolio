"use client";

import { colors, fonts, sectionWrap, sectionSpacing, heading2, hairlineRule } from "@/lib/theme";
import { about } from "@/lib/portfolio-data";

export default function About() {
  return (
    <section id="about" style={{ background: colors.bg }}>
      <div style={{ ...sectionWrap, ...sectionSpacing }}>
        <hr style={hairlineRule} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "clamp(32px, 5vw, 72px)",
            paddingTop: "clamp(28px, 3.5vw, 40px)",
          }}
          className="about-grid"
        >
          <h2 style={heading2}>
            About
          </h2>

          <div>
            <p
              style={{
                fontFamily: fonts.body,
                fontSize: "clamp(16px, 1.5vw, 18px)",
                lineHeight: 1.8,
                color: colors.inkMuted,
                margin: "0 0 40px",
                maxWidth: 640,
              }}
            >
              {about.paragraph}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px 32px",
              }}
            >
              {about.highlights.map((h) => (
                <div key={h.title} style={{ borderLeft: `2px solid ${colors.gold}`, paddingLeft: 18 }}>
                  <p
                    style={{
                      fontFamily: fonts.display,
                      fontSize: 19,
                      color: colors.ink,
                      margin: "0 0 6px",
                      fontWeight: 500,
                    }}
                  >
                    {h.title}
                  </p>
                  <p
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: colors.inkFaint,
                      margin: 0,
                    }}
                  >
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}