"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Bi, Locale } from "@/content/types";
import { dictionary, type Dictionary } from "./dictionary";

type Theme = "dark" | "light";

interface AppSettings {
  locale: Locale;
  dir: "rtl" | "ltr";
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  /** Resolve a bilingual pair in the active locale. */
  tr: (pair: Bi) => string;
  d: Dictionary;
  /** False during server render and hydration, true afterwards. */
  ready: boolean;
}

const LOCALE_KEY = "bi-atlas.locale";
const THEME_KEY = "bi-atlas.theme";
const EVENT = "bi-atlas:settings";

const SettingsContext = createContext<AppSettings | null>(null);

/**
 * Reads stored preferences and applies them to <html> before paint.
 * Kept as a string so it can run as a blocking inline script in <head>;
 * without it the page would flash the default light/English pair.
 */
export const settingsBootstrapScript = `
(function () {
  try {
    var l = localStorage.getItem('${LOCALE_KEY}');
    var t = localStorage.getItem('${THEME_KEY}');
    var el = document.documentElement;
    if (l === 'en' || l === 'ar') {
      el.lang = l;
      el.dir = l === 'ar' ? 'rtl' : 'ltr';
    }
    if (t === 'light' || t === 'dark') {
      el.setAttribute('data-theme', t);
    }
  } catch (e) {}
})();
`.trim();

/* ------------------------------------------------------------------ */
/* <html> as the source of truth                                       */
/*                                                                     */
/* The bootstrap script above has already written the stored values to */
/* the document element before React runs, so the DOM — not storage —  */
/* is the external store this subscribes to. That keeps what React     */
/* believes in step with what is actually painted.                     */
/* ------------------------------------------------------------------ */

function subscribe(onChange: () => void): () => void {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

function getLocaleSnapshot(): Locale {
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

function getThemeSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

// Must match what the server rendered in `layout.tsx`.
const serverLocale = (): Locale => "en";
const serverTheme = (): Theme => "light";
const subscribeNever = () => () => {};

export function SettingsProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocaleSnapshot, serverLocale);
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, serverTheme);
  const ready = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );

  const setLocale = useCallback((next: Locale) => {
    const el = document.documentElement;
    el.lang = next;
    el.dir = next === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(LOCALE_KEY, next);
    } catch {
      // Private browsing or blocked storage: the choice simply will not persist.
    }
    window.dispatchEvent(new CustomEvent(EVENT));
  }, []);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Same as above — non-fatal.
    }
    window.dispatchEvent(new CustomEvent(EVENT));
  }, []);

  const value = useMemo<AppSettings>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      theme,
      setLocale,
      toggleLocale: () => setLocale(locale === "ar" ? "en" : "ar"),
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      tr: (pair: Bi) => pair[locale],
      d: dictionary,
      ready,
    }),
    [locale, theme, setLocale, setTheme, ready],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): AppSettings {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used inside <SettingsProvider>");
  }
  return ctx;
}

/** Shorthand for components that only need to translate content pairs. */
export function useTr() {
  return useSettings().tr;
}
