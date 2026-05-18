import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  CarFront,
  Sparkles,
  CircleDollarSign,
  KeyRound,
} from "lucide-react";

const ITEMS = [
  {
    icon: Wrench,
    title: "Werkstatt für alle Marken",
    body: "Reparatur, Inspektion und Karosserie — auch wenn Sie nicht bei uns gekauft haben.",
  },
  {
    icon: ShieldCheck,
    title: "§57a-Begutachtung",
    body: "Pickerl direkt im Haus. Termin telefonisch oder per Mail.",
  },
  {
    icon: CarFront,
    title: "Eintauschwagen",
    body: "Geprüft und mit Garantie. Wir nehmen Ihr aktuelles Fahrzeug in Zahlung.",
  },
  {
    icon: Sparkles,
    title: "Service & Pflege",
    body: "Ölwechsel, Klima, Reifen, Aufbereitung — alles unter einem Dach.",
  },
  {
    icon: CircleDollarSign,
    title: "Finanzierung & Leasing",
    body: "Konditionen direkt vom Hyundai-Vertragshändler. Persönliche Beratung.",
  },
  {
    icon: KeyRound,
    title: "Miet- & Ersatzwagen",
    body: "Damit Sie während des Services nicht stehen bleiben.",
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
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hyundai">
            Service · Voller Umfang
          </p>
          <h2
            id="fischer-service-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Alles, was Ihr Auto braucht — an einem Ort.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fischer-mute lg:text-[17px]">
            Verkauf, Werkstatt, Teile und Beratung im selben Haus. Kein
            Weitergeben, kein Suchen nach Ansprechpartnern.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 overflow-hidden border border-fischer-line bg-surface-soft lg:grid-cols-12">
          <div className="p-7 sm:p-9 lg:col-span-5 lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper">
              Annahme · Werkstatt · Teile
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-anthracite sm:text-3xl">
              Ein Termin, ein Haus, ein Team.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-fischer-mute">
              Von der Serviceannahme bis zur Ersatzteilfrage bleiben die Wege
              kurz. Das macht Termine schneller, transparenter und persönlicher.
            </p>
            <Link
              href="/kontakt"
              className="mt-7 inline-flex items-center justify-center bg-hyundai px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-hyundai-deep"
            >
              Termin vereinbaren
            </Link>
          </div>
          <div className="relative min-h-72 bg-paper lg:col-span-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/schauraum03.png"
              alt="Fischerauto Schauraum mit Hyundai Modellen"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-3 border border-fischer-line bg-surface-soft p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center bg-paper text-hyundai shadow-[0_10px_30px_rgba(0,44,95,0.08)]">
                <Icon size={22} strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-anthracite">{title}</h3>
              <p className="text-sm leading-relaxed text-fischer-mute">{body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-t border-fischer-line pt-8">
          <Link
            href="/service"
            className="text-sm font-semibold text-hyundai underline-offset-4 hover:underline"
          >
            Vollen Serviceumfang ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}
