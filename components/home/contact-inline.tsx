import Link from "next/link";
import { SITE } from "@/lib/site";

export function ContactInline() {
  return (
    <section
      id="kontakt"
      className="relative border-t border-chrome bg-panel text-graphite"
      aria-labelledby="kontakt-title"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-12 px-6 py-20 sm:px-12 lg:grid-cols-12 lg:gap-x-16 lg:px-20 lg:py-28">
        <div className="lg:col-span-7">
          <p className="eyebrow !text-signal">Kontakt</p>
          <h2
            id="kontakt-title"
            className="serif mt-6 text-4xl leading-[1.05] text-graphite sm:text-5xl lg:text-6xl"
          >
            Termin <span className="italic text-steel">nach Vereinbarung.</span>
          </h2>
          <p className="mt-8 max-w-prose text-base leading-relaxed text-steel sm:text-lg">
            Besichtigungen und Probefahrten organisieren wir persönlich.
            Rufen Sie uns an oder senden Sie eine Anfrage — wir antworten in
            der Regel innerhalb eines Werktags.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border border-graphite bg-graphite px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-signal hover:bg-signal"
            >
              Anfrage senden
              <span aria-hidden>→</span>
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border border-chrome px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite transition-colors hover:border-signal hover:text-signal"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
        <aside className="rounded-[8px] border border-chrome bg-showroom p-6 shadow-[0_18px_50px_rgba(17,24,32,0.08)] sm:p-8 lg:col-span-5">
          <dl className="grid gap-7 text-graphite sm:grid-cols-2 lg:grid-cols-1">
            <Block label="Adresse">
              {SITE.address.street}
              <br />
              {SITE.address.postal}, {SITE.address.country}
              <br />
              <span className="text-steel">{SITE.address.entrance}</span>
            </Block>
            <Block label="Telefon">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-signal">
                {SITE.phoneDisplay}
              </a>
              <br />
              <a href={`tel:${SITE.mobile.replace(/\s/g, "")}`} className="hover:text-signal">
                {SITE.mobileDisplay}
              </a>
            </Block>
            <Block label="E-Mail">
              <a href={`mailto:${SITE.email}`} className="hover:text-signal">
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
      <dt className="text-[11px] uppercase tracking-[0.2em] text-steel">
        {label}
      </dt>
      <dd className="serif mt-2 text-lg leading-relaxed text-graphite">{children}</dd>
    </div>
  );
}
