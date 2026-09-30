"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Motion helpers.
 *
 * Every component here checks `useReducedMotion` and collapses to an instant,
 * fully-visible state when the user asks for reduced motion — animation is
 * never load-bearing for readability or navigation.
 */

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  y = 12,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container: children animate in sequence as the group enters view. */
export function Stagger({
  children,
  className,
  step = 0.05,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  as?: "div" | "ul" | "ol";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : step } },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;

  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
  };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}

/** Card lift on hover. Disabled entirely under reduced motion. */
export function Lift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}

/** Progress bar that grows from zero, or renders at its final width instantly. */
export function AnimatedBar({
  value,
  color,
  className,
  label,
}: {
  value: number; // 0..1
  color?: string;
  className?: string;
  label?: string;
}) {
  const reduce = useReducedMotion();
  const pct = Math.max(0, Math.min(1, value));
  return (
    <div
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-surface-3", className)}
      role="progressbar"
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: color ?? "var(--color-primary)" }}
        initial={reduce ? false : { width: 0 }}
        whileInView={{ width: `${pct * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      />
    </div>
  );
}

export { motion, useReducedMotion };
