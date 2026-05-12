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

export function VehicleDetailContent({ vehicle, mode = "page" }: Props) {
  const isDrawer = mode === "drawer";

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
            <p className="eyebrow text-mute">Über dieses Fahrzeug</p>
            <div className="serif mt-6 space-y-6 text-lg leading-relaxed text-bone/85 sm:text-xl">
              <p>
                Persönlich verlesen, im Detail dokumentiert, in Wien einsehbar.
                Jedes Fahrzeug in unserem Bestand erfüllt die gleichen
                Kriterien: belegbare Historie, technische Integrität und ein
                Zustand, der den Charakter des Modells erkennen lässt.
              </p>
              <p>
                Vollständige Unterlagen, Servicehefte, Originalrechnungen und
                Vorbesitzerketten stellen wir gerne im Rahmen einer Besichtigung
                bereit.
              </p>
            </div>

            <div className="mt-12">
              <InquiryCta vehicle={vehicle} />
            </div>
          </div>

          <aside className={isDrawer ? "xl:col-span-5" : "lg:col-span-5"}>
            <SpecTable vehicle={vehicle} />
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
          <div className="mx-auto mt-16 max-w-[1440px] border-t border-line pt-8">
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
