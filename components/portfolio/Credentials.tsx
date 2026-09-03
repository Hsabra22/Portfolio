"use client";

import type { ReactNode } from "react";
import { colors, fonts, sectionWrap, sectionSpacing, heading2 } from "@/lib/theme";
import { education, certifications, languages } from "@/lib/portfolio-data";

function Column({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.02em",
          color: colors.gold,
          margin: "0 0 22px",
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

export default function Credentials() {
  return (
    <section id="education" style={{ background: colors.bg }}>
      <div style={{ ...sectionWrap, ...sectionSpacing }}>
        <h2 style={{ ...heading2, marginBottom: "clamp(40px, 6vw, 64px)" }}>Education & Credentials</h2>

        <div
          className="credentials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "clamp(32px, 5vw, 56px)",
          }}
        >
          <Column label="Education">
            <h3
              style={{
                fontFamily: fonts.display,
                fontSize: 21,
                fontWeight: 500,
                color: colors.ink,
                margin: "0 0 6px",
              }}
            >
              {education.degree}
            </h3>
            <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.inkMuted, margin: "0 0 4px" }}>
              {education.school} — {education.location}
            </p>
            <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.inkFaint, margin: 0 }}>
              {education.dates} · {education.note}
            </p>
          </Column>

          <Column label="Certifications">
            {certifications.map((c) => (
              <div key={c.title} style={{ marginBottom: 16 }}>
                <h3
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 18,
                    fontWeight: 500,
                    color: colors.ink,
                    margin: "0 0 4px",
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.inkFaint, margin: 0, lineHeight: 1.6 }}>
                  {c.issuer} — {c.detail}
                </p>
              </div>
            ))}
          </Column>

          <Column label="Languages">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: `1px solid ${colors.hairline}`,
                    paddingBottom: 10,
                  }}
                >
                  <span style={{ fontFamily: fonts.body, fontSize: 15, color: colors.ink }}>{l.name}</span>
                  <span style={{ fontFamily: fonts.body, fontSize: 13, color: colors.inkFaint }}>{l.level}</span>
                </div>
              ))}
            </div>
          </Column>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .credentials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}