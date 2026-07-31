'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Calendar, Users, ChevronRight, Star, Play } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travellers, setTravellers] = useState('');

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/29901885/pexels-photo-29901885.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Aerial view of a tropical beach with turquoise water and palm trees"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-px mx-auto max-w-7xl min-h-[100svh] flex flex-col justify-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/20">
            <Star className="h-3.5 w-3.5 fill-sunset text-sunset" />
            Rated 4.9/5 by 25,000+ travellers
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white text-shadow-lg leading-[1.05] text-balance">
            Your journey to{' '}
            <span className="bg-gradient-to-r from-sunset via-sunset to-yellow-300 bg-clip-text text-transparent">
              the extraordinary
            </span>{' '}
            starts here
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed text-balance">
            From the backwaters of Kerala to the overwater villas of the Maldives — GlobeTrail crafts premium, hassle-free holidays across India and 120+ destinations worldwide.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-sunset/40 transition-all hover:-translate-y-0.5 hover:bg-sunset/90"
            >
              Explore Packages
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md ring-1 ring-white/30 transition-all hover:bg-white/20"
            >
              <Play className="h-4 w-4" />
              Browse Destinations
            </Link>
          </div>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-full max-w-5xl"
        >
          <div className="glass rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/20">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Destination</label>
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to?"
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Duration</label>
                  <input
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Any length"
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Travellers</label>
                  <input
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    placeholder="2 adults"
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                <Search className="h-4 w-4" />
                Search Trips
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80"
        >
          {[
            ['120+', 'Destinations'],
            ['15+', 'Years experience'],
            ['25k+', 'Happy travellers'],
            ['4.9/5', 'Average rating'],
          ].map(([v, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-white">{v}</span>
              <span className="text-sm text-white/70">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
