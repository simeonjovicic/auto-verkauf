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
    imageSlug: "porsche-996-gt3-rs",
  },
];

export function VipsStuntsTeaser() {
  return (
    <section
      className="relative border-t border-line bg-ink"
      aria-label="VIPs und Stunts"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <p className="eyebrow">04 · Auftritte</p>
        <h2 className="serif mt-6 max-w-3xl text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
          Mehr als ein Showroom.
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {CARDS.map((c) => {
            const v = getVehicle(c.imageSlug)!;
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group relative block overflow-hidden border border-line"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
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
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <p className="eyebrow mb-3 !text-bone/80">{c.eyebrow}</p>
                  <h3 className="serif text-4xl text-bone sm:text-5xl lg:text-6xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-md text-mute">{c.copy}</p>
                  <span className="mt-6 inline-flex items-baseline gap-3 text-[11px] uppercase tracking-[0.2em] text-bone group-hover:text-gold">
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
