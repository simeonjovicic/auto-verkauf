import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Virtueller Rundgang",
  description: "Virtueller Rundgang durch das Autohaus Fischerauto.",
};

export default function VirtuellerRundgangPage() {
  return (
    <>
      <PageHero
        eyebrow="Rundgang"
        title="Virtueller Rundgang durchs Autohaus."
        lede="Der Rundgang wird hier als Embed eingesetzt, sobald der finale Anbieter- oder Embed-Code vorliegt."
      />
      <section className="bg-ink px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-[1100px] overflow-hidden border border-line bg-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fischerauto/team.png"
            alt="Fischerauto Schauraum mit Team"
            width={1000}
            height={606}
            className="aspect-16/9 w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
