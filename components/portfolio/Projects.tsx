"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { colors, fonts, sectionWrap, sectionSpacing, heading2 } from "@/lib/theme";
import { projects } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" style={{ background: colors.bgElevated }}>
      <div style={{ ...sectionWrap, ...sectionSpacing }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <h2 style={heading2}>Selected Work</h2>
          <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.inkMuted, margin: 0 }}>
            {projects.length} projects, spanning e-government, AI tooling and commerce.
          </p>
        </div>

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: colors.hairline }}
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.demo || undefined}
              target={project.demo ? "_blank" : undefined}
              rel={project.demo ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              whileHover={{ y: -4 }}
              style={{
                display: "block",
                background: colors.bgElevated,
                padding: "36px 34px",
                textDecoration: "none",
                cursor: project.demo ? "pointer" : "default",
                position: "relative",
                minHeight: 260,
              }}
              className="project-card"
            >
              {project.featured && (
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: fonts.body,
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    color: colors.gold,
                    border: `1px solid ${colors.hairlineStrong}`,
                    padding: "5px 10px",
                    marginBottom: 18,
                  }}
                >
                  AI-powered
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 14,
                }}
              >
                <h3
                  style={{
                    fontFamily: fonts.display,
                    fontSize: 24,
                    fontWeight: 500,
                    color: colors.ink,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                {project.demo && (
                  <ArrowUpRight
                    size={20}
                    color={colors.gold}
                    style={{ flexShrink: 0, marginLeft: 12 }}
                    className="project-arrow"
                  />
                )}
              </div>

              <p
                style={{
                  fontFamily: fonts.body,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: colors.inkMuted,
                  margin: "0 0 24px",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: fonts.body,
                      fontSize: 13,
                      color: colors.inkFaint,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        .project-card { transition: background 0.25s ease; }
        .project-card:hover { background: ${colors.bgElevated2}; }
        .project-arrow { transition: transform 0.25s ease; }
        .project-card:hover .project-arrow { transform: translate(3px, -3px); }
        @media (max-width: 760px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}