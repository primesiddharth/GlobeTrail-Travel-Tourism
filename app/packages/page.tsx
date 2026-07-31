import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { NewsletterSection } from '@/components/shared/newsletter-section';
import { FaqAccordion } from '@/components/shared/faq-accordion';
import { PackagesExplorer } from '@/components/packages/packages-explorer';

export const metadata: Metadata = {
  title: 'Tour Packages | GlobeTrail Travel & Tourism',
  description:
    'Browse domestic, international, honeymoon, family, adventure and luxury tour packages with transparent pricing, durations and ratings.',
};

const categories = [
  { name: 'Domestic', desc: 'Kerala, Goa, Rajasthan & more', icon: '🇮🇳' },
  { name: 'International', desc: 'Swiss Alps, Bali, Dubai & beyond', icon: '🌍' },
  { name: 'Honeymoon', desc: 'Maldives, Santorini, Paris', icon: '❤️' },
  { name: 'Family', desc: 'Thailand, Singapore & more', icon: '👨‍👩‍👧' },
  { name: 'Adventure', desc: 'Himalayas, Cappadocia, Iceland', icon: '🏔️' },
  { name: 'Luxury', desc: 'Venice, Maldives, Dubai', icon: '✨' },
];

export default function PackagesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Maldives overwater bungalows"
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
              Tour Packages
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-3xl leading-tight">
              Find your perfect trip
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed text-balance">
              From budget-friendly domestic escapes to bucket-list luxury holidays — every package is fully customisable to your dates and style.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category overview */}
      <section className="py-12 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <a
                  href={`/packages?category=${c.name}`}
                  className="group flex flex-col items-center rounded-2xl bg-ocean-light/40 p-5 text-center ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:bg-ocean-light hover:shadow-lg"
                >
                  <span className="text-3xl">{c.icon}</span>
                  <span className="mt-2 font-display text-sm font-bold text-foreground">{c.name}</span>
                  <span className="mt-0.5 text-[11px] text-muted-foreground">{c.desc}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <PackagesExplorer />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-gradient-to-b from-ocean-light/40 to-white">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Good to Know"
              title="Frequently asked questions"
              subtitle="Everything you need to know about booking, customising and travelling with GlobeTrail."
            />
          </Reveal>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
