import Link from "next/link";
import { getVehicle } from "@/lib/vehicles";

type Card = {
  href: string;
  eyebrow: string;
  title: string;
  copy: string;
  imageSlug: string;
};

const CARDS: Card[] = [
  {
    href: "/vips",
    eyebrow: "Klientel",
    title: "VIPs",
    copy:
      "Diskrete Fahrzeuglieferungen für Sammler, Künstler und Persönlichkeiten — seit den frühen 1980ern.",
    imageSlug: "ferrari-488-pista",
  },
  {
    href: "/stunts",
    eyebrow: "Film & TV",
    title: "Stunts",
    copy:
      "Bereitstellung und Vorbereitung von Sport- und Sammlerfahrzeugen für internationale Filmproduktionen.",
    imageSlug: "porsche-718-spyder-4-0",
  },
];

export function VipsStuntsTeaser() {
  return (
    <section
      className="relative border-t border-chrome bg-showroom text-graphite"
      aria-label="VIPs und Stunts"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
        <p className="eyebrow !text-signal">Leistungen</p>
        <h2 className="serif mt-6 max-w-3xl text-4xl leading-[1.05] text-graphite sm:text-5xl lg:text-6xl">
          Mehr als Verkauf:{" "}
          <span className="italic text-steel">Fahrzeuge mit Einsatzgeschichte.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {CARDS.map((c) => {
            const v = getVehicle(c.imageSlug)!;
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group relative block overflow-hidden rounded-[8px] border border-chrome bg-panel shadow-[0_18px_50px_rgba(17,24,32,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(17,24,32,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-showroom-soft sm:aspect-[16/10]">
                  <picture>
                    <source srcSet={v.srcAvif} type="image/avif" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.src}
                      alt={v.alt}
                      width={v.width}
                      height={v.height}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] select-none"
                    />
                  </picture>
                </div>
                <div className="p-7 sm:p-8 lg:p-10">
                  <p className="eyebrow mb-3 !text-signal">{c.eyebrow}</p>
                  <h3 className="serif text-4xl text-graphite sm:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-steel">
                    {c.copy}
                  </p>
                  <span className="mt-6 inline-flex items-baseline gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite group-hover:text-signal">
                    Mehr erfahren
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-out group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
