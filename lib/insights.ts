export type InsightPost = {
  slug: string;
  title: string;
  date: string;
  eyebrow: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export const posts: InsightPost[] = [
  {
    slug: "hyundai-ioniq-9-bei-fischerauto",
    title: "Hyundai IONIQ 9: grosses Elektro-SUV, persönlich erklärt",
    date: "2026-05-01",
    eyebrow: "Hyundai · Mai 2026",
    excerpt:
      "Der IONIQ 9 steht für Hyundais grosse Elektro-Plattform: viel Raum, Schnellladetechnik und Beratung direkt im Autohaus in Wien-Donaustadt.",
    image: "/fischerauto/ioniq-9.jpg",
    imageAlt: "Hyundai IONIQ 9 Aktionsbanner von Fischerauto",
    paragraphs: [
      "Der Hyundai IONIQ 9 ist eines der wichtigsten neuen Modelle in der Hyundai-Palette. Bei Fischerauto geht es dabei nicht nur um Prospektdaten, sondern um die konkrete Frage: Passt dieses Fahrzeug zu Alltag, Familie, Ladeverhalten und Budget?",
      "Im Schauraum in der Wagramer Straße werden Ausstattung, Reichweite, Schnellladen, Finanzierung und Versicherungsfragen direkt besprochen. So entsteht eine Entscheidung mit klaren Zahlen und kurzen Wegen.",
      "Probefahrten und Modellbesichtigungen werden nach Verfügbarkeit organisiert. Für aktuelle Aktionen und Lieferzeiten lohnt sich der direkte Kontakt mit dem Verkaufsteam.",
    ],
  },
  {
    slug: "service-einmal-im-jahr",
    title: "Warum ein jährlicher Servicecheck sinnvoll bleibt",
    date: "2026-04-10",
    eyebrow: "Service · April 2026",
    excerpt:
      "Ein Fahrzeug ist eine Investition. Ein kontrollierender Blick vom Profi hilft, Probleme früh zu erkennen und planbar zu halten.",
    image: "/service-bg.jpg",
    imageAlt: "Mechaniker bei der Arbeit an einem Fahrzeug",
    paragraphs: [
      "Wer ein Fahrzeug anschafft, tätigt eine bedeutende Investition. Es soll über einen längeren Zeitraum zuverlässig funktionieren. Dafür ist es sinnvoll, dass zumindest einmal im Jahr ein Profi einen kontrollierenden Blick auf das Fahrzeug wirft.",
      "Fischerauto betreut Hyundai und Mitsubishi, repariert aber auch Fahrzeuge anderer Fabrikate. Inspektion, Pickerl, Reifenservice, Elektrik, Klimaanlage, Karosserie und Ersatzteile liegen unter einem Dach.",
      "Der Vorteil für Kundinnen und Kunden ist die direkte Abstimmung: Annahme, Werkstatt, Teilelager, Ersatzwagen und Versicherungsservice arbeiten am selben Standort zusammen.",
    ],
  },
  {
    slug: "familienbetrieb-seit-1974",
    title: "Seit 1974 in Familienhand",
    date: "2026-03-20",
    eyebrow: "Unternehmen · März 2026",
    excerpt:
      "Franz und Monika Fischer gründeten den Betrieb 1974. Heute arbeiten mehrere Generationen und ein eingespieltes Team am Standort in Wien-Donaustadt.",
    image: "/fischerauto/team.png",
    imageAlt: "Fischerauto Team im Schauraum in Wien",
    paragraphs: [
      "Fischerauto ist seit 1974 ein Wiener Betrieb in Familienhand. Gegründet von Franz und Monika Fischer, arbeiten heute mehrere Generationen im Unternehmen zusammen.",
      "Die persönliche Atmosphäre ist Teil des Betriebs: Kundinnen und Kunden finden vor Ort Ansprechpartner für Verkauf, Service, Teile, Garantie, Finanzierung und Schadenabwicklung.",
      "Zum Standort gehören Kundenparkplätze sowie Ausstellungsflächen im Untergeschoss und auf dem Dach. Damit verbindet Fischerauto klassischen Händlerbetrieb mit kurzen, familiären Entscheidungswegen.",
    ],
  },
];

export function getInsight(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getInsightSlugs(): string[] {
  return posts.map((p) => p.slug);
}
