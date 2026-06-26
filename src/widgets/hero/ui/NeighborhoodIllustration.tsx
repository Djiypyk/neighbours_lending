import { cn } from "@/shared/lib";

/**
 * Minimal vector illustration of a calm modern neighborhood.
 * Pure SVG — no raster assets, crisp at any size, great for LCP.
 */
export function NeighborhoodIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={cn("h-auto w-full", className)}
      fill="none"
      role="img"
      aria-label="Иллюстрация современного района с домами, деревьями и людьми"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EAF1FE" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6495ED" />
          <stop offset="1" stopColor="#4F86F7" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <rect x="0" y="0" width="520" height="440" rx="32" fill="url(#sky)" />

      {/* soft hills */}
      <path d="M0 372c120-34 180-18 260 0s180 22 260-6v74H0Z" fill="#EDF2F7" />
      <path d="M0 392c140-22 210 8 280 14s170-6 240-26v60H0Z" fill="#E2E8F0" opacity=".7" />

      {/* houses row */}
      {/* house 1 */}
      <g>
        <rect x="64" y="232" width="96" height="120" rx="14" fill="#FFFFFF" />
        <rect x="64" y="232" width="96" height="120" rx="14" stroke="#E2E8F0" strokeWidth="2" />
        <path d="M58 236l54-40 54 40" stroke="#8CB4F5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="84" y="262" width="24" height="24" rx="6" fill="#A7C7FF" />
        <rect x="118" y="262" width="24" height="24" rx="6" fill="#A7C7FF" />
        <rect x="100" y="304" width="24" height="48" rx="8" fill="#6495ED" />
      </g>

      {/* house 2 (tall) */}
      <g>
        <rect x="186" y="188" width="104" height="164" rx="16" fill="#FFFFFF" />
        <rect x="186" y="188" width="104" height="164" rx="16" stroke="#E2E8F0" strokeWidth="2" />
        <path d="M180 192l58-36 58 36" stroke="#6495ED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="208" y="216" width="26" height="26" rx="6" fill="#A7C7FF" />
        <rect x="244" y="216" width="26" height="26" rx="6" fill="#A7C7FF" />
        <rect x="208" y="256" width="26" height="26" rx="6" fill="#A7C7FF" />
        <rect x="244" y="256" width="26" height="26" rx="6" fill="#A7C7FF" />
        <rect x="224" y="300" width="28" height="52" rx="8" fill="#4F86F7" />
      </g>

      {/* house 3 */}
      <g>
        <rect x="316" y="246" width="92" height="106" rx="14" fill="#FFFFFF" />
        <rect x="316" y="246" width="92" height="106" rx="14" stroke="#E2E8F0" strokeWidth="2" />
        <path d="M310 250l52-38 52 38" stroke="#8CB4F5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="334" y="272" width="24" height="24" rx="6" fill="#A7C7FF" />
        <rect x="368" y="272" width="24" height="24" rx="6" fill="#A7C7FF" />
        <rect x="350" y="312" width="24" height="40" rx="8" fill="#6495ED" />
      </g>

      {/* trees */}
      <g>
        <rect x="436" y="300" width="8" height="52" rx="4" fill="#94A3B8" />
        <circle cx="440" cy="292" r="30" fill="#A7C7FF" />
        <circle cx="440" cy="292" r="30" stroke="#8CB4F5" strokeWidth="2" />
      </g>
      <g>
        <rect x="28" y="312" width="7" height="40" rx="3.5" fill="#94A3B8" />
        <circle cx="31.5" cy="304" r="22" fill="#C9DBFB" />
      </g>

      {/* location pin */}
      <g>
        <ellipse cx="262" cy="120" rx="26" ry="8" fill="#0D1B2A" opacity=".06" />
        <path d="M262 36c-26 0-46 20-46 45 0 33 46 71 46 71s46-38 46-71c0-25-20-45-46-45Z" fill="url(#pinGrad)" />
        <path d="M262 36c-26 0-46 20-46 45 0 33 46 71 46 71s46-38 46-71c0-25-20-45-46-45Z" stroke="#FFFFFF" strokeOpacity=".3" strokeWidth="2" />
        <circle cx="262" cy="80" r="17" fill="#FFFFFF" />
        <path d="M254 81l5 5 10-10" stroke="#4F86F7" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* little people */}
      <g>
        <circle cx="150" cy="372" r="8" fill="#4F86F7" />
        <rect x="142" y="382" width="16" height="20" rx="8" fill="#6495ED" />
      </g>
      <g>
        <circle cx="178" cy="376" r="7" fill="#8CB4F5" />
        <rect x="171" y="385" width="14" height="18" rx="7" fill="#A7C7FF" />
      </g>
      <g>
        <circle cx="350" cy="374" r="8" fill="#6495ED" />
        <rect x="342" y="384" width="16" height="20" rx="8" fill="#8CB4F5" />
      </g>
    </svg>
  );
}
