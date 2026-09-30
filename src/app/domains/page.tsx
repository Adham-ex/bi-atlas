"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon, SlidersHorizontal, X } from "lucide-react";
import { domains } from "@/content/domains";
import { kpiCountForDomain } from "@/content/kpis";
import type { Difficulty } from "@/content/types";
import { useSettings } from "@/i18n/provider";
import { normalize } from "@/lib/search";
import { cn, difficultyOrder } from "@/lib/utils";
import { DomainCard } from "@/components/domain/domain-card";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import { EmptyState } from "@/components/ui/primitives";
import { Stagger, StaggerItem } from "@/components/ui/motion";

const LEVELS: Difficulty[] = ["beginner", "intermediate", "advanced"];

export default function DomainsPage() {
  const { d, tr, locale } = useSettings();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Difficulty | "all">("all");
  const [tag, setTag] = useState<string | "all">("all");

  // Tag vocabulary is derived from content, so adding a domain with a new tag
  // extends the filter automatically.
  const tags = useMemo(() => {
    const seen = new Map<string, { ar: string; en: string }>();
    for (const dom of domains) {
      for (const t of dom.tags) {
        if (!seen.has(t.en)) seen.set(t.en, t);
      }
    }
    return [...seen.values()].sort((a, b) => a.en.localeCompare(b.en));
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return domains
      .filter((dom) => {
        if (level !== "all" && dom.difficulty !== level) return false;
        if (tag !== "all" && !dom.tags.some((t) => t.en === tag)) return false;
        if (!q) return true;
        const hay = normalize(
          [
            dom.name.ar,
            dom.name.en,
            dom.tagline.ar,
            dom.tagline.en,
            ...dom.tags.flatMap((t) => [t.ar, t.en]),
            ...dom.glossary.map((g) => g.term),
          ].join(" "),
        );
        return hay.includes(q);
      })
      .sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }, [query, level, tag]);

  const hasFilters = query !== "" || level !== "all" || tag !== "all";

  function reset() {
    setQuery("");
    setLevel("all");
    setTag("all");
  }

  return (
    <>
      <PageHeader
        crumbs={[{ label: d.brand, href: "/" }, { label: d.nav.domains }]}
        title={tr(d.nav.domains)}
        description={d.home.domainsBody}
      />

      <PageBody>
        <div className="mb-8 space-y-4">
          <div className="relative">
            <SearchIcon
              className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-faint start-3.5"
              aria-hidden
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tr(d.search.placeholder)}
              aria-label={tr(d.search.placeholder)}
              className="h-11 w-full rounded-lg border border-border bg-surface ps-11 pe-4 text-sm outline-none transition-colors placeholder:text-faint focus:border-primary/50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-faint">
              <SlidersHorizontal className="size-3.5" aria-hidden />
              {tr(d.labels.filters)}
            </span>

            <FilterChip active={level === "all"} onClick={() => setLevel("all")}>
              {tr(d.labels.all)}
            </FilterChip>
            {LEVELS.map((l) => (
              <FilterChip key={l} active={level === l} onClick={() => setLevel(l)}>
                {tr(d.labels[l])}
              </FilterChip>
            ))}

            <span className="mx-1 h-4 w-px bg-border" aria-hidden />

            <FilterChip active={tag === "all"} onClick={() => setTag("all")}>
              {tr(d.labels.all)}
            </FilterChip>
            {tags.map((t) => (
              <FilterChip key={t.en} active={tag === t.en} onClick={() => setTag(t.en)}>
                {tr(t)}
              </FilterChip>
            ))}

            {hasFilters ? (
              <button
                type="button"
                onClick={reset}
                className="ms-auto inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted transition-colors hover:text-text"
              >
                <X className="size-3.5" aria-hidden />
                {tr(d.actions.clear)}
              </button>
            ) : null}
          </div>

          <p className="text-xs text-faint" aria-live="polite">
            {filtered.length} {tr(d.labels.results)}
          </p>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title={tr(d.empty.noResults)}
            body={tr(d.empty.noResultsHint)}
            icon={<SearchIcon className="size-6" aria-hidden />}
          />
        ) : (
          <Stagger
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            step={0.03}
            // Re-keying on the filter state replays the reveal when results change.
            key={`${query}-${level}-${tag}-${locale}`}
          >
            {filtered.map((dom) => (
              <StaggerItem key={dom.id}>
                <DomainCard domain={dom} kpiCount={kpiCountForDomain(dom.id)} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </PageBody>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-md border px-2.5 py-1 text-[12px] transition-colors",
        active
          ? "border-primary/50 bg-primary/12 text-primary-soft"
          : "border-border bg-surface-2/60 text-muted hover:border-border-strong hover:text-text",
      )}
    >
      {children}
    </button>
  );
}
