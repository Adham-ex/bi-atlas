import assert from "node:assert/strict";
import test from "node:test";
import { normalize, scoreMatch } from "./text.ts";

/* ------------------------------------------------------------------ */
/* Arabic normalisation                                                */
/* ------------------------------------------------------------------ */

test("diacritics are stripped so harakat never block a match", () => {
  assert.equal(normalize("مُؤَشِّر"), normalize("مؤشر"));
});

test("alef variants collapse to a bare alef", () => {
  assert.equal(normalize("أداء"), normalize("اداء"));
  assert.equal(normalize("إجمالي"), normalize("اجمالي"));
  assert.equal(normalize("آخر"), normalize("اخر"));
});

test("ta marbuta and ha are treated as the same letter", () => {
  assert.equal(normalize("تكلفة"), normalize("تكلفه"));
});

test("alef maqsura and ya are treated as the same letter", () => {
  assert.equal(normalize("المستوى"), normalize("المستوي"));
});

test("hamza carriers collapse, so a common misspelling still matches", () => {
  assert.equal(normalize("مؤشر"), normalize("مءشر"));
});

test("tatweel is removed", () => {
  assert.equal(normalize("مخـــزون"), normalize("مخزون"));
});

test("latin text is lowercased and trimmed", () => {
  assert.equal(normalize("  Inventory Turnover  "), "inventory turnover");
});

test("runs of whitespace collapse to one space", () => {
  assert.equal(normalize("دوران    المخزون"), "دوران المخزون");
});

/* ------------------------------------------------------------------ */
/* Ranking                                                             */
/* ------------------------------------------------------------------ */

test("an exact title match outranks a prefix match", () => {
  const exact = scoreMatch("otif", "otif", "", "");
  const prefix = scoreMatch("oti", "otif", "", "");
  assert.ok(exact > prefix);
});

test("a title match outranks a body-only match", () => {
  const inTitle = scoreMatch("cac", "cac", "", "cac");
  const inBody = scoreMatch("cac", "something else", "", "... cac ...");
  assert.ok(inTitle > inBody);
});

test("the other-language title also matches", () => {
  // An Arabic-speaking user typing an English acronym must still find it.
  assert.ok(scoreMatch("otif", "التسليم في الموعد وبالكامل", "otif", "") > 0);
});

test("a query matching nothing scores zero", () => {
  assert.equal(scoreMatch("zzzz", "otif", "on time in full", "haystack"), 0);
});

test("an empty query scores zero rather than matching everything", () => {
  assert.equal(scoreMatch("", "otif", "", ""), 0);
});
