import type { Metadata } from 'next';
import Image from 'next/image';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { NewsletterSection } from '@/components/shared/newsletter-section';

export const metadata: Metadata = {
  title: 'Gallery | GlobeTrail Travel & Tourism',
  description:
    'A masonry gallery of breathtaking travel moments captured across the destinations our travellers love most.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden bg-foreground text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/27260270/pexels-photo-27260270.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Hot air balloons over Cappadocia"
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
              Gallery
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance max-w-3xl leading-tight">
              Moments worth travelling for
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed text-balance">
              A collection of postcards from the places our travellers have fallen in love with. Tap any photo to view it full screen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
