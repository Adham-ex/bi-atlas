"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, Info, RotateCcw, Trophy, XCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Challenge } from "@/content/types";
import { grade, type Verdict } from "@/lib/grading";
import { domainById } from "@/content/domains";
import { useSettings } from "@/i18n/provider";
import { useRecordVisit, useWorkspace } from "@/lib/workspace";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import {
  ArrowLink,
  Badge,
  BulletList,
  Card,
  CodeBlock,
  DifficultyBadge,
  IllustrativeNote,
  SectionHeading,
} from "@/components/ui/primitives";
import { FadeIn } from "@/components/ui/motion";

export function ChallengeView({ challenge }: { challenge: Challenge }) {
  const { d, tr } = useSettings();
  const ws = useWorkspace();
  const reduce = useReducedMotion();

  useRecordVisit({ kind: "challenge", slug: challenge.slug, label: challenge.title });

  const [submitted, setSubmitted] = useState(false);
  const [verdict, setVerdict] = useState<Verdict>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [numeric, setNumeric] = useState("");
  const [code, setCode] = useState("");

  const domains = challenge.domains.map((id) => domainById.get(id)).filter(Boolean);

  function submit() {
    const result = grade(challenge.grading, { choices, numeric, code });

    setVerdict(result);
    setSubmitted(true);
    ws.recordChallenge(challenge.slug, {
      completed: true,
      correct: result === null ? null : result === "correct",
      points: challenge.points,
    });
  }

  function reset() {
    setSubmitted(false);
    setVerdict(null);
    setChoices([]);
    setNumeric("");
    setCode("");
  }

  const g = challenge.grading;
  const canSubmit =
    g.mode === "choice" ? choices.length > 0 : g.mode === "numeric" ? numeric.trim() !== "" : true;

  return (
    <>
      <PageHeader
        crumbs={[
          { label: d.brand, href: "/" },
          { label: d.nav.practice, href: "/practice" },
          { label: challenge.title },
        ]}
        title={tr(challenge.title)}
        meta={
          <>
            <Badge tone="primary">{tr(d.practice.kinds[challenge.kind])}</Badge>
            <DifficultyBadge level={challenge.difficulty} />
            <Badge tone="highlight">
              <Trophy className="size-3" aria-hidden />
              {challenge.points} {tr(d.labels.points)}
            </Badge>
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
      />

      <PageBody>
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Brief */}
          <div className="space-y-6">
            <FadeIn>
              <Card>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                  {tr(d.practice.scenario)}
                </h2>
                <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                  {tr(challenge.scenario)}
                </p>

                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-faint">
                  {tr(d.practice.requirements)}
                </h3>
                <ul className="mt-3 space-y-2">
                  {challenge.requirements.map((r, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                      {tr(r)}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>

            {challenge.dataset ? (
              <FadeIn delay={0.05}>
                <Card>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                      {tr(challenge.dataset.caption)}
                    </h2>
                    <IllustrativeNote />
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-surface-2 text-[11px] uppercase tracking-wider text-faint">
                          {challenge.dataset.columns.map((c, i) => (
                            <th
                              key={c.key}
                              className={cn("px-3 py-2.5", i === 0 ? "text-start" : "text-end")}
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
                                  "px-3 py-2.5",
                                  ci === 0
                                    ? "text-start"
                                    : "text-end font-mono tabular-nums text-muted",
                                )}
                                dir={typeof row[c.key] === "string" ? "auto" : "ltr"}
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
                </Card>
              </FadeIn>
            ) : null}
          </div>

          {/* Answer panel */}
          <div className="space-y-6">
            <FadeIn delay={0.08}>
              <Card>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                  {tr(d.practice.task)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed">{tr(challenge.task)}</p>

                <div className="mt-5 border-t border-border pt-5">
                  <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-faint">
                    {tr(d.practice.yourAnswer)}
                  </h3>

                  {g.mode === "choice" ? (
                    <ul className="space-y-2">
                      {g.options.map((opt) => {
                        const selected = choices.includes(opt.id);
                        const showState = submitted;
                        return (
                          <li key={opt.id}>
                            <button
                              type="button"
                              disabled={submitted}
                              onClick={() =>
                                setChoices((prev) =>
                                  g.multi
                                    ? prev.includes(opt.id)
                                      ? prev.filter((c) => c !== opt.id)
                                      : [...prev, opt.id]
                                    : [opt.id],
                                )
                              }
                              className={cn(
                                "flex w-full items-start gap-3 rounded-lg border p-3 text-start text-[13px] leading-relaxed transition-colors",
                                showState && opt.correct
                                  ? "border-secondary/50 bg-secondary/10"
                                  : showState && selected && !opt.correct
                                    ? "border-danger/50 bg-danger/10"
                                    : selected
                                      ? "border-primary/50 bg-primary/10"
                                      : "border-border bg-surface-2/50 hover:border-border-strong",
                                submitted && "cursor-default",
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex size-4 shrink-0 items-center justify-center border",
                                  g.multi ? "rounded" : "rounded-full",
                                  selected ? "border-primary bg-primary" : "border-border-strong",
                                )}
                                aria-hidden
                              >
                                {selected ? (
                                  <CheckCircle2 className="size-3 text-white" />
                                ) : null}
                              </span>
                              <span className="flex-1">{tr(opt.label)}</span>
                            </button>

                            {submitted ? (
                              <p
                                className={cn(
                                  "mt-1.5 ps-7 text-[12px] leading-relaxed",
                                  opt.correct ? "text-secondary" : "text-muted",
                                )}
                              >
                                {tr(opt.rationale)}
                              </p>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : g.mode === "numeric" ? (
                    <div className="flex items-center gap-2">
                      <input
                        value={numeric}
                        onChange={(e) => setNumeric(e.target.value)}
                        disabled={submitted}
                        inputMode="decimal"
                        dir="ltr"
                        placeholder={tr(d.practice.numericPlaceholder)}
                        aria-label={tr(d.practice.yourAnswer)}
                        className="h-11 flex-1 rounded-lg border border-border bg-surface-2/50 px-3.5 font-mono text-sm outline-none transition-colors placeholder:font-sans placeholder:text-faint focus:border-primary/50 disabled:opacity-60"
                      />
                      <span className="shrink-0 text-[12px] text-muted">{tr(g.unit)}</span>
                    </div>
                  ) : (
                    <>
                      <div className="mb-3 flex items-start gap-2 rounded-lg border border-highlight/30 bg-highlight/[0.07] px-3 py-2.5 text-[12px] leading-relaxed text-muted">
                        <Info className="mt-0.5 size-3.5 shrink-0 text-highlight" aria-hidden />
                        {tr(d.practice.selfCheck)}
                      </div>
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        disabled={submitted}
                        dir="ltr"
                        rows={10}
                        spellCheck={false}
                        placeholder={tr(d.practice.codePlaceholder)}
                        aria-label={tr(d.practice.yourAnswer)}
                        className="w-full resize-y rounded-lg border border-border bg-bg-deep p-3.5 font-mono text-[12.5px] leading-relaxed outline-none transition-colors placeholder:font-sans placeholder:text-faint focus:border-primary/50 disabled:opacity-60"
                      />
                    </>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  {!submitted ? (
                    <button
                      type="button"
                      onClick={submit}
                      disabled={!canSubmit}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {g.mode === "code" ? tr(d.practice.markDone) : tr(d.actions.submit)}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-border-strong hover:text-text"
                    >
                      <RotateCcw className="size-4" aria-hidden />
                      {tr(d.actions.reset)}
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {submitted && verdict ? (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "mt-4 flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm font-medium",
                        verdict === "correct"
                          ? "border-secondary/45 bg-secondary/10 text-secondary"
                          : verdict === "partial"
                            ? "border-highlight/45 bg-highlight/10 text-highlight"
                            : "border-danger/45 bg-danger/10 text-danger",
                      )}
                      role="status"
                    >
                      {verdict === "correct" ? (
                        <CheckCircle2 className="size-5" aria-hidden />
                      ) : verdict === "partial" ? (
                        <AlertTriangle className="size-5" aria-hidden />
                      ) : (
                        <XCircle className="size-5" aria-hidden />
                      )}
                      {tr(
                        verdict === "correct"
                          ? d.practice.correct
                          : verdict === "partial"
                            ? d.practice.partial
                            : d.practice.incorrect,
                      )}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Card>
            </FadeIn>

            {submitted && g.mode === "code" ? (
              <FadeIn>
                <Card>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-faint">
                    {tr(d.practice.rubric)}
                  </h3>
                  <BulletList items={g.rubric} tone="ok" />
                  <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-faint">
                    {tr(d.practice.reference)}
                  </h3>
                  <CodeBlock code={g.reference} language={g.language.toUpperCase()} />
                </Card>
              </FadeIn>
            ) : null}
          </div>
        </div>

        {/* Explanation, revealed only after an attempt */}
        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-14"
            >
              <SectionHeading title={d.practice.explanation} />
              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <Card>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {tr(challenge.explanation)}
                  </p>
                </Card>
                <div className="space-y-6">
                  <Card>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-faint">
                      {tr(d.practice.mistakes)}
                    </h3>
                    <BulletList items={challenge.mistakes} tone="warn" />
                  </Card>
                  <Card>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-faint">
                      {tr(d.practice.learnMore)}
                    </h3>
                    <ul className="space-y-2">
                      {challenge.learnMore.map((l) => (
                        <li key={l.href}>
                          <ArrowLink href={l.href}>{tr(l.label)}</ArrowLink>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </PageBody>
    </>
  );
}
