"use client";

import { motion } from "framer-motion";
import { colors, fonts, sectionWrap, sectionSpacing, heading2 } from "@/lib/theme";
import { skillGroups } from "@/lib/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" style={{ background: colors.bgElevated }}>
      <div style={{ ...sectionWrap, ...sectionSpacing }}>
        <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <h2 style={heading2}>Capabilities</h2>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 16,
              color: colors.inkMuted,
              marginTop: 14,
              maxWidth: 560,
            }}
          >
            Everything I reach for when taking a product from a blank repo to production —
            grouped by where it lives in the stack.
          </p>
        </div>

        <div>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                gap: 24,
                padding: "26px 0",
                borderTop: `1px solid ${colors.hairline}`,
                borderBottom:
                  i === skillGroups.length - 1 ? `1px solid ${colors.hairline}` : "none",
                alignItems: "baseline",
              }}
              className="skill-row"
            >
              <h3
                style={{
                  fontFamily: fonts.display,
                  fontSize: 22,
                  fontWeight: 500,
                  color: colors.ink,
                  margin: 0,
                }}
              >
                {group.category}
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 15,
                      color: colors.inkMuted,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-row:hover h3 { color: ${colors.gold}; transition: color 0.25s ease; }
        @media (max-width: 640px) {
          .skill-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}