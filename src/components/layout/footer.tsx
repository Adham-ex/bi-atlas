"use client";

import Link from "next/link";
import { useSettings } from "@/i18n/provider";
import { Logo } from "./logo";

const LINKS = [
  { href: "/domains", key: "domains" as const },
  { href: "/kpis", key: "kpis" as const },
  { href: "/academy", key: "academy" as const },
  { href: "/practice", key: "practice" as const },
  { href: "/workspace", key: "workspace" as const },
];

export function Footer() {
  const { d, tr } = useSettings();

  return (
    <footer className="mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {tr(d.footer.about)}
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-faint">
            {tr(d.footer.sections)}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {tr(d.nav[l.key])}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-faint">
            {tr(d.footer.note)}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">{tr(d.footer.noData)}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{tr(d.home.localOnly)}</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-faint sm:px-6 lg:px-8">
          BI Atlas · {tr(d.tagline)}
        </div>
      </div>
    </footer>
  );
}
