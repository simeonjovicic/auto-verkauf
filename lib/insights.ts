export type InsightPost = {
  slug: string;
  title: string;
  /** ISO date "YYYY-MM-DD" */
  date: string;
  eyebrow: string;
  excerpt: string;
  /** Path under /public, e.g. "/cars/ferarri-gelb6.png" */
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export const posts: InsightPost[] = [
  {
    slug: "renaissance-des-sammlerstuecks",
    title: "Ferrari 458 Speciale Aperta — die Renaissance des Sammlerstücks",
    date: "2026-04-22",
    eyebrow: "Markt · April 2026",
    excerpt:
      "Warum die letzten Saugmotor-Ferraris derzeit den Markt anführen — und welche Ausstattungen über Wert oder Verlust entscheiden.",
    image: "/cars/ferarri-gelb6.png",
    imageAlt: "Ferrari 458 Speciale Aperta in Giallo Modena, Dreiviertelansicht.",
    paragraphs: [
      "Die 499 weltweit gebauten Speciale Aperta sind aus der Phase, in der Ferrari den V8-Sauger ein letztes Mal in Reinkultur einsetzte. Seit Anfang 2026 verzeichnen Sammlerauktionen einen klaren Aufwärtstrend: Innerhalb von zwölf Monaten haben sich gepflegte Exemplare um durchschnittlich 14 Prozent verteuert.",
      "Die Erklärung ist nüchtern. Mit dem Übergang zu Hybrid- und Turbomotoren wurde der Speciale Aperta zur letzten reinen Aussage einer Ära. Sammler, die bisher 360 Modena Spider und 430 Scuderia 16M jagten, schichten gezielt um. Die Aperta wird damit zum Bindeglied zwischen klassischer Sportwagen-Kultur und der modernen Plattform 488/F8.",
      "Worauf achten Käufer aktuell? Erstens auf die Originalfarbe — Giallo Modena, Rosso Corsa und Bianco Avus erzielen die stabilsten Werte; Sonderfarben sind nur dann positiv, wenn lückenlos dokumentiert. Zweitens auf die Carbon-Rennsitze: Wer das Werks-Carbon-Paket nachgerüstet hat, verliert beim Wiederverkauf. Drittens auf den Kilometerstand. Unter zehntausend gilt als Sweet Spot — darunter wird die Standzeit ein Risiko, darüber sinkt der Sammlerwert spürbar.",
      "Wir begleiten in Wien derzeit drei laufende Speciale-Aperta-Transaktionen. Die Käuferseite kommt aus der Schweiz, aus Süddeutschland und aus Norditalien. Was alle drei verbindet: keine Eile, viel Anspruch an Dokumentation und Provenance.",
    ],
  },
  {
    slug: "neuzugang-porsche-718-spyder-4-0",
    title: "Neuzugang: Porsche 718 Spyder 4.0 in Saphirblau",
    date: "2026-04-08",
    eyebrow: "Neuzugang · April 2026",
    excerpt:
      "Manueller GT4-Antrieb, 420 PS Sauger, Saphirblau Metallic. Ein Auto, das man fährt — nicht abstellt.",
    image: "/cars/blau3.png",
    imageAlt: "Porsche 718 Spyder 4.0 in Saphirblau Metallic, Dreiviertelansicht.",
    paragraphs: [
      "Der 718 Spyder 4.0 ist Porsches Antwort auf die Frage, ob ein moderner Mittelmotor-Roadster ohne Turbolader noch zeitgemäß sein darf. 420 PS aus dem 4,0-Liter-Boxer der GT4-Familie, Sechsgang-Schaltgetriebe, kein PDK. Genau das macht ihn zum Liebhaberobjekt.",
      "Das hier gelistete Exemplar stammt aus zweiter Hand, scheckheftgepflegt, mit lückenloser Porsche-Historie. 11.500 Kilometer, Saphirblau Metallic, schwarz-rotes Vollleder-Interieur, manuelles Verdeck. Die Kombination aus Lack und Innenraum ist im deutschsprachigen Markt unter zwanzig Exemplaren — wir haben es geprüft.",
      "Mechanisch ist das Auto unauffällig in der besten Bedeutung des Wortes. Die Steuerkettenproblematik der frühen GT4-Generation wurde durch das Update-Programm bereits 2024 abgearbeitet, alle Unterlagen liegen vor. Eine Probefahrt ist nach Vereinbarung möglich.",
    ],
  },
  {
    slug: "konsignation-werkstattbesuch",
    title: "Was bei einer Konsignation wirklich passiert — ein Werkstattbesuch",
    date: "2026-03-19",
    eyebrow: "Service · März 2026",
    excerpt:
      "Sieben Tage zwischen Anlieferung und Inserat — wie ein Sammlerfahrzeug bei uns auf den Markt vorbereitet wird.",
    image: "/cars/nicke5.png",
    imageAlt: "Ferrari 488 Pista in Rosso Corsa, Dreiviertelansicht.",
    paragraphs: [
      "Konsignation bedeutet für die meisten Eigentümer: das Auto steht ein paar Wochen bei einem Händler, der findet hoffentlich einen Käufer. So funktioniert das bei uns nicht. Wir nehmen pro Quartal maximal sechs Fahrzeuge in Konsignation — alles andere geht zu Lasten der Qualität.",
      "Tag eins ist Anlieferung und Sichtkontrolle. Wir dokumentieren mit über zweihundert Fotos den Zustand bei Übergabe, prüfen alle elektronischen Steuergeräte über das Werksdiagnose-System und sichten Service-Heft, Schlüsselkonten und Originalpapiere.",
      "Tag zwei bis vier ist die Werkstatt. Bremsbeläge, Reifenalter, Klimakreislauf, Differential-Ölstand, Beleuchtung, Fahrwerksvermessung — wir lassen nichts liegen, was später beim Käufer auffällt. Wenn etwas fehlt, sprechen wir mit dem Eigentümer, ob wir es vor dem Verkauf machen oder transparent kommunizieren.",
      "Tag fünf ist Fotografie. Studio-Set, Glasboden, gleiche Lichtsituation für alle Fahrzeuge — das, was Sie auf dieser Website sehen, entsteht in unserer Halle in Wien. Tag sechs ist Texterstellung und Marktrecherche: Welche Preise erzielen vergleichbare Fahrzeuge gerade tatsächlich, nicht im Inserat?",
      "Tag sieben ist das Inserat. Ab dann kommunizieren wir mit Kaufinteressenten — der Eigentümer wird nur involviert, wenn ein konkretes Angebot vorliegt. Das ist der Sinn der Konsignation.",
    ],
  },
];

export function getInsight(slug: string): InsightPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getInsightSlugs(): string[] {
  return posts.map((p) => p.slug);
}
