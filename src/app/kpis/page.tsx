"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon, SlidersHorizontal, X } from "lucide-react";
import { kpis } from "@/content/kpis";
import { domains } from "@/content/domains";
import type { Difficulty } from "@/content/types";
import { useSettings } from "@/i18n/provider";
import { normalize } from "@/lib/search";
import { cn, difficultyOrder } from "@/lib/utils";
import { KpiPreviewCard } from "@/components/home/sections";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import { EmptyState } from "@/components/ui/primitives";
import { Stagger, StaggerItem } from "@/components/ui/motion";

const LEVELS: Difficulty[] = ["beginner", "intermediate", "advanced"];

export default function KpisPage() {
  const { d, tr, locale } = useSettings();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Difficulty | "all">("all");
  const [domain, setDomain] = useState<string | "all">("all");

  // Only domains that actually have written KPIs appear as filters, so the
  // catalogue never offers a filter that returns nothing.
  const domainOptions = useMemo(
    () => domains.filter((dom) => kpis.some((k) => k.domains.includes(dom.id))),
    [],
  );

  const filtered = useMemo(() => {
    const q = normalize(query);
    return kpis
      .filter((k) => {
        if (level !== "all" && k.difficulty !== level) return false;
        if (domain !== "all" && !k.domains.includes(domain)) return false;
        if (!q) return true;
        const hay = normalize(
          [
            k.name,
            k.nameAr,
            k.acronym ?? "",
            k.category.ar,
            k.category.en,
            k.definition.ar,
            k.definition.en,
            k.formula,
          ].join(" "),
        );
        return hay.includes(q);
      })
      .sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }, [query, level, domain]);

  const hasFilters = query !== "" || level !== "all" || domain !== "all";

  return (
    <>
      <PageHeader
        crumbs={[{ label: d.brand, href: "/" }, { label: d.nav.kpis }]}
        title={tr(d.nav.kpis)}
        description={d.home.kpisBody}
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

            <Chip active={level === "all"} onClick={() => setLevel("all")}>
              {tr(d.labels.all)}
            </Chip>
            {LEVELS.map((l) => (
              <Chip key={l} active={level === l} onClick={() => setLevel(l)}>
                {tr(d.labels[l])}
              </Chip>
            ))}

            <span className="mx-1 h-4 w-px bg-border" aria-hidden />

            <Chip active={domain === "all"} onClick={() => setDomain("all")}>
              {tr(d.labels.all)}
            </Chip>
            {domainOptions.map((dom) => (
              <Chip key={dom.id} active={domain === dom.id} onClick={() => setDomain(dom.id)}>
                {tr(dom.name)}
              </Chip>
            ))}

            {hasFilters ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setLevel("all");
                  setDomain("all");
                }}
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
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            step={0.035}
            key={`${query}-${level}-${domain}-${locale}`}
          >
            {filtered.map((k) => (
              <StaggerItem key={k.id}>
                <KpiPreviewCard kpi={k} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </PageBody>
    </>
  );
}

function Chip({
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
