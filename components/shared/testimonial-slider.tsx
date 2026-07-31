'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-full px-1">
              <div className="glass rounded-3xl p-8 sm:p-12 shadow-xl shadow-primary/5">
                <Quote className="h-10 w-10 text-sunset/30" />
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sunset text-sunset" />
                  ))}
                </div>
                <p className="mt-5 text-lg sm:text-xl text-foreground leading-relaxed font-medium text-balance">
                  “{t.quote}”
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-ocean/30"
                  />
                  <div>
                    <div className="font-display font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.location} · <span className="text-primary font-medium">{t.trip}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-border hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-border hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-7 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 rounded-full transition-all',
              i === index ? 'w-8 bg-primary' : 'w-2 bg-primary/25 hover:bg-primary/50'
            )}
          />
        ))}
      </div>
    </div>
  );
}
