import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { kpis, getKpi } from "@/content/kpis";
import { KpiView } from "@/components/kpi/kpi-view";

export function generateStaticParams() {
  return kpis.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kpi = getKpi(slug);
  if (!kpi) return {};
  return {
    title: `${kpi.nameAr} — ${kpi.name}`,
    description: kpi.definition.ar,
  };
}

export default async function KpiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kpi = getKpi(slug);
  if (!kpi) notFound();
  return <KpiView kpi={kpi} />;
}
