import { Quote, Star } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { TestimonialSlider } from '@/components/shared/testimonial-slider';
import { Reveal } from '@/components/shared/reveal';

export function Testimonials() {
  return (
    <section className="section-py bg-gradient-to-b from-ocean-light/40 to-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Traveller Stories"
            title="Loved by explorers worldwide"
            subtitle="Real stories from real travellers who trusted GlobeTrail with their most precious journeys."
          />
        </Reveal>
        <div className="mt-14">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
