"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type SiteTheme = "fischer" | "meyer";

const STORAGE_KEY = "fa-home-theme";
const DEFAULT_THEME: SiteTheme = "fischer";

type ThemeContextValue = {
  theme: SiteTheme;
  setTheme: (next: SiteTheme) => void;
  toggle: () => void;
  hydrated: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>(DEFAULT_THEME);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as SiteTheme | undefined;
    if (stored === "meyer" || stored === "fischer") {
      setThemeState(stored);
    }
    setHydrated(true);
  }, []);

  const setTheme = useCallback((next: SiteTheme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "fischer" ? "meyer" : "fischer");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle, hydrated }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

export const THEME_STORAGE_KEY = STORAGE_KEY;
export const THEME_DEFAULT = DEFAULT_THEME;
