import { domains } from "@/content/domains";
import { kpis } from "@/content/kpis";
import { patterns } from "@/content/patterns";
import { challenges } from "@/content/challenges";
import type { Locale } from "@/content/types";
import { normalize, scoreMatch } from "./text";

export { normalize };

export type SearchKind = "domain" | "kpi" | "pattern" | "challenge" | "term";

export interface SearchEntry {
  kind: SearchKind;
  href: string;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  /** Lowercased haystack covering both languages, acronyms, and identifiers. */
  haystack: string;
  accent?: string;
}

function build(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const d of domains) {
    entries.push({
      kind: "domain",
      href: `/domains/${d.slug}`,
      title: d.name,
      subtitle: d.tagline,
      accent: d.accent,
      haystack: normalize(
        [d.name.ar, d.name.en, d.tagline.ar, d.tagline.en, d.slug, ...d.tags.flatMap((t) => [t.ar, t.en])].join(" "),
      ),
    });

    // Glossary terms are searchable in their own right: a developer hearing
    // "sell-through" in a meeting should land somewhere useful.
    for (const g of d.glossary) {
      entries.push({
        kind: "term",
        href: `/domains/${d.slug}#glossary`,
        title: { ar: g.ar, en: g.term },
        subtitle: d.name,
        accent: d.accent,
        haystack: normalize([g.term, g.ar, g.definition.ar, g.definition.en, d.name.en].join(" ")),
      });
    }
  }

  for (const k of kpis) {
    entries.push({
      kind: "kpi",
      href: `/kpis/${k.slug}`,
      title: { ar: k.nameAr, en: k.name },
      subtitle: k.category,
      haystack: normalize(
        [
          k.name,
          k.nameAr,
          k.acronym ?? "",
          k.slug,
          k.category.ar,
          k.category.en,
          k.definition.ar,
          k.definition.en,
          k.formula,
        ].join(" "),
      ),
    });
  }

  for (const p of patterns) {
    entries.push({
      kind: "pattern",
      href: `/academy/${p.slug}`,
      title: p.name,
      subtitle: p.question,
      haystack: normalize(
        [p.name.ar, p.name.en, p.slug, p.question.ar, p.question.en, p.family].join(" "),
      ),
    });
  }

  for (const c of challenges) {
    entries.push({
      kind: "challenge",
      href: `/practice/${c.slug}`,
      title: c.title,
      subtitle: c.scenario,
      haystack: normalize(
        [c.title.ar, c.title.en, c.slug, c.kind, c.scenario.ar, c.scenario.en].join(" "),
      ),
    });
  }

  return entries;
}

export const searchIndex: SearchEntry[] = build();

export interface SearchResult extends SearchEntry {
  score: number;
}

/**
 * Ranks by match position: a title prefix beats a title substring, which beats
 * a body match. Good enough for an index of this size and keeps results stable.
 */
export function search(query: string, locale: Locale, limit = 24): SearchResult[] {
  const q = normalize(query);
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const entry of searchIndex) {
    const title = normalize(entry.title[locale]);
    const titleAlt = normalize(entry.title[locale === "ar" ? "en" : "ar"]);

    let score = scoreMatch(q, title, titleAlt, entry.haystack);
    if (score === 0) continue;

    // Prefer primary content over glossary terms at equal relevance.
    if (entry.kind === "term") score -= 5;
    results.push({ ...entry, score });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

export const KIND_ORDER: SearchKind[] = ["domain", "kpi", "pattern", "challenge", "term"];

/** Groups results by kind, preserving relevance order inside each group. */
export function groupResults(results: SearchResult[]): [SearchKind, SearchResult[]][] {
  const map = new Map<SearchKind, SearchResult[]>();
  for (const r of results) {
    const list = map.get(r.kind);
    if (list) list.push(r);
    else map.set(r.kind, [r]);
  }
  return KIND_ORDER.filter((k) => map.has(k)).map((k) => [k, map.get(k)!]);
}
