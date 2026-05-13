import Link from "next/link";

type Card = {
  href: string;
  eyebrow: string;
  title: string;
  copy: string;
  imageSrc: string;
  imageAlt: string;
};

const CARDS: Card[] = [
  {
    href: "/service",
    eyebrow: "Sammlerservice",
    title: "Service",
    copy:
      "Konsignation, Suchaufträge, Garage und Verkauf in Ihrem Namen — diskret und persönlich seit den frühen 1980ern.",
    imageSrc: "/service-bg.jpg",
    imageAlt: "Mechaniker bei der Arbeit an einem Auto",
  },
  {
    href: "/stunts",
    eyebrow: "Film & TV",
    title: "Stunts",
    copy:
      "Bereitstellung und Vorbereitung von Sport- und Sammlerfahrzeugen für internationale Filmproduktionen.",
    imageSrc: "/stunt-bg.jpg",
    imageAlt: "Ford Mustang driftet auf einer Teststrecke",
  },
];

export function VipsStuntsTeaser() {
  return (
    <section
      className="relative border-t border-line bg-ink text-bone"
      aria-label="Service und Stunts"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
        <p className="eyebrow text-gold!">Leistungen</p>
        <h2 className="serif mt-6 max-w-3xl text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
          Mehr als Verkauf:{" "}
          <span className="italic text-bone/55">Fahrzeuge mit Einsatzgeschichte.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {CARDS.map((c) => {
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group relative block overflow-hidden border border-line bg-ink shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:border-bone/30 hover:shadow-[0_26px_70px_rgba(0,0,0,0.6)]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-stage sm:aspect-16/10">
                  <picture>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.imageSrc}
                      alt={c.imageAlt}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] select-none"
                    />
                  </picture>
                </div>
                <div className="p-7 sm:p-8 lg:p-10">
                  <p className="eyebrow mb-3 text-gold!">{c.eyebrow}</p>
                  <h3 className="serif text-4xl text-bone sm:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-mute">
                    {c.copy}
                  </p>
                  <span className="mt-6 inline-flex items-baseline gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone group-hover:text-gold">
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
