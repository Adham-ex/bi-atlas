import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { challenges, getChallenge } from "@/content/challenges";
import { ChallengeView } from "@/components/practice/challenge-view";

export function generateStaticParams() {
  return challenges.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const challenge = getChallenge(slug);
  if (!challenge) return {};
  return {
    title: challenge.title.ar,
    description: challenge.scenario.ar,
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const challenge = getChallenge(slug);
  if (!challenge) notFound();
  return <ChallengeView challenge={challenge} />;
}
