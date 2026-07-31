import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Star, Clock, Wallet, ArrowRight, ArrowLeft, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { destinations, packages } from '@/lib/data';
import { Reveal } from '@/components/shared/reveal';
import { PackageCard } from '@/components/shared/package-card';
import { DestinationCard } from '@/components/shared/destination-card';
import { NewsletterSection } from '@/components/shared/newsletter-section';

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dest = destinations.find((d) => d.slug === params.slug);
  if (!dest) return { title: 'Destination not found | GlobeTrail' };
  return {
    title: `${dest.name} | GlobeTrail Travel & Tourism`,
    description: dest.description,
  openGraph: { images: [dest.image] },
  };
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const dest = destinations.find((d) => d.slug === params.slug);
  if (!dest) notFound();

  const related = destinations.filter((d) => d.slug !== dest.slug && d.region === dest.region).slice(0, 4);
  const destPackages = packages.filter((p) =>
    p.destination.toLowerCase().includes(dest.country.toLowerCase()) ||
    p.destination.toLowerCase().includes(dest.name.toLowerCase().split(' ')[0].toLowerCase())
  ).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/20" />
        <div className="relative container-px mx-auto max-w-7xl h-full flex flex-col justify-end pb-12">
          <Reveal>
            <Link href="/destinations" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to destinations
            </Link>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <MapPin className="h-4 w-4" />
              {dest.country}
              <span className="mx-1">·</span>
              {dest.region}
            </div>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-shadow-lg text-balance max-w-3xl">
              {dest.name}
            </h1>
            <p className="mt-3 text-lg text-white/85 max-w-2xl text-balance">{dest.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur">
                <Star className="h-4 w-4 fill-sunset text-sunset" />
                {dest.rating} rating
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur">
                <Calendar className="h-4 w-4" />
                Best: {dest.bestTime}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur">
                <Wallet className="h-4 w-4" />
                From {dest.avgCost}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald">
                  <Sparkles className="h-3.5 w-3.5" />
                  Overview
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  About {dest.name}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{dest.description}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <h3 className="mt-10 font-display text-2xl font-bold text-foreground">Top attractions & highlights</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {dest.highlights.map((h, i) => (
                    <div key={h} className="flex items-center gap-3 rounded-xl bg-ocean-light/40 p-4 ring-1 ring-border/60">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground">{h}</span>
                      <CheckCircle2 className="ml-auto h-5 w-5 text-emerald flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div>
              <Reveal delay={0.15}>
                <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-xl shadow-primary/5 ring-1 ring-border/60">
                  <h3 className="font-display text-lg font-bold text-foreground">Quick facts</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <dt className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> Country</dt>
                      <dd className="font-semibold text-foreground">{dest.country}</dd>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <dt className="flex items-center gap-2 text-muted-foreground"><Star className="h-4 w-4" /> Rating</dt>
                      <dd className="font-semibold text-foreground">{dest.rating} / 5</dd>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <dt className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> Best time</dt>
                      <dd className="font-semibold text-foreground">{dest.bestTime}</dd>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <dt className="flex items-center gap-2 text-muted-foreground"><Wallet className="h-4 w-4" /> Avg. cost</dt>
                      <dd className="font-semibold text-foreground">{dest.avgCost}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-2 text-muted-foreground"><Sparkles className="h-4 w-4" /> Tours</dt>
                      <dd className="font-semibold text-foreground">{dest.tours} available</dd>
                    </div>
                  </dl>
                  <Link
                    href="/packages"
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
                  >
                    View tours
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related packages */}
      {destPackages.length > 0 && (
        <section className="section-py bg-gradient-to-b from-ocean-light/40 to-white">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Tours in {dest.name}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destPackages.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <PackageCard pkg={p} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related destinations */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              You might also like
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.08}>
                <DestinationCard dest={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
