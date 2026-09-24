"use client";

import { useEffect } from "react";

/**
 * ThemeWatcher handles real-time OS/browser theme changes dynamically
 * without requiring any page reload.
 */
export default function ThemeWatcher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e: MediaQueryList | MediaQueryListEvent) => {
      const isDark = e.matches;
      const root = document.documentElement;

      if (isDark) {
        root.classList.add("dark");
        root.setAttribute("data-theme", "dark");
        root.style.colorScheme = "dark";
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-theme", "light");
        root.style.colorScheme = "light";
      }
    };

    // Synchronize current state
    updateTheme(mediaQuery);

    // Modern browsers support addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    } else {
      // Legacy browsers support addListener
      const legacyQuery = mediaQuery as unknown as {
        addListener: (cb: (e: MediaQueryListEvent) => void) => void;
        removeListener: (cb: (e: MediaQueryListEvent) => void) => void;
      };
      legacyQuery.addListener(updateTheme);
      return () => legacyQuery.removeListener(updateTheme);
    }
  }, []);

  return null;
}
