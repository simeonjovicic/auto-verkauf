import Link from "next/link";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "Fahrzeuge",
    links: [
      { href: "/fahrzeuge", label: "Gesamter Bestand" },
      { href: "/fahrzeuge?kategorie=elektro", label: "Elektro & Hybrid" },
      { href: "/fahrzeuge?kategorie=eintausch", label: "Eintauschwagen" },
      { href: "/marken", label: "Marken" },
    ],
  },
  {
    title: "Service",
    links: [
      { href: "/service", label: "Werkstatt" },
      { href: "/service#pickerl", label: "§57a / Pickerl" },
      { href: "/service#reifen", label: "Reifen & Einlagerung" },
      { href: "/service#unfall", label: "Unfallhilfe" },
    ],
  },
  {
    title: "Haus",
    links: [
      { href: "/unternehmen", label: "Über uns" },
      { href: "/unternehmen#team", label: "Team" },
      { href: "/kontakt", label: "Standort" },
      { href: "/insights", label: "Aktuelles" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-paper">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-12 lg:gap-x-16 lg:px-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block">
            <span className="text-xl font-semibold tracking-tight text-paper">
              Autohaus Fischer
            </span>
          </Link>
          <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-paper/55">
            {SITE.legalName} · {SITE.address.street} · {SITE.address.postal}{" "}
            {SITE.address.city} · Familienbetrieb in 3. Generation seit{" "}
            {SITE.founded}.
          </p>

          <div className="mt-8 space-y-2 text-sm text-paper/75">
            <p>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-paper"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-paper"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title} className="lg:col-span-2 lg:col-start-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/45">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-paper/85">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Legal */}
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/45">
            Rechtliches
          </p>
          <ul className="mt-5 space-y-3 text-[15px] text-paper/85">
            <li>
              <Link href="/impressum" className="transition-colors hover:text-paper">
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutzerklaerung"
                className="transition-colors hover:text-paper"
              >
                Datenschutz
              </Link>
            </li>
            <li>
              <Link
                href="/teilnahmebedingung"
                className="transition-colors hover:text-paper"
              >
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-360 flex-col items-start justify-between gap-2 px-6 py-6 text-[10px] uppercase tracking-[0.22em] text-paper/40 sm:flex-row sm:items-center sm:px-12 lg:px-20">
          <p>© {SITE.legalName} {year}. Alle Rechte vorbehalten.</p>
          <p>Wagramer Straße 36a · 1220 Wien</p>
        </div>
      </div>
    </footer>
  );
}
