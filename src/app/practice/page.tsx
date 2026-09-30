"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, Search as SearchIcon, Trophy, X } from "lucide-react";
import { challenges } from "@/content/challenges";
import type { ChallengeKind, Difficulty } from "@/content/types";
import { useSettings } from "@/i18n/provider";
import { useWorkspace } from "@/lib/workspace";
import { normalize } from "@/lib/search";
import { cn, difficultyOrder } from "@/lib/utils";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import { Badge, Card, DifficultyBadge, EmptyState } from "@/components/ui/primitives";
import { AnimatedBar, Lift, Stagger, StaggerItem } from "@/components/ui/motion";

const LEVELS: Difficulty[] = ["beginner", "intermediate", "advanced"];

export default function PracticePage() {
  const { d, tr, locale } = useSettings();
  const ws = useWorkspace();
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<ChallengeKind | "all">("all");
  const [level, setLevel] = useState<Difficulty | "all">("all");

  // Only categories that have at least one written exercise are offered.
  const kinds = useMemo(
    () => [...new Set(challenges.map((c) => c.kind))] as ChallengeKind[],
    [],
  );

  const filtered = useMemo(() => {
    const q = normalize(query);
    return challenges
      .filter((c) => {
        if (kind !== "all" && c.kind !== kind) return false;
        if (level !== "all" && c.difficulty !== level) return false;
        if (!q) return true;
        return normalize(
          [c.title.ar, c.title.en, c.scenario.ar, c.scenario.en].join(" "),
        ).includes(q);
      })
      .sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }, [query, kind, level]);

  const done = Object.values(ws.challenges).filter((c) => c.completed).length;
  const earned = Object.values(ws.challenges).reduce(
    (sum, c) => sum + (c.correct ? c.points : 0),
    0,
  );
  const totalPoints = challenges.reduce((s, c) => s + c.points, 0);

  return (
    <>
      <PageHeader
        crumbs={[{ label: d.brand, href: "/" }, { label: d.nav.practice }]}
        title={tr(d.nav.practice)}
        description={d.home.challengeBody}
        aside={
          ws.hydrated ? (
            <div className="w-56 rounded-lg border border-border bg-surface p-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-faint">
                <span>{tr(d.workspace.completed)}</span>
                <span className="font-mono">
                  {done}/{challenges.length}
                </span>
              </div>
              <div className="mt-2.5">
                <AnimatedBar
                  value={done / challenges.length}
                  color="var(--color-secondary)"
                  label={tr(d.workspace.completed)}
                />
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[12px] text-muted">
                <Trophy className="size-3.5 text-highlight" aria-hidden />
                <span className="font-mono tabular-nums">
                  {earned}/{totalPoints}
                </span>
                {tr(d.labels.points)}
              </div>
            </div>
          ) : null
        }
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
            <Chip active={kind === "all"} onClick={() => setKind("all")}>
              {tr(d.labels.all)}
            </Chip>
            {kinds.map((k) => (
              <Chip key={k} active={kind === k} onClick={() => setKind(k)}>
                {tr(d.practice.kinds[k])}
              </Chip>
            ))}

            <span className="mx-1 h-4 w-px bg-border" aria-hidden />

            {LEVELS.map((l) => (
              <Chip key={l} active={level === l} onClick={() => setLevel(level === l ? "all" : l)}>
                {tr(d.labels[l])}
              </Chip>
            ))}

            {(query || kind !== "all" || level !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setKind("all");
                  setLevel("all");
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
          <Stagger
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            step={0.035}
            key={`${query}-${kind}-${level}-${locale}`}
          >
            {filtered.map((c) => {
              const result = ws.challenges[c.slug];
              return (
                <StaggerItem key={c.id}>
                  <Lift>
                    <Link
                      href={`/practice/${c.slug}`}
                      className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Card className="flex h-full flex-col transition-colors hover:border-border-strong">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge tone="primary">{tr(d.practice.kinds[c.kind])}</Badge>
                          <DifficultyBadge level={c.difficulty} />
                          {result?.completed ? (
                            <Badge tone="secondary">
                              <CheckCircle2 className="size-3" aria-hidden />
                              {tr(d.practice.completed)}
                            </Badge>
                          ) : null}
                        </div>

                        <h3 className="mt-3.5 text-[15px] font-semibold leading-snug">
                          {tr(c.title)}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted">
                          {tr(c.scenario)}
                        </p>

                        <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3 text-[11px] text-faint">
                          <Trophy className="size-3.5" aria-hidden />
                          {c.points} {tr(d.labels.points)}
                        </div>
                      </Card>
                    </Link>
                  </Lift>
                </StaggerItem>
              );
            })}
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
