import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { packages } from '@/lib/data';
import { SectionHeading } from '@/components/shared/section-heading';
import { PackageCard } from '@/components/shared/package-card';
import { Reveal } from '@/components/shared/reveal';

export function TrendingPackages() {
  const featured = packages.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              align="left"
              eyebrow="Trending Now"
              title="Tour packages travellers love"
              subtitle="All-inclusive itineraries with flights, stays, transfers and sightseeing — curated by our travel experts and ready to book."
            />
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white flex-shrink-0"
            >
              All packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <PackageCard pkg={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
