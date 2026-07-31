'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % galleryImages.length)), []);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  const spanClass = (span: string) =>
    span === 'tall'
      ? 'row-span-2 aspect-[3/4] sm:aspect-auto'
      : span === 'wide'
      ? 'sm:col-span-2 aspect-[16/9]'
      : 'aspect-square';

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px]">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              'group relative overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-md shadow-primary/5 transition-all hover:shadow-xl hover:ring-primary/30',
              spanClass(img.span)
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs font-medium line-clamp-1">{img.alt}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <ZoomIn className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 backdrop-blur-sm animate-fade-in p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/80">
              {galleryImages[active].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
