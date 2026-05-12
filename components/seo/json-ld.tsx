export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe here — input is a literal object built server-side from typed fields.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
