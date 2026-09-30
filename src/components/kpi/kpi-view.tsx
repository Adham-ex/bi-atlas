"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Lightbulb,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { Kpi } from "@/content/types";
import { domainById } from "@/content/domains";
import { resolveKpis } from "@/content/kpis";
import { resolvePatterns } from "@/content/patterns";
import { useSettings } from "@/i18n/provider";
import { useRecordVisit, useWorkspace } from "@/lib/workspace";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import {
  Badge,
  BulletList,
  Card,
  ClaimBadge,
  CodeBlock,
  DifficultyBadge,
  Field,
  Formula,
  IllustrativeNote,
  Mono,
  SectionHeading,
} from "@/components/ui/primitives";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion";

export function KpiView({ kpi }: { kpi: Kpi }) {
  const { d, tr, locale } = useSettings();
  const ws = useWorkspace();

  useRecordVisit({
    kind: "kpi",
    slug: kpi.slug,
    label: { ar: kpi.nameAr, en: kpi.name },
  });

  const domains = kpi.domains.map((id) => domainById.get(id)).filter(Boolean);
  const related = resolveKpis(kpi.related);
  const visuals = kpi.visuals
    .map((v) => ({ pattern: resolvePatterns([v.pattern])[0], why: v.why }))
    .filter((v) => v.pattern);

  return (
    <>
      <PageHeader
        crumbs={[
          { label: d.brand, href: "/" },
          { label: d.nav.kpis, href: "/kpis" },
          { label: { ar: kpi.nameAr, en: kpi.name } },
        ]}
        title={tr({ ar: kpi.nameAr, en: kpi.name })}
        subtitle={`${locale === "en" ? kpi.nameAr : kpi.name}${kpi.acronym ? ` · ${kpi.acronym}` : ""}`}
        description={kpi.definition}
        meta={
          <>
            <DifficultyBadge level={kpi.difficulty} />
            <Badge>{tr(kpi.category)}</Badge>
            <Badge tone="primary">{tr(d.aggregation[kpi.aggregation])}</Badge>
            {domains.map((dom) =>
              dom ? (
                <Link key={dom.id} href={`/domains/${dom.slug}`}>
                  <Badge className="transition-colors hover:border-border-strong">
                    <Icon name={dom.icon} size={12} />
                    {tr(dom.name)}
                  </Badge>
                </Link>
              ) : null,
            )}
          </>
        }
        aside={<BookmarkButton slug={kpi.slug} isSaved={ws.isBookmarked(kpi.slug)} onToggle={ws.toggleBookmark} />}
      />

      <PageBody>
        {/* Formula + the parts of the ratio */}
        <FadeIn>
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
              {tr(d.labels.formula)}
            </h2>
            <div className="mt-4">
              <Formula>{kpi.formula}</Formula>
            </div>
            <div className="mt-5 grid gap-5 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-4">
              <Field label={d.labels.numerator}>
                <span className="text-muted">{tr(kpi.numerator)}</span>
              </Field>
              {kpi.denominator ? (
                <Field label={d.labels.denominator}>
                  <span className="text-muted">{tr(kpi.denominator)}</span>
                </Field>
              ) : null}
              <Field label={d.labels.unit}>
                <span className="text-muted">{tr(kpi.unit)}</span>
              </Field>
              <Field label={d.labels.timeGrain}>
                <span className="text-muted">{tr(kpi.timeGrain)}</span>
              </Field>
            </div>
          </Card>
        </FadeIn>

        {/* Why + interpretation */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.04}>
            <Card className="h-full">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                {tr(d.kpi.whyItMatters)}
              </h2>
              <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                {tr(kpi.whyItMatters)}
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="h-full">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                {tr(d.kpi.interpretation)}
              </h2>
              <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                {tr(kpi.interpretation)}
              </p>
            </Card>
          </FadeIn>
        </div>

        {/* Worked example */}
        <div className="mt-14">
          <SectionHeading title={d.kpi.example} />
          <Card>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                  Input
                </h3>
                <dl className="mt-3 divide-y divide-border">
                  {kpi.example.inputs.map((input, i) => (
                    <div key={i} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-[13px] text-muted">{tr(input.label)}</dt>
                      <dd className="shrink-0 font-mono text-sm tabular-nums" dir="ltr">
                        {input.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <IllustrativeNote className="mt-3" />
              </div>

              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                  {tr(d.labels.formula)}
                </h3>
                <ol className="mt-3 space-y-2.5">
                  {kpi.example.steps.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-border bg-surface-2/50 px-3.5 py-2.5"
                    >
                      <div className="text-[12px] text-muted">{tr(step.label)}</div>
                      <div className="mt-1 font-mono text-[13px] text-text" dir="ltr">
                        {step.expression}
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-4 rounded-lg border border-primary/35 bg-primary/10 px-4 py-3">
                  <div className="text-[11px] uppercase tracking-wider text-primary-soft">
                    {tr(kpi.example.result.label)}
                  </div>
                  <div className="mt-1 font-mono text-xl font-semibold">
                    {kpi.example.result.value}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted">
              {tr(kpi.example.reading)}
            </p>
          </Card>
        </div>

        {/* Direction */}
        <div className="mt-14">
          <SectionHeading title={d.kpi.direction} />
          <div className="grid gap-4 lg:grid-cols-3">
            <Card>
              <div className="flex items-center gap-2 text-secondary">
                <TrendingUp className="size-4" aria-hidden />
                <h3 className="text-sm font-semibold">{tr(d.kpi.rising)}</h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {tr(kpi.direction.rising)}
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-2 text-primary-soft">
                <TrendingDown className="size-4" aria-hidden />
                <h3 className="text-sm font-semibold">{tr(d.kpi.falling)}</h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {tr(kpi.direction.falling)}
              </p>
            </Card>
            <Card className="border-highlight/35 bg-highlight/[0.06]">
              <div className="flex items-center gap-2 text-highlight">
                <AlertTriangle className="size-4" aria-hidden />
                <h3 className="text-sm font-semibold">{tr(d.kpi.caveat)}</h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {tr(kpi.direction.caveat)}
              </p>
            </Card>
          </div>
        </div>

        {/* Implementation */}
        <div className="mt-14">
          <SectionHeading title={d.kpi.code} />
          <Stagger className="space-y-6" step={0.06}>
            {kpi.code.map((sample, i) => (
              <StaggerItem key={i}>
                <Card>
                  <h3 className="mb-4 text-sm font-semibold">{tr(sample.label)}</h3>
                  <CodeBlock code={sample.code} language={sample.language.toUpperCase()} />

                  <div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                        {tr(d.kpi.assumptions)}
                      </h4>
                      <div className="mt-3">
                        <BulletList items={sample.assumptions} tone="warn" />
                      </div>
                    </div>
                    {sample.requires?.length ? (
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                          {tr(d.kpi.requires)}
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {sample.requires.map((r) => (
                            <Mono key={r}>{r}</Mono>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Model requirements */}
        <div className="mt-14">
          <SectionHeading title={d.kpi.model} />
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[42rem] text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2 text-start text-[11px] uppercase tracking-wider text-faint">
                  <th className="px-4 py-3 text-start">Table</th>
                  <th className="px-4 py-3 text-start">{tr(d.kpi.grain)}</th>
                  <th className="px-4 py-3 text-start">{tr(d.kpi.columns)}</th>
                  <th className="px-4 py-3 text-start">{tr(d.kpi.role)}</th>
                </tr>
              </thead>
              <tbody>
                {kpi.model.map((m) => (
                  <tr key={m.table} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-3 align-top" dir="ltr">
                      <Mono>{m.table}</Mono>
                    </td>
                    <td className="px-4 py-3 align-top text-[13px] text-muted">{tr(m.grain)}</td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {m.columns.map((c) => (
                          <Mono key={c}>{c}</Mono>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 align-top text-[13px] text-muted">{tr(m.role)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended visuals */}
        {visuals.length > 0 ? (
          <div className="mt-14">
            <SectionHeading title={d.kpi.visuals} />
            <div className="grid gap-4 lg:grid-cols-3">
              {visuals.map(({ pattern, why }) =>
                pattern ? (
                  <Link
                    key={pattern.id}
                    href={`/academy/${pattern.slug}`}
                    className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary/45"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-primary-soft">
                        <Icon name={pattern.icon} size={17} />
                      </span>
                      <h3 className="text-sm font-semibold">{tr(pattern.name)}</h3>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">{tr(why)}</p>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        ) : null}

        {/* Pitfalls + variations */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading title={d.kpi.pitfalls} />
            <Card>
              <BulletList items={kpi.pitfalls} tone="warn" />
            </Card>
          </div>
          <div>
            <SectionHeading title={d.kpi.variants} />
            <div className="space-y-3">
              {kpi.variants.map((v) => (
                <Card key={v.label.en} className="p-4">
                  <h3 className="text-sm font-semibold">{tr(v.label)}</h3>
                  <div className="mt-2.5">
                    <Formula>{v.formula}</Formula>
                  </div>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                    {tr(v.difference)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Claim provenance */}
        <div className="mt-14">
          <SectionHeading title={d.kpi.claims} />
          <div className="space-y-3">
            {kpi.claims.map((c, i) => (
              <Card key={i} className="flex flex-wrap items-start gap-4 p-4">
                <ClaimBadge kind={c.kind} />
                <p className="min-w-[16rem] flex-1 text-[13px] leading-relaxed text-muted">
                  {tr(c.text)}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Exercise + notes */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading title={d.kpi.exercise} />
            <ExerciseCard kpi={kpi} />
          </div>
          <div>
            <SectionHeading title={d.kpi.notes} />
            <NoteCard slug={kpi.slug} value={ws.notes[kpi.slug] ?? ""} onSave={ws.setNote} />
          </div>
        </div>

        {/* References + related */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading title={d.kpi.references} />
            <div className="space-y-3">
              {kpi.references.map((r, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium" dir="ltr">
                        {r.title}
                      </h3>
                      {r.publisher ? (
                        <p className="mt-0.5 text-[12px] text-faint" dir="ltr">
                          {r.publisher}
                          {r.accessed ? ` · accessed ${r.accessed}` : ""}
                        </p>
                      ) : null}
                    </div>
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="shrink-0 rounded-md p-1.5 text-faint transition-colors hover:bg-surface-2 hover:text-text"
                        aria-label={r.title}
                      >
                        <ExternalLink className="size-4" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                  {r.note ? (
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{tr(r.note)}</p>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>

          {related.length > 0 ? (
            <div>
              <SectionHeading title={d.labels.relatedKpis} />
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/kpis/${r.slug}`}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong"
                  >
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold">
                        {tr({ ar: r.nameAr, en: r.name })}
                      </h3>
                      <p className="truncate text-[12px] text-faint" dir="ltr">
                        {r.name}
                      </p>
                    </div>
                    <DifficultyBadge level={r.difficulty} />
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

/* ---------------------------------------------------------------- */

function BookmarkButton({
  slug,
  isSaved,
  onToggle,
}: {
  slug: string;
  isSaved: boolean;
  onToggle: (slug: string) => void;
}) {
  const { d, tr } = useSettings();
  return (
    <button
      type="button"
      onClick={() => onToggle(slug)}
      aria-pressed={isSaved}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors",
        isSaved
          ? "border-secondary/45 bg-secondary/10 text-secondary"
          : "border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text",
      )}
    >
      {isSaved ? (
        <BookmarkCheck className="size-4" aria-hidden />
      ) : (
        <Bookmark className="size-4" aria-hidden />
      )}
      {tr(isSaved ? d.actions.bookmarked : d.actions.bookmark)}
    </button>
  );
}

function ExerciseCard({ kpi }: { kpi: Kpi }) {
  const { d, tr } = useSettings();
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card>
      <p className="text-sm leading-relaxed">{tr(kpi.exercise.prompt)}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowHint((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[12px] text-muted transition-colors hover:border-border-strong hover:text-text"
        >
          <Lightbulb className="size-3.5" aria-hidden />
          {tr(d.kpi.hint)}
        </button>
        <button
          type="button"
          onClick={() => setShowAnswer((v) => !v)}
          className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-[12px] text-primary-soft transition-colors hover:bg-primary/16"
        >
          {tr(d.actions.revealAnswer)}
        </button>
      </div>

      {showHint ? (
        <div className="mt-4 rounded-lg border border-highlight/30 bg-highlight/[0.07] px-4 py-3 text-[13px] leading-relaxed text-muted">
          {tr(kpi.exercise.hint)}
        </div>
      ) : null}

      {showAnswer ? (
        <div className="mt-3 rounded-lg border border-border bg-surface-2/60 px-4 py-3.5 text-[13px] leading-relaxed text-muted">
          {tr(kpi.exercise.answer)}
        </div>
      ) : null}
    </Card>
  );
}

function NoteCard({
  slug,
  value,
  onSave,
}: {
  slug: string;
  value: string;
  onSave: (slug: string, note: string) => void;
}) {
  const { d, tr } = useSettings();
  const [draft, setDraft] = useState(value);
  const [lastValue, setLastValue] = useState(value);
  const [saved, setSaved] = useState(false);

  // The stored note arrives after hydration and can change in another tab.
  // Adjusting state during render is React's sanctioned way to react to a
  // changed prop; an effect here would cause an extra render pass.
  if (value !== lastValue) {
    setLastValue(value);
    setDraft(value);
  }

  function save() {
    onSave(slug, draft);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  }

  return (
    <Card className="flex h-full flex-col">
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder={tr(d.kpi.notesPlaceholder)}
        aria-label={tr(d.kpi.notes)}
        rows={7}
        className="w-full flex-1 resize-none rounded-lg border border-border bg-surface-2/50 p-3.5 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-faint focus:border-primary/50"
      />
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[11px] text-faint">{tr(d.home.localOnly)}</p>
        <button
          type="button"
          onClick={save}
          disabled={draft === value}
          className="shrink-0 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-[12px] text-muted transition-colors hover:border-border-strong hover:text-text disabled:opacity-50"
        >
          {saved ? tr(d.actions.copied) : tr(d.actions.saveNote)}
        </button>
      </div>
    </Card>
  );
}
