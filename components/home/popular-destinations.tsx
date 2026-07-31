import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { destinations } from '@/lib/data';
import { SectionHeading } from '@/components/shared/section-heading';
import { DestinationCard } from '@/components/shared/destination-card';
import { Reveal } from '@/components/shared/reveal';

export function PopularDestinations() {
  return (
    <section className="section-py bg-gradient-to-b from-white to-ocean-light/40">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Popular Destinations"
            title="Where will you go next?"
            subtitle="Hand-picked destinations our travellers can&apos;t stop talking about — from the serene backwaters of Kerala to the caldera cliffs of Santorini."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {destinations.slice(0, 8).map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.08}>
              <DestinationCard dest={d} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
          >
            View all destinations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
