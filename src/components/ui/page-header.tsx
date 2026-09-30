"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import type { Bi } from "@/content/types";
import { useSettings } from "@/i18n/provider";
import { FadeIn } from "./motion";

export interface Crumb {
  label: Bi;
  href?: string;
}

/**
 * Shared page header with breadcrumbs. The separator chevron points "forward"
 * in the active direction, which is left in Arabic and right in English.
 */
export function PageHeader({
  crumbs,
  title,
  subtitle,
  description,
  meta,
  aside,
}: {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
  description?: Bi;
  meta?: ReactNode;
  aside?: ReactNode;
}) {
  const { tr } = useSettings();

  return (
    <div className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <FadeIn y={8}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 ? (
                    <ChevronLeft className="size-3 ltr:rotate-180" aria-hidden />
                  ) : null}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-text">
                      {tr(c.label)}
                    </Link>
                  ) : (
                    <span className="text-muted">{tr(c.label)}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </FadeIn>

        <div className="mt-5 flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <FadeIn delay={0.05}>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
              {subtitle ? (
                <p className="mt-1 text-sm text-faint" dir="auto">
                  {subtitle}
                </p>
              ) : null}
            </FadeIn>
            {description ? (
              <FadeIn delay={0.1}>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
                  {tr(description)}
                </p>
              </FadeIn>
            ) : null}
            {meta ? (
              <FadeIn delay={0.15}>
                <div className="mt-5 flex flex-wrap items-center gap-2">{meta}</div>
              </FadeIn>
            ) : null}
          </div>
          {aside ? <FadeIn delay={0.12}>{aside}</FadeIn> : null}
        </div>
      </div>
    </div>
  );
}

export function PageBody({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{children}</div>
  );
}
