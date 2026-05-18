import Link from "next/link";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleHero } from "./vehicle-hero";
import { SpecTable } from "./spec-table";
import { InquiryCta } from "./inquiry-cta";
import { SITE, WILLHABEN_URL } from "@/lib/site";

type DetailMode = "page" | "drawer";

type Props = {
  vehicle: Vehicle;
  mode?: DetailMode;
};

function getOverviewPoints(vehicle: Vehicle) {
  return [
    vehicle.highlight,
    vehicle.category,
    vehicle.specs.transmission,
    vehicle.specs.color,
  ].filter(Boolean) as string[];
}

export function VehicleDetailContent({ vehicle, mode = "page" }: Props) {
  const isDrawer = mode === "drawer";
  const overviewPoints = getOverviewPoints(vehicle);

  return (
    <>
      <VehicleHero vehicle={vehicle} mode={mode} />

      <section
        className={
          isDrawer
            ? "bg-ink px-5 py-10 text-bone sm:px-8 sm:py-12"
            : "bg-ink px-6 py-20 text-bone sm:px-12 sm:py-24 lg:px-20"
        }
      >
        <div
          className={
            isDrawer
              ? "grid grid-cols-1 gap-y-12 xl:grid-cols-12 xl:gap-x-10"
              : "mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12"
          }
        >
          <div className={isDrawer ? "xl:col-span-7" : "lg:col-span-7"}>
            <p className="eyebrow text-mute">Überblick</p>
            <div className="mt-6 max-w-[760px]">
              <h2 className="serif text-4xl leading-tight text-bone sm:text-5xl">
                {vehicle.name} {vehicle.subtitle}: klar dokumentiert, sofort
                anfragbar.
              </h2>
            </div>
            <div className="serif mt-8 space-y-6 text-lg leading-relaxed text-bone/82 sm:text-xl">
              <p>
                Bei Fischerauto wird jedes Angebot persönlich besprochen:
                Ausstattung, Verfügbarkeit, Finanzierung, Versicherung und
                die nächsten Schritte bis zur Probefahrt.
              </p>
              <p>
                Bei Eintausch- und Gebrauchtwagen geht es zusätzlich um
                Garantie, Überprüfung und nachvollziehbare Eckdaten. Der
                tagesaktuelle Bestand wird laufend auf willhaben gepflegt.
              </p>
            </div>

            {overviewPoints.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {overviewPoints.map((point) => (
                  <div
                    key={point}
                    className="border border-line bg-bone/[0.03] px-5 py-4"
                  >
                    <p className="text-sm leading-relaxed text-bone">{point}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-14 grid grid-cols-1 gap-8 border-y border-line py-10 sm:grid-cols-3">
              {[
                ["01", "Beratung", "Modell, Ausstattung, Lieferzeit und Budget werden direkt mit dem Team geklärt."],
                ["02", "Besichtigung", "Probefahrt, Schauraumtermin oder Gebrauchtwagencheck werden passend vorbereitet."],
                ["03", "Abwicklung", "Finanzierung, Leasing, Versicherung, Service und Ersatzwagen bleiben unter einem Dach."],
              ].map(([num, title, copy]) => (
                <div key={num}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {num}
                  </p>
                  <h3 className="serif mt-4 text-2xl text-bone">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <InquiryCta vehicle={vehicle} />
            </div>
          </div>

          <aside className={isDrawer ? "xl:col-span-5" : "lg:col-span-5"}>
            <SpecTable vehicle={vehicle} />
            <div className="mt-12 border border-line bg-bone/[0.03] p-6">
              <p className="eyebrow text-mute">Vor Ort</p>
              <p className="serif mt-4 text-2xl leading-tight text-bone">
                Wagramer Straße 36A, 1220 Wien.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                Kundenparkplatz, Schauraumflächen im Untergeschoß und auf dem
                Dach sowie persönliche Ansprechpartner für Verkauf und Service.
              </p>
              {vehicle.brand === "Gebrauchtwagen" ? (
                <a
                  href={WILLHABEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-[11px] uppercase tracking-[0.2em] text-bone hover:text-gold"
                >
                  Live-Bestand auf willhaben ansehen →
                </a>
              ) : null}
            </div>
            <div className="mt-12">
              <p className="eyebrow text-mute">Standort</p>
              <p className="mt-4 text-sm leading-relaxed text-bone">
                {SITE.name}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postal} {SITE.address.city}, {SITE.address.country}
              </p>
              <p className="mt-2 text-xs text-mute">
                Verkauf, Service, Teile und Finanzierung am selben Standort
              </p>
            </div>
          </aside>
        </div>

        {!isDrawer ? (
          <div className="mx-auto mt-24 max-w-[1440px] border-t border-line pt-8">
            <Link
              href="/fahrzeuge/"
              className="text-[11px] uppercase tracking-[0.2em] text-mute hover:text-bone"
            >
              Zurück zur Übersicht
            </Link>
          </div>
        ) : null}
      </section>
    </>
  );
}
