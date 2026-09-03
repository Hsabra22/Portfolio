"use client";

import { ArrowUpRight } from "lucide-react";
import { colors, fonts, sectionWrap, sectionSpacing } from "@/lib/theme";
import { profile } from "@/lib/portfolio-data";

export default function Contact() {
  return (
    <section id="contact" style={{ background: colors.bgElevated }}>
      <div style={{ ...sectionWrap, ...sectionSpacing, textAlign: "center" }}>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: colors.gold,
            margin: "0 0 20px",
          }}
        >
          Currently open to new opportunities
        </p>

        <h2
          style={{
            fontFamily: fonts.display,
            fontWeight: 500,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.15,
            color: colors.ink,
            maxWidth: 760,
            margin: "0 auto 40px",
          }}
        >
          Let us build something worth shipping.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "18px 36px",
            background: colors.gold,
            color: colors.bg,
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            borderRadius: 2,
          }}
        >
          {profile.email} <ArrowUpRight size={18} />
        </a>

        <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.inkFaint, marginTop: 24 }}>
          {profile.phone} · {profile.location}
        </p>
      </div>
    </section>
  );
}