"use client";

import Link from "next/link";
import { Clock, Target } from "lucide-react";
import { useSettings } from "@/i18n/provider";
import type { Domain } from "@/content/types";
import { Icon } from "@/components/ui/icon";
import { DifficultyBadge } from "@/components/ui/primitives";
import { Lift } from "@/components/ui/motion";
import { DomainBanner } from "./banner";

export function DomainCard({
  domain,
  kpiCount,
}: {
  domain: Domain;
  kpiCount: number;
}) {
  const { d, tr } = useSettings();

  return (
    <Lift>
      <Link
        href={`/domains/${domain.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-[var(--shadow-card)] outline-none transition-colors hover:border-border-strong focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative h-32 overflow-hidden border-b border-border">
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
            <DomainBanner domain={domain} />
          </div>
          <span
            className="absolute top-3 flex size-9 items-center justify-center rounded-lg border backdrop-blur-sm end-3"
            style={{
              color: domain.accent,
              borderColor: `${domain.accent}40`,
              background: `${domain.accent}14`,
            }}
          >
            <Icon name={domain.icon} size={17} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-[15px] font-semibold leading-snug">{tr(domain.name)}</h3>
          <p
            className="mt-0.5 text-xs text-faint"
            dir={tr(domain.name) === domain.name.en ? "rtl" : "ltr"}
          >
            {tr(domain.name) === domain.name.en ? domain.name.ar : domain.name.en}
          </p>

          <p className="mt-3 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted">
            {tr(domain.tagline)}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-3 text-[11px] text-faint">
            <span className="inline-flex items-center gap-1.5">
              <Target className="size-3.5" aria-hidden />
              {kpiCount} {tr(d.labels.kpiCount)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden />
              {domain.estMinutes} {tr(d.labels.minutes)}
            </span>
            <span className="ms-auto">
              <DifficultyBadge level={domain.difficulty} />
            </span>
          </div>
        </div>
      </Link>
    </Lift>
  );
}
