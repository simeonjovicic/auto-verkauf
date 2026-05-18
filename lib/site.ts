export const SITE = {
  name: "Fischerauto",
  legalName: "F. + M. Fischer G.m.b.H.",
  owner: "Franz und Monika Fischer",
  email: "office@fischerauto.at",
  phone: "+4312634292",
  phoneDisplay: "+43 1 263 42 92",
  faxDisplay: "+43 1 263 42 92-9",
  website: "https://fischerauto.at",
  baseUrl: "https://fischerauto.at",
  facebook: "https://www.facebook.com/fischerauto.at",
  founded: "1974",
  uid: "ATU 14822502",
  companyRegister: "26254",
  bank: "Volksbank AG Wien",
  iban: "AT61 4300 0454 0102 3002",
  bic: "VBWIATW1",
  account: "45401023002 / 43000",
  address: {
    street: "Wagramer Straße 36A",
    postal: "1220 Wien",
    city: "Wien",
    district: "Donaustadt",
    country: "Österreich",
  },
  coordinates: {
    latitude: 48.2354,
    longitude: 16.4214,
  },
  googleMapsQuery: "FISCHERAUTO Wagramer Straße 36A 1220 Wien",
  hours:
    "Verkauf Mo-Fr 09:00-18:00, Sa 09:00-12:00 · Serviceannahme Mo-Do 07:00-17:00, Fr 07:00-13:00",
  openingHours: [
    { label: "Verkauf", lines: ["Mo-Fr: 09:00-18:00", "Sa: 09:00-12:00"] },
    {
      label: "Serviceannahme & Abholung",
      lines: ["Mo-Do: 07:00-17:00", "Fr: 07:00-13:00"],
    },
    {
      label: "Werkstätte",
      lines: ["Mo-Do: 07:30-12:00 und 13:00-16:45", "Fr: 07:00-13:00"],
    },
    {
      label: "Teilelager",
      lines: ["Mo-Do: 08:00-12:00 und 13:00-16:00", "Fr: 08:00-12:00"],
    },
  ],
} as const;

export const WILLHABEN_URL =
  "https://www.willhaben.at/iad/gebrauchtwagen/gebrauchtwagenhaendler-detail?orgId=29562266";

export const NAV_LINKS = [
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/marken", label: "Marken" },
  { href: "/service", label: "Service" },
  { href: "/unternehmen", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SERVICE_AREAS = [
  "Neuwagenverkauf Hyundai und Mitsubishi",
  "Eintauschwagen mit Garantie und Überprüfung",
  "Reparatur aller Fabrikate",
  "Inspektion und Kundendienst",
  "Unfallinstandsetzung",
  "Karosserie-, Verdeck- und Reifenservice",
  "§57a-Begutachtung / Pickerl",
  "Ölwechsel",
  "Fahrzeugelektrik und -elektronik",
  "Getriebeinstandsetzungen",
  "Klimaanlagen und Standheizung",
  "Elektronische Fahrzeugvermessung",
  "Ersatzteile und Zubehör",
  "Mietwagen und Ersatzwagen",
  "Versicherungsservice",
  "Finanzierung und Leasing",
] as const;

export const TEAM = [
  {
    group: "Inhaber- und Geschäftsleitungsfamilie",
    people: [
      { name: "Franz Fischer", role: "Inhaber", contact: "f.fischer@fischerauto.at · 01 263 42 92" },
      { name: "Monika Fischer", role: "Inhaberin", contact: "m.fischer@fischerauto.at · 01 263 42 92" },
      { name: "Marko Fischer", role: "Inhaber, Geschäftsleitung", contact: "mf@fischerauto.at · 01 263 42 92" },
      { name: "Irina Fischer", role: "Inhaberin", contact: "01 263 42 92" },
      { name: "Daniel Fischer", role: "Stellv. Geschäftsführer", contact: "d.fischer@fischerauto.at · 01 263 42 92-31" },
    ],
  },
  {
    group: "Verkauf",
    people: [
      { name: "David Balogh", role: "Verkaufsleitung", contact: "db@fischerauto.at · 01 263 42 92-31" },
      { name: "Robert Scholz", role: "Verkäufer", contact: "rs@fischerauto.at" },
    ],
  },
  {
    group: "Service, Annahme, Teile, Garantie",
    people: [
      { name: "Marion Schulz", role: "Serviceassistentin, Schadenabwicklung, Annahme", contact: "ms@fischerauto.at · 01 263 42 92-11" },
      { name: "Bojan Benko", role: "Annahme, Teile-/Garantieleitung", contact: "bb@fischerauto.at · 01 263 42 92-33" },
      { name: "Philipp Scholz", role: "Annahme, Teile und Garantie" },
    ],
  },
  {
    group: "Werkstatt / Aufbereitung",
    people: [
      { name: "Maximilian Pajones", role: "Fahrzeugtechnik" },
      { name: "Kristian Stevanovic", role: "Fahrzeugtechnik" },
      { name: "Kamil Rajski", role: "KFZ-Aufbereitung, Support" },
    ],
  },
  {
    group: "Administration",
    people: [
      { name: "Christian Kunz", role: "Administration & Support", contact: "ck@fischerauto.at · 01 263 42 92-35 · 0660 562 86 62" },
    ],
  },
] as const;
