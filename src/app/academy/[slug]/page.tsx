import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { patterns, getPattern } from "@/content/patterns";
import { PatternView } from "@/components/viz/pattern-view";

export function generateStaticParams() {
  return patterns.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) return {};
  return {
    title: `${pattern.name.ar} — ${pattern.name.en}`,
    description: pattern.question.ar,
  };
}

export default async function PatternPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  if (!pattern) notFound();
  return <PatternView pattern={pattern} />;
}
