'use client';

import { useState, useMemo } from 'react';
import { PackageCard } from '@/components/shared/package-card';
import { Reveal } from '@/components/shared/reveal';
import { packages, packageCategories } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const budgetBands = [
  { label: 'Any budget', min: 0, max: Infinity },
  { label: 'Under ₹50,000', min: 0, max: 50000 },
  { label: '₹50k – ₹1L', min: 50000, max: 100000 },
  { label: '₹1L – ₹2L', min: 100000, max: 200000 },
  { label: 'Above ₹2L', min: 200000, max: Infinity },
];

const durationBands = [
  { label: 'Any duration', min: 0, max: Infinity },
  { label: 'Up to 4 days', min: 0, max: 4 },
  { label: '5 – 7 days', min: 5, max: 7 },
  { label: '8 – 10 days', min: 8, max: 10 },
  { label: '10+ days', min: 11, max: Infinity },
];

export function PackagesExplorer({ initialCategory }: { initialCategory?: string }) {
  const [category, setCategory] = useState<string>(initialCategory ?? 'All');
  const [budget, setBudget] = useState(0);
  const [duration, setDuration] = useState(0);
  const [query, setQuery] = useState('');

  const activeCategory = initialCategory && packageCategories.includes(initialCategory as typeof packageCategories[number]) ? initialCategory : 'All';

  const filtered = useMemo(() => {
    return packages.filter((p) => {
      const cat = (category === 'All' ? true : p.category === category);
      const b = budgetBands[budget];
      const d = durationBands[duration];
      const priceOk = p.price >= b.min && p.price <= b.max;
      const durOk = p.days >= d.min && p.days <= d.max;
      const q = query.trim().toLowerCase();
      const queryOk = !q || p.title.toLowerCase().includes(q) || p.destination.toLowerCase().includes(q);
      return cat && priceOk && durOk && queryOk;
    });
  }, [category, budget, duration, query]);

  const reset = () => {
    setCategory('All');
    setBudget(0);
    setDuration(0);
    setQuery('');
  };

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-20 z-30 -mx-4 px-4 py-4 glass border-y border-white/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              Filter packages
            </div>
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto_auto]">
              <div className="flex items-center gap-2 rounded-xl bg-white/80 px-3.5 py-2.5 ring-1 ring-border">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search destination or package"
                  className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground/70"
                />
              </div>
              <select
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="rounded-xl bg-white/80 px-4 py-2.5 text-sm font-medium ring-1 ring-border outline-none focus:ring-primary"
              >
                {budgetBands.map((b, i) => (
                  <option key={b.label} value={i}>{b.label}</option>
                ))}
              </select>
              <select
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="rounded-xl bg-white/80 px-4 py-2.5 text-sm font-medium ring-1 ring-border outline-none focus:ring-primary"
              >
                {durationBands.map((d, i) => (
                  <option key={d.label} value={i}>{d.label}</option>
                ))}
              </select>
              {(category !== 'All' || budget !== 0 || duration !== 0 || query) && (
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20"
                >
                  <X className="h-4 w-4" />
                  Reset
                </button>
              )}
            </div>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {['All', ...packageCategories].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                    (category === c) || (c === 'All' && category === 'All')
                      ? 'bg-primary text-white shadow-md shadow-primary/30'
                      : 'bg-white/70 text-foreground ring-1 ring-border hover:bg-primary/5'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-10">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-bold text-foreground">{filtered.length}</span> {filtered.length === 1 ? 'package' : 'packages'}
        </p>
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <PackageCard pkg={p} index={i} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Search className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-foreground">No packages match your filters</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your budget, duration or category.</p>
            <button
              onClick={reset}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
