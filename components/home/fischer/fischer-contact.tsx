import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

const HOURS = [
  { label: "Verkauf", value: "Mo–Fr 9:00–18:00 · Sa 9:00–12:00" },
  { label: "Werkstatt", value: "Mo–Do 7:30–16:45 · Fr 7:00–13:00" },
  { label: "Teilelager", value: "Mo–Do 8:00–16:00 · Fr 8:00–12:00" },
];

export function FischerContact() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.googleMapsQuery)}`;

  return (
    <section
      id="kontakt"
      className="bg-paper text-anthracite"
      aria-labelledby="fischer-kontakt-title"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left column */}
          <Reveal direction="up" className="">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-anthracite/50">
                08
              </span>
              <div className="h-px w-12 bg-anthracite/25" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-anthracite/55">
                Besuchen Sie uns
              </p>
            </div>

            <h2
              id="fischer-kontakt-title"
              className="mt-8 font-serif text-4xl italic leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]"
            >
              Wagramer Straße 36a,
              <br />
              1220 Wien.
            </h2>

            <dl className="mt-10 space-y-4 text-sm leading-relaxed">
              {HOURS.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-fischer-line pb-3 last:border-b-0"
                >
                  <dt className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-anthracite/55">
                    {h.label}
                  </dt>
                  <dd className="text-anthracite">{h.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-anthracite px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-anthracite/85"
              >
                Route planen
                <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-anthracite/30 px-6 py-3 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite"
              >
                {SITE.email}
              </a>
            </div>

            <p className="mt-10 max-w-md text-sm leading-relaxed text-fischer-mute">
              Eigener Kundenparkplatz · Ausstellung im Untergeschoß und auf
              dem Dach · Mit U1 Kaisermühlen-VIC oder Bus 92A erreichbar.
            </p>
          </Reveal>

          {/* Right column — stylized map */}
          <Reveal direction="left" delay={150} className="relative">
            <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl border border-fischer-line bg-surface">
              {/* Subtle grid */}
              <svg
                className="absolute inset-0 h-full w-full text-anthracite/4"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Donau river */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 400"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M 0 110 Q 140 80 240 130 T 500 150"
                  stroke="#a8c2dc"
                  strokeWidth="22"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* River label */}
                <text x="350" y="90" fontFamily="serif" fontStyle="italic" fontSize="16" fill="#7a8a99">
                  Donau
                </text>

                {/* Roads */}
                <line x1="0" y1="240" x2="500" y2="180" stroke="#cfc8b8" strokeWidth="3" />
                <line x1="120" y1="0" x2="280" y2="400" stroke="#cfc8b8" strokeWidth="3" />
                <line x1="0" y1="300" x2="500" y2="280" stroke="#cfc8b8" strokeWidth="3" />
                <line x1="320" y1="0" x2="220" y2="400" stroke="#cfc8b8" strokeWidth="2.5" />

                {/* Donaupark */}
                <rect x="180" y="180" width="90" height="70" fill="#c8d6b5" rx="3" />
                <text x="186" y="270" fontFamily="serif" fontStyle="italic" fontSize="12" fill="#7a8a7a">
                  Donaupark
                </text>

                {/* Wagramer Straße label */}
                <text
                  x="380"
                  y="195"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="2"
                  fill="#8a8275"
                >
                  WAGRAMER ST
                </text>

                {/* Buildings */}
                <rect x="80" y="320" width="36" height="28" fill="#d4cdbb" />
                <rect x="160" y="340" width="30" height="24" fill="#d4cdbb" />
                <rect x="350" y="310" width="40" height="32" fill="#d4cdbb" />
                <rect x="410" y="340" width="34" height="26" fill="#d4cdbb" />

                {/* Fischer pin */}
                <circle cx="320" cy="190" r="22" fill="#d05a3a" opacity="0.25" />
                <path
                  d="M 320 168 C 310 168 304 175 304 184 C 304 196 320 212 320 212 C 320 212 336 196 336 184 C 336 175 330 168 320 168 Z"
                  fill="#c64a2a"
                />
                <circle cx="320" cy="183" r="5" fill="#ffffff" />
                <text
                  x="346"
                  y="190"
                  fontFamily="serif"
                  fontStyle="italic"
                  fontSize="15"
                  fill="#1a1a1a"
                >
                  Fischer
                </text>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
