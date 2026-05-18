import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SERVICE_AREAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Werkstatt, Pickerl, Inspektion, Reparatur aller Fabrikate, Karosserie, Reifen, Ersatzteile und Versicherungsservice bei Fischerauto in Wien.",
};

type Offering = { t: string; d: string };

const OFFERINGS: Offering[] = [
  {
    t: "Service & Inspektion",
    d: "Kundendienst, Ölwechsel, §57a-Begutachtung, Klimaanlage, Standheizung sowie Fahrzeugelektrik und -elektronik.",
  },
  {
    t: "Reparatur aller Fabrikate",
    d: "Die Werkstatt betreut nicht nur Hyundai und Mitsubishi, sondern repariert Fahrzeuge aller Marken.",
  },
  {
    t: "Unfall & Karosserie",
    d: "Unfallinstandsetzung, Karosseriearbeiten, Verdeckservice, Reifenservice und Schadenabwicklung aus einer Hand.",
  },
  {
    t: "Teile & Zubehör",
    d: "Ersatzteile, Zubehörfachberatung, Teilelager und Garantieleitung direkt am Standort.",
  },
  {
    t: "Ersatzwagen & Mietwagen",
    d: "Bei Service oder Havarie werden Ersatzwagen und Mietwagen nach Verfügbarkeit organisiert.",
  },
  {
    t: "Versicherung & Finanzierung",
    d: "Versicherungsservice, Finanzierungsberatung und Leasing werden gemeinsam mit dem Verkaufsteam abgestimmt.",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Werkstatt, Annahme und Teile unter einem Dach."
        lede="Fischerauto betreut Hyundai und Mitsubishi, repariert aber auch Fahrzeuge aller Fabrikate. Persönlich, freundlich und mit modern ausgestatteter Werkstatt in Wien-Donaustadt."
      />

      <section className="relative bg-ink">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/service-bg.jpg"
            alt="Mechaniker bei der Arbeit an einem Fahrzeug"
            draggable={false}
            className="h-full w-full object-cover select-none"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60"
          />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold!">Was Sie erwartet</p>
            <h2 className="serif mt-6 text-balance text-4xl text-bone sm:text-5xl">
              Ein kontrollierender Blick vom Profi.
            </h2>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-mute sm:text-lg">
              Wer ein Fahrzeug anschafft, tätigt eine bedeutende Investition.
              Damit es zuverlässig bleibt, ist zumindest einmal im Jahr ein
              professioneller Check sinnvoll.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-7">
            {OFFERINGS.map((l) => (
              <div key={l.t}>
                <h3 className="serif text-2xl text-bone">{l.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-gold!">Leistungsumfang</p>
            <h2 className="serif mt-6 text-4xl text-bone sm:text-5xl">
              Von Pickerl bis Leasing.
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-8">
            {SERVICE_AREAS.map((item) => (
              <li
                key={item}
                className="border border-line bg-bone/[0.03] px-5 py-4 text-sm text-bone"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold!">Serviceanfrage</p>
            <h2 className="serif mt-6 text-balance text-4xl text-bone sm:text-5xl">
              Schreiben Sie der Annahme.
            </h2>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute sm:text-lg">
              Beschreiben Sie kurz Fahrzeug, Anliegen und Wunschzeitraum. Das
              Team meldet sich zur Terminabstimmung.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-end">
            <Link
              href="/kontakt/?fahrzeug=service"
              className="inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold"
            >
              Service anfragen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
