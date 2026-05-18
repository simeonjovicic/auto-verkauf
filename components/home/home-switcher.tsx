"use client";

import { useTheme } from "@/components/theme/theme-context";
import { FischerHome } from "@/components/home/fischer/fischer-home";
import { MeyerHome } from "@/components/home/meyer-home";

export function HomeSwitcher() {
  const { theme, hydrated } = useTheme();

  /* Until hydration we render the default (Fischer) — matches the inline
     theme script which sets data-theme="fischer" before paint. */
  if (!hydrated) return <FischerHome />;
  return theme === "meyer" ? <MeyerHome /> : <FischerHome />;
}
