import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, getInsightSlugs, posts } from "@/lib/insights";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

const dateFormatter = new Intl.DateTimeFormat("de-AT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return { title: "Insight nicht gefunden" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="bg-ink text-bone">
      {/* Hero */}
      <header className="border-b border-line pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-12 lg:px-20">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-gold"
          >
            <span aria-hidden>←</span> Alle Beiträge
          </Link>
          <p className="mt-10 text-[11px] uppercase tracking-[0.25em] text-gold">
            {post.eyebrow}
          </p>
          <h1 className="serif mt-5 text-balance text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-mute">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </div>
      </header>

      {/* Hero image */}
      <div className="bg-stage">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-12 lg:px-20">
          <div className="relative aspect-16/9 overflow-hidden bg-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.imageAlt}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover select-none"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[68ch]">
          <div className="space-y-6 text-base leading-relaxed text-bone/90 sm:text-lg">
            {post.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {others.length > 0 && (
        <section className="border-t border-line bg-ink px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="mx-auto max-w-360">
            <p className="eyebrow text-gold!">Weiterlesen</p>
            <h2 className="serif mt-6 text-3xl text-bone sm:text-4xl">
              Mehr von Fischerauto.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex flex-col overflow-hidden border border-line bg-ink transition-colors hover:border-bone/30"
                >
                  <div className="relative aspect-16/9 overflow-hidden bg-stage">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] select-none"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                      {p.eyebrow}
                    </p>
                    <h3 className="serif mt-4 text-xl leading-tight text-bone sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
