import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

type Gradient =
  | "hero-teal"
  | "hero-cream"
  | "hero-blush"
  | "hero-sage"
  | "hero-sky"
  | "hero-slate";

type Brand = "Ferrari" | "Porsche" | "BMW" | "Sonstige";

type CarInput = {
  num: string;
  slug: string;
  brand: Brand;
  name: string;
  subtitle: string;
  gradient: Gradient;
  source: string;
};

const CARS: CarInput[] = [
  {
    num: "01",
    slug: "ferrari-488-spider",
    brand: "Ferrari",
    name: "Ferrari 488",
    subtitle: "Spider",
    gradient: "hero-blush",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/EA7972CC-E480-B425-2AF5-47A9830AC7A6_IMG_2382_1400_946_1_.jpg",
  },
  {
    num: "02",
    slug: "ferrari-488-pista",
    brand: "Ferrari",
    name: "Ferrari 488",
    subtitle: "Pista",
    gradient: "hero-sage",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/CD25398D-77EB-98FF-D591-AD7F4E60E198_IMG_E5963_1400_946_1_.JPG",
  },
  {
    num: "03",
    slug: "ferrari-458-speciale-aperta",
    brand: "Ferrari",
    name: "Ferrari 458",
    subtitle: "Speciale Aperta",
    gradient: "hero-blush",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/4E5191BE-EB7F-D230-DB3C-DBB35045AEC8_IMG_8395_1400_946_1_.jpg",
  },
  {
    num: "04",
    slug: "porsche-718-spyder-4-0",
    brand: "Porsche",
    name: "Porsche 718",
    subtitle: "Spyder 4.0",
    gradient: "hero-sky",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/4783BD65-FB5D-2CD1-87CE-FB8ADAB37145_IMG_E5387_1400_946_1_.JPG",
  },
  {
    num: "05",
    slug: "porsche-cayman-r-peridotmetallic",
    brand: "Porsche",
    name: "Porsche Cayman",
    subtitle: '"R" Peridotmetallic',
    gradient: "hero-sage",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/66FA24BC-D633-39A2-05B5-31741962E14A_IMG_2606_1400_946_1_.JPG",
  },
  {
    num: "06",
    slug: "porsche-996-gt3-rs",
    brand: "Porsche",
    name: "Porsche 996",
    subtitle: "GT3 RS",
    gradient: "hero-slate",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/A9E411A8-0E38-F655-C4EA-20222E2B2C59_IMG_2228_1400_946_1_.jpg",
  },
  {
    num: "07",
    slug: "bmw-z3-m-coupe-s54",
    brand: "BMW",
    name: "BMW Z3",
    subtitle: "M Coupé S54",
    gradient: "hero-cream",
    source:
      "https://www.meyer-motorsport.at/components/com_vehiclemanager/photos/96AC1E2B-1F4A-450D-8A89-24D97053CD7E_IMG_2641_1400_946_1_.jpg",
  },
];

const OUT_DIR = join(process.cwd(), "public", "cars");
const LIB_FILE = join(process.cwd(), "lib", "vehicles.ts");

async function fetchBuffer(url: string): Promise<Buffer> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; MeyerMotorsportBuilder/1.0; +https://www.meyer-motorsport.at)",
    },
  });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

type ProcessedCar = CarInput & {
  width: number;
  height: number;
  src: string;
  srcAvif: string;
  blurDataURL: string;
  bytes: { jpg: number; avif: number };
};

async function processOne(car: CarInput): Promise<ProcessedCar> {
  console.log(`[${car.num}] ${car.name} ${car.subtitle}`);
  console.log(`     ↓ ${car.source}`);
  const raw = await fetchBuffer(car.source);
  console.log(`     ${(raw.length / 1024).toFixed(1)} KB raw`);

  const meta = await sharp(raw).metadata();
  const width = meta.width;
  const height = meta.height;
  if (!width || !height) throw new Error(`${car.slug}: missing image dimensions`);

  const jpgPath = join(OUT_DIR, `${car.slug}.jpg`);
  await sharp(raw)
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(jpgPath);

  const avifPath = join(OUT_DIR, `${car.slug}.avif`);
  await sharp(raw)
    .avif({ quality: 60, effort: 6 })
    .toFile(avifPath);

  const blur = await sharp(raw)
    .resize(12, undefined, { fit: "inside" })
    .blur(0.5)
    .jpeg({ quality: 40 })
    .toBuffer();
  const blurDataURL = `data:image/jpeg;base64,${blur.toString("base64")}`;

  const { Bun } = globalThis as { Bun?: unknown };
  void Bun;

  const { statSync } = await import("node:fs");
  const jpgBytes = statSync(jpgPath).size;
  const avifBytes = statSync(avifPath).size;
  console.log(
    `     → ${car.slug}.jpg (${(jpgBytes / 1024).toFixed(1)} KB) + .avif (${(
      avifBytes / 1024
    ).toFixed(1)} KB) · ${width}×${height}`
  );

  return {
    ...car,
    width,
    height,
    src: `/cars/${car.slug}.jpg`,
    srcAvif: `/cars/${car.slug}.avif`,
    blurDataURL,
    bytes: { jpg: jpgBytes, avif: avifBytes },
  };
}

function emitTs(cars: ProcessedCar[]) {
  const data = cars.map((c) => ({
    num: c.num,
    slug: c.slug,
    brand: c.brand,
    name: c.name,
    subtitle: c.subtitle,
    gradient: c.gradient,
    src: c.src,
    srcAvif: c.srcAvif,
    blurDataURL: c.blurDataURL,
    width: c.width,
    height: c.height,
    alt: `${c.name} ${c.subtitle}, Seitenansicht`,
    specs: {
      year: null,
      mileage: null,
      horsepower: null,
      transmission: null,
      color: null,
    },
  }));

  return `// AUTO-GENERATED by scripts/fetch-cars.ts — re-run \`npm run fetch:cars\` to refresh.

export type Gradient =
  | "hero-teal"
  | "hero-cream"
  | "hero-blush"
  | "hero-sage"
  | "hero-sky"
  | "hero-slate";

export type Brand = "Ferrari" | "Porsche" | "BMW" | "Sonstige";

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
  blurDataURL: string;
  width: number;
  height: number;
  alt: string;
  specs: VehicleSpecs;
};

export const vehicles: Vehicle[] = ${JSON.stringify(data, null, 2)};

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getVehicleSlugs(): string[] {
  return vehicles.map((v) => v.slug);
}
`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(join(process.cwd(), "lib"), { recursive: true });

  const results: ProcessedCar[] = [];
  for (const car of CARS) {
    results.push(await processOne(car));
  }

  const ts = emitTs(results);
  await writeFile(LIB_FILE, ts, "utf8");

  const totalJpg = results.reduce((a, c) => a + c.bytes.jpg, 0) / 1024;
  const totalAvif = results.reduce((a, c) => a + c.bytes.avif, 0) / 1024;
  console.log(
    `\n✓ ${results.length} vehicles processed\n` +
      `✓ ${LIB_FILE}\n` +
      `✓ ${totalJpg.toFixed(0)} KB JPG + ${totalAvif.toFixed(0)} KB AVIF in public/cars/`
  );
}

main().catch((err) => {
  console.error("\n✗ Fetch failed:", err);
  process.exit(1);
});
