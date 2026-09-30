import type { Difficulty } from "@/content/types";

/** Minimal class joiner — no dependency needed for this amount of work. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export const difficultyOrder: Record<Difficulty, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

/** Token classes per difficulty, used consistently across every surface. */
export const difficultyStyles: Record<Difficulty, string> = {
  beginner: "text-secondary border-secondary/35 bg-secondary/10",
  intermediate: "text-highlight border-highlight/35 bg-highlight/10",
  advanced: "text-primary-soft border-primary/40 bg-primary/10",
};

/**
 * Converts a hex accent into an rgb triplet string for use in `color-mix` and
 * inline gradients, so domain accents work in both themes without a second set.
 */
export function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const n = Number.parseInt(full, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

export function formatNumber(value: number, locale: "ar" | "en"): string {
  // Arabic-Indic digits are common in Arabic UI but hurt readability when the
  // same page shows Latin-scripted DAX and column names, so Latin digits are
  // used in both locales and only the grouping separator follows the locale.
  return new Intl.NumberFormat(locale === "ar" ? "ar-EG-u-nu-latn" : "en-US").format(value);
}

export function relativeTime(ts: number, locale: "ar" | "en"): string {
  const diff = Date.now() - ts;
  const rtf = new Intl.RelativeTimeFormat(locale === "ar" ? "ar" : "en", { numeric: "auto" });
  const minutes = Math.round(diff / 60000);
  if (Math.abs(minutes) < 60) return rtf.format(-minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return rtf.format(-hours, "hour");
  return rtf.format(-Math.round(hours / 24), "day");
}
