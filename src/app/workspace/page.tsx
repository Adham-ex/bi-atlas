"use client";

import Link from "next/link";
import { useState } from "react";
import { BookMarked, CheckCircle2, Clock, StickyNote, Trash2, Trophy, XCircle } from "lucide-react";
import { kpiBySlug } from "@/content/kpis";
import { challengeBySlug, challenges } from "@/content/challenges";
import { useSettings } from "@/i18n/provider";
import { useWorkspace } from "@/lib/workspace";
import { relativeTime } from "@/lib/utils";
import { hrefFor } from "@/components/home/sections";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import {
  Badge,
  Card,
  DifficultyBadge,
  EmptyState,
  SectionHeading,
} from "@/components/ui/primitives";
import { AnimatedBar, FadeIn } from "@/components/ui/motion";

export default function WorkspacePage() {
  const { d, tr, locale } = useSettings();
  const ws = useWorkspace();
  const [confirming, setConfirming] = useState(false);

  const saved = ws.bookmarks.map((slug) => kpiBySlug.get(slug)).filter(Boolean);
  const noteEntries = Object.entries(ws.notes);
  const completed = Object.entries(ws.challenges).filter(([, r]) => r.completed);
  const earned = Object.values(ws.challenges).reduce(
    (s, c) => s + (c.correct ? c.points : 0),
    0,
  );

  const isEmpty =
    ws.hydrated &&
    saved.length === 0 &&
    noteEntries.length === 0 &&
    completed.length === 0 &&
    ws.recent.length === 0;

  return (
    <>
      <PageHeader
        crumbs={[{ label: d.brand, href: "/" }, { label: d.nav.workspace }]}
        title={tr(d.workspace.title)}
        description={d.workspace.body}
      />

      <PageBody>
        {!ws.hydrated ? (
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="h-48 animate-pulse rounded-lg border border-border bg-surface-2/40" />
            <div className="h-48 animate-pulse rounded-lg border border-border bg-surface-2/40" />
          </div>
        ) : isEmpty ? (
          <EmptyState
            title={tr(d.workspace.empty)}
            body={tr(d.home.progressEmpty)}
            icon={<BookMarked className="size-6" aria-hidden />}
            action={
              <Link
                href="/domains"
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white"
              >
                {tr(d.actions.explore)}
              </Link>
            }
          />
        ) : (
          <>
            {/* Progress summary */}
            <FadeIn>
              <Card>
                <div className="grid gap-5 sm:grid-cols-3">
                  <Stat
                    icon={<BookMarked className="size-3.5" aria-hidden />}
                    label={tr(d.workspace.saved)}
                    value={saved.length}
                  />
                  <Stat
                    icon={<CheckCircle2 className="size-3.5" aria-hidden />}
                    label={tr(d.workspace.completed)}
                    value={`${completed.length}/${challenges.length}`}
                  />
                  <Stat
                    icon={<Trophy className="size-3.5" aria-hidden />}
                    label={tr(d.labels.points)}
                    value={earned}
                  />
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <AnimatedBar
                    value={completed.length / challenges.length}
                    color="var(--color-secondary)"
                    label={tr(d.workspace.completed)}
                  />
                </div>
              </Card>
            </FadeIn>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Saved metrics */}
              <section>
                <SectionHeading title={d.workspace.saved} />
                {saved.length === 0 ? (
                  <Card className="text-sm text-muted">{tr(d.workspace.empty)}</Card>
                ) : (
                  <div className="space-y-3">
                    {saved.map((k) =>
                      k ? (
                        <Link
                          key={k.id}
                          href={`/kpis/${k.slug}`}
                          className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
                        >
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-semibold">
                              {tr({ ar: k.nameAr, en: k.name })}
                            </h3>
                            <p className="truncate text-[12px] text-faint" dir="ltr">
                              {k.name}
                            </p>
                          </div>
                          <DifficultyBadge level={k.difficulty} />
                        </Link>
                      ) : null,
                    )}
                  </div>
                )}
              </section>

              {/* Completed exercises */}
              <section>
                <SectionHeading title={d.workspace.completed} />
                {completed.length === 0 ? (
                  <Card className="text-sm text-muted">{tr(d.workspace.empty)}</Card>
                ) : (
                  <div className="space-y-3">
                    {completed.map(([slug, result]) => {
                      const c = challengeBySlug.get(slug);
                      if (!c) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/practice/${slug}`}
                          className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
                        >
                          <span className="shrink-0">
                            {result.correct === true ? (
                              <CheckCircle2 className="size-4 text-secondary" aria-hidden />
                            ) : result.correct === false ? (
                              <XCircle className="size-4 text-danger" aria-hidden />
                            ) : (
                              <Clock className="size-4 text-muted" aria-hidden />
                            )}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="truncate text-sm font-semibold">{tr(c.title)}</h3>
                            <p className="truncate text-[12px] text-faint">
                              {tr(d.practice.kinds[c.kind])} ·{" "}
                              {relativeTime(result.at, locale)}
                            </p>
                          </div>
                          {result.correct ? (
                            <Badge tone="highlight">
                              +{result.points} {tr(d.labels.points)}
                            </Badge>
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </section>
            </div>

            {/* Notes */}
            <section className="mt-12">
              <SectionHeading title={d.workspace.notes} />
              {noteEntries.length === 0 ? (
                <Card className="text-sm text-muted">{tr(d.workspace.empty)}</Card>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {noteEntries.map(([slug, note]) => {
                    const k = kpiBySlug.get(slug);
                    return (
                      <Card key={slug}>
                        <div className="flex items-center gap-2">
                          <StickyNote className="size-4 text-highlight" aria-hidden />
                          <Link
                            href={`/kpis/${slug}`}
                            className="text-sm font-semibold transition-colors hover:text-primary-soft"
                          >
                            {k ? tr({ ar: k.nameAr, en: k.name }) : slug}
                          </Link>
                        </div>
                        <p className="mt-3 whitespace-pre-wrap text-[13px] leading-relaxed text-muted">
                          {note}
                        </p>
                      </Card>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Recently viewed */}
            {ws.recent.length > 0 ? (
              <section className="mt-12">
                <SectionHeading title={d.workspace.recent} />
                <Card>
                  <ul className="divide-y divide-border">
                    {ws.recent.map((item) => (
                      <li key={`${item.kind}-${item.slug}`}>
                        <Link
                          href={hrefFor(item.kind, item.slug)}
                          className="flex items-center gap-3 py-2.5 text-sm transition-colors hover:text-primary-soft"
                        >
                          <Badge>{tr(d.search.groups[item.kind])}</Badge>
                          <span className="min-w-0 flex-1 truncate">{tr(item.label)}</span>
                          <span className="shrink-0 text-[11px] text-faint">
                            {relativeTime(item.at, locale)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>
            ) : null}

            {/* Destructive action, behind an explicit confirmation */}
            <div className="mt-12 rounded-lg border border-danger/30 bg-danger/[0.05] p-5">
              {!confirming ? (
                <button
                  type="button"
                  onClick={() => setConfirming(true)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-danger transition-opacity hover:opacity-80"
                >
                  <Trash2 className="size-4" aria-hidden />
                  {tr(d.workspace.clearAll)}
                </button>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <p className="flex-1 text-sm text-muted">{tr(d.workspace.clearConfirm)}</p>
                  <button
                    type="button"
                    onClick={() => {
                      ws.clearAll();
                      setConfirming(false);
                    }}
                    className="rounded-lg bg-danger px-3.5 py-2 text-sm font-semibold text-white"
                  >
                    {tr(d.workspace.clearAll)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirming(false)}
                    className="rounded-lg border border-border px-3.5 py-2 text-sm text-muted transition-colors hover:text-text"
                  >
                    {tr(d.actions.back)}
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </PageBody>
    </>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-faint">
        {icon}
        {label}
      </div>
      <div className="mt-2 font-mono text-2xl font-semibold tabular-nums">{value}</div>
    </div>
  );
}
