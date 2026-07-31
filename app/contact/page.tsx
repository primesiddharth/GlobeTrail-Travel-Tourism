import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { SITE } from '@/lib/data';
import { Reveal } from '@/components/shared/reveal';
import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | GlobeTrail Travel & Tourism',
  description:
    'Get in touch with GlobeTrail Travel & Tourism. Visit our Noida office, call us, or send an enquiry and our travel experts will respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/33497885/pexels-photo-33497885.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Passport and travel tickets"
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
              Contact Us
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-3xl leading-tight">
              Let&apos;s plan your next journey
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed text-balance">
              Have a question or a dream trip in mind? Our travel experts are here to help — reach out and we&apos;ll respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-gradient-to-b from-ocean-light/40 to-white">
        <div className="container-px mx-auto max-w-7xl">
          <ContactForm />
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-border/60 shadow-xl shadow-primary/5">
              <div className="relative aspect-[16/7] bg-ocean-light/50">
                <Image
                  src="https://images.pexels.com/photos/15480459/pexels-photo-15480459.jpeg?auto=compress&cs=tinysrgb&h=700&w=1600"
                  alt="City map view of Singapore"
                  fill
                  sizes="100vw"
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass rounded-2xl p-6 text-center max-w-md shadow-2xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sunset text-white shadow-lg shadow-sunset/40 animate-float">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">GlobeTrail HQ</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
                    >
                      <Navigation className="h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
