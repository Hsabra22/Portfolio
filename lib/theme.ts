// Central design tokens — change these and the whole site updates.
// Colors are CSS custom properties (see app/portfolio-globals.css) so that
// ThemeToggle can flip dark/light by swapping a single [data-theme]
// attribute on <html> — no component below needs to know which mode it's in.

import type { CSSProperties } from "react";

export const colors = {
  bg: "var(--bg)",
  bgElevated: "var(--bg-elevated)",
  bgElevated2: "var(--bg-elevated-2)",
  ink: "var(--ink)",
  inkMuted: "var(--ink-muted)",
  inkFaint: "var(--ink-faint)",
  gold: "var(--gold)",
  goldSoft: "var(--gold-soft)",
  pine: "var(--pine)",
  hairline: "var(--hairline)",
  hairlineStrong: "var(--hairline-strong)",
};

export const fonts = {
  display: "'Fraunces', Georgia, 'Times New Roman', serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export const layout = {
  maxWidth: 1160,
  sidePadding: "clamp(24px, 6vw, 96px)",
};

// Reusable style fragments -----------------------------------------------

export const sectionWrap: CSSProperties = {
  maxWidth: layout.maxWidth,
  margin: "0 auto",
  padding: `0 ${layout.sidePadding}`,
};

export const sectionSpacing: CSSProperties = {
  paddingTop: "clamp(64px, 10vw, 128px)",
  paddingBottom: "clamp(64px, 10vw, 128px)",
};

export const kicker: CSSProperties = {
  fontFamily: fonts.body,
  fontSize: 13,
  letterSpacing: "0.04em",
  color: colors.gold,
  fontWeight: 600,
  marginBottom: 14,
};

export const heading2: CSSProperties = {
  fontFamily: fonts.display,
  fontWeight: 500,
  fontSize: "clamp(32px, 4vw, 46px)",
  color: colors.ink,
  lineHeight: 1.15,
  letterSpacing: "-0.01em",
  margin: 0,
};

export const bodyText: CSSProperties = {
  fontFamily: fonts.body,
  fontSize: 16,
  lineHeight: 1.75,
  color: colors.inkMuted,
  maxWidth: 640,
};

export const hairlineRule: CSSProperties = {
  border: "none",
  borderTop: `1px solid ${colors.hairline}`,
  margin: 0,
};