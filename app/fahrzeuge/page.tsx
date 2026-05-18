import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CarFront, ShieldCheck, Wrench } from "lucide-react";
import { VehicleGrid } from "@/components/vehicles/vehicle-grid";
import { vehicles } from "@/lib/vehicles";
import { WILLHABEN_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fahrzeuge",
  description:
    "Hyundai und Mitsubishi Neuwagen, aktuelle Aktionen und geprüfte Eintauschwagen bei Fischerauto in Wien-Donaustadt.",
};

const VEHICLE_HERO_BADGES = [
  { icon: CarFront, label: "Neuwagen" },
  { icon: ShieldCheck, label: "Garantie" },
  { icon: Wrench, label: "Service" },
] as const;

export default function FahrzeugePage() {
  return (
    <>
      <section className="bg-surface px-6 pb-16 pt-32 text-anthracite sm:px-12 sm:pb-20 sm:pt-40 lg:px-20">
        <div className="mx-auto max-w-360">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-16">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
                Fahrzeuge · Bestand · Aktionen
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-anthracite sm:text-6xl lg:text-7xl">
                Neuwagen und geprüfte Eintauschwagen.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-fischer-mute sm:text-lg">
                {vehicles.length} hervorgehobene Angebote, Fahrzeugansichten und
                Einstiege in den aktuellen Bestand. Den tagesaktuellen
                Gebrauchtwagenbestand pflegt Fischerauto direkt auf willhaben.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-hyundai px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-hyundai-deep"
                >
                  Probefahrt anfragen
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
                </Link>
                <a
                  href={WILLHABEN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-anthracite/15 bg-paper px-7 py-3.5 text-sm font-semibold text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
                >
                  Live-Bestand
                  <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-fischer-line bg-paper shadow-[0_28px_80px_rgba(0,44,95,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fischerauto/tucson-red-new-front.png"
                  alt="Hyundai Fahrzeugansicht bei Fischerauto"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
                <div className="grid grid-cols-3 border-t border-fischer-line text-xs font-semibold text-anthracite/70">
                  {VEHICLE_HERO_BADGES.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center justify-center gap-2 border-r border-fischer-line px-3 py-4 last:border-r-0"
                    >
                      <Icon size={16} strokeWidth={1.7} aria-hidden />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-14 text-anthracite sm:px-12 sm:py-18 lg:px-20">
        <div className="mx-auto max-w-360">
          <VehicleGrid />
        </div>
      </section>
    </>
  );
}
