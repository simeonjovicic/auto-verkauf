export type Gradient =
  | "hero-teal"
  | "hero-cream"
  | "hero-blush"
  | "hero-sage"
  | "hero-sky"
  | "hero-slate";

export type Brand =
  | "Hyundai"
  | "Mitsubishi"
  | "Fiat"
  | "Opel"
  | "Mercedes-Benz"
  | "Nissan"
  | "Gebrauchtwagen";

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

const IMAGES = {
  tucsonNewFront: {
    src: "/fischerauto/tucson-red-new-front.png",
    width: 1448,
    height: 1086,
  },
  tucsonNewSide: {
    src: "/fischerauto/tucson-red-new-side.png",
    width: 1448,
    height: 1086,
  },
  santaFeNewFront: {
    src: "/fischerauto/santa-fe-black-new-front.png",
    width: 1448,
    height: 1086,
  },
  santaFeNewSide: {
    src: "/fischerauto/santa-fe-black-new-side.png",
    width: 1448,
    height: 1086,
  },
  i20NewFront: {
    src: "/fischerauto/i20-blue-new-front.png",
    width: 1448,
    height: 1086,
  },
  i20NewSide: {
    src: "/fischerauto/i20-blue-new-side.png",
    width: 1448,
    height: 1086,
  },
  i20NewRear: {
    src: "/fischerauto/i20-blue-new-rear.png",
    width: 1448,
    height: 1086,
  },
  konaSilverFront: {
    src: "/fischerauto/kona-silver-front.png",
    width: 1448,
    height: 1086,
  },
  konaSilverSide: {
    src: "/fischerauto/kona-silver-side.png",
    width: 1448,
    height: 1086,
  },
  konaSilverDirectFront: {
    src: "/fischerauto/kona-silver-direct-front.png",
    width: 1448,
    height: 1086,
  },
  konaSilverRear: {
    src: "/fischerauto/kona-silver-rear.png",
    width: 1448,
    height: 1086,
  },
  abarthFront: {
    src: "/fischerauto/abarth-595-black-front.png",
    width: 1448,
    height: 1086,
  },
  hyundaiRange: {
    src: "/fischerauto/range-superbonus.jpg",
    width: 2339,
    height: 1511,
  },
  ioniq: {
    src: "/fischerauto/ioniq-9.jpg",
    width: 2339,
    height: 1511,
  },
} as const;

type ImageKey = keyof typeof IMAGES;

type VehicleInput = Omit<
  Vehicle,
  "src" | "srcAvif" | "blurDataURL" | "width" | "height" | "alt" | "gallery"
> & {
  image: ImageKey;
  galleryImages?: ImageKey[];
  alt?: string;
};

function createVehicle(input: VehicleInput): Vehicle {
  const { image, galleryImages, alt, ...vehicle } = input;
  const primary = IMAGES[image];
  const gallery = (galleryImages ?? [image]).map((key) => IMAGES[key].src);

  return {
    ...vehicle,
    src: primary.src,
    srcAvif: primary.src,
    width: primary.width,
    height: primary.height,
    alt: alt ?? `${vehicle.name} ${vehicle.subtitle} bei Fischerauto`,
    blurDataURL,
    gallery,
  };
}

