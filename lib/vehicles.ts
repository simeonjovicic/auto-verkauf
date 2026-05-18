export type Gradient =
  | "hero-teal"
  | "hero-cream"
  | "hero-blush"
  | "hero-sage"
  | "hero-sky"
  | "hero-slate";

export type Brand = "Hyundai" | "Mitsubishi" | "Gebrauchtwagen";

export type VehicleSpecs = {
  year: string | null;
  mileage: string | null;
  horsepower: string | null;
  transmission: string | null;
  color: string | null;
};

export type Vehicle = {
  num: string;
  slug: string;
  brand: Brand;
  name: string;
  subtitle: string;
  gradient: Gradient;
  src: string;
  srcAvif: string;
  srcHover?: string;
  blurDataURL: string;
  width: number;
  height: number;
  alt: string;
  highlight?: string;
  price?: string;
  category?: string;
  priceEur?: number | null;
  horsepowerPs?: number | null;
  mileageKm?: number | null;
  yearNum?: number | null;
  specs: VehicleSpecs;
  gallery: string[];
};

const blurDataURL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

export const vehicles: Vehicle[] = [
  {
    num: "01",
    slug: "hyundai-ioniq-9",
    brand: "Hyundai",
    name: "Hyundai IONIQ 9",
    subtitle: "Elektro-SUV",
    gradient: "hero-teal",
    src: "/fischerauto/ioniq-9.jpg",
    srcAvif: "/fischerauto/ioniq-9.jpg",
    blurDataURL,
    width: 2339,
    height: 1511,
    alt: "Hyundai IONIQ 9 Aktionsbanner von Fischerauto",
    highlight: "Voll elektrisch · 800-Volt-Technologie",
    price: "Leasing ab € 489,- mtl.",
    category: "Neuwagenaktion",
    priceEur: null,
    horsepowerPs: null,
    mileageKm: 0,
    yearNum: 2026,
    specs: {
      year: "Neuwagen",
      mileage: "0 km",
      horsepower: "110,3 kWh Batterie",
      transmission: "Elektro",
      color: "Modellabhängig",
    },
    gallery: ["/fischerauto/ioniq-9.jpg"],
  },
  {
    num: "02",
    slug: "hyundai-kona-benzin-superbonus",
    brand: "Hyundai",
    name: "Hyundai Kona",
    subtitle: "Benzin Superbonus",
    gradient: "hero-sky",
    src: "/fischerauto/kona-superbonus.jpg",
    srcAvif: "/fischerauto/kona-superbonus.jpg",
    blurDataURL,
    width: 2278,
    height: 1510,
    alt: "Hyundai Kona Benzin Superbonus Aktionsbanner von Fischerauto",
    highlight: "Superbonus-Aktion",
    price: "Aktion auf Anfrage",
    category: "Neuwagenaktion",
    priceEur: null,
    horsepowerPs: null,
    mileageKm: 0,
    yearNum: 2026,
    specs: {
      year: "Neuwagen",
      mileage: "0 km",
      horsepower: null,
      transmission: "Benzin",
      color: "Je nach Verfügbarkeit",
    },
    gallery: ["/fischerauto/kona-superbonus.jpg"],
  },
  {
    num: "03",
    slug: "hyundai-range-superbonus",
    brand: "Hyundai",
    name: "Hyundai Range",
    subtitle: "Superbonus",
    gradient: "hero-blush",
    src: "/fischerauto/range-superbonus.jpg",
    srcAvif: "/fischerauto/range-superbonus.jpg",
    blurDataURL,
    width: 2339,
    height: 1511,
    alt: "Hyundai Modellpalette Superbonus Aktionsbanner von Fischerauto",
    highlight: "Modellpalette mit Bonus",
    price: "Bonus auf Anfrage",
    category: "Neuwagenaktion",
    priceEur: null,
    horsepowerPs: null,
    mileageKm: 0,
    yearNum: 2026,
    specs: {
      year: "Neuwagen",
      mileage: "0 km",
      horsepower: null,
      transmission: "Modellabhängig",
      color: "Je nach Verfügbarkeit",
    },
    gallery: ["/fischerauto/range-superbonus.jpg"],
  },
  {
    num: "04",
    slug: "mitsubishi-neuwagen",
    brand: "Mitsubishi",
    name: "Mitsubishi",
    subtitle: "Neuwagen",
    gradient: "hero-slate",
    src: "/fischerauto/team.png",
    srcAvif: "/fischerauto/team.png",
    blurDataURL,
    width: 1000,
    height: 606,
    alt: "Fischerauto Team im Schauraum in Wien",
    highlight: "Beratung, Bestellung und Service",
    price: "Angebot auf Anfrage",
    category: "Neuwagen",
    priceEur: null,
    horsepowerPs: null,
    mileageKm: 0,
    yearNum: 2026,
    specs: {
      year: "Neuwagen",
      mileage: "0 km",
      horsepower: null,
      transmission: "Modellabhängig",
      color: "Je nach Verfügbarkeit",
    },
    gallery: ["/fischerauto/team.png"],
  },
  {
    num: "05",
    slug: "gebrauchtwagen-willhaben",
    brand: "Gebrauchtwagen",
    name: "Eintauschwagen",
    subtitle: "mit Garantie",
    gradient: "hero-sage",
    src: "/fischerauto/hero-showroom.jpg",
    srcAvif: "/fischerauto/hero-showroom.jpg",
    blurDataURL,
    width: 1536,
    height: 1024,
    alt: "Fischerauto Aktionsbanner mit Fahrzeugangebot",
    highlight: "Live-Bestand auf willhaben",
    price: "Tagesbestand online",
    category: "Gebrauchtwagen",
    priceEur: null,
    horsepowerPs: null,
    mileageKm: null,
    yearNum: null,
    specs: {
      year: "Tagesbestand",
      mileage: "Je nach Fahrzeug",
      horsepower: null,
      transmission: "Je nach Fahrzeug",
      color: "Je nach Fahrzeug",
    },
    gallery: ["/fischerauto/hero-showroom.jpg"],
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getVehicleSlugs(): string[] {
  return vehicles.map((v) => v.slug);
}
