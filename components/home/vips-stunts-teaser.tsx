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
    eyebrow: "Werkstatt & Annahme",
    title: "Service",
    copy:
      "Pickerl, Inspektion, Reparatur aller Fabrikate, Karosserie, Reifen, Elektrik und Ersatzwagen direkt am Standort.",
    imageSrc: "/service-bg.jpg",
    imageAlt: "Mechaniker bei der Arbeit an einem Auto",
  },
  {
    href: "/virtueller-rundgang",
    eyebrow: "Rundgang & Medien",
    title: "Einblicke",
    copy:
      "Virtueller Rundgang, Videos und Download-Bereich werden auf der neuen Seite gebündelt und leicht auffindbar gemacht.",
    imageSrc: "/fischerauto/team.png",
    imageAlt: "Fischerauto Team im Schauraum",
  },
];

export function ServiceMediaTeaser() {
  return (
    <section
      className="relative border-t border-line bg-ink text-bone"
      aria-label="Service und Einblicke"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
        <p className="eyebrow text-gold!">Leistungen</p>
        <h2 className="serif mt-6 max-w-3xl text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
          Alles unter einem Dach:{" "}
          <span className="italic text-bone/55">Verkauf, Werkstatt und persönliche Betreuung.</span>
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
