import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { domains, getDomain } from "@/content/domains";
import { DomainView } from "@/components/domain/domain-view";

// All twelve domains are known at build time, so every domain page is
// statically generated from the content module.
export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return {};
  return {
    title: `${domain.name.ar} — ${domain.name.en}`,
    description: domain.tagline.ar,
  };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();
  return <DomainView domain={domain} />;
}
