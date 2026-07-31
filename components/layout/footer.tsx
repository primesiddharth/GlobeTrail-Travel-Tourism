'use client';

import Link from 'next/link';
import { Plane, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { SITE, navLinks, destinations, packages } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-ocean/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sunset/15 blur-3xl" />

      <div className="relative container-px mx-auto max-w-7xl">
        {/* Newsletter strip */}
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 border-b border-white/10">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-balance">
              Get travel deals before anyone else
            </h3>
            <p className="mt-2 text-white/70 max-w-md">
              Join 25,000+ travellers getting exclusive offers, new packages and destination inspiration in their inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-ocean focus:bg-white/15 transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sunset/30 hover:bg-sunset/90 transition-colors"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Main footer */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-ocean text-white shadow-lg">
                <Plane className="h-5 w-5 -rotate-45" />
              </span>
              <span className="font-display font-extrabold text-lg">GlobeTrail</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              GlobeTrail Travel & Tourism crafts premium holiday packages, honeymoon escapes and luxury holidays across India and the world — so you can travel with complete peace of mind.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href={SITE.socials[i]?.href ?? '#'}
                  aria-label={SITE.socials[i]?.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-ocean transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-ocean transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top destinations */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Top Destinations</h4>
            <ul className="mt-4 space-y-2.5">
              {destinations.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`} className="text-sm text-white/70 hover:text-ocean transition-colors">
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Get in Touch</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-ocean" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-ocean" />
                <a href={SITE.phoneHref} className="hover:text-ocean transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-ocean" />
                <a href={SITE.emailHref} className="hover:text-ocean transition-colors">{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-ocean" />
                <span>Mon–Sat: 9am–8pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 border-t border-white/10 text-xs text-white/60">
          <p>© {new Date().getFullYear()} GlobeTrail Travel & Tourism. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
