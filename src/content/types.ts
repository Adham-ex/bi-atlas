/**
 * BI Atlas content model.
 *
 * Every user-facing string that has both an Arabic and an English form is a
 * `Bi` pair. Technical identifiers (DAX, SQL, table/column names, KPI acronyms)
 * are deliberately plain strings — they stay in English in both locales.
 */

export type Locale = "ar" | "en";

/** Bilingual string. `ar` is the primary language of the product. */
export interface Bi {
  ar: string;
  en: string;
}

export type Difficulty = "beginner" | "intermediate" | "advanced";

/**
 * Epistemic status of a content claim. The product must never blur the line
 * between arithmetic, convention, and an internal policy of one company.
 */
export type ClaimKind =
  | "mathematical" // follows from the formula itself
  | "convention" // widely used industry convention, not a standard
  | "company-rule" // depends on each organization policy
  | "illustrative" // invented example numbers, for teaching only
  | "published"; // sourced from a named external publication

export interface Claim {
  kind: ClaimKind;
  text: Bi;
}

export interface Reference {
  title: string;
  publisher?: string;
  url?: string;
  /** ISO date, when known. Omitted rather than guessed. */
  published?: string;
  accessed?: string;
  note?: Bi;
}

/* ------------------------------------------------------------------ */
/* Domains                                                             */
/* ------------------------------------------------------------------ */

export interface GlossaryEntry {
  term: string; // English business term, kept as-is
  ar: string; // Arabic rendering
  definition: Bi;
}

export interface SourceSystem {
  name: string; // e.g. SAP ERP, Shopify
  kind: Bi; // what class of system it is
  entities: string[]; // typical tables/entities it exposes
}

export interface BusinessProcess {
  name: Bi;
  description: Bi;
  /** Metrics (KPI ids) that this process is usually measured by. */
  kpis?: string[];
}

export interface Stakeholder {
  role: Bi;
  cares: Bi; // what this role actually looks at
}

export interface Scenario {
  title: Bi;
  situation: Bi;
  ask: Bi;
  approach: Bi;
}

export interface DashboardPage {
  name: Bi;
  audience: Bi;
  contents: Bi;
}

export interface Domain {
  id: string;
  slug: string;
  name: Bi;
  /** Short one-liner used on cards. */
  tagline: Bi;
  intro: Bi;
  overview: Bi;
  /** Hex accent used for the banner + card treatment. */
  accent: string;
  /** Second hex, used for the banner gradient. */
  accentAlt: string;
  /** Lucide icon name rendered in the card chip. */
  icon: string;
  difficulty: Difficulty;
  /** Estimated reading/learning time for the domain guide, in minutes. */
  estMinutes: number;
  tags: Bi[];
  processes: BusinessProcess[];
  stakeholders: Stakeholder[];
  sourceSystems: SourceSystem[];
  glossary: GlossaryEntry[];
  questions: Bi[];
  dashboardPages: DashboardPage[];
  /** Visualization pattern ids recommended for this domain. */
  patterns: string[];
  scenarios: Scenario[];
  relatedDomains: string[];
}

/* ------------------------------------------------------------------ */
/* KPIs                                                                */
/* ------------------------------------------------------------------ */

export type Aggregation = "additive" | "semi-additive" | "non-additive" | "ratio";

export interface KpiVariant {
  label: Bi;
  formula: string;
  difference: Bi;
}

export interface WorkedExample {
  /** Rows of the illustrative input. Always labelled as illustrative in the UI. */
  inputs: { label: Bi; value: string }[];
  steps: { label: Bi; expression: string }[];
  result: { label: Bi; value: string };
  reading: Bi;
}

export interface CodeSample {
  language: "dax" | "sql" | "m";
  label: Bi;
  code: string;
  /** Model assumptions the snippet relies on — never left implicit. */
  assumptions: Bi[];
  requires?: string[]; // measures / columns the snippet depends on
}

export interface ModelRequirement {
  table: string;
  grain: Bi;
  columns: string[];
  role: Bi;
}

