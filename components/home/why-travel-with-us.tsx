import Image from 'next/image';
import { ShieldCheck, Headphones, Wallet, Compass, Award, Users } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';

const reasons = [
  {
    icon: Compass,
    title: 'Expertly Crafted Itineraries',
    desc: 'Every trip is designed by a travel expert who has been there — no cookie-cutter tours, no hidden surprises.',
  },
  {
    icon: Wallet,
    title: 'Best Price Guarantee',
    desc: 'Find a lower price within 24 hours and we will match it. Transparent, all-inclusive pricing with no fees.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Travel',
    desc: 'Comprehensive travel insurance, vetted partners and 24/7 on-trip support on every single package.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge Support',
    desc: 'A real human, one call away — before, during and after your trip. We handle the details so you do not have to.',
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    desc: 'Recognised by the Indian Travel Awards for three consecutive years for excellence in customer experience.',
  },
  {
    icon: Users,
    title: 'Trusted by 25,000+ Travellers',
    desc: 'A 4.9/5 average rating across 6,000+ verified reviews from couples, families and solo explorers.',
  },
];

export function WhyTravelWithUs() {
  return (
    <section className="section-py relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/14400667/pexels-photo-14400667.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Airplane wing above the clouds"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/85 to-foreground/95" />
      </div>

      <div className="relative container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ocean-light">
              <span className="h-1.5 w-1.5 rounded-full bg-ocean-light" />
              Why GlobeTrail
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white text-balance leading-tight">
              Why travellers choose us, again and again
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed text-balance">
              We believe travel should be effortless, personal and unforgettable. Here is what sets us apart.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl glass-dark p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ocean to-primary text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
