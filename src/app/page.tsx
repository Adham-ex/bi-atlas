"use client";

import { domains } from "@/content/domains";
import { kpis } from "@/content/kpis";
import { patterns } from "@/content/patterns";
import { challenges } from "@/content/challenges";
import { Hero } from "@/components/home/hero";
import {
  AcademyShowcase,
  DomainGrid,
  FeaturedChallenge,
  KpiSpotlight,
  PathsSection,
  ProgressSection,
} from "@/components/home/sections";

// Chosen deliberately: a waterfall and a conditionally formatted matrix are
// the two patterns most often built wrong, so they carry the showcase.
const SHOWCASE = ["waterfall-variance", "pl-matrix"];

export default function HomePage() {
  const featuredPatterns = SHOWCASE.map((id) => patterns.find((p) => p.id === id)).filter(
    (p): p is (typeof patterns)[number] => Boolean(p),
  );
  const featuredChallenge = challenges.find((c) => c.id === "ch-roas-breakeven") ?? challenges[0];

  return (
    <>
      <Hero
        domainCount={domains.length}
        kpiCount={kpis.length}
        patternCount={patterns.length}
      />
      <DomainGrid />
      <KpiSpotlight />
      <AcademyShowcase featured={featuredPatterns} />
      <FeaturedChallenge challenge={featuredChallenge} />
      <PathsSection />
      <ProgressSection />
    </>
  );
}
