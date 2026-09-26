"use client";

import { useEffect } from "react";

/**
 * ThemeWatcher automatically handles real-time OS/browser theme changes
 * based on the user's system preferences (prefers-color-scheme: dark).
 */
export default function ThemeWatcher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Clear any manual overrides so browser system preference takes 100% control
    try {
      localStorage.removeItem("adforge-theme");
    } catch {
      // ignore
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = (isDark: boolean) => {
      const ico = isDark ? "/favicon-dark.ico?v=5" : "/favicon-light.ico?v=5";
      const png32 = isDark ? "/favicon-dark-32x32.png?v=5" : "/favicon-light-32x32.png?v=5";
      const png16 = isDark ? "/favicon-dark-16x16.png?v=5" : "/favicon-light-16x16.png?v=5";

      const iconLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
      iconLinks.forEach((link) => {
        const sizes = link.getAttribute("sizes");
        const rel = link.getAttribute("rel") || "";
        if (rel.includes("shortcut")) {
          link.href = ico;
        } else if (sizes === "16x16") {
          link.href = png16;
        } else if (sizes === "32x32" || !sizes) {
          link.href = png32;
        }
      });
    };

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

      updateFavicon(isDark);
    };

    // Synchronize current OS / browser preference
    updateTheme(mediaQuery);

    // Clean up any stale service workers or caches causing HMR chunk mismatch
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
    if ("caches" in window) {
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
      });
    }

    // Automatically update when user switches system theme (e.g., Windows / Mac / Browser dark/light mode toggle)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, []);

  return null;
}
