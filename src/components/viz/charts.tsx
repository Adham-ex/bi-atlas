"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { useMemo, type ReactNode } from "react";
import { useSettings } from "@/i18n/provider";
import { useViz } from "./tokens";

/* ---------------------------------------------------------------- */
/* Shared chrome                                                     */
/* ---------------------------------------------------------------- */

/**
 * Every chart here carries a legend when it has two or more series, and direct
 * labels at four series or fewer — identity is never colour-alone, because the
 * palette clears CVD separation only in the band that requires secondary
 * encoding. See `tokens.ts`.
 */
export function Legend({
  items,
}: {
  items: { label: string; color: string; dashed?: boolean }[];
}) {
  if (items.length < 2) return null;
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5 text-[11px] text-muted">
          <span
            className="inline-block h-2.5 w-2.5 shrink-0 rounded-sm"
            style={
              it.dashed
                ? { border: `1.5px dashed ${it.color}`, borderRadius: 2 }
                : { background: it.color }
            }
            aria-hidden
          />
          {it.label}
        </li>
      ))}
    </ul>
  );
}

function ChartTooltip({
  active,
  payload,
  label,
  suffix,
}: {
  active?: boolean;
  payload?: Array<{ name?: string; value?: number | string; color?: string }>;
  label?: string | number;
  suffix?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-[11px] shadow-[var(--shadow-pop)]">
      {label !== undefined ? (
        <div className="mb-1 font-medium text-text">{label}</div>
      ) : null}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-muted">
          <span
            className="inline-block size-2 rounded-sm"
            style={{ background: p.color }}
            aria-hidden
          />
          <span>{p.name}</span>
          <span className="ms-auto font-mono tabular-nums text-text">
            {typeof p.value === "number" ? p.value.toLocaleString("en-US") : p.value}
            {suffix}
          </span>
        </div>
      ))}
    </div>
  );
}

const axisProps = (color: string) => ({
  stroke: color,
  fontSize: 10,
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
});

/* ---------------------------------------------------------------- */
/* Trend: period over period                                         */
/* ---------------------------------------------------------------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const trendData = MONTHS.map((m, i) => ({
  month: m,
  current: [1840, 1760, 2010, 2180, 2090, 2340, 2520, 2410, 2680][i],
  prior: [1620, 1690, 1750, 1880, 1940, 1990, 2110, 2180, 2240][i],
}));

export function PeriodOverPeriodDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const labels =
    locale === "ar"
      ? { current: "هذا العام", prior: "العام السابق" }
      : { current: "This year", prior: "Last year" };

  return (
    <div className="space-y-3">
      <div className="h-56" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid stroke={v.grid} vertical={false} />
            <XAxis dataKey="month" {...axisProps(v.axis)} />
            <YAxis {...axisProps(v.axis)} width={44} />
            <Tooltip content={<ChartTooltip />} cursor={{ stroke: v.grid, strokeWidth: 1 }} />
            <Line
              type="monotone"
              dataKey="prior"
              name={labels.prior}
              stroke={v.neutral}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="current"
              name={labels.current}
              stroke={v.series[0]}
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 0, fill: v.series[0] }}
              activeDot={{ r: 5, stroke: v.surface, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Legend
        items={[
          { label: labels.current, color: v.series[0] },
          { label: labels.prior, color: v.neutral, dashed: true },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Comparison: actual vs target                                      */
/* ---------------------------------------------------------------- */

const otifData = [
  { week: "W1", actual: 91.2 },
  { week: "W2", actual: 88.4 },
  { week: "W3", actual: 93.1 },
  { week: "W4", actual: 86.7 },
  { week: "W5", actual: 90.5 },
  { week: "W6", actual: 94.3 },
  { week: "W7", actual: 92.8 },
  { week: "W8", actual: 89.1 },
];
const OTIF_TARGET = 92;

