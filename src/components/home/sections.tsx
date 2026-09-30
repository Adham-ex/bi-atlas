"use client";

import Link from "next/link";
import { BookMarked, CheckCircle2, Clock, Trophy } from "lucide-react";
import { useSettings } from "@/i18n/provider";
import { domains } from "@/content/domains";
import { kpis, kpiCountForDomain } from "@/content/kpis";
import { patterns } from "@/content/patterns";
import { challenges, learningPaths } from "@/content/challenges";
import type { Challenge, Kpi, VizPattern } from "@/content/types";
import { useWorkspace } from "@/lib/workspace";
import { cn, relativeTime } from "@/lib/utils";
import { DomainCard } from "@/components/domain/domain-card";
import { PatternDemo } from "@/components/viz/demos";
import { Icon } from "@/components/ui/icon";
import {
  ArrowLink,
  Badge,
  Card,
  DifficultyBadge,
  EmptyState,
  Formula,
  SectionHeading,
} from "@/components/ui/primitives";
import { AnimatedBar, FadeIn, Lift, Stagger, StaggerItem } from "@/components/ui/motion";

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function DomainGrid() {
  const { d, tr } = useSettings();
  return (
    <Container>
      <SectionHeading
        title={d.home.domainsTitle}
        body={d.home.domainsBody}
        action={<ArrowLink href="/domains">{tr(d.actions.viewAll)}</ArrowLink>}
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" step={0.035}>
        {domains.map((domain) => (
          <StaggerItem key={domain.id}>
            <DomainCard domain={domain} kpiCount={kpiCountForDomain(domain.id)} />
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}

/* ---------------------------------------------------------------- */

export function KpiSpotlight() {
  const { d, tr } = useSettings();
  const featured = kpis.slice(0, 6);

  return (
    <Container className="border-t border-border">
      <SectionHeading
        title={d.home.kpisTitle}
        body={d.home.kpisBody}
        action={<ArrowLink href="/kpis">{tr(d.actions.viewAll)}</ArrowLink>}
      />
      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" step={0.04}>
        {featured.map((kpi) => (
          <StaggerItem key={kpi.id}>
            <KpiPreviewCard kpi={kpi} />
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}

export function KpiPreviewCard({ kpi }: { kpi: Kpi }) {
  const { d, tr } = useSettings();
  return (
    <Lift>
      <Link
        href={`/kpis/${kpi.slug}`}
        className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-[var(--shadow-card)] outline-none transition-colors hover:border-border-strong focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-semibold">{tr({ ar: kpi.nameAr, en: kpi.name })}</h3>
            <p className="mt-0.5 truncate text-xs text-faint" dir="ltr">
              {kpi.name}
              {kpi.acronym ? ` · ${kpi.acronym}` : ""}
            </p>
          </div>
          <DifficultyBadge level={kpi.difficulty} />
        </div>

        <p className="mt-3 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted">
          {tr(kpi.definition)}
        </p>

        <div className="mt-4">
          <Formula>{kpi.formula}</Formula>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-3">
          <Badge>{tr(kpi.category)}</Badge>
          <Badge tone="primary">{tr(d.aggregation[kpi.aggregation])}</Badge>
        </div>
      </Link>
    </Lift>
  );
}

/* ---------------------------------------------------------------- */

export function PathsSection() {
  const { d, tr } = useSettings();
  return (
    <Container className="border-t border-border">
      <SectionHeading title={d.home.pathsTitle} body={d.home.pathsBody} />
      <Stagger className="grid gap-4 lg:grid-cols-3" step={0.05}>
        {learningPaths.map((path) => (
          <StaggerItem key={path.id}>
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    color: path.accent,
                    borderColor: `${path.accent}40`,
                    background: `${path.accent}14`,
                  }}
                >
                  <Icon name={path.icon} size={17} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-snug">{tr(path.title)}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{tr(path.summary)}</p>
                </div>
              </div>

              <ol className="mt-4 space-y-1.5 border-t border-border pt-4">
                {path.steps.map((step, i) => (
                  <li key={step.href}>
                    <Link
                      href={step.href}
                      className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-[13px] transition-colors hover:bg-surface-2"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border font-mono text-[10px] text-faint">
                        {i + 1}
                      </span>
                      <span className="truncate text-muted transition-colors group-hover:text-text">
                        {tr(step.label)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="mt-4 border-t border-border pt-3">
                <DifficultyBadge level={path.difficulty} />
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}

/* ---------------------------------------------------------------- */

export function FeaturedChallenge({ challenge }: { challenge: Challenge }) {
  const { d, tr } = useSettings();

  return (
    <Container className="border-t border-border">
      <SectionHeading
        title={d.home.challengeTitle}
        body={d.home.challengeBody}
        action={<ArrowLink href="/practice">{tr(d.actions.viewAll)}</ArrowLink>}
      />

      <FadeIn>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[1.35fr_1fr]">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="primary">{tr(d.practice.kinds[challenge.kind])}</Badge>
                <DifficultyBadge level={challenge.difficulty} />
                <Badge tone="highlight">
                  <Trophy className="size-3" aria-hidden />
                  {challenge.points} {tr(d.labels.points)}
                </Badge>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug">{tr(challenge.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tr(challenge.scenario)}</p>

              <ul className="mt-5 space-y-2">
                {challenge.requirements.map((r, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-muted">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                    {tr(r)}
                  </li>
                ))}
              </ul>

              <Link
                href={`/practice/${challenge.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                {tr(d.actions.startChallenge)}
              </Link>
            </div>

            <div className="border-t border-border bg-surface-2/40 p-6 sm:p-8 lg:border-s lg:border-t-0">
              {challenge.dataset ? (
                <>
                  <p className="mb-3 text-[11px] uppercase tracking-wider text-faint">
                    {tr(challenge.dataset.caption)}
                  </p>
                  <div className="overflow-x-auto rounded-lg border border-border bg-surface">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-[11px] uppercase tracking-wider text-faint">
                          {challenge.dataset.columns.map((c, i) => (
                            <th
                              key={c.key}
                              className={cn("px-3 py-2", i === 0 ? "text-start" : "text-end")}
                            >
                              {tr(c.label)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {challenge.dataset.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-border/60 last:border-0">
                            {challenge.dataset!.columns.map((c, ci) => (
                              <td
                                key={c.key}
                                className={cn(
                                  "px-3 py-2",
                                  ci === 0
                                    ? "text-start font-medium"
                                    : "text-end font-mono tabular-nums text-muted",
                                )}
                              >
                                {typeof row[c.key] === "number"
                                  ? (row[c.key] as number).toLocaleString("en-US")
                                  : row[c.key]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

/* ---------------------------------------------------------------- */

export function AcademyShowcase({ featured }: { featured: VizPattern[] }) {
  const { d, tr } = useSettings();

  return (
    <Container className="border-t border-border">
      <SectionHeading
        title={d.home.academyTitle}
        body={d.home.academyBody}
        action={<ArrowLink href="/academy">{tr(d.actions.viewAll)}</ArrowLink>}
      />

      <Stagger className="grid gap-4 lg:grid-cols-2" step={0.06}>
        {featured.map((p) => (
          <StaggerItem key={p.id}>
            <Card className="h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-soft">
                    <Icon name={p.icon} size={17} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold">{tr(p.name)}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{tr(p.question)}</p>
                  </div>
                </div>
                <ArrowLink href={`/academy/${p.slug}`} className="shrink-0 text-xs">
                  {tr(d.actions.viewAll)}
                </ArrowLink>
              </div>

              <div className="mt-5 rounded-lg border border-border bg-surface-2/40 p-4">
                <PatternDemo demo={p.demo} />
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}

/* ---------------------------------------------------------------- */

export function ProgressSection() {
  const { d, tr, locale } = useSettings();
  const ws = useWorkspace();

  const totalChallenges = challenges.length;
  const done = Object.values(ws.challenges).filter((c) => c.completed).length;
  const points = Object.values(ws.challenges).reduce(
    (sum, c) => sum + (c.correct ? c.points : 0),
    0,
  );

  const visitedDomains = new Set(
    ws.recent.filter((r) => r.kind === "domain").map((r) => r.slug),
  ).size;

  const stats = [
    { label: d.workspace.saved, value: ws.bookmarks.length, icon: BookMarked },
    { label: d.workspace.completed, value: `${done}/${totalChallenges}`, icon: CheckCircle2 },
    { label: d.labels.points, value: points, icon: Trophy },
    { label: d.labels.domains, value: `${visitedDomains}/${domains.length}`, icon: Clock },
  ];

  const hasActivity = ws.hydrated && (ws.recent.length > 0 || done > 0 || ws.bookmarks.length > 0);

  return (
    <Container className="border-t border-border">
      <SectionHeading title={d.home.progressTitle} body={d.home.localOnly} />

      {!ws.hydrated ? (
        <div className="h-32 animate-pulse rounded-lg border border-border bg-surface-2/40" />
      ) : !hasActivity ? (
        <EmptyState
          title={tr(d.home.progressEmpty)}
          body={tr(d.home.domainsBody)}
          action={<ArrowLink href="/domains">{tr(d.actions.explore)}</ArrowLink>}
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <Card>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label.en} className="rounded-lg border border-border bg-surface-2/50 p-3.5">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-faint">
                    <s.icon className="size-3.5" aria-hidden />
                    {tr(s.label)}
                  </div>
                  <div className="mt-2 font-mono text-2xl font-semibold tabular-nums">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="mb-2 flex items-center justify-between text-xs text-muted">
                <span>{tr(d.workspace.completed)}</span>
                <span className="font-mono tabular-nums">
                  {Math.round((done / totalChallenges) * 100)}%
                </span>
              </div>
              <AnimatedBar
                value={done / totalChallenges}
                color="var(--color-secondary)"
                label={tr(d.workspace.completed)}
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold">{tr(d.home.recentTitle)}</h3>
            {ws.recent.length === 0 ? (
              <p className="mt-3 text-sm text-muted">{tr(d.workspace.empty)}</p>
            ) : (
              <ul className="mt-3 divide-y divide-border">
                {ws.recent.slice(0, 6).map((item) => (
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
            )}
          </Card>
        </div>
      )}
    </Container>
  );
}

export function hrefFor(kind: string, slug: string): string {
  switch (kind) {
    case "domain":
      return `/domains/${slug}`;
    case "kpi":
      return `/kpis/${slug}`;
    case "pattern":
      return `/academy/${slug}`;
    case "challenge":
      return `/practice/${slug}`;
    default:
      return "/";
  }
}

export { patterns };
