import { FischerHero } from "./fischer-hero";
import { FischerTrust } from "./fischer-trust";
import { FischerAktionen } from "./fischer-aktionen";
import { FischerFamilie } from "./fischer-familie";
import { FischerService } from "./fischer-service";
import { FischerQuote } from "./fischer-quote";
import { FischerContact } from "./fischer-contact";
import { FischerMobileCall } from "./fischer-mobile-call";

export function FischerHome() {
  return (
    <div className="bg-paper text-anthracite">
      <FischerHero />
      <FischerTrust />
      <FischerAktionen />
      <FischerFamilie />
      <FischerService />
      <FischerQuote />
      <FischerContact />
      <FischerMobileCall />
    </div>
  );
}