export interface Kpi {
  id: string;
  slug: string;
  name: string; // English name, canonical
  acronym?: string;
  nameAr: string;
  domains: string[]; // domain ids — a KPI may belong to several
  category: Bi;
  difficulty: Difficulty;
  unit: Bi;
  aggregation: Aggregation;
  definition: Bi; // plain-Arabic business definition
  whyItMatters: Bi;
  interpretation: Bi; // what it means on the ground
  formula: string; // display formula, plain text
  numerator: Bi;
  denominator?: Bi;
  timeGrain: Bi;
  /** Directional reading. Explicitly allows the answer to be "it depends". */
  direction: {
    rising: Bi;
    falling: Bi;
    caveat: Bi;
  };
  example: WorkedExample;
  code: CodeSample[];
  model: ModelRequirement[];
  visuals: { pattern: string; why: Bi }[];
  pitfalls: Bi[];
  variants: KpiVariant[];
  claims: Claim[];
  related: string[]; // other KPI ids
  exercise: { prompt: Bi; hint: Bi; answer: Bi };
  references: Reference[];
}

/* ------------------------------------------------------------------ */
/* Visualization patterns                                              */
/* ------------------------------------------------------------------ */

export type PatternFamily =
  | "kpi-card"
  | "trend"
  | "comparison"
  | "composition"
  | "distribution"
  | "flow"
  | "table"
  | "monitoring";

export interface VizPattern {
  id: string;
  slug: string;
  name: Bi;
  family: PatternFamily;
  icon: string;
  question: Bi; // the business question it answers
  useWhen: Bi[];
  avoidWhen: Bi[];
  dataNeeds: Bi[];
  fields: { slot: string; expects: Bi }[];
  interactions: Bi[];
  mistakes: Bi[];
  /** Which demo component to render. Keys into the demo registry. */
  demo: string;
  dax?: CodeSample[];
  domains: string[];
}

/* ------------------------------------------------------------------ */
/* Practice lab                                                        */
/* ------------------------------------------------------------------ */

export type ChallengeKind =
  | "business-understanding"
  | "kpi-calculation"
  | "dax"
  | "sql"
  | "data-modeling"
  | "viz-selection"
  | "dashboard-critique"
  | "case-study";

export interface ChoiceOption {
  id: string;
  label: Bi;
  correct: boolean;
  /** Why this option is right or wrong — shown after submitting. */
  rationale: Bi;
}

/**
 * Grading is deterministic and local. There is no DAX/SQL engine behind this:
 * `numeric` compares a computed value, `choice` compares selections, and
 * `code` is self-checked against a reference answer with a rubric.
 */
export type Grading =
  | { mode: "choice"; multi: boolean; options: ChoiceOption[] }
  | { mode: "numeric"; answer: number; tolerance: number; unit: Bi }
  | { mode: "code"; language: "dax" | "sql"; reference: string; rubric: Bi[] };

export interface Challenge {
  id: string;
  slug: string;
  title: Bi;
  kind: ChallengeKind;
  difficulty: Difficulty;
  points: number;
  domains: string[];
  kpis: string[];
  scenario: Bi;
  requirements: Bi[];
  /** Optional sample dataset rendered as a table. */
  dataset?: {
    caption: Bi;
    columns: { key: string; label: Bi }[];
    rows: Record<string, string | number>[];
  };
  task: Bi;
  grading: Grading;
  explanation: Bi;
  mistakes: Bi[];
  /** Deep links back into the learning material. */
  learnMore: { label: Bi; href: string }[];
}

/* ------------------------------------------------------------------ */
/* Learning paths                                                      */
/* ------------------------------------------------------------------ */

export interface LearningPath {
  id: string;
  slug: string;
  title: Bi;
  summary: Bi;
  icon: string;
  accent: string;
  difficulty: Difficulty;
  steps: {
    label: Bi;
    href: string;
    kind: "domain" | "kpi" | "pattern" | "challenge";
  }[];
}
