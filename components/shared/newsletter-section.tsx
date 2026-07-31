'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export function NewsletterSection() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-ocean py-20 sm:py-24">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sunset/30 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />

      <div className="relative container-px mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
          <Mail className="h-3.5 w-3.5" />
          Travel Newsletter
        </span>
        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
          Be the first to know about new journeys
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto text-balance">
          Get exclusive deals, fresh itineraries and destination inspiration delivered to your inbox. No spam — just wanderlust.
        </p>

        {sent ? (
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-4 text-primary font-semibold shadow-xl">
            <CheckCircle2 className="h-5 w-5 text-emerald" />
            You&apos;re subscribed! Check your inbox to confirm.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full border-0 bg-white/95 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-2 ring-transparent focus:ring-sunset transition"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sunset/40 hover:bg-sunset/90 transition-colors"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-white/60">
          Join 25,000+ travellers. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
