"use client";

import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import type { VizPattern } from "@/content/types";
import { domainById } from "@/content/domains";
import { FAMILY_LABELS } from "@/content/pattern-labels";
import { useSettings } from "@/i18n/provider";
import { useRecordVisit } from "@/lib/workspace";
import { Icon } from "@/components/ui/icon";
import { PageBody, PageHeader } from "@/components/ui/page-header";
import {
  Badge,
  BulletList,
  Card,
  CodeBlock,
  IllustrativeNote,
  Mono,
  SectionHeading,
} from "@/components/ui/primitives";
import { FadeIn } from "@/components/ui/motion";
import { PatternDemo } from "./demos";

export function PatternView({ pattern }: { pattern: VizPattern }) {
  const { d, tr } = useSettings();

  useRecordVisit({ kind: "pattern", slug: pattern.slug, label: pattern.name });

  const domains = pattern.domains.map((id) => domainById.get(id)).filter(Boolean);

  return (
    <>
      <PageHeader
        crumbs={[
          { label: d.brand, href: "/" },
          { label: d.nav.academy, href: "/academy" },
          { label: pattern.name },
        ]}
        title={tr(pattern.name)}
        description={pattern.question}
        meta={
          <>
            <Badge tone="primary">{tr(FAMILY_LABELS[pattern.family])}</Badge>
            {domains.map((dom) =>
              dom ? (
                <Link key={dom.id} href={`/domains/${dom.slug}`}>
                  <Badge className="transition-colors hover:border-border-strong">
                    <Icon name={dom.icon} size={12} />
                    {tr(dom.name)}
                  </Badge>
                </Link>
              ) : null,
            )}
          </>
        }
        aside={
          <span className="flex size-16 items-center justify-center rounded-xl border border-border bg-surface-2 text-primary-soft">
            <Icon name={pattern.icon} size={28} />
          </span>
        }
      />

      <PageBody>
        {/* Live example first: the picture is the argument. */}
        <FadeIn>
          <Card>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
                {tr(d.pattern.example)}
              </h2>
              <IllustrativeNote />
            </div>
            <div className="rounded-lg border border-border bg-surface-2/40 p-5">
              <PatternDemo demo={pattern.demo} />
            </div>
          </Card>
        </FadeIn>

        {/* Use / avoid */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="flex items-center gap-2 text-secondary">
              <CheckCircle2 className="size-4" aria-hidden />
              <h2 className="text-sm font-semibold">{tr(d.pattern.useWhen)}</h2>
            </div>
            <div className="mt-4">
              <BulletList items={pattern.useWhen} tone="ok" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-2 text-danger">
              <XCircle className="size-4" aria-hidden />
              <h2 className="text-sm font-semibold">{tr(d.pattern.avoidWhen)}</h2>
            </div>
            <div className="mt-4">
              <BulletList items={pattern.avoidWhen} tone="warn" />
            </div>
          </Card>
        </div>

        {/* Data needs + field wells */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
              {tr(d.pattern.dataNeeds)}
            </h2>
            <div className="mt-4">
              <BulletList items={pattern.dataNeeds} />
            </div>
          </Card>
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
              {tr(d.pattern.fields)}
            </h2>
            <dl className="mt-4 divide-y divide-border">
              {pattern.fields.map((f) => (
                <div key={f.slot} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-2.5">
                  <dt className="shrink-0">
                    <Mono>{f.slot}</Mono>
                  </dt>
                  <dd className="min-w-[12rem] flex-1 text-[13px] leading-relaxed text-muted">
                    {tr(f.expects)}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>

        {/* Interactions + mistakes */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
              {tr(d.pattern.interactions)}
            </h2>
            <div className="mt-4">
              <BulletList items={pattern.interactions} tone="ok" />
            </div>
          </Card>
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-faint">
              {tr(d.pattern.mistakes)}
            </h2>
            <div className="mt-4">
              <BulletList items={pattern.mistakes} tone="warn" />
            </div>
          </Card>
        </div>

        {pattern.dax?.length ? (
          <div className="mt-14">
            <SectionHeading title={d.kpi.code} />
            {pattern.dax.map((sample, i) => (
              <Card key={i} className="mb-4">
                <h3 className="mb-4 text-sm font-semibold">{tr(sample.label)}</h3>
                <CodeBlock code={sample.code} language={sample.language.toUpperCase()} />
                <div className="mt-4">
                  <BulletList items={sample.assumptions} tone="warn" />
                </div>
              </Card>
            ))}
          </div>
        ) : null}
      </PageBody>
    </>
  );
}
