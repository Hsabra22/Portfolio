"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Mail,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { colors, fonts } from "@/lib/theme";

const SECTIONS = [
  { id: "hero", label: "Intro", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Capabilities", icon: Sparkles },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Selected Work", icon: FolderKanban },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SectionDashboard() {
  const [active, setActive] = useState("hero");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  }

  return (
    <TooltipProvider>
      {/* Desktop floating rail */}
      <nav
        aria-label="Section navigation"
        className="section-dashboard"
        style={{
          position: "fixed",
          top: "50%",
          left: 24,
          transform: "translateY(-50%)",
          zIndex: 90,
          width: collapsed ? 60 : 208,
          background: "color-mix(in srgb, var(--bg-elevated) 82%, transparent)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid var(--hairline-strong)",
          borderRadius: 20,
          boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
          padding: 12,
          transition: "width 0.3s cubic-bezier(0.22,1,0.36,1)",
          overflow: "hidden",
        }}
      >
        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "4px 6px 12px",
            marginBottom: 8,
            borderBottom: `1px solid ${colors.hairline}`,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              flexShrink: 0,
              background: colors.gold,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 11, color: colors.bg }}>
              HS
            </span>
          </div>
          {!collapsed && (
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: colors.inkFaint,
                whiteSpace: "nowrap",
              }}
            >
              Sections
            </span>
          )}
          <button
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
            style={{
              marginLeft: "auto",
              width: 20,
              height: 20,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: colors.inkFaint,
              appearance: "none",
              WebkitAppearance: "none",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--hairline)";
              e.currentTarget.style.color = colors.ink;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = colors.inkFaint;
            }}
          >
            <ChevronLeft
              size={13}
              strokeWidth={2}
              style={{
                transition: "transform 0.3s ease",
                transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </div>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {SECTIONS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            const row = (
              <button
                key={id}
                onClick={() => goTo(id)}
                aria-label={`Go to ${label}`}
                aria-current={isActive}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  justifyContent: collapsed ? "center" : "flex-start",
                  width: "100%",
                  padding: collapsed ? "9px 0" : "9px 10px",
                  borderRadius: 10,
                  border: "none",
                  background: isActive ? "rgba(201,167,104,0.12)" : "transparent",
                  color: isActive ? colors.gold : colors.inkMuted,
                  fontFamily: fonts.body,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  appearance: "none",
                  WebkitAppearance: "none",
                  transition: "background 0.2s ease, color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                className="dashboard-row"
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "var(--hairline)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                {isActive && (
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 6,
                      bottom: 6,
                      width: 2,
                      borderRadius: 999,
                      background: colors.gold,
                    }}
                  />
                )}
                <Icon size={15} strokeWidth={1.75} style={{ flexShrink: 0 }} />
                {!collapsed && <span>{label}</span>}
              </button>
            );

            return collapsed ? (
              <Tooltip key={id}>
                <TooltipTrigger>{row}</TooltipTrigger>
                <TooltipContent
                  side="right"
                  style={{
                    background: "var(--bg-elevated)",
                    color: "var(--ink)",
                    border: "1px solid var(--hairline-strong)",
                    fontFamily: fonts.body,
                    fontSize: 13,
                  }}
                >
                  {label}
                </TooltipContent>
              </Tooltip>
            ) : (
              row
            );
          })}
        </div>
      </nav>

      {/* Mobile: hamburger trigger (top-left) + dropdown menu */}
      <div className="dashboard-mobile">
        {mobileOpen && (
          <>
            <div
              onClick={() => setMobileOpen(false)}
              aria-hidden
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                zIndex: 95,
              }}
            />
            <div
              role="menu"
              style={{
                position: "fixed",
                top: 76,
                left: 20,
                zIndex: 97,
                width: 210,
                background: "var(--bg-elevated)",
                border: "1px solid var(--hairline-strong)",
                borderRadius: 16,
                boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                padding: 8,
              }}
            >
              {SECTIONS.map(({ id, label, icon: Icon }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    aria-label={`Go to ${label}`}
                    aria-current={isActive}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      padding: "10px 10px",
                      borderRadius: 10,
                      border: "none",
                      background: isActive ? "rgba(201,167,104,0.12)" : "transparent",
                      color: isActive ? colors.gold : colors.inkMuted,
                      fontFamily: fonts.body,
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 400,
                      cursor: "pointer",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                  >
                    {isActive && (
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 6,
                          bottom: 6,
                          width: 2,
                          borderRadius: 999,
                          background: colors.gold,
                        }}
                      />
                    )}
                    <Icon size={16} strokeWidth={1.75} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close section menu" : "Open section menu"}
          aria-expanded={mobileOpen}
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 97,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "1px solid var(--hairline-strong)",
            background: "var(--bg-elevated)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 28px rgba(0,0,0,0.32)",
            cursor: "pointer",
            appearance: "none",
            WebkitAppearance: "none",
            color: colors.gold,
            transition: "transform 0.2s ease",
          }}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .section-dashboard { display: none; }
        }
        .dashboard-mobile { display: none; }
        @media (max-width: 900px) {
          .dashboard-mobile { display: block; }
        }
      `}</style>
    </TooltipProvider>
  );
}