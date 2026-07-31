import { Hero } from '@/components/home/hero';
import { PopularDestinations } from '@/components/home/popular-destinations';
import { TrendingPackages } from '@/components/home/trending-packages';
import { WhyTravelWithUs } from '@/components/home/why-travel-with-us';
import { Testimonials } from '@/components/home/testimonials';
import { TravelStats } from '@/components/home/travel-stats';
import { NewsletterSection } from '@/components/shared/newsletter-section';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <TrendingPackages />
      <WhyTravelWithUs />
      <Testimonials />
      <TravelStats />
      <NewsletterSection />
    </>
  );
}
