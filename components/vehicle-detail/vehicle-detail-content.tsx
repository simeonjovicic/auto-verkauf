import Link from "next/link";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleHero } from "./vehicle-hero";
import { SpecTable } from "./spec-table";
import { InquiryCta } from "./inquiry-cta";

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
                einordbar.
              </h2>
            </div>
            <div className="serif mt-8 space-y-6 text-lg leading-relaxed text-bone/82 sm:text-xl">
              <p>
                Dieses Fahrzeug wird nicht nur als Bild verkauft, sondern als
                vollständiges Paket: Zustand, Historie, Ausstattung und
                technische Einordnung werden vor einer Besichtigung transparent
                vorbereitet.
              </p>
              <p>
                Sie erhalten vorab die relevanten Eckdaten und vor Ort einen
                ruhigen, nachvollziehbaren Rundgang am Fahrzeug. Keine
                Showroom-Hektik, sondern ein klarer Blick auf das Auto und
                seine Substanz.
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
                ["01", "Historie", "Unterlagen, Serviceeinträge und bekannte Besitzdaten werden strukturiert durchgesehen."],
                ["02", "Zustand", "Lack, Innenraum, Technik und Verschleissteile werden vor Ort gemeinsam eingeordnet."],
                ["03", "Entscheidung", "Besichtigung, Probefahrt und nächste Schritte werden ohne Zeitdruck geplant."],
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
              <p className="eyebrow text-mute">Besichtigung</p>
              <p className="serif mt-4 text-2xl leading-tight text-bone">
                Vor Ort sehen, hören und sauber einordnen.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                Wir reservieren ausreichend Zeit für Fahrzeugrundgang,
                Dokumenteneinsicht und eine klare Einschätzung der nächsten
                Schritte.
              </p>
            </div>
            <div className="mt-12">
              <p className="eyebrow text-mute">Standort</p>
              <p className="mt-4 text-sm leading-relaxed text-bone">
                Meyer Motorsport
                <br />
                Himberger Strasse 45
                <br />
                1100 Wien, Österreich
              </p>
              <p className="mt-2 text-xs text-mute">
                Einfahrt Franzosenweg 2 · Termin nach Vereinbarung
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
