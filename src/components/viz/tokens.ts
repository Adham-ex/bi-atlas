"use client";

import { useSettings } from "@/i18n/provider";

/**
 * Chart colour tokens.
 *
 * These are the brand accents *stepped for each chart surface* — not the raw UI
 * accents. Both sets were validated as categorical palettes (lightness band,
 * chroma floor, CVD separation, normal-vision floor, contrast) against their
 * own surface; the dark column is a selection for the dark surface rather than
 * an automatic flip of the light one.
 *
 * Adjacent-pair CVD separation sits in the 6–8 band on tritan, which is legal
 * only with secondary encoding — so every chart in this app ships a legend,
 * direct labels at four series or fewer, and a 2px surface gap between
 * adjacent fills. Do not drop those.
 */

const SERIES_DARK = ["#7778F8", "#23A98A", "#C07F26", "#D1417F", "#3F7FD6"] as const;
const SERIES_LIGHT = ["#5657D8", "#118566", "#9A6410", "#B92E68", "#2A66BF"] as const;

/** Sequential ramp (magnitude): one hue, light to dark. Never a rainbow. */
const SEQ_DARK = ["#1F2A45", "#2E3C74", "#43509F", "#5A62C8", "#7778F8"] as const;
const SEQ_LIGHT = ["#E4E5FB", "#C3C4F4", "#9C9DED", "#7778F8", "#5657D8"] as const;

export interface VizTokens {
  series: readonly string[];
  sequential: readonly string[];
  /** Status colours. Always paired with an icon or label, never colour alone. */
  good: string;
  bad: string;
  neutral: string;
  grid: string;
  axis: string;
  surface: string;
  text: string;
  muted: string;
}

export function useViz(): VizTokens {
  const { theme } = useSettings();
  const dark = theme === "dark";

  return {
    series: dark ? SERIES_DARK : SERIES_LIGHT,
    sequential: dark ? SEQ_DARK : SEQ_LIGHT,
    good: dark ? "#23A98A" : "#118566",
    bad: dark ? "#E06A6A" : "#C33B3B",
    neutral: dark ? "#3B4767" : "#C7CDDF",
    grid: dark ? "#2C3650" : "#E6E9F2",
    axis: dark ? "#767F96" : "#808AA5",
    surface: dark ? "#1B2335" : "#FFFFFF",
    text: dark ? "#F4F5FF" : "#141A2C",
    muted: dark ? "#A5ADC3" : "#5A6280",
  };
}

/** Picks a sequential step for a 0..1 intensity. */
export function rampStep(ramp: readonly string[], intensity: number): string {
  const i = Math.min(ramp.length - 1, Math.max(0, Math.round(intensity * (ramp.length - 1))));
  return ramp[i];
}
