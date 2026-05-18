import { FischerHero } from "./fischer-hero";
import { FischerTrust } from "./fischer-trust";
import { FischerAktionen } from "./fischer-aktionen";
import { FischerInhaberQuote } from "./fischer-inhaber-quote";
import { FischerAngebotWoche } from "./fischer-angebot-woche";
import { FischerTeam } from "./fischer-team";
import { FischerFamilie } from "./fischer-familie";
import { FischerService } from "./fischer-service";
import { FischerContact } from "./fischer-contact";
import { FischerMobileCall } from "./fischer-mobile-call";

export function FischerHome() {
  return (
    <div className="bg-paper text-anthracite">
      <FischerHero />
      <FischerTrust />
      <FischerAktionen />
      <FischerInhaberQuote />
      <FischerAngebotWoche />
      <FischerTeam />
      <FischerFamilie />
      <FischerService />
      <FischerContact />
      <FischerMobileCall />
    </div>
  );
}
