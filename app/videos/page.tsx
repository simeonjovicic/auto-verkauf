import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Videos",
  description: "Videos und Modellclips von Fischerauto.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Videos von Fischerauto."
        lede="Hier werden Modellvideos, Aktionsclips und Einblicke aus dem Autohaus eingebunden, sobald die finalen Videoquellen vorliegen."
      />
      <Placeholder
        title="Videoquellen ergänzen"
        copy="YouTube-, Vimeo- oder selbst gehostete Videos sollten erst nach Consent-Entscheidung eingebettet werden."
      />
    </>
  );
}

function Placeholder({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="bg-ink px-6 py-20 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[900px] border border-line p-8 text-bone">
        <h2 className="serif text-3xl">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-mute">{copy}</p>
        <Link href="/kontakt" className="mt-8 inline-flex text-[11px] uppercase tracking-[0.2em] hover:text-gold">
          Kontakt aufnehmen →
        </Link>
      </div>
    </section>
  );
}
