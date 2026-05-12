import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { Footer } from "@/components/footer/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Meyer Motorsport — Himberger Strasse 45, 1100 Wien. Anfragen werden persönlich und vertraulich beantwortet.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen Sie mit uns."
        lede="Termin nach Vereinbarung. Anfragen werden persönlich beantwortet — meist innerhalb desselben Tages."
      />

      <section className="bg-ink px-6 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-mute">Anfrage</p>
            <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
              Schreiben Sie uns.
            </h2>
            <div className="mt-10">
              <Suspense
                fallback={
                  <p className="text-sm text-mute">Formular wird geladen…</p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <dl className="space-y-8">
              <div>
                <dt className="eyebrow text-mute">Adresse</dt>
                <dd className="serif mt-3 text-xl text-bone">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postal}, {SITE.address.country}
                </dd>
                <p className="mt-2 text-xs text-mute">
                  {SITE.address.entrance}
                </p>
              </div>
              <div>
                <dt className="eyebrow text-mute">Telefon</dt>
                <dd className="mt-3 space-y-1 text-sm text-bone">
                  <p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="hover:text-gold"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    <span className="ml-2 text-mute">· Festnetz</span>
                  </p>
                  <p>
                    <a
                      href={`tel:${SITE.mobile.replace(/\s/g, "")}`}
                      className="hover:text-gold"
                    >
                      {SITE.mobileDisplay}
                    </a>
                    <span className="ml-2 text-mute">· Mobil</span>
                  </p>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">E-Mail</dt>
                <dd className="mt-3 text-sm text-bone">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-gold"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Öffnungszeiten</dt>
                <dd className="mt-3 text-sm text-bone">{SITE.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-ink px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow text-mute">Anfahrt</p>
          <h2 className="serif mt-3 text-3xl text-bone sm:text-4xl">
            Wien-Favoriten.
          </h2>
          <div className="mt-10 aspect-[16/9] overflow-hidden border border-line">
            <iframe
              title="Standort Meyer Motorsport auf Google Maps"
              src="https://www.google.com/maps?q=Himberger+Strasse+45,+1100+Wien&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
