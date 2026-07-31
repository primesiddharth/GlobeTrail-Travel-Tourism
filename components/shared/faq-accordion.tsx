'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';
import { cn } from '@/lib/utils';

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={cn(
              'overflow-hidden rounded-2xl border transition-colors',
              isOpen ? 'border-primary/30 bg-primary/[0.03]' : 'border-border bg-white hover:border-primary/20'
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
            >
              <span className="font-display text-base sm:text-lg font-semibold text-foreground">
                {item.q}
              </span>
              <span
                className={cn(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300',
                  isOpen ? 'bg-primary text-white rotate-180' : 'bg-muted text-primary'
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