export const vehicles: Vehicle[] = [
  createVehicle({
    num: "01",
    slug: "hyundai-tucson-n-line",
    brand: "Hyundai",
    name: "Hyundai Tucson",
    subtitle: "1,6 T-GDI Hybrid 2WD N-Line",
    gradient: "hero-blush",
    image: "tucsonNewFront",
    galleryImages: ["tucsonNewFront", "tucsonNewSide"],
    highlight: "Hybrid Elektro/Benzin · Automatik · gültiges Pickerl",
    price: "€ 45.900",
    category: "Tageszulassung",
    priceEur: 45900,
    horsepowerPs: 179,
    mileageKm: 10,
    yearNum: 2026,
    specs: {
      year: "2026",
      mileage: "10 km",
      horsepower: "179 PS (132 kW)",
      transmission: "Hybrid Elektro/Benzin · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "02",
    slug: "hyundai-santa-fe-phev-black-line",
    brand: "Hyundai",
    name: "Hyundai Santa Fe",
    subtitle: "PHEV Black Line 4WD 7 Sitzer",
    gradient: "hero-slate",
    image: "santaFeNewFront",
    galleryImages: ["santaFeNewFront", "santaFeNewSide"],
    highlight: "Hybrid Elektro/Benzin · Automatik · gültiges Pickerl",
    price: "€ 60.900",
    category: "Tageszulassung",
    priceEur: 60900,
    horsepowerPs: 258,
    mileageKm: 18,
    yearNum: 2026,
    specs: {
      year: "2026",
      mileage: "18 km",
      horsepower: "258 PS (190 kW)",
      transmission: "Hybrid Elektro/Benzin · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "03",
    slug: "hyundai-i20-blue",
    brand: "Hyundai",
    name: "Hyundai i20",
    subtitle: "1,0 T-GDI GO PLUS",
    gradient: "hero-sky",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide", "i20NewRear"],
    highlight: "Benzin · Schaltgetriebe · gültiges Pickerl",
    price: "€ 19.900",
    category: "Jungwagen",
    priceEur: 19900,
    horsepowerPs: 101,
    mileageKm: 59,
    yearNum: 2025,
    specs: {
      year: "2025",
      mileage: "59 km",
      horsepower: "101 PS (74 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "04",
    slug: "fiat-cinquecento-500c-abarth-595c",
    brand: "Fiat",
    name: "Fiat Cinquecento",
    subtitle: "500c ABARTH 595C",
    gradient: "hero-cream",
    image: "abarthFront",
    galleryImages: ["abarthFront"],
    highlight: "Benzin · Automatik · Garantie",
    price: "€ 27.900",
    category: "Gebrauchtwagen",
    priceEur: 27900,
    horsepowerPs: 179,
    mileageKm: 24580,
    yearNum: 2021,
    specs: {
      year: "2021",
      mileage: "24.580 km",
      horsepower: "179 PS (132 kW)",
      transmission: "Benzin · Automatik",
      color: "Gültiges Pickerl · Gewährleistung · Garantie",
    },
  }),
  createVehicle({
    num: "05",
    slug: "opel-adam-10-turbo-unlimited-ecoflex-direct",
    brand: "Opel",
    name: "Opel Adam",
    subtitle: "1,0 Turbo Unlimited ecoFLEX Direct",
    gradient: "hero-sage",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide"],
    highlight: "Benzin · Schaltgetriebe · Gewährleistung",
    price: "€ 7.900",
    category: "Gebrauchtwagen",
    priceEur: 7900,
    horsepowerPs: 90,
    mileageKm: 99605,
    yearNum: 2018,
    specs: {
      year: "2018",
      mileage: "99.605 km",
      horsepower: "90 PS (66 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gewährleistung",
    },
  }),
  createVehicle({
    num: "06",
    slug: "hyundai-kona-10-t-gdi-2wd-smart-line",
    brand: "Hyundai",
    name: "Hyundai Kona",
    subtitle: "1,0 T-GDi 2WD Smart Line",
    gradient: "hero-sky",
    image: "konaSilverFront",
    galleryImages: [
      "konaSilverFront",
      "konaSilverSide",
      "konaSilverDirectFront",
      "konaSilverRear",
    ],
    highlight: "Benzin · Schaltgetriebe · gültiges Pickerl",
    price: "€ 23.900",
    category: "Gebrauchtwagen",
    priceEur: 23900,
    horsepowerPs: 120,
    mileageKm: 16025,
    yearNum: 2023,
    specs: {
      year: "2023",
      mileage: "16.025 km",
      horsepower: "120 PS (88 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "07",
    slug: "hyundai-i30-kombi-15-dpi-go-plus",
    brand: "Hyundai",
    name: "Hyundai i30 Kombi",
    subtitle: "1,5 DPI Go! Plus",
    gradient: "hero-teal",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide"],
    highlight: "Benzin · Schaltgetriebe · gültiges Pickerl",
    price: "€ 19.900",
    category: "Gebrauchtwagen",
    priceEur: 19900,
    horsepowerPs: 97,
    mileageKm: 21629,
    yearNum: 2024,
    specs: {
      year: "2024",
      mileage: "21.629 km",
      horsepower: "97 PS (71 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "08",
    slug: "hyundai-i20-automatik-2026",
    brand: "Hyundai",
    name: "Hyundai i20",
    subtitle: "Automatik",
    gradient: "hero-sky",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide", "i20NewRear"],
    highlight: "Benzin · Automatik · gültiges Pickerl",
    price: "€ 23.900",
    category: "Tageszulassung",
    priceEur: 23900,
    horsepowerPs: 90,
    mileageKm: 15,
    yearNum: 2026,
    specs: {
      year: "2026",
      mileage: "15 km",
      horsepower: "90 PS (66 kW)",
      transmission: "Benzin · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "09",
    slug: "hyundai-nexo-wasserstoff-level-6",
    brand: "Hyundai",
    name: "Hyundai Nexo",
    subtitle: "Wasserstoff Level 6",
    gradient: "hero-teal",
    image: "konaSilverFront",
    galleryImages: ["konaSilverFront", "konaSilverSide"],
    highlight: "Wasserstoff · Automatik · Gewährleistung",
    price: "€ 59.990",
    category: "Gebrauchtwagen",
    priceEur: 59990,
    horsepowerPs: 163,
    mileageKm: 42552,
    yearNum: 2019,
    specs: {
      year: "2019",
      mileage: "42.552 km",
      horsepower: "163 PS (120 kW)",
      transmission: "Wasserstoff · Automatik",
      color: "Gewährleistung",
    },
  }),
  createVehicle({
    num: "10",
    slug: "hyundai-kona-elektro-64kwh-level-5",
    brand: "Hyundai",
    name: "Hyundai Kona Elektro",
    subtitle: "64kWh Level 5",
    gradient: "hero-teal",
    image: "konaSilverFront",
    galleryImages: [
      "konaSilverFront",
      "konaSilverSide",
      "konaSilverDirectFront",
      "konaSilverRear",
    ],
    highlight: "Elektro · Automatik · gültiges Pickerl",
    price: "€ 29.900",
    category: "Gebrauchtwagen",
    priceEur: 29900,
    horsepowerPs: 204,
    mileageKm: 81297,
    yearNum: 2019,
    specs: {
      year: "2019",
      mileage: "81.297 km",
      horsepower: "204 PS (150 kW)",
      transmission: "Elektro · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "11",
    slug: "hyundai-i20-12-mpi-go-plus",
    brand: "Hyundai",
    name: "Hyundai i20",
    subtitle: "1,2 MPI GO PLUS",
    gradient: "hero-sky",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide", "i20NewRear"],
    highlight: "Benzin · Schaltgetriebe · gültiges Pickerl",
    price: "€ 19.900",
    category: "Jungwagen",
    priceEur: 19900,
    horsepowerPs: 79,
    mileageKm: 230,
    yearNum: 2024,
    specs: {
      year: "2024",
      mileage: "230 km",
      horsepower: "79 PS (58 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "12",
    slug: "hyundai-i30-pd-n-line-16-t-gdi-dct-c6kl2",
    brand: "Hyundai",
    name: "Hyundai i30",
    subtitle: "PD N Line 1.6 T-GDI DCT C6KL2",
    gradient: "hero-blush",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide"],
    highlight: "Benzin · Automatik · gültiges Pickerl",
    price: "€ 32.900",
    category: "Tageszulassung",
    priceEur: 32900,
    horsepowerPs: 150,
    mileageKm: 8,
    yearNum: 2026,
    specs: {
      year: "2026",
      mileage: "8 km",
      horsepower: "150 PS (110 kW)",
      transmission: "Benzin · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "13",
    slug: "hyundai-i30-pd-comfort-line-10-t-gdi-c6bcb",
    brand: "Hyundai",
    name: "Hyundai i30",
    subtitle: "PD Comfort Line 1.0 T-GDI C6BCB",
    gradient: "hero-sage",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide"],
    highlight: "Benzin · Schaltgetriebe · Gewährleistung",
    price: "€ 26.900",
    category: "Sofort verfügbar",
    priceEur: 26900,
    horsepowerPs: 116,
    mileageKm: 5000,
    yearNum: null,
    specs: {
      year: null,
      mileage: "5.000 km",
      horsepower: "116 PS (85 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gewährleistung",
    },
  }),
  createVehicle({
    num: "14",
    slug: "hyundai-i30-pd-comfort-line-16-t-gdi-dct",
    brand: "Hyundai",
    name: "Hyundai i30",
    subtitle: "PD Comfort Line 1.6 T-GDI DCT",
    gradient: "hero-slate",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide"],
    highlight: "Benzin · Automatik · Gewährleistung",
    price: "€ 30.900",
    category: "Sofort verfügbar",
    priceEur: 30900,
    horsepowerPs: 150,
    mileageKm: 13,
    yearNum: null,
    specs: {
      year: null,
      mileage: "13 km",
      horsepower: "150 PS (110 kW)",
      transmission: "Benzin · Automatik",
      color: "Gewährleistung",
    },
  }),
  createVehicle({
    num: "15",
    slug: "hyundai-i30-15-dpi-go",
    brand: "Hyundai",
    name: "Hyundai i30",
    subtitle: "1,5 DPI Go!",
    gradient: "hero-cream",
    image: "i20NewFront",
    galleryImages: ["i20NewFront", "i20NewSide"],
    highlight: "Benzin · Schaltgetriebe · gültiges Pickerl",
    price: "€ 21.900",
    category: "Gebrauchtwagen",
    priceEur: 21900,
    horsepowerPs: 97,
    mileageKm: 14689,
    yearNum: 2024,
    specs: {
      year: "2024",
      mileage: "14.689 km",
      horsepower: "97 PS (71 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "16",
    slug: "hyundai-kona-elektro-484kwh-smart-line-9km",
    brand: "Hyundai",
    name: "Hyundai Kona Elektro",
    subtitle: "48,4kWh Smart Line",
    gradient: "hero-teal",
    image: "konaSilverFront",
    galleryImages: [
      "konaSilverFront",
      "konaSilverSide",
      "konaSilverDirectFront",
      "konaSilverRear",
    ],
    highlight: "Elektro · Automatik · gültiges Pickerl",
    price: "€ 29.900",
    category: "Jungwagen",
    priceEur: 29900,
    horsepowerPs: 156,
    mileageKm: 9,
    yearNum: 2025,
    specs: {
      year: "2025",
      mileage: "9 km",
      horsepower: "156 PS (115 kW)",
      transmission: "Elektro · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "17",
    slug: "hyundai-kona-elektro-484kwh-smart-line-14km",
    brand: "Hyundai",
    name: "Hyundai Kona Elektro",
    subtitle: "48,4kWh Smart Line",
    gradient: "hero-teal",
    image: "konaSilverFront",
    galleryImages: [
      "konaSilverFront",
      "konaSilverSide",
      "konaSilverDirectFront",
      "konaSilverRear",
    ],
    highlight: "Elektro · Automatik · gültiges Pickerl",
    price: "€ 29.900",
    category: "Jungwagen",
    priceEur: 29900,
    horsepowerPs: 156,
    mileageKm: 14,
    yearNum: 2025,
    specs: {
      year: "2025",
      mileage: "14 km",
      horsepower: "156 PS (115 kW)",
      transmission: "Elektro · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "18",
    slug: "mercedes-benz-sl-klasse-300-sl-24-roadster",
    brand: "Mercedes-Benz",
    name: "Mercedes-Benz SL-Klasse",
    subtitle: "300 SL-24 Roadster",
    gradient: "hero-slate",
    image: "abarthFront",
    galleryImages: ["abarthFront"],
    highlight: "Benzin · Schaltgetriebe · gültiges Pickerl",
    price: "€ 28.990",
    category: "Klassiker",
    priceEur: 28990,
    horsepowerPs: 231,
    mileageKm: 178328,
    yearNum: 1991,
    specs: {
      year: "1991",
      mileage: "178.328 km",
      horsepower: "231 PS (170 kW)",
      transmission: "Benzin · Schaltgetriebe",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "19",
    slug: "hyundai-ioniq-6-elektro-774kwh-4wd-black",
    brand: "Hyundai",
    name: "Hyundai Ioniq 6",
    subtitle: "Elektro 77,4kWh 4WD Black",
    gradient: "hero-teal",
    image: "ioniq",
    galleryImages: ["ioniq", "hyundaiRange"],
    highlight: "Elektro · Automatik · gültiges Pickerl",
    price: "€ 44.900",
    category: "Jungwagen",
    priceEur: 44900,
    horsepowerPs: 325,
    mileageKm: 75,
    yearNum: 2025,
    specs: {
      year: "2025",
      mileage: "75 km",
      horsepower: "325 PS (239 kW)",
      transmission: "Elektro · Automatik",
      color: "Gültiges Pickerl · Gewährleistung",
    },
  }),
  createVehicle({
    num: "20",
    slug: "nissan-qashqai-16-dci-360-at",
    brand: "Nissan",
    name: "Nissan Qashqai",
    subtitle: "1,6 DCI 360° AT",
    gradient: "hero-sage",
    image: "konaSilverFront",
    galleryImages: ["konaSilverFront", "konaSilverSide"],
    highlight: "Diesel · Automatik · Garantie",
    price: "€ 11.900",
    category: "Gebrauchtwagen",
    priceEur: 11900,
    horsepowerPs: 131,
    mileageKm: 132253,
    yearNum: 2015,
    specs: {
      year: "2015",
      mileage: "132.253 km",
      horsepower: "131 PS (96 kW)",
      transmission: "Diesel · Automatik",
      color: "Gültiges Pickerl · Gewährleistung · Garantie",
    },
  }),
  createVehicle({
    num: "21",
    slug: "mitsubishi-asx-18-di-d-lp-invite",
    brand: "Mitsubishi",
    name: "Mitsubishi ASX",
    subtitle: "1,8 DI-D LP Invite",
    gradient: "hero-slate",
    image: "konaSilverFront",
    galleryImages: ["konaSilverFront", "konaSilverSide"],
    highlight: "Diesel · Schaltgetriebe · Gewährleistung",
    price: "€ 13.900",
    category: "Gebrauchtwagen",
    priceEur: 13900,
    horsepowerPs: 116,
    mileageKm: 59893,
    yearNum: 2015,
    specs: {
      year: "2015",
      mileage: "59.893 km",
      horsepower: "116 PS (85 kW)",
      transmission: "Diesel · Schaltgetriebe",
      color: "Gewährleistung",
    },
  }),
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getVehicleSlugs(): string[] {
  return vehicles.map((v) => v.slug);
}
