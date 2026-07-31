'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Plane, ChevronDown, Phone } from 'lucide-react';
import { navLinks, packages, destinations, services, SITE } from '@/lib/data';
import { cn } from '@/lib/utils';

type MegaKey = 'Packages' | 'Destinations' | 'Services' | null;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<MegaKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const megaData: Record<Exclude<MegaKey, null>, { title: string; links: { label: string; href: string; desc: string }[] }> = {
    Packages: {
      title: 'Tour Packages',
      links: [
        { label: 'Domestic Tours', href: '/packages?category=Domestic', desc: 'Kerala, Goa, Rajasthan & more' },
        { label: 'International Tours', href: '/packages?category=International', desc: 'Swiss Alps, Bali, Dubai & more' },
        { label: 'Honeymoon Getaways', href: '/packages?category=Honeymoon', desc: 'Maldives, Santorini, Paris' },
        { label: 'Family Tours', href: '/packages?category=Family', desc: 'Thailand, Singapore & beyond' },
        { label: 'Adventure Tours', href: '/packages?category=Adventure', desc: 'Himalayas, Cappadocia, Iceland' },
        { label: 'Luxury Holidays', href: '/packages?category=Luxury', desc: 'Venice, Maldives, Dubai' },
      ],
    },
    Destinations: {
      title: 'Popular Destinations',
      links: destinations.slice(0, 8).map((d) => ({
        label: d.name,
        href: `/destinations/${d.slug}`,
        desc: d.country,
      })),
    },
    Services: {
      title: 'Our Services',
      links: services.map((s) => ({
        label: s.title,
        href: '/services',
        desc: s.features[0],
      })),
    },
  };

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-primary/5' : 'bg-transparent'
      )}
      onMouseLeave={() => setMega(null)}
    >
      <nav className="container-px mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="GlobeTrail home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-ocean text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <Plane className="h-5 w-5 -rotate-45" />
            </span>
            <span className={cn('font-display font-extrabold text-lg leading-none tracking-tight transition-colors', scrolled ? 'text-foreground' : 'text-white text-shadow-lg')}>
              GlobeTrail
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const hasMega = ['Packages', 'Destinations', 'Services'].includes(link.label);
              return (
                <li
                  key={link.label}
                  onMouseEnter={() => setMega(hasMega ? (link.label as MegaKey) : null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                      scrolled
                        ? active
                          ? 'text-primary'
                          : 'text-foreground/80 hover:text-primary'
                        : active
                          ? 'text-white'
                          : 'text-white/90 hover:text-white text-shadow-lg'
                    )}
                  >
                    {link.label}
                    {hasMega && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className={cn(
                'flex items-center gap-2 text-sm font-semibold transition-colors',
                scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
              )}
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-sunset px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sunset/30 hover:bg-sunset/90 hover:shadow-sunset/40 transition-all hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn('lg:hidden p-2 rounded-lg transition-colors', scrolled ? 'text-foreground' : 'text-white')}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mega menu */}
        {mega && (
          <div
            className="absolute left-1/2 top-full hidden lg:block w-[min(900px,92vw)] -translate-x-1/2 pt-3"
            onMouseEnter={() => setMega(mega)}
          >
            <div className="glass rounded-2xl border border-white/40 shadow-2xl shadow-primary/10 p-6 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                  {megaData[mega].title}
                </h3>
                <Link
                  href={mega === 'Packages' ? '/packages' : mega === 'Destinations' ? '/destinations' : '/services'}
                  className="text-xs font-semibold text-sunset hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {megaData[mega].links.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group rounded-xl p-3 hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass border-t border-white/40 h-[calc(100vh-5rem)] overflow-y-auto animate-fade-in">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    pathname === link.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-primary/5'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-6 space-y-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-primary/20 px-4 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="block rounded-full bg-sunset px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sunset/30"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
