'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, User, MessageSquare, CalendarDays, Users } from 'lucide-react';
import { SITE } from '@/lib/data';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travellers: '',
    date: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Form */}
      <div className="lg:col-span-3">
        {sent ? (
          <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-xl shadow-primary/5 ring-1 ring-border/60">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-light text-emerald">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Message sent!</h3>
            <p className="mt-2 text-muted-foreground max-w-sm">
              Thank you, {form.name || 'traveller'}! One of our travel experts will get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', destination: '', travellers: '', date: '', message: '' }); }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/20"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-primary/5 ring-1 ring-border/60"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">Plan your trip</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Fill in the form and we&apos;ll craft a personalised itinerary within 24 hours.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field icon={User} label="Full name" required>
                <input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" className="input" />
              </Field>
              <Field icon={Mail} label="Email" required>
                <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className="input" />
              </Field>
              <Field icon={Phone} label="Phone" required>
                <input required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 98xxx xxxxx" className="input" />
              </Field>
              <Field icon={MapPin} label="Destination">
                <input value={form.destination} onChange={(e) => update('destination', e.target.value)} placeholder="Where to?" className="input" />
              </Field>
              <Field icon={Users} label="Travellers">
                <input value={form.travellers} onChange={(e) => update('travellers', e.target.value)} placeholder="2 adults" className="input" />
              </Field>
              <Field icon={CalendarDays} label="Travel date">
                <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)} className="input" />
              </Field>
            </div>
            <div className="mt-4">
              <Field icon={MessageSquare} label="Message" required full>
                <textarea required value={form.message} onChange={(e) => update('message', e.target.value)} rows={4} placeholder="Tell us about your dream trip..." className="input resize-none" />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send enquiry
            </button>
          </form>
        )}
      </div>

      {/* Info */}
      <div className="lg:col-span-2 space-y-4">
        <div className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/5 ring-1 ring-border/60">
          <h3 className="font-display text-lg font-bold text-foreground">Office details</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold text-foreground">Address</div>
                <div className="text-muted-foreground">{SITE.address}</div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-light text-emerald"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold text-foreground">Phone</div>
                <a href={SITE.phoneHref} className="text-muted-foreground hover:text-primary">{SITE.phone}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sunset-light text-sunset"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold text-foreground">Email</div>
                <a href={SITE.emailHref} className="text-muted-foreground hover:text-primary">{SITE.email}</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg shadow-primary/5 ring-1 ring-border/60">
          <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Business hours
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between border-b border-border pb-2.5 last:border-0 last:pb-0">
                <span className="text-muted-foreground">{h.day}</span>
                <span className="font-semibold text-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  required,
  full,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  required?: boolean;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}{required && <span className="text-sunset">*</span>}
      </span>
      {children}
    </label>
  );
}
