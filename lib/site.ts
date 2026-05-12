export const SITE = {
  name: "Meyer Motorsport",
  owner: "Manfred Meyer",
  email: "meyer.manfred@chello.at",
  phone: "+43 1 6024800",
  phoneDisplay: "+43 1 60 24 800",
  mobile: "+43 664 380 1960",
  mobileDisplay: "+43 664 380 19 60",
  address: {
    street: "Himberger Strasse 45",
    entrance: "Einfahrt Franzosenweg 2",
    postal: "1100 Wien",
    country: "Österreich",
  },
  hours: "Nach Vereinbarung",
} as const;

export const NAV_LINKS = [
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/vips", label: "VIPs" },
  { href: "/stunts", label: "Stunts" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
