import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Clock } from 'lucide-react';
import type { Package } from '@/lib/data';
import { cn } from '@/lib/utils';

export function PackageCard({ pkg, index = 0 }: { pkg: Package; index?: number }) {
  const discount = pkg.oldPrice
    ? Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100)
    : 0;

  return (
    <Link
      href={`/packages#${pkg.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary/5 ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-sunset px-3 py-1 text-xs font-bold text-white shadow-lg">
            {discount}% OFF
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
          {pkg.category}
        </span>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div className="flex items-center gap-1 text-sm font-medium">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{pkg.destination}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-sunset text-sunset" />
            <span className="text-sm font-bold text-foreground">{pkg.rating}</span>
            <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {pkg.duration}
          </div>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {pkg.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {pkg.includes.slice(0, 3).map((inc) => (
            <span
              key={inc}
              className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {inc}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <span className="block text-xs text-muted-foreground">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-bold text-primary">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              {pkg.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{pkg.oldPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
