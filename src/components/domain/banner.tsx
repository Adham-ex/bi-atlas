import type { Domain } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Domain illustrations.
 *
 * Rendered as inline SVG rather than image files: they are local by
 * construction, scale losslessly, carry no embedded text (so they never need
 * translating), and pick up each domain accent from the design tokens. Every
 * motif shares the same visual grammar — soft gradient wash, a low-opacity
 * grid, and flat geometry at one stroke weight — so twelve different drawings
 * still read as one set.
 */

interface MotifProps {
  accent: string;
  accentAlt: string;
}

function Crates({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      <path d="M40 132 L96 104 L152 132 L96 160 Z" fill={accent} opacity="0.85" />
      <path d="M40 132 L40 100 L96 72 L96 104 Z" fill={accentAlt} opacity="0.7" />
      <path d="M152 132 L152 100 L96 72 L96 104 Z" fill={accent} opacity="0.45" />
      <path
        d="M176 148 C 216 148 216 96 256 96 C 292 96 300 124 336 124"
        stroke={accent}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />
      <circle cx="176" cy="148" r="7" fill={accentAlt} />
      <circle cx="256" cy="96" r="7" fill={accent} />
      <circle cx="336" cy="124" r="7" fill={accentAlt} />
    </g>
  );
}

function Ledger({ accent, accentAlt }: MotifProps) {
  const bars = [
    [64, 156, 30],
    [112, 132, 54],
    [160, 148, 38],
    [208, 100, 86],
    [256, 76, 110],
  ];
  return (
    <g>
      {bars.map(([x, y, h], i) => (
        <rect
          key={x}
          x={x}
          y={y}
          width="30"
          height={h}
          rx="4"
          fill={i % 2 === 0 ? accentAlt : accent}
          opacity={0.4 + i * 0.12}
        />
      ))}
      <circle cx="322" cy="86" r="26" fill="none" stroke={accent} strokeWidth="3" opacity="0.8" />
      <circle cx="322" cy="86" r="12" fill={accent} opacity="0.5" />
      <path d="M56 186 H352" stroke={accentAlt} strokeWidth="2" opacity="0.45" />
    </g>
  );
}

function Broadcast({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      {[34, 60, 86, 112].map((r, i) => (
        <circle
          key={r}
          cx="120"
          cy="118"
          r={r}
          fill="none"
          stroke={i % 2 === 0 ? accent : accentAlt}
          strokeWidth="2.5"
          opacity={0.55 - i * 0.1}
        />
      ))}
      <circle cx="120" cy="118" r="14" fill={accent} />
      <path d="M244 64 H356 L322 116 H278 Z" fill={accentAlt} opacity="0.55" />
      <path d="M278 128 H322 L312 166 H288 Z" fill={accent} opacity="0.75" />
    </g>
  );
}

function Vitals({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      <path
        d="M40 126 H108 L126 84 L150 166 L172 118 L200 118"
        stroke={accent}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="236" y="70" width="112" height="112" rx="18" fill={accentAlt} opacity="0.35" />
      <rect x="284" y="90" width="16" height="72" rx="6" fill={accent} opacity="0.9" />
      <rect x="256" y="118" width="72" height="16" rx="6" fill={accent} opacity="0.9" />
    </g>
  );
}

