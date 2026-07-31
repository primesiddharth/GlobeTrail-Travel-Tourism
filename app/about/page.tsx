import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, Award, Users, Globe, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { experts, stats } from '@/lib/data';
import { Counter } from '@/components/shared/counter';
import { NewsletterSection } from '@/components/shared/newsletter-section';

export const metadata: Metadata = {
  title: 'About Us | GlobeTrail Travel & Tourism',
  description:
    'Learn the story behind GlobeTrail Travel & Tourism — our mission, vision and the travel experts who craft unforgettable journeys across India and the world.',
};

const achievements = [
  { icon: Award, title: 'Indian Travel Awards', desc: 'Best Customer Experience, 3 years running' },
  { icon: Users, title: '25,000+ Travellers', desc: 'Served across 120+ destinations worldwide' },
  { icon: Globe, title: '120+ Destinations', desc: 'Across 6 continents and 45+ countries' },
  { icon: Heart, title: '4.9/5 Rating', desc: 'From 6,000+ verified customer reviews' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/11845845/pexels-photo-11845845.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Red Bernina Express train through the Swiss Alps"
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
              About GlobeTrail
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-3xl leading-tight">
              We turn travel dreams into itineraries
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed text-balance">
              For over 15 years, GlobeTrail Travel & Tourism has helped travellers explore the world with confidence — one thoughtfully crafted journey at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company story */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-primary/15">
                  <Image
                    src="https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                    alt="GlobeTrail team collaborating in the office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden sm:block">
                  <div className="glass rounded-2xl p-5 shadow-xl">
                    <div className="font-display text-3xl font-extrabold text-primary">
                      <Counter value={15} suffix="+" />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">Years of crafting journeys</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Our Story"
                  title="From a single desk to a world of journeys"
                  subtitle="What began in 2009 as a one-desk travel desk in Noida is today a team of 40+ travel experts serving travellers across India and beyond."
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    GlobeTrail was founded by Ananya Kapoor after a decade of guiding friends and family through increasingly ambitious trips. She believed travel planning had lost its soul — buried under generic packages and call-centre service — and set out to build an agency that treated every trip as personal.
                  </p>
                  <p>
                    Today, our experts have personally scouted resorts in 45+ countries, negotiated rates that save our travellers thousands, and built a 24/7 concierge desk that picks up on the first ring. We handle flights, hotels, visas, transfers and every little detail in between.
                  </p>
                  <p>
                    But the heart of GlobeTrail has never changed: we still believe a holiday should feel effortless, personal and unforgettable — and that the best journeys are the ones you stop worrying about.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                  {['Personalised itineraries', 'Vetted partners', 'Transparent pricing', '24/7 support'].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-gradient-to-b from-ocean-light/40 to-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-primary/5 ring-1 ring-border/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-light text-emerald">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To make extraordinary travel effortless for everyone — by crafting personalised, transparent and worry-free journeys that put the traveller first, every single time.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {['Personalise every itinerary', 'Negotiate the best value', 'Support travellers 24/7', 'Champion sustainable travel'].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-emerald flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-primary/5 ring-1 ring-border/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sunset-light text-sunset">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To become India&apos;s most trusted travel partner — the first name that comes to mind when a family, a couple or a company plans to explore the world.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {['Reach 100+ countries served', 'Build a 1-million traveller community', 'Lead in sustainable tourism', 'Set the standard for service'].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-sunset flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Meet The Team"
              title="The travel experts behind your journeys"
              subtitle="A passionate team of planners, scouts and guides who have been there — so you do not have to guess."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experts.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary/5 ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                      {e.experience}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">{e.name}</h3>
                    <p className="text-sm font-medium text-primary">{e.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-py bg-gradient-to-b from-white to-ocean-light/40">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Achievements"
              title="Milestones we are proud of"
              subtitle="Numbers that reflect the trust travellers have placed in us over the years."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-6 text-center shadow-lg shadow-primary/5 ring-1 ring-border/60">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <a.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.desc}</p>
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
                  Ready to plan your next journey?
                </h2>
                <p className="mt-4 text-white/80 max-w-xl mx-auto text-balance">
                  Talk to a travel expert today — no obligation, just inspiration. We will design an itinerary around you.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sunset/40 transition-all hover:-translate-y-0.5 hover:bg-sunset/90"
                >
                  Get in touch
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
