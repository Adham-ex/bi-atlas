import assert from "node:assert/strict";
import test from "node:test";
import { grade, gradeChoice, gradeNumeric } from "./grading.ts";
import type { Grading } from "../content/types.ts";

/* ------------------------------------------------------------------ */
/* Choice grading                                                      */
/* ------------------------------------------------------------------ */

const singleAnswer = [
  { id: "a", correct: true },
  { id: "b", correct: false },
  { id: "c", correct: false },
];

const twoAnswers = [
  { id: "a", correct: true },
  { id: "b", correct: true },
  { id: "c", correct: false },
  { id: "d", correct: false },
];

test("choice: the only correct option scores correct", () => {
  assert.equal(gradeChoice(singleAnswer, ["a"]), "correct");
});

test("choice: a wrong option scores incorrect", () => {
  assert.equal(gradeChoice(singleAnswer, ["b"]), "incorrect");
});

test("choice: no selection scores incorrect rather than partial", () => {
  assert.equal(gradeChoice(singleAnswer, []), "incorrect");
});

test("choice: both required answers score correct", () => {
  assert.equal(gradeChoice(twoAnswers, ["a", "b"]), "correct");
});

test("choice: one of two right answers is partial credit", () => {
  assert.equal(gradeChoice(twoAnswers, ["a"]), "partial");
});

test("choice: a right answer spoiled by a wrong one is incorrect, not partial", () => {
  // Guessing everything must not earn credit.
  assert.equal(gradeChoice(twoAnswers, ["a", "c"]), "incorrect");
});

test("choice: selecting every option is incorrect", () => {
  assert.equal(gradeChoice(twoAnswers, ["a", "b", "c", "d"]), "incorrect");
});

test("choice: a duplicated id cannot inflate the hit count", () => {
  assert.equal(gradeChoice(twoAnswers, ["a", "a"]), "partial");
});

/* ------------------------------------------------------------------ */
/* Numeric grading                                                     */
/* ------------------------------------------------------------------ */

test("numeric: an exact answer is correct", () => {
  assert.equal(gradeNumeric("7.4", 7.4, 0.15), "correct");
});

test("numeric: a value inside tolerance is correct", () => {
  assert.equal(gradeNumeric("7.3", 7.4, 0.15), "correct");
});

test("numeric: tolerance is inclusive at the boundary", () => {
  assert.equal(gradeNumeric("7.25", 7.4, 0.15), "correct");
});

test("numeric: a value outside tolerance is incorrect", () => {
  assert.equal(gradeNumeric("8.3", 7.4, 0.15), "incorrect");
});

test("numeric: thousands separators are accepted", () => {
  // People paste computed figures straight out of a spreadsheet.
  assert.equal(gradeNumeric("1,300,000", 1300000, 1), "correct");
});

test("numeric: surrounding whitespace is ignored", () => {
  assert.equal(gradeNumeric("  6.0  ", 6, 0.05), "correct");
});

test("numeric: non-numeric input is incorrect rather than throwing", () => {
  assert.equal(gradeNumeric("لا أعرف", 6, 0.05), "incorrect");
  assert.equal(gradeNumeric("", 6, 0.05), "incorrect");
});

/* ------------------------------------------------------------------ */
/* Dispatch                                                            */
/* ------------------------------------------------------------------ */

test("code submissions are never auto-graded", () => {
  // There is no DAX or SQL engine in the browser; claiming a verdict here
  // would be lying to the learner.
  const grading: Grading = {
    mode: "code",
    language: "dax",
    reference: "Headcount := 1",
    rubric: [],
  };
  assert.equal(grade(grading, { code: "anything at all" }), null);
});

test("grade dispatches on the grading mode", () => {
  const numeric: Grading = {
    mode: "numeric",
    answer: 6,
    tolerance: 0.1,
    unit: { ar: "مرة", en: "turns" },
  };
  assert.equal(grade(numeric, { numeric: "6" }), "correct");

  const choice: Grading = {
    mode: "choice",
    multi: false,
    options: [
      {
        id: "a",
        correct: true,
        label: { ar: "أ", en: "A" },
        rationale: { ar: "", en: "" },
      },
      {
        id: "b",
        correct: false,
        label: { ar: "ب", en: "B" },
        rationale: { ar: "", en: "" },
      },
    ],
  };
  assert.equal(grade(choice, { choices: ["a"] }), "correct");
});
