import { Globe, MapPinned, CalendarClock, Star } from 'lucide-react';
import { stats } from '@/lib/data';
import { Counter } from '@/components/shared/counter';
import { Reveal } from '@/components/shared/reveal';

const icons = [Globe, MapPinned, CalendarClock, Star];

export function TravelStats() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-ocean p-8 sm:p-12 lg:p-16 shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-sunset/30 blur-3xl" />

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="text-center text-white">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/20">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="mt-5 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                      <Counter
                        value={s.value}
                        suffix={s.suffix}
                        decimals={(s as { decimals?: number }).decimals ?? 0}
                      />
                    </div>
                    <div className="mt-2 text-sm font-medium text-white/80 uppercase tracking-wide">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
