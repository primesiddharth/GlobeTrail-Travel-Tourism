import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import type { Destination } from '@/lib/data';

export function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className="group relative block overflow-hidden rounded-2xl shadow-lg shadow-primary/5 ring-1 ring-border/60 aspect-[3/4]"
    >
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-foreground backdrop-blur">
        <Star className="h-3 w-3 fill-sunset text-sunset" />
        {dest.rating}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <div className="flex items-center gap-1 text-xs font-medium text-white/80 mb-1">
          <MapPin className="h-3 w-3" />
          {dest.country}
        </div>
        <h3 className="font-display text-xl font-bold leading-tight">{dest.name}</h3>
        <p className="mt-1 text-sm text-white/80 line-clamp-1">{dest.tagline}</p>
        <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-sunset opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Explore
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
