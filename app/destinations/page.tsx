import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Clock, Wallet, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { destinations, packages } from '@/lib/data';
import { SectionHeading } from '@/components/shared/section-heading';
import { DestinationCard } from '@/components/shared/destination-card';
import { PackageCard } from '@/components/shared/package-card';
import { Reveal } from '@/components/shared/reveal';
import { NewsletterSection } from '@/components/shared/newsletter-section';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Destinations | GlobeTrail Travel & Tourism',
  description:
    'Explore a curated grid of breathtaking destinations across India and the world — with highlights, best times to visit and average costs.',
};

export default function DestinationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Santorini blue-domed churches"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/95" />
        </div>
        <div className="relative container-px mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ocean-light backdrop-blur">
              Destinations
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-3xl leading-tight">
              Explore the world, one destination at a time
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed text-balance">
              From the Himalayas to the Maldives — discover the places our travellers love most, with everything you need to start planning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="All Destinations"
              title="Where will your story unfold?"
              subtitle="Tap any destination to see its top attractions, best time to visit and available tours."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {destinations.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 0.08}>
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
