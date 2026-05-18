"use client";

import { useTheme } from "./theme-context";

export function ThemeToggle({ variant }: { variant: "light" | "dark" }) {
  const { theme, setTheme, hydrated } = useTheme();

  const base = "inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors";
  const wrap =
    variant === "light"
      ? "border border-anthracite/15 bg-paper/80 backdrop-blur"
      : "border border-bone/20 bg-ink/40 backdrop-blur";

  const pill = (active: boolean) =>
    [
      "px-3 py-1.5",
      active
        ? variant === "light"
          ? "bg-hyundai text-paper"
          : "bg-bone text-ink"
        : variant === "light"
          ? "text-anthracite/70 hover:text-anthracite"
          : "text-bone/70 hover:text-bone",
    ].join(" ");

  return (
    <div
      role="group"
      aria-label="Designvariante umschalten"
      className={`${base} ${wrap}`}
    >
      <button
        type="button"
        onClick={() => setTheme("fischer")}
        aria-pressed={hydrated && theme === "fischer"}
        className={pill(hydrated && theme === "fischer")}
      >
        Neu
      </button>
      <button
        type="button"
        onClick={() => setTheme("meyer")}
        aria-pressed={hydrated && theme === "meyer"}
        className={pill(hydrated && theme === "meyer")}
      >
        Alt
      </button>
    </div>
  );
}
