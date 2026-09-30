import type { Kpi } from "../types";
import { supplyChainKpis } from "./supply-chain";
import { financeKpis } from "./finance";
import { marketingKpis } from "./marketing";
import { operationsKpis } from "./operations";
import { peopleCommerceKpis } from "./people-commerce";

/**
 * The KPI encyclopedia.
 *
 * Deliberately small and deep rather than large and shallow: every entry here
 * carries a worked example, model requirements, validated DAX, pitfalls, and
 * explicit claim provenance. New KPIs are added by appending to a domain file
 * and re-exporting it below — nothing else in the app needs to change.
 */
export const kpis: Kpi[] = [
  ...supplyChainKpis,
  ...financeKpis,
  ...marketingKpis,
  ...operationsKpis,
  ...peopleCommerceKpis,
];

export const kpiById = new Map(kpis.map((k) => [k.id, k]));
export const kpiBySlug = new Map(kpis.map((k) => [k.slug, k]));

export function getKpi(slug: string): Kpi | undefined {
  return kpiBySlug.get(slug);
}

/** Resolve a list of KPI ids, silently skipping ids not yet written. */
export function resolveKpis(ids: readonly string[]): Kpi[] {
  return ids.map((id) => kpiById.get(id)).filter((k): k is Kpi => k !== undefined);
}

/** KPIs belonging to a domain, in the order they appear in the encyclopedia. */
export function kpisForDomain(domainId: string): Kpi[] {
  return kpis.filter((k) => k.domains.includes(domainId));
}

export function kpiCountForDomain(domainId: string): number {
  return kpisForDomain(domainId).length;
}
