import Link from "next/link";

/**
 * Wordmark. The glyph is an abstract "atlas grid" — three columns at
 * different heights inside a rounded frame, reading as both a chart and a map
 * tile, and it works at 24px without detail loss.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label="BI Atlas"
    >
      <span className="relative inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-2 transition-colors group-hover:border-primary/50">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.75" />
          <rect x="7" y="12" width="2.6" height="5.5" rx="1.3" fill="var(--color-secondary)" />
          <rect x="11" y="8.5" width="2.6" height="9" rx="1.3" fill="var(--color-primary)" />
          <rect x="15" y="10.5" width="2.6" height="7" rx="1.3" fill="var(--color-highlight)" />
        </svg>
      </span>
      {!compact ? (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight">BI Atlas</span>
          <span className="mt-0.5 text-[10px] font-medium tracking-wide text-faint">
            Business Intelligence
          </span>
        </span>
      ) : null}
    </Link>
  );
}