export function ActualVsTargetDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const labels =
    locale === "ar"
      ? { actual: "الفعلي", target: "المستهدف 92%", below: "دون الهدف" }
      : { actual: "Actual", target: "Target 92%", below: "Below target" };

  return (
    <div className="space-y-3">
      <div className="h-56" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={otifData} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid stroke={v.grid} vertical={false} />
            <XAxis dataKey="week" {...axisProps(v.axis)} />
            <YAxis domain={[80, 100]} {...axisProps(v.axis)} width={44} unit="%" />
            <Tooltip content={<ChartTooltip suffix="%" />} cursor={{ fill: v.grid, fillOpacity: 0.35 }} />
            <ReferenceLine
              y={OTIF_TARGET}
              stroke={v.axis}
              strokeDasharray="5 5"
              strokeWidth={1.5}
            />
            <Bar dataKey="actual" name={labels.actual} radius={[4, 4, 0, 0]} maxBarSize={30}>
              {otifData.map((row) => (
                <Cell
                  key={row.week}
                  fill={row.actual >= OTIF_TARGET ? v.series[1] : v.bad}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Legend
        items={[
          { label: labels.actual, color: v.series[1] },
          { label: labels.below, color: v.bad },
          { label: labels.target, color: v.axis, dashed: true },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Composition: waterfall                                            */
/* ---------------------------------------------------------------- */

type WaterfallRow = { key: string; ar: string; en: string; delta: number; kind: "start" | "step" | "end" };

const waterfallRows: WaterfallRow[] = [
  { key: "open", ar: "بداية الفترة", en: "Opening MRR", delta: 420, kind: "start" },
  { key: "new", ar: "عملاء جدد", en: "New", delta: 78, kind: "step" },
  { key: "exp", ar: "توسع", en: "Expansion", delta: 41, kind: "step" },
  { key: "con", ar: "تقليص", en: "Contraction", delta: -19, kind: "step" },
  { key: "churn", ar: "فقد", en: "Churn", delta: -34, kind: "step" },
  { key: "close", ar: "نهاية الفترة", en: "Closing MRR", delta: 486, kind: "end" },
];

export function WaterfallDemo() {
  const v = useViz();
  const { locale } = useSettings();

  // Each floating step starts where the previous one ended, so the bases are
  // a running total. Built inside useMemo so the accumulator never leaks into
  // render scope and the array keeps a stable identity between renders.
  const data = useMemo(() => {
    const rows: {
      name: string;
      base: number;
      value: number;
      kind: WaterfallRow["kind"];
      delta: number;
    }[] = [];
    let running = 0;
    for (const r of waterfallRows) {
      const name = locale === "ar" ? r.ar : r.en;
      if (r.kind === "start" || r.kind === "end") {
        running = r.delta;
        rows.push({ name, base: 0, value: r.delta, kind: r.kind, delta: r.delta });
      } else {
        const base = r.delta >= 0 ? running : running + r.delta;
        running += r.delta;
        rows.push({ name, base, value: Math.abs(r.delta), kind: r.kind, delta: r.delta });
      }
    }
    return rows;
  }, [locale]);

  const labels =
    locale === "ar"
      ? { total: "الإجمالي", up: "زيادة", down: "نقص" }
      : { total: "Total", up: "Increase", down: "Decrease" };

  return (
    <div className="space-y-3">
      <div className="h-60" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 16, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid stroke={v.grid} vertical={false} />
            <XAxis dataKey="name" {...axisProps(v.axis)} interval={0} height={44} angle={-18} textAnchor="end" />
            <YAxis {...axisProps(v.axis)} width={44} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const row = payload[0].payload as (typeof data)[number];
                return (
                  <div className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-[11px] shadow-[var(--shadow-pop)]">
                    <div className="font-medium text-text">{row.name}</div>
                    <div className="mt-1 font-mono tabular-nums text-muted">
                      {row.delta > 0 && row.kind === "step" ? "+" : ""}
                      {row.delta.toLocaleString("en-US")}
                    </div>
                  </div>
                );
              }}
              cursor={{ fill: v.grid, fillOpacity: 0.35 }}
            />
            {/* Invisible spacer bar lifts each floating step to its base. */}
            <Bar dataKey="base" stackId="w" fill="transparent" />
            <Bar dataKey="value" stackId="w" radius={[4, 4, 0, 0]} maxBarSize={44}>
              {data.map((row) => (
                <Cell
                  key={row.name}
                  fill={
                    row.kind !== "step"
                      ? v.series[0]
                      : row.delta >= 0
                        ? v.series[1]
                        : v.bad
                  }
                />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <Legend
        items={[
          { label: labels.total, color: v.series[0] },
          { label: labels.up, color: v.series[1] },
          { label: labels.down, color: v.bad },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Comparison: variance bars                                         */
/* ---------------------------------------------------------------- */

const varianceRows = [
  { ar: "قطع الغيار", en: "Spare parts", value: 182 },
  { ar: "المواد الخام", en: "Raw materials", value: 94 },
  { ar: "التعبئة", en: "Packaging", value: 31 },
  { ar: "المنتج النهائي", en: "Finished goods", value: -46 },
  { ar: "قيد التشغيل", en: "Work in progress", value: -128 },
];

export function VarianceBarDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const data = varianceRows
    .map((r) => ({ name: locale === "ar" ? r.ar : r.en, value: r.value }))
    .sort((a, b) => b.value - a.value);

  const labels =
    locale === "ar" ? { over: "فوق الخطة", under: "دون الخطة" } : { over: "Above plan", under: "Below plan" };

  return (
    <div className="space-y-3">
      <div className="h-56" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 0 }}>
            <CartesianGrid stroke={v.grid} horizontal={false} />
            <XAxis type="number" {...axisProps(v.axis)} />
            <YAxis type="category" dataKey="name" {...axisProps(v.axis)} width={110} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: v.grid, fillOpacity: 0.35 }} />
            <ReferenceLine x={0} stroke={v.axis} strokeWidth={1} />
            <Bar dataKey="value" name={locale === "ar" ? "الانحراف" : "Variance"} radius={4} maxBarSize={18}>
              {data.map((row) => (
                <Cell key={row.name} fill={row.value >= 0 ? v.series[2] : v.series[4]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Legend
        items={[
          { label: labels.over, color: v.series[2] },
          { label: labels.under, color: v.series[4] },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Composition: stacked bar                                          */
/* ---------------------------------------------------------------- */

const attritionData = [
  { ar: "العمليات", en: "Operations", voluntary: 14, involuntary: 4 },
  { ar: "المبيعات", en: "Sales", voluntary: 11, involuntary: 7 },
  { ar: "الدعم", en: "Support", voluntary: 19, involuntary: 3 },
  { ar: "التقنية", en: "Technology", voluntary: 6, involuntary: 2 },
  { ar: "المالية", en: "Finance", voluntary: 3, involuntary: 1 },
];

export function StackedBarDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const labels =
    locale === "ar"
      ? { vol: "مغادرة طوعية", inv: "مغادرة غير طوعية" }
      : { vol: "Voluntary", inv: "Involuntary" };
  const data = attritionData.map((r) => ({
    name: locale === "ar" ? r.ar : r.en,
    [labels.vol]: r.voluntary,
    [labels.inv]: r.involuntary,
  }));

  return (
    <div className="space-y-3">
      <div className="h-56" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid stroke={v.grid} vertical={false} />
            <XAxis dataKey="name" {...axisProps(v.axis)} />
            <YAxis {...axisProps(v.axis)} width={36} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: v.grid, fillOpacity: 0.35 }} />
            {/* 2px surface stroke keeps adjacent segments separable without colour. */}
            <Bar
              dataKey={labels.vol}
              stackId="a"
              fill={v.series[0]}
              stroke={v.surface}
              strokeWidth={2}
              maxBarSize={38}
            />
            <Bar
              dataKey={labels.inv}
              stackId="a"
              fill={v.series[2]}
              stroke={v.surface}
              strokeWidth={2}
              radius={[4, 4, 0, 0]}
              maxBarSize={38}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Legend
        items={[
          { label: labels.vol, color: v.series[0] },
          { label: labels.inv, color: v.series[2] },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Distribution: quadrant scatter                                    */
/* ---------------------------------------------------------------- */

const channelData = [
  { ar: "بحث مدفوع", en: "Paid search", cac: 420, ltv: 3100, size: 1800 },
  { ar: "تواصل اجتماعي", en: "Paid social", cac: 690, ltv: 2050, size: 2400 },
  { ar: "شراكات", en: "Partnerships", cac: 310, ltv: 4600, size: 900 },
  { ar: "بريد إلكتروني", en: "Email", cac: 120, ltv: 2400, size: 600 },
  { ar: "مؤتمرات", en: "Events", cac: 980, ltv: 5200, size: 1400 },
  { ar: "إحالات", en: "Referral", cac: 180, ltv: 3800, size: 1100 },
];

export function ScatterQuadrantDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const data = channelData.map((r) => ({ ...r, name: locale === "ar" ? r.ar : r.en }));
  const label = locale === "ar" ? "خط LTV = 3×CAC" : "LTV = 3x CAC line";

  return (
    <div className="space-y-3">
      <div className="h-60" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 12, right: 16, bottom: 4, left: 0 }}>
            <CartesianGrid stroke={v.grid} />
            <XAxis type="number" dataKey="cac" name="CAC" {...axisProps(v.axis)} />
            <YAxis type="number" dataKey="ltv" name="LTV" {...axisProps(v.axis)} width={52} />
            <ZAxis type="number" dataKey="size" range={[60, 380]} />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const row = payload[0].payload as (typeof data)[number];
                return (
                  <div className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-[11px] shadow-[var(--shadow-pop)]">
                    <div className="font-medium text-text">{row.name}</div>
                    <div className="mt-1 space-y-0.5 font-mono tabular-nums text-muted">
                      <div>CAC {row.cac.toLocaleString("en-US")}</div>
                      <div>LTV {row.ltv.toLocaleString("en-US")}</div>
                      <div>
                        LTV/CAC {(row.ltv / row.cac).toFixed(1)}
                      </div>
                    </div>
                  </div>
                );
              }}
              cursor={{ strokeDasharray: "4 4", stroke: v.axis }}
            />
            <ReferenceLine
              segment={[
                { x: 0, y: 0 },
                { x: 1000, y: 3000 },
              ]}
              stroke={v.axis}
              strokeDasharray="5 5"
            />
            <Scatter
              data={data}
              fill={v.series[0]}
              fillOpacity={0.8}
              stroke={v.surface}
              strokeWidth={2}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[11px] text-muted">
        {label} · {locale === "ar" ? "حجم النقطة = حجم الإنفاق" : "Point size = spend"}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Flow: funnel                                                      */
/* ---------------------------------------------------------------- */

const funnelStages = [
  { ar: "زيارة", en: "Visit", value: 48200 },
  { ar: "عرض منتج", en: "Product view", value: 18640 },
  { ar: "إضافة للسلة", en: "Add to cart", value: 6120 },
  { ar: "بدء الدفع", en: "Checkout", value: 3480 },
  { ar: "شراء", en: "Purchase", value: 2410 },
];

export function FunnelDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const max = funnelStages[0].value;

  return (
    <div className="space-y-2.5" dir="ltr">
      {funnelStages.map((s, i) => {
        const prev = i === 0 ? null : funnelStages[i - 1].value;
        const rate = prev ? (s.value / prev) * 100 : 100;
        return (
          <div key={s.en} className="flex items-center gap-3">
            <span
              className="w-28 shrink-0 truncate text-[11px] text-muted"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              {locale === "ar" ? s.ar : s.en}
            </span>
            <div className="relative h-8 flex-1 overflow-hidden rounded-md bg-surface-2">
              <div
                className="flex h-full items-center rounded-md px-2.5 transition-[width] duration-700"
                style={{
                  width: `${(s.value / max) * 100}%`,
                  background: v.sequential[Math.min(v.sequential.length - 1, 4 - i)],
                }}
              >
                <span className="font-mono text-[11px] font-medium tabular-nums text-white mix-blend-normal">
                  {s.value.toLocaleString("en-US")}
                </span>
              </div>
            </div>
            <span className="w-14 shrink-0 text-end font-mono text-[11px] tabular-nums text-faint">
              {i === 0 ? "—" : `${rate.toFixed(1)}%`}
            </span>
          </div>
        );
      })}
      <p className="pt-1 text-[11px] text-muted" dir={locale === "ar" ? "rtl" : "ltr"}>
        {locale === "ar"
          ? "العمود الأخير هو معدل الانتقال من المرحلة السابقة، لا من القمة."
          : "The last column is the stage-to-stage rate, not conversion from the top."}
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Monitoring: backlog                                               */
/* ---------------------------------------------------------------- */

const backlogData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
  const arrived = [142, 168, 155, 181, 196, 88, 64][i];
  const closed = [130, 151, 162, 158, 172, 96, 71][i];
  return { day, arrived, closed: -closed, open: [312, 329, 322, 345, 369, 361, 354][i] };
});

export function BacklogDemo() {
  const v = useViz();
  const { locale } = useSettings();
  const labels =
    locale === "ar"
      ? { arrived: "وارد", closed: "مُغلق", open: "المتراكم المفتوح" }
      : { arrived: "Arrived", closed: "Closed", open: "Open backlog" };

  return (
    <div className="space-y-3">
      <div className="h-56" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={backlogData} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid stroke={v.grid} vertical={false} />
            <XAxis dataKey="day" {...axisProps(v.axis)} />
            <YAxis {...axisProps(v.axis)} width={44} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: v.grid, fillOpacity: 0.3 }} />
            <ReferenceLine y={0} stroke={v.axis} strokeWidth={1} />
            <Bar dataKey="arrived" name={labels.arrived} fill={v.series[0]} radius={[4, 4, 0, 0]} maxBarSize={22} />
            <Bar dataKey="closed" name={labels.closed} fill={v.series[1]} radius={[0, 0, 4, 4]} maxBarSize={22} />
            <Line
              type="monotone"
              dataKey="open"
              name={labels.open}
              stroke={v.series[3]}
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 0, fill: v.series[3] }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <Legend
        items={[
          { label: labels.arrived, color: v.series[0] },
          { label: labels.closed, color: v.series[1] },
          { label: labels.open, color: v.series[3] },
        ]}
      />
      <p className="text-[11px] text-muted">
        {locale === "ar"
          ? "المتراكم لقطة: لا يُجمع عبر الأيام، ولهذا يُعرض كخط لا كعمود."
          : "Backlog is a snapshot: it does not sum across days, which is why it is a line rather than a bar."}
      </p>
    </div>
  );
}

export function ChartFrame({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-border bg-surface p-4">{children}</div>;
}
