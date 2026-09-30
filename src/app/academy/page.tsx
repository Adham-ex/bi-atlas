"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { patterns } from "@/content/patterns";
import { FAMILIES, FAMILY_LABELS } from "@/content/pattern-labels";
import type { PatternFamily } from "@/content/types";
import { useSettings } from "@/i18n/provider";
import { normalize } from "@/lib/search";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import { Card, EmptyState } from "@/components/ui/primitives";
import { Lift, Stagger, StaggerItem } from "@/components/ui/motion";
import { PatternDemo } from "@/components/viz/demos";

export default function AcademyPage() {
  const { d, tr, locale } = useSettings();
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<PatternFamily | "all">("all");

  const filtered = useMemo(() => {
    const q = normalize(query);
    return patterns.filter((p) => {
      if (family !== "all" && p.family !== family) return false;
      if (!q) return true;
      return normalize(
        [p.name.ar, p.name.en, p.question.ar, p.question.en, p.family].join(" "),
      ).includes(q);
    });
  }, [query, family]);

  return (
    <>
      <PageHeader
        crumbs={[{ label: d.brand, href: "/" }, { label: d.nav.academy }]}
        title={tr(d.nav.academy)}
        description={d.home.academyBody}
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
            <Chip active={family === "all"} onClick={() => setFamily("all")}>
              {tr(d.labels.all)}
            </Chip>
            {FAMILIES.map((f) => (
              <Chip key={f} active={family === f} onClick={() => setFamily(f)}>
                {tr(FAMILY_LABELS[f])}
              </Chip>
            ))}
            {(query || family !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFamily("all");
                }}
                className="ms-auto inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted transition-colors hover:text-text"
              >
                <X className="size-3.5" aria-hidden />
                {tr(d.actions.clear)}
              </button>
            )}
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
          <Stagger className="grid gap-4 lg:grid-cols-2" step={0.04} key={`${query}-${family}-${locale}`}>
            {filtered.map((p) => (
              <StaggerItem key={p.id}>
                <Lift>
                  <Link
                    href={`/academy/${p.slug}`}
                    className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Card className="h-full transition-colors hover:border-border-strong">
                      <div className="flex items-start gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-soft">
                          <Icon name={p.icon} size={17} />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-[15px] font-semibold">{tr(p.name)}</h3>
                          <p className="mt-1 text-[13px] leading-relaxed text-muted">
                            {tr(p.question)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 rounded-lg border border-border bg-surface-2/40 p-4">
                        <PatternDemo demo={p.demo} />
                      </div>
                    </Card>
                  </Link>
                </Lift>
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
