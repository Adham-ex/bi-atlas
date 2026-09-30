import type { Grading } from "@/content/types";

/**
 * Deterministic, local grading for the Practice Lab.
 *
 * There is no DAX or SQL engine in the browser, so a `code` submission is
 * never auto-graded — it returns `null`, and the UI presents a reference
 * answer plus a rubric for self-assessment rather than claiming to have run
 * anything.
 *
 * Kept free of React so it can be unit tested directly.
 */
export type Verdict = "correct" | "incorrect" | "partial" | null;

export interface Submission {
  choices?: string[];
  numeric?: string;
  code?: string;
}

export function gradeChoice(
  options: { id: string; correct: boolean }[],
  chosen: readonly string[],
): Verdict {
  const correctIds = options.filter((o) => o.correct).map((o) => o.id);
  // De-duplicate so a repeated id cannot inflate the hit count.
  const picked = [...new Set(chosen)];
  const hits = picked.filter((c) => correctIds.includes(c)).length;
  const misses = picked.filter((c) => !correctIds.includes(c)).length;

  if (hits === correctIds.length && misses === 0) return "correct";
  // Some of the right answers, none of the wrong ones: genuine partial credit.
  if (hits > 0 && misses === 0) return "partial";
  return "incorrect";
}

export function gradeNumeric(raw: string, answer: number, tolerance: number): Verdict {
  // Accept thousands separators and surrounding whitespace, both of which
  // people naturally type when copying a computed figure.
  const value = Number.parseFloat(raw.replace(/[,\s]/g, ""));
  if (!Number.isFinite(value)) return "incorrect";

  // Binary floating point makes an exact boundary answer fail a naive
  // comparison: |7.25 - 7.4| evaluates to 0.15000000000000036, which is
  // greater than a 0.15 tolerance. The epsilon keeps the boundary inclusive
  // so a learner who typed the right number is not told they are wrong.
  const epsilon = 1e-9 * Math.max(1, Math.abs(answer));
  return Math.abs(value - answer) <= tolerance + epsilon ? "correct" : "incorrect";
}

export function grade(grading: Grading, submission: Submission): Verdict {
  switch (grading.mode) {
    case "choice":
      return gradeChoice(grading.options, submission.choices ?? []);
    case "numeric":
      return gradeNumeric(submission.numeric ?? "", grading.answer, grading.tolerance);
    case "code":
      // Self-assessed: see the note at the top of this file.
      return null;
  }
}
