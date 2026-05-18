import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-bone">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-y-12 px-6 py-16 sm:px-12 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3 text-bone">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fischerauto/logo.png"
              alt="Fischerauto Logo"
              className="h-8 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-mute">
            Wiener Familienbetrieb seit 1974. Hyundai und Mitsubishi,
            geprüfte Eintauschwagen, Werkstatt, Teile, Finanzierung und
            Leasing unter einem Dach.
          </p>
        </div>

        {/* Standort Wien */}
        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-mute">
            Standort Wien
          </p>
          <address className="not-italic mt-4 space-y-1 text-sm leading-relaxed text-bone/90">
            <div>{SITE.address.street}</div>
            <div>
              {SITE.address.postal}, {SITE.address.country}
            </div>
            <div className="text-mute">{SITE.address.district}</div>
          </address>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="text-bone/90 transition-colors hover:text-gold"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-bone/90 transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
            </li>
            <li className="text-mute">Öffnungszeiten · {SITE.hours}</li>
          </ul>
        </div>

        {/* Bestand */}
        <div className="lg:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-mute">Autohaus</p>
          <ul className="mt-4 space-y-2 text-sm text-bone/90">
            <li>
              <Link href="/fahrzeuge" className="transition-colors hover:text-gold">
                Fahrzeuge
              </Link>
            </li>
            <li>
              <Link href="/marken" className="transition-colors hover:text-gold">
                Marken
              </Link>
            </li>
            <li>
              <Link href="/service" className="transition-colors hover:text-gold">
                Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Über */}
        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-mute">
            Über
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone/90">
            <li>
              <Link href="/insights" className="transition-colors hover:text-gold">
                Aktuelles
              </Link>
            </li>
            <li>
              <Link href="/virtueller-rundgang" className="transition-colors hover:text-gold">
                Videos &amp; Rundgang
              </Link>
            </li>
            <li>
              <Link href="/unternehmen" className="transition-colors hover:text-gold">
                Unternehmen
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="transition-colors hover:text-gold">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-360 flex-col items-start justify-between gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-mute sm:flex-row sm:items-center sm:px-12 lg:px-20">
          <p>
            © {SITE.legalName} {year}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="transition-colors hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutzerklaerung" className="transition-colors hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
