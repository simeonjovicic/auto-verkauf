import Link from "next/link";
import { SITE } from "@/lib/site";

export function ContactInline() {
  return (
    <section
      id="kontakt"
      className="relative border-t border-line bg-ink text-bone"
      aria-labelledby="kontakt-title"
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-y-12 px-6 py-20 sm:px-12 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-28">
        <div className="lg:col-span-7">
          <p className="eyebrow text-gold!">Kontakt</p>
          <h2
            id="kontakt-title"
            className="serif mt-6 text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl"
          >
            Termin <span className="italic text-bone/55">nach Vereinbarung.</span>
          </h2>
          <p className="mt-8 max-w-prose text-base leading-relaxed text-mute sm:text-lg">
            Besichtigungen und Probefahrten organisieren wir persönlich.
            Rufen Sie uns an oder senden Sie eine Anfrage — wir antworten in
            der Regel innerhalb eines Werktags.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-bone bg-bone px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold hover:bg-gold"
            >
              Anfrage senden
              <span aria-hidden>→</span>
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-line px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-gold hover:text-gold"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
        <aside className="border border-line bg-ink p-6 shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:p-8 lg:col-span-5">
          <dl className="grid gap-7 text-bone sm:grid-cols-2 lg:grid-cols-1">
            <Block label="Adresse">
              {SITE.address.street}
              <br />
              {SITE.address.postal}, {SITE.address.country}
              <br />
              <span className="text-mute">{SITE.address.entrance}</span>
            </Block>
            <Block label="Telefon">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {SITE.phoneDisplay}
              </a>
              <br />
              <a href={`tel:${SITE.mobile.replace(/\s/g, "")}`} className="hover:text-gold">
                {SITE.mobileDisplay}
              </a>
            </Block>
            <Block label="E-Mail">
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </Block>
            <Block label="Öffnungszeiten">{SITE.hours}</Block>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.22em] text-mute">
        {label}
      </dt>
      <dd className="serif mt-2 text-lg leading-relaxed text-bone">{children}</dd>
    </div>
  );
}
