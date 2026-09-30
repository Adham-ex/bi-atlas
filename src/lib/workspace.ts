"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

/**
 * Personal workspace persistence.
 *
 * Deliberately local-only: there is no account and no server, and the UI says
 * so wherever progress is shown. Every read and write is guarded because
 * storage throws in private mode and in blocked-cookie contexts.
 *
 * Exposed through `useSyncExternalStore` rather than `useState` + `useEffect`:
 * localStorage is an external store, and this keeps every mounted consumer
 * consistent without a cascading render on mount.
 */

const KEY = "bi-atlas.workspace";
const EVENT = "bi-atlas:workspace";
const MAX_RECENT = 12;

export interface RecentItem {
  kind: "domain" | "kpi" | "pattern" | "challenge";
  slug: string;
  /** Stored bilingually so the list renders correctly after a language switch. */
  label: { ar: string; en: string };
  at: number;
}

export interface ChallengeResult {
  completed: boolean;
  correct: boolean | null;
  points: number;
  at: number;
}

export interface WorkspaceState {
  bookmarks: string[]; // KPI slugs
  notes: Record<string, string>; // KPI slug -> note
  recent: RecentItem[];
  challenges: Record<string, ChallengeResult>; // challenge slug -> result
}

const EMPTY: WorkspaceState = Object.freeze({
  bookmarks: [],
  notes: {},
  recent: [],
  challenges: {},
});

/**
 * Snapshot cache. `useSyncExternalStore` compares snapshots by reference, so
 * parsing storage on every call would loop forever — the cache is replaced
 * only when a write actually happens.
 */
let cache: WorkspaceState | null = null;

function parse(): WorkspaceState {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<WorkspaceState>;
    // Storage may hold a shape written by an older version, so every branch
    // is validated rather than trusted.
    return {
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {},
      recent: Array.isArray(parsed.recent) ? parsed.recent : [],
      challenges:
        parsed.challenges && typeof parsed.challenges === "object" ? parsed.challenges : {},
    };
  } catch {
    return EMPTY;
  }
}

function getSnapshot(): WorkspaceState {
  if (cache === null) cache = parse();
  return cache;
}

/** The server has no storage, so it always renders the empty state. */
function getServerSnapshot(): WorkspaceState {
  return EMPTY;
}

function subscribe(onChange: () => void): () => void {
  const handler = () => {
    cache = null; // force a re-parse on the next snapshot read
    onChange();
  };
  window.addEventListener(EVENT, handler);
  // Keeps two tabs of the app consistent.
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function read(): WorkspaceState {
  if (typeof window === "undefined") return EMPTY;
  return getSnapshot();
}

function write(next: WorkspaceState) {
  if (typeof window === "undefined") return;
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Quota exceeded or storage blocked: the session still works, it just
    // will not persist. Failing loudly here would break the page for no gain.
  }
  window.dispatchEvent(new CustomEvent(EVENT));
}

/** Mutations are module-level so they can be called outside React too. */
export function toggleBookmark(slug: string) {
  const current = read();
  const has = current.bookmarks.includes(slug);
  write({
    ...current,
    bookmarks: has ? current.bookmarks.filter((s) => s !== slug) : [...current.bookmarks, slug],
  });
}

export function setNote(slug: string, note: string) {
  const current = read();
  const notes = { ...current.notes };
  if (note.trim()) notes[slug] = note;
  else delete notes[slug];
  write({ ...current, notes });
}

export function recordVisit(item: Omit<RecentItem, "at">) {
  const current = read();
  const filtered = current.recent.filter(
    (r) => !(r.kind === item.kind && r.slug === item.slug),
  );
  write({
    ...current,
    recent: [{ ...item, at: Date.now() }, ...filtered].slice(0, MAX_RECENT),
  });
}

export function recordChallenge(slug: string, result: Omit<ChallengeResult, "at">) {
  const current = read();
  write({
    ...current,
    challenges: { ...current.challenges, [slug]: { ...result, at: Date.now() } },
  });
}

export function clearAll() {
  write({ bookmarks: [], notes: {}, recent: [], challenges: {} });
}

/**
 * Resolves to false during server render and hydration, true afterwards.
 * Lets callers show a skeleton instead of a wrong empty state on first paint,
 * without risking a hydration mismatch.
 */
const subscribeNever = () => () => {};

function useMounted(): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
}

/** Subscribes to workspace state and exposes the mutations. */
export function useWorkspace() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useMounted();

  return {
    ...state,
    hydrated,
    toggleBookmark,
    setNote,
    recordVisit,
    recordChallenge,
    clearAll,
    isBookmarked: useCallback(
      (slug: string) => state.bookmarks.includes(slug),
      [state.bookmarks],
    ),
  };
}

/**
 * Records a page visit once per mount. This writes to an external store
 * rather than to React state, which is what an effect is for.
 */
export function useRecordVisit(item: Omit<RecentItem, "at">) {
  const { kind, slug } = item;
  const labelAr = item.label.ar;
  const labelEn = item.label.en;

  useEffect(() => {
    recordVisit({ kind, slug, label: { ar: labelAr, en: labelEn } });
    // Keyed on primitives: the caller rebuilds the item object every render.
  }, [kind, slug, labelAr, labelEn]);
}
