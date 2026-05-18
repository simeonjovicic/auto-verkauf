"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Member = {
  name: string;
  role: string;
  slug: string;
  initials: string;
};

const TEAM: Member[] = [
  { name: "Franz Fischer", role: "Inhaber, Gründer", slug: "franz-fischer", initials: "FF" },
  { name: "Monika Fischer", role: "Inhaberin, Gründerin", slug: "monika-fischer", initials: "MF" },
  { name: "Marko Fischer", role: "Geschäftsleitung", slug: "marko-fischer", initials: "MF" },
  { name: "Irina Fischer", role: "Inhaberin", slug: "irina-fischer", initials: "IF" },
  { name: "Daniel Fischer", role: "Stv. Geschäftsführer", slug: "daniel-fischer", initials: "DF" },
  { name: "David Balogh", role: "Verkaufsleitung", slug: "david-balogh", initials: "DB" },
  { name: "Robert Scholz", role: "Verkäufer", slug: "robert-scholz", initials: "RS" },
  { name: "Marion Schulz", role: "Service & Annahme", slug: "marion-schulz", initials: "MS" },
  { name: "Bojan Benko", role: "Teile & Garantie", slug: "bojan-benko", initials: "BB" },
  { name: "Philipp Scholz", role: "Annahme & Teile", slug: "philipp-scholz", initials: "PS" },
  { name: "Maximilian Pajones", role: "Fahrzeugtechnik", slug: "maximilian-pajones", initials: "MP" },
  { name: "Kristian Stevanovic", role: "Fahrzeugtechnik", slug: "kristian-stevanovic", initials: "KS" },
  { name: "Kamil Rajski", role: "KFZ-Aufbereitung", slug: "kamil-rajski", initials: "KR" },
  { name: "Christian Kunz", role: "Administration", slug: "christian-kunz", initials: "CK" },
];

export function FischerTeam() {
  return (
    <section
      id="team"
      className="bg-paper text-anthracite"
      aria-labelledby="fischer-team-title"
    >
      <div className="mx-auto max-w-360 px-6 py-24 sm:px-12 sm:py-28 lg:px-20 lg:py-32">
        <Reveal direction="up" distance={12} duration={700}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-anthracite/50">
              05
            </span>
            <div className="h-px w-12 bg-anthracite/25" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-anthracite/55">
              Familie &amp; Team
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <h2
            id="fischer-team-title"
            className="mt-8 max-w-3xl font-serif text-4xl italic leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]"
          >
            {TEAM.length} Menschen.
            <br />
            Ein Haus.
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-7">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={m.slug} direction="up" delay={Math.min(i, 5) * 70}>
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-md bg-surface">
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(170deg, #ece4d0 0%, #d9cdb1 60%, #c8b994 100%)",
                  }}
                  aria-hidden
                >
                  <span className="font-serif text-3xl italic text-anthracite/35">
                    {m.initials}
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/fischerauto/team/${m.slug}.jpg`}
                  alt={`Portrait ${m.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="mt-4">
                <p className="font-serif text-base italic leading-tight text-anthracite lg:text-lg">
                  {m.name}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-anthracite/55">
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal direction="up" delay={120}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/unternehmen"
              className="inline-flex items-center gap-2 rounded-full border border-anthracite/25 px-7 py-3 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite hover:bg-anthracite hover:text-paper"
            >
              Alle Mitarbeiter ansehen
              <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
