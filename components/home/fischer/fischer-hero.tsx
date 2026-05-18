import Link from "next/link";
import { ArrowRight, CarFront, MapPin, Phone, Wrench } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

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
      <div className="mx-auto max-w-360 px-6 pb-16 pt-12 sm:px-12 sm:pb-20 sm:pt-14 lg:px-20 lg:pb-24 lg:pt-16">
        <Reveal direction="up" distance={12} duration={700}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-anthracite/50">
              01
            </span>
            <div className="h-px w-12 bg-anthracite/25" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-anthracite/55">
              Autohaus Fischer · Wien-Donaustadt · seit 1974
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:min-h-140 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <div className="relative z-10 lg:col-span-6">
            <Reveal direction="up" delay={100}>
              <h1 className="font-serif text-5xl italic leading-[1.02] tracking-tight sm:text-6xl lg:text-[80px]">
                Ihr Auto.
                <br />
                Aus unserer Familie.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={250}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-fischer-mute lg:text-[17px]">
                Fischerauto verbindet Hyundai-Vertragshandel, Mitsubishi, geprüfte
                Eintauschwagen und Service für alle Marken. Seit 1974 in der
                Wagramer Straße, persönlich geführt von Familie Fischer.
              </p>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/fahrzeuge"
                  className="inline-flex items-center gap-2 rounded-full bg-anthracite px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-anthracite/85"
                >
                  Fahrzeuge ansehen
                  <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-anthracite/25 px-7 py-3.5 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite"
                >
                  <Phone size={15} strokeWidth={1.8} aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={200} className="relative lg:col-span-6">
            <div className="relative aspect-1000/606 overflow-hidden rounded-2xl bg-paper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fischerauto/team.png"
                alt="Familie und Team Fischerauto in Wien-Donaustadt"
                className="absolute inset-0 h-full w-full object-contain"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={500} className="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl border border-fischer-line bg-paper md:grid-cols-[1fr_1fr_1fr_auto]">
          {QUICK_ACTIONS.map(({ href, icon: Icon, label, value }) => (
            <Link
              key={label}
              href={href}
              className="group flex min-h-24 items-center gap-4 border-b border-fischer-line p-5 transition-colors hover:bg-surface md:border-b-0 md:border-r"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-anthracite transition-colors group-hover:bg-anthracite group-hover:text-paper">
                <Icon size={18} strokeWidth={1.7} aria-hidden />
              </span>
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-anthracite/55">
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
            className="inline-flex min-h-24 items-center justify-center gap-2 bg-anthracite px-7 text-sm font-semibold text-paper transition-colors hover:bg-anthracite/85"
          >
            Termin anfragen
            <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
