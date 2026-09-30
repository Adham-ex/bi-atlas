"use client";

import { useState } from "react";
import { AlertTriangle, ArrowDown, ArrowUp, ChevronDown, Minus } from "lucide-react";
import { useSettings } from "@/i18n/provider";
import { cn } from "@/lib/utils";
import { rampStep, useViz } from "./tokens";

/* ---------------------------------------------------------------- */
/* KPI cards                                                         */
/* ---------------------------------------------------------------- */

function Delta({ value, goodWhenUp }: { value: number; goodWhenUp: boolean }) {
  const v = useViz();
  const flat = Math.abs(value) < 0.05;
  const isGood = value > 0 === goodWhenUp;
  const color = flat ? v.muted : isGood ? v.good : v.bad;
  const Arrow = flat ? Minus : value > 0 ? ArrowUp : ArrowDown;
  return (
    // Direction is carried by the arrow glyph as well as the colour, so the
    // reading survives colour-vision deficiency and greyscale printing.
    <span className="inline-flex items-center gap-1 font-mono text-xs tabular-nums" style={{ color }}>
      <Arrow className="size-3" aria-hidden />
      {value > 0 ? "+" : ""}
      {value.toFixed(1)}%
    </span>
  );
}

export function KpiCardDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const spark = [42, 46, 44, 51, 49, 56, 58, 62, 61, 67];
  const max = Math.max(...spark);

  return (
    <div className="max-w-xs rounded-lg border border-border bg-surface-2 p-4">
      <div className="text-[11px] uppercase tracking-wider text-faint">
        {locale === "ar" ? "الإيراد — هذا الشهر" : "Revenue — this month"}
      </div>
      <div className="mt-2 flex items-end gap-3">
        <span className="font-mono text-3xl font-semibold tabular-nums">2.41M</span>
        <span className="pb-1">
          <Delta value={8.4} goodWhenUp />
        </span>
      </div>
      <div className="mt-1 text-[11px] text-muted">
        {locale === "ar" ? "مقارنة بنفس الشهر العام الماضي" : "vs same month last year"}
      </div>
      <svg viewBox="0 0 120 28" className="mt-3 h-8 w-full" aria-hidden>
        <polyline
          points={spark.map((s, i) => `${(i / (spark.length - 1)) * 118 + 1},${26 - (s / max) * 22}`).join(" ")}
          fill="none"
          stroke={v.series[0]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function KpiCardMultiDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const parts = [
    { ar: "التوفر", en: "Availability", value: 87.5 },
    { ar: "الأداء", en: "Performance", value: 85.7 },
    { ar: "الجودة", en: "Quality", value: 97.0 },
  ];
  const weakest = parts.reduce((a, b) => (a.value <= b.value ? a : b));

  return (
    <div className="max-w-sm rounded-lg border border-border bg-surface-2 p-4">
      <div className="text-[11px] uppercase tracking-wider text-faint">OEE</div>
      <div className="mt-2 flex items-end gap-3">
        <span className="font-mono text-3xl font-semibold tabular-nums">72.7%</span>
        <span className="pb-1">
          <Delta value={-1.8} goodWhenUp />
        </span>
      </div>
      <div className="mt-4 space-y-2.5 border-t border-border pt-3">
        {parts.map((p) => {
          const isWeakest = p.en === weakest.en;
          return (
            <div key={p.en} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-[11px] text-muted">
                {locale === "ar" ? p.ar : p.en}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-3">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${p.value}%`,
                    background: isWeakest ? v.series[3] : v.series[0],
                  }}
                />
              </div>
              <span className="w-12 shrink-0 text-end font-mono text-[11px] tabular-nums">
                {p.value.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-[11px] text-muted">
        {locale === "ar"
          ? `أضعف مكوّن: ${weakest.ar} — ابدأ التحقيق منه.`
          : `Weakest component: ${weakest.en} — start the investigation there.`}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Matrix with conditional formatting                                */
/* ---------------------------------------------------------------- */

const plRows = [
  { ar: "الإيراد", en: "Revenue", actual: 2480, budget: 2400, bold: true },
  { ar: "تكلفة البضاعة المباعة", en: "Cost of goods sold", actual: -1612, budget: -1512, indent: true },
  { ar: "الربح الإجمالي", en: "Gross profit", actual: 868, budget: 888, bold: true },
  { ar: "مصاريف البيع", en: "Selling expenses", actual: -286, budget: -300, indent: true },
  { ar: "مصاريف إدارية", en: "Administrative", actual: -214, budget: -205, indent: true },
  { ar: "الربح التشغيلي", en: "Operating profit", actual: 368, budget: 383, bold: true },
];

export function PlMatrixDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const heads =
    locale === "ar"
      ? ["البند", "الفعلي", "الموازنة", "الانحراف", "%"]
      : ["Line", "Actual", "Budget", "Variance", "%"];

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[34rem] text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-2 text-[11px] uppercase tracking-wider text-faint">
            {heads.map((h, i) => (
              <th key={h} className={cn("px-3 py-2.5", i === 0 ? "text-start" : "text-end")}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plRows.map((r) => {
            const variance = r.actual - r.budget;
            const pct = (variance / Math.abs(r.budget)) * 100;
            // Expenses are stored as negative numbers, so spending less than
            // budget also produces a positive variance. That makes one test
            // correct for both revenue and cost lines.
            const favourable = variance >= 0;
            return (
              <tr key={r.en} className="border-b border-border/60 last:border-0">
                <td
                  className={cn(
                    "px-3 py-2.5",
                    r.bold && "font-semibold",
                    r.indent && "ps-7 text-muted",
                  )}
                >
                  {locale === "ar" ? r.ar : r.en}
                </td>
                <td className="px-3 py-2.5 text-end font-mono tabular-nums">
                  {r.actual.toLocaleString("en-US")}
                </td>
                <td className="px-3 py-2.5 text-end font-mono tabular-nums text-muted">
                  {r.budget.toLocaleString("en-US")}
                </td>
                <td
                  className="px-3 py-2.5 text-end font-mono tabular-nums"
                  style={{ color: favourable ? v.good : v.bad }}
                >
                  {variance > 0 ? "+" : ""}
                  {variance.toLocaleString("en-US")}
                </td>
                <td className="px-3 py-2.5 text-end">
                  <span
                    className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] tabular-nums"
                    style={{
                      color: favourable ? v.good : v.bad,
                      background: `${favourable ? v.good : v.bad}1a`,
                    }}
                  >
                    {favourable ? <ArrowUp className="size-3" aria-hidden /> : <ArrowDown className="size-3" aria-hidden />}
                    {Math.abs(pct).toFixed(1)}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Ageing matrix                                                     */
/* ---------------------------------------------------------------- */

const agingBands = ["0–30", "31–60", "61–90", "91–180", "180+"];
const agingRows = [
  { ar: "إلكترونيات", en: "Electronics", values: [420, 180, 96, 44, 12] },
  { ar: "قطع غيار", en: "Spare parts", values: [160, 210, 240, 310, 480] },
  { ar: "ملابس", en: "Apparel", values: [380, 260, 140, 210, 90] },
  { ar: "أدوات منزلية", en: "Homeware", values: [290, 150, 88, 60, 30] },
];

export function AgingMatrixDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const all = agingRows.flatMap((r) => r.values);
  const max = Math.max(...all);

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[32rem] text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-2 text-[11px] uppercase tracking-wider text-faint">
            <th className="px-3 py-2.5 text-start">{locale === "ar" ? "الفئة" : "Category"}</th>
            {agingBands.map((b) => (
              <th key={b} className="px-3 py-2.5 text-end font-mono">
                {b}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {agingRows.map((r) => (
            <tr key={r.en} className="border-b border-border/60 last:border-0">
              <td className="px-3 py-2.5">{locale === "ar" ? r.ar : r.en}</td>
              {r.values.map((val, i) => {
                const intensity = val / max;
                return (
                  <td key={i} className="px-1.5 py-1.5 text-end">
                    <span
                      className="inline-block w-full rounded px-2 py-1.5 font-mono text-[12px] tabular-nums"
                      style={{
                        // Sequential single-hue ramp: light means near zero.
                        background: rampStep(v.sequential, intensity),
                        color: intensity > 0.55 ? "#F4F5FF" : v.text,
                      }}
                    >
                      {val}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-border px-3 py-2 text-[11px] text-muted">
        {locale === "ar"
          ? "الشرائح مرتبة رقميًا لا أبجديًا، والقيم بالتكلفة لا بالكمية."
          : "Bands sort numerically rather than alphabetically, and values are at cost, not quantity."}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Time heatmap                                                      */
/* ---------------------------------------------------------------- */

const HOURS = [8, 10, 12, 14, 16, 18, 20];
const DAYS_AR = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const DAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const heatValues = [
  [12, 22, 48, 31, 26, 44, 38],
  [18, 34, 61, 40, 33, 52, 41],
  [16, 31, 58, 37, 30, 49, 39],
  [19, 36, 64, 43, 35, 55, 45],
  [22, 41, 72, 49, 38, 66, 58],
  [9, 14, 38, 55, 47, 78, 71],
  [11, 19, 44, 52, 44, 74, 68],
];

export function HeatmapDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const days = locale === "ar" ? DAYS_AR : DAYS_EN;
  const max = Math.max(...heatValues.flat());

  return (
    <div className="space-y-2">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[26rem] border-separate border-spacing-[2px]">
          <thead>
            <tr>
              <th className="w-16" />
              {HOURS.map((h) => (
                <th key={h} className="pb-1 text-center font-mono text-[10px] text-faint">
                  {h}:00
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, r) => (
              <tr key={day}>
                <th className="pe-2 text-end text-[11px] font-normal text-muted">{day}</th>
                {HOURS.map((h, c) => {
                  const val = heatValues[r][c];
                  const intensity = val / max;
                  return (
                    <td key={h}>
                      <div
                        className="h-7 rounded-[3px] text-center font-mono text-[10px] leading-7 tabular-nums"
                        style={{
                          background: rampStep(v.sequential, intensity),
                          color: intensity > 0.55 ? "#F4F5FF" : v.muted,
                        }}
                        title={`${day} ${h}:00 — ${val}`}
                      >
                        {val}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-muted">
        {locale === "ar"
          ? "الذروة مساء الجمعة والسبت — جدولة الورديات بالمتوسط اليومي تفوّت هذا تمامًا."
          : "Peaks land on Friday and Saturday evenings — staffing to a daily average misses this entirely."}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Exception table                                                   */
/* ---------------------------------------------------------------- */

const exceptions = [
  { id: "SO-48213", ar: "مجموعة الراجحي", en: "Al Rajhi Group", days: 6, value: 184000, reason: { ar: "نفاد مخزون", en: "Stock out" } },
  { id: "SO-48277", ar: "شركة نماء", en: "Namaa Co.", days: 4, value: 96500, reason: { ar: "تأخر مورد", en: "Supplier delay" } },
  { id: "SO-48301", ar: "متاجر الأفق", en: "Ufuq Stores", days: 3, value: 61200, reason: { ar: "خطأ شحن", en: "Shipping error" } },
  { id: "SO-48344", ar: "مؤسسة البناء", en: "Bina Est.", days: 2, value: 42800, reason: { ar: "نفاد مخزون", en: "Stock out" } },
];

export function ExceptionTableDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const heads =
    locale === "ar"
      ? ["الطلب", "العميل", "التأخر", "القيمة", "السبب"]
      : ["Order", "Customer", "Late by", "Value", "Reason"];

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[34rem] text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-2 text-[11px] uppercase tracking-wider text-faint">
            {heads.map((h, i) => (
              <th key={h} className={cn("px-3 py-2.5", i > 1 && i < 4 ? "text-end" : "text-start")}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {exceptions.map((row) => (
            <tr key={row.id} className="border-b border-border/60 last:border-0">
              <td className="px-3 py-2.5 font-mono text-[12px]" dir="ltr">
                {row.id}
              </td>
              <td className="px-3 py-2.5">{locale === "ar" ? row.ar : row.en}</td>
              <td className="px-3 py-2.5 text-end">
                <span
                  className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] tabular-nums"
                  style={{
                    color: row.days >= 4 ? v.bad : v.series[2],
                    background: `${row.days >= 4 ? v.bad : v.series[2]}1a`,
                  }}
                >
                  {row.days >= 4 ? <AlertTriangle className="size-3" aria-hidden /> : null}
                  {row.days} {locale === "ar" ? "يوم" : "d"}
                </span>
              </td>
              <td className="px-3 py-2.5 text-end font-mono tabular-nums">
                {row.value.toLocaleString("en-US")}
              </td>
              <td className="px-3 py-2.5 text-muted">{locale === "ar" ? row.reason.ar : row.reason.en}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-border px-3 py-2 text-[11px] text-muted">
        {locale === "ar"
          ? "مرتّب بالخطورة لا بالتاريخ، ويحمل السبب حتى لا يحتاج المستخدم فتح نظام آخر."
          : "Sorted by severity rather than date, and carries the reason so the user need not open another system."}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Decomposition tree                                                */
/* ---------------------------------------------------------------- */

const treeLevels = [
  {
    ar: "كل التوقفات",
    en: "All downtime",
    value: 1840,
    children: [
      {
        ar: "خط التعبئة",
        en: "Packing line",
        value: 940,
        children: [
          { ar: "تغيير المنتج", en: "Changeover", value: 410 },
          { ar: "عطل ميكانيكي", en: "Mechanical fault", value: 330 },
          { ar: "نقص مواد", en: "Material shortage", value: 200 },
        ],
      },
      {
        ar: "خط الخلط",
        en: "Mixing line",
        value: 560,
        children: [
          { ar: "تنظيف", en: "Cleaning", value: 280 },
          { ar: "معايرة", en: "Calibration", value: 180 },
          { ar: "عطل كهربائي", en: "Electrical fault", value: 100 },
        ],
      },
      { ar: "خط التعبئة الثانوي", en: "Secondary line", value: 340, children: [] },
    ],
  },
];

export function DecompositionTreeDemo() {
  const { locale } = useSettings();
  const v = useViz();
  const root = treeLevels[0];
  const [expanded, setExpanded] = useState<string | null>(root.children[0].en);

  return (
    <div className="flex flex-wrap items-start gap-3 text-sm" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="rounded-lg border border-border bg-surface-2 px-3.5 py-2.5">
        <div className="text-[11px] text-faint">{locale === "ar" ? root.ar : root.en}</div>
        <div className="mt-0.5 font-mono text-lg font-semibold tabular-nums">
          {root.value.toLocaleString("en-US")}
        </div>
        <div className="text-[10px] text-faint">{locale === "ar" ? "دقيقة" : "minutes"}</div>
      </div>

      <div className="space-y-1.5">
        {root.children.map((child) => {
          const pct = child.value / root.value;
          const open = expanded === child.en;
          const hasChildren = (child.children?.length ?? 0) > 0;
          return (
            <button
              key={child.en}
              type="button"
              onClick={() => hasChildren && setExpanded(open ? null : child.en)}
              disabled={!hasChildren}
              className={cn(
                "flex w-56 items-center gap-2 rounded-lg border px-3 py-2 text-start transition-colors",
                open ? "border-primary/50 bg-primary/10" : "border-border bg-surface-2",
                hasChildren ? "hover:border-border-strong" : "cursor-default opacity-70",
              )}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px]">
                  {locale === "ar" ? child.ar : child.en}
                </span>
                <span className="mt-1 block h-1 w-full overflow-hidden rounded-full bg-surface-3">
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${pct * 100}%`, background: v.series[0] }}
                  />
                </span>
              </span>
              <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted">
                {child.value}
              </span>
              {hasChildren ? (
                <ChevronDown
                  className={cn("size-3.5 shrink-0 text-faint transition-transform", open && "rotate-180")}
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {expanded ? (
        <div className="space-y-1.5">
          {root.children
            .find((c) => c.en === expanded)
            ?.children?.map((leaf) => (
              <div
                key={leaf.en}
                className="flex w-52 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2"
              >
                <span className="flex-1 truncate text-[12px] text-muted">
                  {locale === "ar" ? leaf.ar : leaf.en}
                </span>
                <span className="font-mono text-[11px] tabular-nums">{leaf.value}</span>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}
