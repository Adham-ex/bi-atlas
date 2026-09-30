"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Search as SearchIcon, Sparkles } from "lucide-react";
import { useSettings } from "@/i18n/provider";
import { SearchDialog, Kbd } from "@/components/layout/search-dialog";
import { FadeIn } from "@/components/ui/motion";

export function Hero({
  domainCount,
  kpiCount,
  patternCount,
}: {
  domainCount: number;
  kpiCount: number;
  patternCount: number;
}) {
  const { d, tr } = useSettings();
  const [searchOpen, setSearchOpen] = useState(false);

  const stats = [
    { value: domainCount, label: d.labels.domains },
    { value: kpiCount, label: d.labels.kpiCount },
    { value: patternCount, label: d.labels.patternCount },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 start-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs text-muted">
            <Sparkles className="size-3.5 text-highlight" aria-hidden />
            {tr(d.home.eyebrow)}
          </span>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-6 max-w-4xl text-balance text-3xl font-bold leading-[1.25] tracking-tight sm:text-5xl sm:leading-[1.2]">
            <span className="text-gradient">{tr(d.home.heroTitle)}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {tr(d.home.heroBody)}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-start shadow-[var(--shadow-card)] transition-colors hover:border-primary/45"
            >
              <SearchIcon className="size-4 shrink-0 text-faint transition-colors group-hover:text-primary-soft" aria-hidden />
              <span className="flex-1 truncate text-sm text-faint">
                {tr(d.home.searchPlaceholder)}
              </span>
              <span className="hidden items-center gap-1.5 text-[11px] text-faint sm:flex">
                {tr(d.home.searchHint)} <Kbd>/</Kbd>
              </span>
            </button>

            <Link
              href="/domains"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-[var(--glow-primary)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              {tr(d.actions.explore)}
              <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.24}>
          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            {stats.map((s) => (
              <div key={s.label.en}>
                <dt className="text-[11px] uppercase tracking-wider text-faint">
                  {tr(s.label)}
                </dt>
                <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </section>
  );
}
