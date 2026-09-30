"use client";

import Link from "next/link";
import { Clock, Database, HelpCircle, LayoutDashboard, Target, Users } from "lucide-react";
import type { Domain } from "@/content/types";
import { kpisForDomain } from "@/content/kpis";
import { resolvePatterns } from "@/content/patterns";
import { challengesForDomain } from "@/content/challenges";
import { domainById } from "@/content/domains";
import { useSettings } from "@/i18n/provider";
import { useRecordVisit } from "@/lib/workspace";
import { Icon } from "@/components/ui/icon";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import {
  ArrowLink,
  Badge,
  Card,
  DifficultyBadge,
  Mono,
  SectionHeading,
} from "@/components/ui/primitives";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { KpiPreviewCard } from "@/components/home/sections";
import { DomainBanner } from "./banner";

/**
 * The reusable domain template. Every one of the twelve domains renders
 * through this component — adding a thirteenth needs no new code.
 */
export function DomainView({ domain }: { domain: Domain }) {
  const { d, tr } = useSettings();

  useRecordVisit({ kind: "domain", slug: domain.slug, label: domain.name });

  const kpis = kpisForDomain(domain.id);
  const patterns = resolvePatterns(domain.patterns);
  const challenges = challengesForDomain(domain.id);
  const related = domain.relatedDomains
    .map((id) => domainById.get(id))
    .filter((x): x is Domain => Boolean(x));

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 h-56 overflow-hidden" aria-hidden>
          <DomainBanner domain={domain} variant="hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg" />
        </div>

        <div className="relative">
          <PageHeader
            crumbs={[
              { label: d.brand, href: "/" },
              { label: d.nav.domains, href: "/domains" },
              { label: domain.name },
            ]}
            title={tr(domain.name)}
            subtitle={tr(domain.name) === domain.name.en ? domain.name.ar : domain.name.en}
            description={domain.intro}
            meta={
              <>
                <DifficultyBadge level={domain.difficulty} />
                <Badge>
                  <Clock className="size-3" aria-hidden />
                  {domain.estMinutes} {tr(d.labels.minutes)}
                </Badge>
                <Badge tone="primary">
                  <Target className="size-3" aria-hidden />
                  {kpis.length} {tr(d.labels.kpiCount)}
                </Badge>
                {domain.tags.map((t) => (
                  <Badge key={t.en}>{tr(t)}</Badge>
                ))}
              </>
            }
            aside={
              <span
                className="flex size-16 items-center justify-center rounded-xl border"
                style={{
                  color: domain.accent,
                  borderColor: `${domain.accent}45`,
                  background: `${domain.accent}14`,
                }}
              >
                <Icon name={domain.icon} size={28} />
              </span>
            }
          />
        </div>
      </div>

      <PageBody>
        {/* Overview + business questions */}
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <FadeIn>
            <Card className="h-full">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                {tr(d.domain.overview)}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{tr(domain.overview)}</p>
            </Card>
          </FadeIn>

          <FadeIn delay={0.06}>
            <Card className="h-full">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-faint">
                <HelpCircle className="size-4" aria-hidden />
                {tr(d.domain.questions)}
              </h2>
              <ul className="mt-4 space-y-3">
                {domain.questions.map((q, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 font-mono text-[11px] text-faint">{i + 1}</span>
                    <span className="text-muted">{tr(q)}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>

        {/* Processes */}
        <div className="mt-14">
          <SectionHeading title={d.domain.processes} />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" step={0.04}>
            {domain.processes.map((p) => (
              <StaggerItem key={p.name.en}>
                <Card className="h-full">
                  <h3 className="text-sm font-semibold">{tr(p.name)}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {tr(p.description)}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Stakeholders + source systems */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading title={d.domain.stakeholders} />
            <div className="space-y-3">
              {domain.stakeholders.map((s) => (
                <Card key={s.role.en} className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-muted">
                      <Users className="size-4" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{tr(s.role)}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">
                        <span className="text-faint">{tr(d.domain.cares)}: </span>
                        {tr(s.cares)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading title={d.domain.sources} />
            <div className="space-y-3">
              {domain.sourceSystems.map((s) => (
                <Card key={s.name} className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-muted">
                      <Database className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold" dir="ltr">
                        {s.name}
                      </h3>
                      <p className="mt-0.5 text-[12px] text-faint">{tr(s.kind)}</p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {s.entities.map((e) => (
                          <Mono key={e}>{e}</Mono>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* KPI catalogue */}
        <div className="mt-14">
          <SectionHeading
            title={d.domain.kpis}
            action={<ArrowLink href="/kpis">{tr(d.actions.viewAll)}</ArrowLink>}
          />
          {kpis.length === 0 ? (
            <Card className="text-sm text-muted">{tr(d.workspace.empty)}</Card>
          ) : (
            <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" step={0.04}>
              {kpis.map((k) => (
                <StaggerItem key={k.id}>
                  <KpiPreviewCard kpi={k} />
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>

        {/* Glossary */}
        <div className="mt-14">
          <SectionHeading title={d.domain.glossary} id="glossary" />
          <div className="grid gap-4 md:grid-cols-2">
            {domain.glossary.map((g) => (
              <Card key={g.term} className="p-4">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <h3 className="text-sm font-semibold" dir="ltr">
                    {g.term}
                  </h3>
                  <span className="text-[13px] text-primary-soft">{g.ar}</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {tr(g.definition)}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Dashboard pages */}
        <div className="mt-14">
          <SectionHeading title={d.domain.dashboards} />
          <div className="grid gap-4 lg:grid-cols-3">
            {domain.dashboardPages.map((p) => (
              <Card key={p.name.en} className="h-full">
                <div className="flex items-center gap-2.5">
                  <LayoutDashboard className="size-4 text-primary-soft" aria-hidden />
                  <h3 className="text-sm font-semibold">{tr(p.name)}</h3>
                </div>
                <dl className="mt-3.5 space-y-2.5 text-[13px]">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-faint">
                      {tr(d.domain.audience)}
                    </dt>
                    <dd className="mt-0.5 text-muted">{tr(p.audience)}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-faint">
                      {tr(d.domain.contents)}
                    </dt>
                    <dd className="mt-0.5 leading-relaxed text-muted">{tr(p.contents)}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended patterns */}
        {patterns.length > 0 ? (
          <div className="mt-14">
            <SectionHeading
              title={d.domain.patterns}
              action={<ArrowLink href="/academy">{tr(d.actions.viewAll)}</ArrowLink>}
            />
            <div className="flex flex-wrap gap-3">
              {patterns.map((p) => (
                <Link
                  key={p.id}
                  href={`/academy/${p.slug}`}
                  className="group flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm transition-colors hover:border-primary/45"
                >
                  <span className="text-primary-soft">
                    <Icon name={p.icon} size={16} />
                  </span>
                  <span className="text-muted transition-colors group-hover:text-text">
                    {tr(p.name)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {/* Scenarios */}
        <div className="mt-14">
          <SectionHeading title={d.domain.scenarios} />
          <div className="grid gap-4 lg:grid-cols-2">
            {domain.scenarios.map((s) => (
              <Card key={s.title.en} className="h-full">
                <h3 className="text-[15px] font-semibold leading-snug">{tr(s.title)}</h3>
                <dl className="mt-4 space-y-3.5 text-[13px]">
                  {(
                    [
                      [d.domain.situation, s.situation],
                      [d.domain.ask, s.ask],
                      [d.domain.approach, s.approach],
                    ] as const
                  ).map(([label, value], i) => (
                    <div key={i}>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                        {tr(label)}
                      </dt>
                      <dd className="mt-1 leading-relaxed text-muted">{tr(value)}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice + related domains */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {challenges.length > 0 ? (
            <div>
              <SectionHeading title={d.nav.practice} />
              <div className="space-y-3">
                {challenges.map((c) => (
                  <Link
                    key={c.id}
                    href={`/practice/${c.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/45"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold">{tr(c.title)}</h3>
                      <p className="mt-1 text-[12px] text-faint">
                        {tr(d.practice.kinds[c.kind])} · {c.points} {tr(d.labels.points)}
                      </p>
                    </div>
                    <DifficultyBadge level={c.difficulty} />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {related.length > 0 ? (
            <div>
              <SectionHeading title={d.labels.relatedDomains} />
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/domains/${r.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
                  >
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg border"
                      style={{
                        color: r.accent,
                        borderColor: `${r.accent}40`,
                        background: `${r.accent}14`,
                      }}
                    >
                      <Icon name={r.icon} size={17} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold">{tr(r.name)}</h3>
                      <p className="truncate text-[12px] text-muted">{tr(r.tagline)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </PageBody>
    </>
  );
}
