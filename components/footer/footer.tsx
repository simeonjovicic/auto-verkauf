import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-12 px-6 py-16 sm:px-12 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-20">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3 text-bone">
            <span className="flex h-8 w-8 items-center justify-center border border-bone/40">
              <span className="serif text-base leading-none">M</span>
            </span>
            <span className="serif text-lg">{SITE.name}</span>
          </Link>
          <address className="not-italic mt-6 text-sm leading-relaxed text-mute">
            {SITE.address.street}
            <br />
            {SITE.address.postal}, {SITE.address.country}
            <br />
            <span className="text-mute/70">{SITE.address.entrance}</span>
          </address>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mute">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone">
            <li>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="hover:text-gold"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.mobile.replace(/\s/g, "")}`}
                className="hover:text-gold"
              >
                {SITE.mobileDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li className="text-mute">Öffnungszeiten · {SITE.hours}</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mute">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/impressum" className="text-mute hover:text-gold">
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-mute sm:flex-row sm:items-center sm:px-12 lg:px-20">
          <p>
            © {SITE.owner} {year}. Alle Rechte vorbehalten.
          </p>
          <p>Site by —</p>
        </div>
      </div>
    </footer>
  );
}
