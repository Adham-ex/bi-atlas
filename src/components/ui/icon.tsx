"use client";

import {
  AlertTriangle,
  AlignLeft,
  BarChart3,
  BarChart4,
  Banknote,
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Code2,
  Compass,
  Copy,
  Factory,
  Filter,
  GitBranch,
  Grid3x3,
  Headset,
  HeartPulse,
  Inbox,
  Landmark,
  Layers,
  LayoutGrid,
  Megaphone,
  ScatterChart,
  Search,
  Server,
  ShoppingCart,
  Square,
  Table2,
  Target,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

/**
 * Explicit icon registry.
 *
 * Content files reference icons by name; resolving through this map means a
 * typo in content renders a safe fallback instead of crashing the page.
 */
const registry: Record<string, LucideIcon> = {
  AlertTriangle,
  AlignLeft,
  BarChart3,
  BarChart4,
  Banknote,
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Code2,
  Compass,
  Copy,
  Factory,
  Filter,
  GitBranch,
  Grid3x3,
  Headset,
  HeartPulse,
  Inbox,
  Landmark,
  Layers,
  LayoutGrid,
  Megaphone,
  ScatterChart,
  Search,
  Server,
  ShoppingCart,
  Square,
  Table2,
  Target,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
};

export function Icon({
  name,
  className,
  size = 18,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Square;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} aria-hidden />;
}

export function hasIcon(name: string): boolean {
  return name in registry;
}
