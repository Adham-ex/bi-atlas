"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useSettings } from "@/i18n/provider";
import { groupResults, search, type SearchResult } from "@/lib/search";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

const KIND_ICON: Record<string, string> = {
  domain: "Compass",
  kpi: "Target",
  pattern: "BarChart3",
  challenge: "Code2",
  term: "Layers",
};

/**
 * Global search palette.
 *
 * Keyboard-first: Cmd/Ctrl+K opens, arrows move, Enter navigates, Escape
 * closes. The flat `ordered` list keeps arrow navigation correct across the
 * grouped rendering without any index bookkeeping in the markup.
 */
export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  // The palette is mounted only while open, so its query and selection reset
  // naturally on each open rather than being cleared by an effect.
  return (
    <AnimatePresence>
      {open ? <SearchPalette onOpenChange={onOpenChange} /> : null}
    </AnimatePresence>
  );
}

function SearchPalette({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  const { d, tr, locale, dir } = useSettings();
  const router = useRouter();
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  // Active row is stored together with the query it belongs to, so a new query
  // resets the selection by derivation instead of through an effect.
  const [selection, setSelection] = useState({ query: "", index: 0 });

  const results = useMemo(() => search(query, locale), [query, locale]);
  const grouped = useMemo(() => groupResults(results), [results]);
  const ordered = useMemo(
    () => grouped.flatMap(([, items]) => items),
    [grouped],
  );

  const active = selection.query === query ? selection.index : 0;
  const setActive = useCallback(
    (next: number | ((prev: number) => number)) =>
      setSelection((prev) => {
        const base = prev.query === query ? prev.index : 0;
        return { query, index: typeof next === "function" ? next(base) : next };
      }),
    [query],
  );

  useEffect(() => {
    // Focus after the enter animation starts so the caret does not jump.
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    // Locks background scroll for as long as the palette is mounted.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = prev;
    };
  }, []);

  const go = useCallback(
    (result: SearchResult | undefined) => {
      if (!result) return;
      onOpenChange(false);
      router.push(result.href);
    },
    [onOpenChange, router],
  );

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (ordered.length ? (i + 1) % ordered.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        ordered.length ? (i - 1 + ordered.length) % ordered.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(ordered[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onOpenChange(false);
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.16 }}
    >
      <button
        type="button"
        aria-label={tr(d.search.dismiss)}
        className="absolute inset-0 bg-bg-deep/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={tr(d.search.title)}
        dir={dir}
        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[var(--shadow-pop)]"
        initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: -8, scale: 0.99 }}
        transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <SearchIcon className="size-4 shrink-0 text-faint" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tr(d.search.placeholder)}
            className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-faint"
            aria-label={tr(d.search.placeholder)}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-md p-1.5 text-faint transition-colors hover:bg-surface-2 hover:text-text"
            aria-label={tr(d.search.dismiss)}
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {!query ? (
            <div className="px-3 py-10 text-center">
              <p className="text-sm font-medium">{tr(d.search.start)}</p>
              <p className="mt-1.5 text-xs text-muted">
                {tr(d.search.startHint)}
              </p>
            </div>
          ) : ordered.length === 0 ? (
            <div className="px-3 py-10 text-center">
              <p className="text-sm font-medium">{tr(d.search.empty)}</p>
              <p className="mt-1.5 text-xs text-muted">
                {tr(d.search.emptyHint)}
              </p>
            </div>
          ) : (
            grouped.map(([kind, items]) => (
              <div key={kind} className="mb-2 last:mb-0">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-faint">
                  {tr(d.search.groups[kind])}
                </div>
                <ul>
                  {items.map((item) => {
                    const index = ordered.indexOf(item);
                    const isActive = index === active;
                    return (
                      <li key={`${item.kind}-${item.href}-${item.title.en}`}>
                        <button
                          type="button"
                          onMouseMove={() => setActive(index)}
                          onClick={() => go(item)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start transition-colors",
                            isActive ? "bg-surface-2" : "hover:bg-surface-2/60",
                          )}
                        >
                          <span
                            className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border"
                            style={
                              item.accent
                                ? {
                                    color: item.accent,
                                    borderColor: `${item.accent}40`,
                                  }
                                : undefined
                            }
                          >
                            <Icon
                              name={KIND_ICON[item.kind] ?? "Square"}
                              size={14}
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium">
                              {tr(item.title)}
                            </span>
                            <span className="block truncate text-xs text-muted">
                              {tr(item.subtitle)}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-border bg-surface-2/50 px-4 py-2 text-[11px] text-faint">
          <span className="flex items-center gap-1.5">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            {tr(d.search.navigate)}
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd>↵</Kbd>
            {tr(d.search.select)}
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd>esc</Kbd>
            {tr(d.search.dismiss)}
          </span>
          {query ? (
            <span className="ms-auto">
              {ordered.length} {tr(d.labels.results)}
            </span>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted">
      {children}
    </kbd>
  );
}
