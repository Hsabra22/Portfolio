/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";

type ThemeChoice = "light" | "dark" | "system";

const OPTIONS: { value: ThemeChoice; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

// Applies the given choice to <html class="dark"> the same way
// ThemeInitializer does on first load.
function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  if (choice === "dark") {
    root.classList.add("dark");
  } else if (choice === "light") {
    root.classList.remove("dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  }
}

export default function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>("system");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Read the stored preference on mount — avoids a server/client mismatch
  // since localStorage isn't available during SSR.
  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeChoice | null;
    setChoice(stored ?? "system");
    setMounted(true);
  }, []);

  // Keep the toggle in sync with the OS if the user has "system" selected
  // and their OS theme changes while this component is mounted.
  useEffect(() => {
    if (choice !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [choice]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (value: ThemeChoice) => {
    setChoice(value);
    localStorage.setItem("theme", value);
    applyTheme(value);
    setOpen(false);
  };

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full" aria-hidden="true" />;
  }

  const current = OPTIONS.find((o) => o.value === choice) ?? OPTIONS[2];
  const CurrentIcon = current.icon;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 p-2.5 rounded-full border-0 bg-transparent cursor-pointer hover:bg-accent transition-colors"
        aria-label="Change theme"
        aria-expanded={open}
      >
        <CurrentIcon className="w-4 h-4 text-foreground" />
        <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 rounded-2xl border border-border bg-card shadow-lg overflow-hidden py-1.5">
          {OPTIONS.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              className={`w-full flex items-center gap-2.5 px-4 py-2 text-sm border-0 bg-transparent cursor-pointer transition-colors ${
                choice === value
                  ? "text-primary font-medium bg-primary/5"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
