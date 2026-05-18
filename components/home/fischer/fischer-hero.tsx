import Link from "next/link";
import { ArrowUpRight, CarFront, MapPin, Phone, Wrench } from "lucide-react";
import { SITE } from "@/lib/site";

const QUICK_ACTIONS = [
  {
    href: "/fahrzeuge",
    icon: CarFront,
    label: "Fahrzeuge",
    value: "Hyundai, Mitsubishi, Eintausch",
  },
  {
    href: "/service",
    icon: Wrench,
    label: "Werkstatt",
    value: "Service, Pickerl, Reparatur",
  },
  {
    href: "/kontakt",
    icon: MapPin,
    label: "Standort",
    value: "Wagramer Straße 36A",
  },
] as const;

export function FischerHero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface text-anthracite">
      <div className="mx-auto max-w-360 px-6 pb-12 pt-8 sm:px-12 sm:pt-10 lg:px-20 lg:pb-16 lg:pt-12">
        <div className="grid grid-cols-1 gap-10 lg:min-h-[620px] lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <div className="relative z-10 lg:col-span-5">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/fa_herz.png"
              alt=""
              className="h-10 w-10 object-contain"
              aria-hidden
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
              Familienbetrieb · Wien-Donaustadt · Est. 1974
            </p>
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-anthracite sm:text-6xl lg:text-[76px]">
            Ihr Auto.
            <span className="block text-hyundai">Aus unserer Familie.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fischer-mute sm:text-lg">
            Fischerauto verbindet Hyundai-Vertragshandel, Mitsubishi, geprüfte
            Eintauschwagen und Service für alle Marken. Seit 1974 in der
            Wagramer Straße, persönlich geführt von Familie Fischer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/fahrzeuge"
              className="inline-flex items-center justify-center gap-2 bg-hyundai px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-hyundai-deep"
            >
              Fahrzeuge ansehen
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-anthracite/15 bg-paper/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-anthracite transition-colors hover:border-hyundai hover:text-hyundai"
            >
              <Phone size={16} strokeWidth={1.8} aria-hidden />
              {SITE.phoneDisplay}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2 text-xs font-semibold text-anthracite/70">
            <li className="border border-fischer-line bg-paper/70 px-3 py-2">
              Hyundai-Vertragshändler
            </li>
            <li className="border border-fischer-line bg-paper/70 px-3 py-2">
              Vollintegrierter Betrieb
            </li>
            <li className="border border-fischer-line bg-paper/70 px-3 py-2">
              Kundenparkplatz vor Ort
            </li>
          </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[1000/606] overflow-hidden rounded-3xl bg-paper shadow-[0_32px_90px_rgba(0,44,95,0.16)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/team.png"
              alt="Familie und Team Fischerauto in Wien-Donaustadt"
              className="absolute inset-0 h-full w-full object-contain"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite/24 via-transparent to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-2xl bg-paper px-6 py-5 shadow-[0_24px_60px_rgba(0,44,95,0.16)] sm:block lg:left-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
                Vor Ort
              </p>
              <p className="mt-2 text-sm leading-relaxed text-anthracite">
                Familie Fischer und das Team sind direkt im Haus erreichbar -
                vom Verkauf bis zur Serviceannahme.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid border border-fischer-line bg-paper shadow-[0_24px_70px_rgba(26,26,26,0.08)] md:grid-cols-[1fr_1fr_1fr_auto]">
          {QUICK_ACTIONS.map(({ href, icon: Icon, label, value }) => (
            <Link
              key={label}
              href={href}
              className="group flex min-h-24 items-center gap-4 border-b border-fischer-line p-5 transition-colors hover:bg-surface-soft md:border-b-0 md:border-r"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-surface text-hyundai transition-colors group-hover:bg-hyundai group-hover:text-paper">
                <Icon size={20} strokeWidth={1.7} aria-hidden />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-anthracite/55">
                  {label}
                </span>
                <span className="mt-1 block text-sm font-semibold text-anthracite">
                  {value}
                </span>
              </span>
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="inline-flex min-h-24 items-center justify-center gap-2 bg-copper px-7 text-sm font-semibold text-paper transition-colors hover:bg-hyundai"
          >
            Termin anfragen
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
          </Link>
          </div>
      </div>
    </section>
  );
}
