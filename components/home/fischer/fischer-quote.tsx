import Link from "next/link";
import { ArrowUpRight, CalendarCheck, CarFront, ShieldCheck } from "lucide-react";

const POINTS = [
  {
    icon: CalendarCheck,
    title: "Jährlicher Check",
    body: "Inspektion, Pickerl und Wartung mit direktem Ansprechpartner.",
  },
  {
    icon: CarFront,
    title: "Ersatzwagen",
    body: "Mobil bleiben, auch wenn das eigene Auto gerade im Service ist.",
  },
  {
    icon: ShieldCheck,
    title: "Unfallhilfe",
    body: "Schadenabwicklung, Karosserie und Versicherungsservice aus einer Hand.",
  },
] as const;

export function FischerQuote() {
  return (
    <section className="bg-hyundai text-paper" aria-labelledby="fischer-quote-title">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-10 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/65">
            Servicegedanke
          </p>
          <h2
            id="fischer-quote-title"
            className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Eine Investition soll lange zuverlässig fahren.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-paper/78 lg:text-[18px]">
            Deshalb lohnt es sich, wenn zumindest einmal im Jahr ein Profi einen
            kontrollierenden Blick auf Ihr Fahrzeug wirft. Bei Fischerauto
            passiert das persönlich, mit moderner Ausstattung und kurzen Wegen
            zwischen Annahme, Werkstatt und Teilelager.
          </p>
          <Link
            href="/service"
            className="mt-9 inline-flex items-center gap-2 bg-paper px-6 py-3 text-sm font-semibold text-hyundai transition-colors hover:bg-surface"
          >
            Service ansehen
            <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-3 lg:col-span-5">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="border border-paper/15 bg-paper/10 p-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center bg-paper/12 text-paper">
                  <Icon size={20} strokeWidth={1.7} aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-paper">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/68">{body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
