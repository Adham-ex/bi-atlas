"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Check, ChevronLeft, Copy } from "lucide-react";
import { useSettings } from "@/i18n/provider";
import type { Bi, ClaimKind, Difficulty } from "@/content/types";
import { cn, difficultyStyles } from "@/lib/utils";

/* ---------------------------------------------------------------- */
/* Badges & chips                                                    */
/* ---------------------------------------------------------------- */

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "primary" | "secondary" | "highlight" | "danger";
}) {
  const tones = {
    neutral: "border-border bg-surface-2 text-muted",
    primary: "border-primary/35 bg-primary/10 text-primary-soft",
    secondary: "border-secondary/35 bg-secondary/10 text-secondary",
    highlight: "border-highlight/35 bg-highlight/10 text-highlight",
    danger: "border-danger/35 bg-danger/10 text-danger",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-medium leading-5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const { d, tr } = useSettings();
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium leading-5",
        difficultyStyles[level],
      )}
    >
      {tr(d.labels[level])}
    </span>
  );
}

/** Explicit provenance chip — a core requirement of the KPI content model. */
export function ClaimBadge({ kind }: { kind: ClaimKind }) {
  const { d, tr } = useSettings();
  const tones: Record<ClaimKind, "primary" | "secondary" | "highlight" | "neutral"> = {
    mathematical: "secondary",
    convention: "primary",
    "company-rule": "highlight",
    illustrative: "neutral",
    published: "primary",
  };
  return <Badge tone={tones[kind]}>{tr(d.claimKind[kind])}</Badge>;
}

/* ---------------------------------------------------------------- */
/* Layout                                                            */
/* ---------------------------------------------------------------- */

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <Tag className={cn("surface-card p-5", className)}>{children}</Tag>
  );
}

export function SectionHeading({
  title,
  body,
  action,
  id,
}: {
  title: Bi;
  body?: Bi;
  action?: ReactNode;
  id?: string;
}) {
  const { tr } = useSettings();
  return (
    <div id={id} className="mb-6 flex flex-wrap items-end justify-between gap-4 scroll-mt-24">
      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{tr(title)}</h2>
        {body ? <p className="mt-2 text-sm leading-relaxed text-muted">{tr(body)}</p> : null}
      </div>
      {action}
    </div>
  );
}

/** Small labelled block used throughout the KPI and domain templates. */
export function Field({
  label,
  children,
  className,
}: {
  label: Bi;
  children: ReactNode;
  className?: string;
}) {
  const { tr } = useSettings();
  return (
    <div className={className}>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-faint">
        {tr(label)}
      </div>
      <div className="mt-1.5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function BulletList({ items, tone }: { items: Bi[]; tone?: "warn" | "ok" }) {
  const { tr } = useSettings();
  const dot =
    tone === "warn" ? "bg-highlight" : tone === "ok" ? "bg-secondary" : "bg-primary-soft";
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span className={cn("mt-2 size-1.5 shrink-0 rounded-full", dot)} />
          <span>{tr(item)}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- */
/* Links                                                             */
/* ---------------------------------------------------------------- */

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium text-primary-soft transition-colors hover:text-primary",
        className,
      )}
    >
      {children}
      {/* Points "forward": left in RTL, flipped to right in LTR. */}
      <ChevronLeft
        className="size-4 transition-transform ltr:rotate-180 rtl:group-hover:-translate-x-0.5 ltr:group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}

/* ---------------------------------------------------------------- */
/* Code                                                              */
/* ---------------------------------------------------------------- */

/**
 * Code block. Always LTR regardless of page direction: a DAX expression
 * rendered RTL is unreadable and, worse, silently reorders operators.
 */
export function CodeBlock({
  code,
  language,
  label,
}: {
  code: string;
  language?: string;
  label?: string;
}) {
  const { d, tr } = useSettings();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be unavailable over http or when permission is denied;
      // the code stays selectable either way.
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-bg-deep" dir="ltr">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-2/60 px-3 py-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
          {language ?? "code"}
          {label ? <span className="ms-2 normal-case tracking-normal text-muted">{label}</span> : null}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 text-[11px] text-muted transition-colors hover:border-border-strong hover:text-text"
        >
          {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
          {tr(copied ? d.actions.copied : d.actions.copy)}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[12.5px] leading-[1.75]">
        <code className="font-mono text-text/90">{code}</code>
      </pre>
    </div>
  );
}

/** Inline technical token (table name, column, measure). Never translated. */
export function Mono({ children }: { children: ReactNode }) {
  return (
    <code className="rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[12px] text-primary-soft">
      {children}
    </code>
  );
}

/** Formula display: LTR-isolated so operators keep their order in Arabic. */
export function Formula({ children }: { children: string }) {
  return (
    <div
      dir="ltr"
      className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-center font-mono text-[13px] leading-relaxed text-text"
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* States                                                            */
/* ---------------------------------------------------------------- */

export function EmptyState({
  title,
  body,
  icon,
  action,
}: {
  title: string;
  body?: string;
  icon?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border px-6 py-14 text-center">
      {icon ? <div className="mb-3 text-faint">{icon}</div> : null}
      <p className="text-sm font-medium">{title}</p>
      {body ? <p className="mt-1.5 max-w-sm text-sm text-muted">{body}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/** Marks invented numbers as invented — used wherever example data appears. */
export function IllustrativeNote({ className }: { className?: string }) {
  const { d, tr } = useSettings();
  return (
    <p className={cn("text-[11px] text-faint", className)}>{tr(d.labels.illustrative)}</p>
  );
}
