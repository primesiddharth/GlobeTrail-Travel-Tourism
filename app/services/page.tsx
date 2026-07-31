import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Package, Plane, Hotel, FileText, Heart, Building2, Users, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/data';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { NewsletterSection } from '@/components/shared/newsletter-section';

export const metadata: Metadata = {
  title: 'Services | GlobeTrail Travel & Tourism',
  description:
    'Holiday packages, flight booking, hotel booking, visa assistance, honeymoon planning, corporate tours, group tours and travel insurance — all from GlobeTrail.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package,
  Plane,
  Hotel,
  FileText,
  Heart,
  Building2,
  Users,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Luxury infinity pool at a tropical resort"
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
              Our Services
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-3xl leading-tight">
              Everything you need to travel, sorted
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed text-balance">
              From the first spark of inspiration to the moment you land back home — GlobeTrail handles every detail of your journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Package;
              return (
                <Reveal key={s.title} delay={(i % 4) * 0.08}>
                  <div className="group h-full rounded-2xl bg-white p-6 shadow-lg shadow-primary/5 ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-ocean text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-gradient-to-b from-ocean-light/40 to-white">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Your journey, in four simple steps"
              subtitle="From the first hello to your safe return — here is how we make travel effortless."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Share your wishlist', desc: 'Tell us your dates, budget and dream destinations — no detail is too small.' },
              { step: '02', title: 'Get a tailored plan', desc: 'Within 24 hours, your expert sends a personalised itinerary with transparent pricing.' },
              { step: '03', title: 'Book with confidence', desc: 'Secure your trip with a small deposit. We handle flights, hotels, visas and transfers.' },
              { step: '04', title: 'Travel worry-free', desc: 'Enjoy 24/7 concierge support from departure to your safe return home.' },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl bg-white p-6 shadow-lg shadow-primary/5 ring-1 ring-border/60">
                  <span className="font-display text-4xl font-extrabold text-primary/15">{p.step}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  {i < 3 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary/30 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px mx-auto max-w-5xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-ocean p-10 sm:p-14 text-center text-white shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 bg-grid opacity-[0.08]" />
              <div className="relative">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-balance">
                  Let&apos;s plan your next adventure
                </h2>
                <p className="mt-4 text-white/80 max-w-xl mx-auto text-balance">
                  Speak to a travel expert today and get a personalised itinerary within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sunset/40 transition-all hover:-translate-y-0.5 hover:bg-sunset/90"
                >
                  Talk to an expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
