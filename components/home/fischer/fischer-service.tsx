import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CalendarCheck,
  Car,
  KeySquare,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { value: "Seit 1974", label: "in dritter Generation" },
  { value: "Alle Marken", label: "markenunabhängig" },
  { value: "6 Hebebühnen", label: "eigenes Teilelager" },
  { value: "§57a", label: "Pickerl ohne Wartezeit" },
] as const;

type Service = {
  image: string;
  alt: string;
  title: string;
  body: string;
  meta: string;
};

const SERVICES: Service[] = [
  {
    image: "/fischerauto/schauraum01.png",
    alt: "Werkstatt-Annahme bei Fischerauto",
    title: "Werkstatt für alle Marken",
    body: "Reparatur, Inspektion und Karosserie — auch wenn Sie nicht bei uns gekauft haben.",
    meta: "Mo–Do 7:30–16:45",
  },
  {
    image: "/fischerauto/schauraum02.png",
    alt: "§57a Pickerl-Prüfstelle bei Fischerauto",
    title: "§57a Pickerl im Haus",
    body: "Begutachtung direkt im Anschluss an den Service — ohne separaten Termin.",
    meta: "Unter 90 Minuten",
  },
  {
    image: "/fischerauto/kona-superbonus.jpg",
    alt: "Hyundai Eintauschwagen bei Fischerauto",
    title: "Eintauschwagen",
    body: "Geprüft, mit Garantie, transparent bewertet — zum Marktwert.",
    meta: "Bewertung in 24 Stunden",
  },
  {
    image: "/fischerauto/schauraum03.png",
    alt: "Service & Pflege bei Fischerauto",
    title: "Service & Pflege",
    body: "Ölwechsel, Klima, Reifen, KFZ-Aufbereitung — alles aus einer Hand.",
    meta: "Kostenvoranschlag vorab",
  },
  {
    image: "/fischerauto/range-superbonus.jpg",
    alt: "Hyundai Finanzierung bei Fischerauto",
    title: "Finanzierung & Leasing",
    body: "Konditionen direkt vom Hyundai-Vertragshändler. Persönliche Beratung im Haus.",
    meta: "Hyundai-Vertragshändler",
  },
  {
    image: "/fischerauto/hero-showroom.jpg",
    alt: "Miet- und Ersatzwagen bei Fischerauto",
    title: "Miet- & Ersatzwagen",
    body: "Damit Sie während des Service-Termins mobil bleiben — auf Wunsch mit Zustellung.",
    meta: "Auf Anfrage verfügbar",
  },
];

const PROCESS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Termin vereinbaren",
    body: "Telefonisch, per Mail oder direkt im Haus. Schriftliche Bestätigung.",
  },
  {
    icon: Car,
    step: "02",
    title: "Fahrzeug abgeben",
    body: "Persönliche Annahme durch einen Serviceassistenten. Ersatzwagen auf Anfrage.",
  },
  {
    icon: KeySquare,
    step: "03",
    title: "Persönliche Übergabe",
    body: "Befundbesprechung mit dem Techniker, transparente Rechnung, Pickerl im Anschluss.",
  },
] as const;

export function FischerService() {
  return (
    <section
      id="service"
      className="bg-paper text-anthracite"
      aria-labelledby="fischer-service-title"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
        {/* Header */}
        <Reveal direction="up" distance={12} duration={700}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-anthracite/50">
              07
            </span>
            <div className="h-px w-12 bg-anthracite/25" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-anthracite/55">
              Service
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal as="h2" direction="up" delay={120} className="font-serif text-4xl italic leading-[1.05] tracking-tight sm:text-5xl lg:col-span-7 lg:text-[56px]">
            <span id="fischer-service-title">
              Alles, was Ihr Auto braucht —
              <br />
              an einem Ort.
            </span>
          </Reveal>
          <Reveal as="p" direction="up" delay={220} className="text-base leading-relaxed text-fischer-mute lg:col-span-5">
            Verkauf, Werkstatt, Teile und Beratung im selben Haus. Keine
            wechselnden Ansprechpartner — Sie reden mit denselben Personen,
            die Ihr Fahrzeug auch warten.
          </Reveal>
        </div>

        {/* Stats strip */}
        <dl className="mt-12 grid grid-cols-2 divide-anthracite/15 border-y border-anthracite/15 lg:grid-cols-4 lg:divide-x">
          {STATS.map((s, i) => (
            <Reveal
              as="div"
              key={s.value}
              direction="up"
              delay={i * 80}
              className={`px-5 py-5 sm:px-6 ${i < 2 ? "border-b border-anthracite/15 lg:border-b-0" : ""}`}
            >
              <dt className="font-serif text-xl italic text-anthracite sm:text-2xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-[13px] leading-relaxed text-fischer-mute">
                {s.label}
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* Service feature cards (with images) */}
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((s, idx) => (
            <Reveal
              as="li"
              key={s.title}
              direction="up"
              delay={idx * 70}
              className="group flex flex-col overflow-hidden rounded-2xl border border-anthracite/15 bg-paper transition-all hover:border-anthracite/40 hover:shadow-[0_24px_60px_rgba(20,17,13,0.10)]"
            >
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-anthracite shadow-sm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl italic leading-tight text-anthracite">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fischer-mute">
                  {s.body}
                </p>
                <p className="mt-5 border-t border-anthracite/10 pt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-anthracite/55">
                  {s.meta}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Process strip */}
        <Reveal direction="up" className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-anthracite/15 bg-surface">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 p-8 sm:grid-cols-3 sm:p-10 lg:p-12">
              <div className="sm:col-span-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-anthracite/55">
                  So läuft Ihr Service-Termin
                </p>
              </div>
              {PROCESS.map(({ icon: Icon, step, title, body }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-anthracite text-paper">
                      <Icon size={16} strokeWidth={1.7} aria-hidden />
                    </span>
                    <span className="mt-2 font-mono text-[10px] tracking-[0.18em] text-anthracite/45">
                      {step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg italic leading-tight text-anthracite">
                      {title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-fischer-mute">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Booking row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-anthracite/15 pt-8 sm:flex-row sm:items-center">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-3 font-serif text-2xl italic text-anthracite transition-colors hover:text-anthracite/75 sm:text-3xl"
          >
            <Phone size={18} strokeWidth={1.6} aria-hidden />
            {SITE.phoneDisplay}
          </a>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-anthracite px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-anthracite/85"
            >
              Termin vereinbaren
              <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
            </Link>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 rounded-full border border-anthracite/25 px-6 py-3 text-sm font-semibold text-anthracite transition-colors hover:border-anthracite"
            >
              Vollen Umfang
              <ArrowRight size={15} strokeWidth={1.8} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
