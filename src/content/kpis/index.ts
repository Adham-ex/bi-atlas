import type { Kpi } from "../types";
import { supplyChainKpis } from "./supply-chain";
import { financeKpis } from "./finance";
import { marketingKpis } from "./marketing";
import { operationsKpis } from "./operations";
import { peopleCommerceKpis } from "./people-commerce";
import { fnbKpis } from "./fnb";
import { retailKpis } from "./retail";
import { logisticsKpis } from "./logistics";
import { growthKpis } from "./growth";
import { hrKpis } from "./hr";
import { customerServiceKpis } from "./customer-service";
import { itSaasKpis } from "./it-saas";
import { corporateFinanceKpis } from "./corporate-finance";
import { healthcareKpis } from "./healthcare";
import { projectKpis } from "./projects";
import { manufacturingKpis } from "./manufacturing";
import { bankingKpis } from "./banking";

/**
 * The KPI encyclopedia.
 *
 * Deep rather than shallow: every entry here
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
  // Each domain's top six (see Domain.topKpis), one file per domain.
  ...fnbKpis,
  ...retailKpis,
  ...logisticsKpis,
  ...growthKpis,
  ...hrKpis,
  ...customerServiceKpis,
  ...itSaasKpis,
  ...corporateFinanceKpis,
  ...healthcareKpis,
  ...projectKpis,
  ...manufacturingKpis,
  ...bankingKpis,
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

/**
 * Splits a domain's KPIs into its ranked top six (in the domain's own order)
 * and every other KPI that also applies to it.
 */
export function kpisForDomainRanked(domain: {
  id: string;
  topKpis: readonly string[];
}): { top: Kpi[]; more: Kpi[] } {
  const top = resolveKpis(domain.topKpis);
  const topIds = new Set(top.map((k) => k.id));
  return { top, more: kpisForDomain(domain.id).filter((k) => !topIds.has(k.id)) };
}

export function kpiCountForDomain(domainId: string): number {
  return kpisForDomain(domainId).length;
}
