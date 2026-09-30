"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { useSettings } from "@/i18n/provider";

export default function NotFound() {
  const { d, tr } = useSettings();

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <span className="flex size-14 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-soft">
        <Compass className="size-6" aria-hidden />
      </span>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{tr(d.empty.notFound)}</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">{tr(d.empty.notFoundHint)}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          {tr(d.empty.backHome)}
        </Link>
        <Link
          href="/domains"
          className="rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-border-strong hover:text-text"
        >
          {tr(d.actions.explore)}
        </Link>
      </div>
    </div>
  );
}
