"use client";

import { colors, fonts, sectionWrap, sectionSpacing, heading2 } from "@/lib/theme";
import { experience } from "@/lib/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" style={{ background: colors.bg }}>
      <div style={{ ...sectionWrap, ...sectionSpacing }}>
        <h2 style={{ ...heading2, marginBottom: "clamp(40px, 6vw, 64px)" }}>Experience</h2>

        <div>
          {experience.map((role) => (
            <div
              key={role.role}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "clamp(24px, 4vw, 56px)",
              }}
              className="exp-row"
            >
              <p
                style={{
                  fontFamily: fonts.body,
                  fontSize: 14,
                  color: colors.gold,
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {role.dates}
              </p>

              <div style={{ paddingBottom: 8 }}>
                <h3
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    fontWeight: 500,
                    color: colors.ink,
                    margin: "0 0 6px",
                  }}
                >
                  {role.role}
                </h3>
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 15,
                    color: colors.inkFaint,
                    margin: "0 0 22px",
                  }}
                >
                  {role.org}
                </p>

                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        gap: 12,
                        marginBottom: 12,
                        fontFamily: fonts.body,
                        fontSize: 15.5,
                        lineHeight: 1.65,
                        color: colors.inkMuted,
                      }}
                    >
                      <span style={{ color: colors.gold, flexShrink: 0 }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}