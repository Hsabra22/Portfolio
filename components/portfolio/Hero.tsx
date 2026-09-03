"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { colors, fonts, layout } from "@/lib/theme";
import { profile } from "@/lib/portfolio-data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        background: colors.bg,
        overflow: "hidden",
        paddingTop: "clamp(88px, 10vw, 132px)",
        paddingBottom: "clamp(80px, 10vw, 120px)",
      }}
    >
      {/* quiet vignette, no floating gradient blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 900px 500px at 80% 0%, rgba(201,167,104,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: `0 ${layout.sidePadding}`,
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            style={{
              fontFamily: fonts.body,
              fontSize: 15,
              letterSpacing: "0.02em",
              color: colors.gold,
              margin: "0 0 20px",
              fontWeight: 600,
            }}
          >
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            style={{
              fontFamily: fonts.display,
              fontWeight: 500,
              fontSize: "clamp(48px, 7vw, 86px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: colors.ink,
              margin: "0 0 28px",
            }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              fontFamily: fonts.body,
              fontSize: "clamp(16px, 1.6vw, 19px)",
              lineHeight: 1.7,
              color: colors.inkMuted,
              maxWidth: 520,
              margin: "0 0 44px",
            }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 28px",
                background: colors.gold,
                color: colors.bg,
                fontFamily: fonts.body,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                borderRadius: 2,
              }}
            >
              View Projects <ArrowUpRight size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 28px",
                border: `1px solid ${colors.hairlineStrong}`,
                color: colors.ink,
                fontFamily: fonts.body,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                borderRadius: 2,
              }}
            >
              Get in Touch
            </a>

            <div style={{ display: "flex", gap: 14, marginLeft: 8 }}>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: colors.inkMuted }}>
                <Github size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: colors.inkMuted }}>
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              background: colors.bgElevated,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: fonts.display,
                fontWeight: 500,
                fontSize: "clamp(72px, 11vw, 148px)",
                letterSpacing: "0.03em",
                color: colors.gold,
              }}
            >
              HS
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}