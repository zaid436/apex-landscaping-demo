'use client';

import { useState, type FormEvent } from 'react';

const services = [
  'Interlock installation',
  'Interlock repair',
  'Backyard patios',
  'Driveways',
  'Walkways',
  'Retaining walls',
  'Sod installation',
  'Landscape design',
];

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="card overflow-hidden border border-black/5 bg-white p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Request a free estimate</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">Tell us about your project</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Estimates depend on project size, material choice, site conditions, access, and timeline.
          </p>
        </div>
        <div className="hidden rounded-2xl bg-softGray px-4 py-3 text-right text-xs font-medium text-slate-600 sm:block">
          Response target
          <div className="mt-1 text-base font-semibold text-charcoal">Within 1 business day</div>
        </div>
      </div>

      {submitted ? (
        <div className="mt-6 rounded-3xl border border-emerald-900/10 bg-emerald-50 p-6 text-sm text-emerald-950">
          <p className="text-base font-semibold">Thanks — your request was received.</p>
          <p className="mt-2 leading-7">
            We&apos;ll review your details and follow up to discuss the best next steps for your property.
          </p>
        </div>
      ) : null}

      <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Phone" name="phone" placeholder="(000) 000-0000" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <label className="grid gap-2 text-sm font-medium text-charcoal sm:col-span-2">
          Service needed
          <select
            name="service"
            defaultValue=""
            className="rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-accentGreen"
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal sm:col-span-2">
          Project notes
          <textarea
            name="notes"
            rows={5}
            placeholder="Tell us about your outdoor space, timeline, and goals."
            className="rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-accentGreen"
          />
        </label>
        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-slate-500">
            By sending this form, you&apos;re requesting a consultation or estimate — not exact pricing.
          </p>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Request a Free Estimate
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-charcoal">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-slate-400 focus:border-accentGreen"
      />
    </label>
  );
}