function Plate({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      <circle cx="140" cy="126" r="66" fill={accentAlt} opacity="0.35" />
      <circle cx="140" cy="126" r="44" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="140" cy="126" r="20" fill={accent} opacity="0.7" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${258 + i * 34} 168 C ${248 + i * 34} 140 ${268 + i * 34} 130 ${258 + i * 34} 100`}
          stroke={i === 1 ? accent : accentAlt}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
      ))}
    </g>
  );
}

function Gantt({ accent, accentAlt }: MotifProps) {
  const bars = [
    [56, 72, 128],
    [96, 102, 104],
    [148, 132, 132],
    [212, 162, 96],
  ];
  return (
    <g>
      {bars.map(([x, y, w], i) => (
        <rect
          key={y}
          x={x}
          y={y}
          width={w}
          height="20"
          rx="10"
          fill={i % 2 === 0 ? accent : accentAlt}
          opacity={0.85 - i * 0.12}
        />
      ))}
      <path d="M330 56 V190" stroke={accent} strokeWidth="2.5" strokeDasharray="6 8" opacity="0.7" />
      <circle cx="330" cy="56" r="6" fill={accent} />
    </g>
  );
}

function OrgNodes({ accent, accentAlt }: MotifProps) {
  const leaves = [120, 200, 280];
  return (
    <g>
      {leaves.map((x) => (
        <path key={x} d={`M200 96 V128 H${x} V152`} stroke={accentAlt} strokeWidth="2.5" fill="none" opacity="0.6" />
      ))}
      <circle cx="200" cy="80" r="22" fill={accent} opacity="0.9" />
      {leaves.map((x, i) => (
        <circle key={x} cx={x} cy="170" r="18" fill={accentAlt} opacity={0.5 + i * 0.15} />
      ))}
    </g>
  );
}

function Storefront({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={56 + (i % 2) * 58}
          y={78 + Math.floor(i / 2) * 58}
          width="48"
          height="48"
          rx="8"
          fill={i % 3 === 0 ? accent : accentAlt}
          opacity={0.4 + i * 0.13}
        />
      ))}
      <path
        d="M216 88 H344 L326 174 H234 Z"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M252 88 V70 A28 28 0 0 1 308 70 V88" fill="none" stroke={accentAlt} strokeWidth="3" />
    </g>
  );
}

function Machinery({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      <circle cx="128" cy="112" r="46" fill="none" stroke={accent} strokeWidth="10" opacity="0.8" />
      <circle cx="128" cy="112" r="16" fill={accentAlt} />
      <circle cx="220" cy="148" r="30" fill="none" stroke={accentAlt} strokeWidth="8" opacity="0.7" />
      <circle cx="220" cy="148" r="10" fill={accent} />
      <rect x="264" y="88" width="88" height="14" rx="7" fill={accent} opacity="0.55" />
      <rect x="264" y="116" width="66" height="14" rx="7" fill={accentAlt} opacity="0.55" />
      <rect x="264" y="144" width="88" height="14" rx="7" fill={accent} opacity="0.35" />
    </g>
  );
}

function Conversation({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      <path d="M56 70 H196 A12 12 0 0 1 208 82 V132 A12 12 0 0 1 196 144 H92 L68 168 V144 H56 A12 12 0 0 1 44 132 V82 A12 12 0 0 1 56 70 Z" fill={accent} opacity="0.7" />
      <path d="M232 104 H352 A12 12 0 0 1 364 116 V158 A12 12 0 0 1 352 170 H286 L264 190 V170 H232 A12 12 0 0 1 220 158 V116 A12 12 0 0 1 232 104 Z" fill={accentAlt} opacity="0.5" />
      {[86, 116, 146].map((x) => (
        <circle key={x} cx={x} cy="107" r="6" fill="#fff" opacity="0.7" />
      ))}
    </g>
  );
}

function Vault({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      <path d="M72 96 L200 52 L328 96" fill="none" stroke={accent} strokeWidth="3.5" strokeLinejoin="round" />
      {[100, 152, 204, 256].map((x, i) => (
        <rect key={x} x={x} y="108" width="22" height="70" rx="5" fill={i % 2 === 0 ? accent : accentAlt} opacity={0.75 - i * 0.1} />
      ))}
      <rect x="80" y="186" width="240" height="12" rx="6" fill={accentAlt} opacity="0.6" />
    </g>
  );
}

function Stack({ accent, accentAlt }: MotifProps) {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="56"
          y={70 + i * 42}
          width="150"
          height="30"
          rx="8"
          fill={i === 1 ? accent : accentAlt}
          opacity={0.75 - i * 0.14}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx="76" cy={85 + i * 42} r="5" fill="#fff" opacity="0.65" />
      ))}
      <path d="M244 92 L312 68 L344 128 L288 176 L232 148 Z" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.8" />
      {[
        [244, 92],
        [312, 68],
        [344, 128],
        [288, 176],
        [232, 148],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill={accentAlt} />
      ))}
    </g>
  );
}

const motifs: Record<string, (p: MotifProps) => React.ReactElement> = {
  "supply-chain": Crates,
  finance: Ledger,
  marketing: Broadcast,
  healthcare: Vitals,
  fnb: Plate,
  "project-management": Gantt,
  hr: OrgNodes,
  retail: Storefront,
  manufacturing: Machinery,
  "customer-service": Conversation,
  banking: Vault,
  "it-saas": Stack,
};

export function DomainBanner({
  domain,
  className,
  /** Cards use a shorter crop than the domain hero. */
  variant = "card",
}: {
  domain: Domain;
  className?: string;
  variant?: "card" | "hero";
}) {
  const Motif = motifs[domain.id] ?? Stack;
  const gradientId = `bi-grad-${domain.id}`;
  const gridId = `bi-grid-${domain.id}`;

  return (
    <svg
      viewBox={variant === "card" ? "0 40 400 170" : "0 20 400 200"}
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={domain.name.en}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={domain.accent} stopOpacity="0.22" />
          <stop offset="55%" stopColor={domain.accentAlt} stopOpacity="0.1" />
          <stop offset="100%" stopColor={domain.accent} stopOpacity="0.02" />
        </linearGradient>
        <pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0 H0 V28" fill="none" stroke={domain.accent} strokeWidth="0.6" opacity="0.18" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="240" fill={`url(#${gradientId})`} />
      <rect x="0" y="0" width="400" height="240" fill={`url(#${gridId})`} />
      <Motif accent={domain.accent} accentAlt={domain.accentAlt} />
    </svg>
  );
}
