"use client";

import type { ReactElement } from "react";
import {
  ActualVsTargetDemo,
  BacklogDemo,
  FunnelDemo,
  PeriodOverPeriodDemo,
  ScatterQuadrantDemo,
  StackedBarDemo,
  VarianceBarDemo,
  WaterfallDemo,
} from "./charts";
import {
  AgingMatrixDemo,
  DecompositionTreeDemo,
  ExceptionTableDemo,
  HeatmapDemo,
  KpiCardDemo,
  KpiCardMultiDemo,
  PlMatrixDemo,
} from "./panels";

/**
 * Demo registry. Pattern content references a demo by key; a missing or
 * mistyped key renders nothing rather than crashing the page.
 */
const registry: Record<string, () => ReactElement> = {
  kpiCard: KpiCardDemo,
  kpiCardMulti: KpiCardMultiDemo,
  periodOverPeriod: PeriodOverPeriodDemo,
  actualVsTarget: ActualVsTargetDemo,
  waterfall: WaterfallDemo,
  varianceBar: VarianceBarDemo,
  stackedBar: StackedBarDemo,
  scatterQuadrant: ScatterQuadrantDemo,
  funnel: FunnelDemo,
  decompositionTree: DecompositionTreeDemo,
  plMatrix: PlMatrixDemo,
  agingMatrix: AgingMatrixDemo,
  heatmap: HeatmapDemo,
  exceptionTable: ExceptionTableDemo,
  backlog: BacklogDemo,
};

export function PatternDemo({ demo }: { demo: string }) {
  const Cmp = registry[demo];
  if (!Cmp) return null;
  return <Cmp />;
}

export function hasDemo(demo: string): boolean {
  return demo in registry;
}
