import type { Bi, PatternFamily } from "./types";

/** Display names for pattern families, shared by the academy list and detail. */
export const FAMILY_LABELS: Record<PatternFamily, Bi> = {
  "kpi-card": { ar: "بطاقات المؤشرات", en: "KPI cards" },
  trend: { ar: "الاتجاه الزمني", en: "Trend" },
  comparison: { ar: "المقارنة", en: "Comparison" },
  composition: { ar: "التركيب", en: "Composition" },
  distribution: { ar: "التوزيع", en: "Distribution" },
  flow: { ar: "التدفق", en: "Flow" },
  table: { ar: "الجداول والمصفوفات", en: "Tables & matrices" },
  monitoring: { ar: "المراقبة التشغيلية", en: "Operational monitoring" },
};

export const FAMILIES = Object.keys(FAMILY_LABELS) as PatternFamily[];
