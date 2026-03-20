'use client'

import type { Metadata } from 'next'
import { useState } from 'react'

// Note: metadata export doesn't work in client components; move to a server wrapper or use generateMetadata
// For this static site, meta is provided via the layout fallback title template.

type FormType = 'sample' | 'bulk' | 'general'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  country: string
  type: FormType
  products: string
  message: string
}

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  type: 'sample',
  products: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production: POST to your backend, Netlify Forms, Formspree, or similar
    setStatus('submitted')
  }

  if (status === 'submitted') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-satva-warm pt-20">
        <div className="max-w-md text-center px-6">
          <span className="text-5xl block mb-6">✅</span>
          <h1 className="font-display text-display-sm text-satva-dark mb-4">
            Thank you, {form.name || 'there'}!
          </h1>
          <p className="text-satva-mid leading-relaxed mb-6">
            We&apos;ve received your enquiry and will get back to you within 1 business day. For urgent matters, WhatsApp us directly.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20SATVA,%20I%20just%20submitted%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Continue on WhatsApp
          </a>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <span className="label text-satva-gold mb-3 block">Get in Touch</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              Let&apos;s Talk Makhana
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-lg text-satva-cream/70 leading-relaxed">
              Whether you need a sample, a quote, or just want to understand what SATVA can do for your business — fill in the form and we&apos;ll respond within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Sidebar */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="bg-white rounded shadow-card p-6">
                <h3 className="font-sans font-semibold text-satva-dark mb-4">Contact Details</h3>
                <div className="space-y-3 text-sm text-satva-mid">
                  <div>
                    <p className="text-xs font-medium text-satva-dark uppercase tracking-wider mb-1">General Enquiries</p>
                    <a href="mailto:hello@satvafoods.com" className="hover:text-satva-gold transition-colors">hello@satvafoods.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-satva-dark uppercase tracking-wider mb-1">Export & B2B</p>
                    <a href="mailto:export@satvafoods.com" className="hover:text-satva-gold transition-colors">export@satvafoods.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-satva-dark uppercase tracking-wider mb-1">Sample Requests</p>
                    <a href="mailto:samples@satvafoods.com" className="hover:text-satva-gold transition-colors">samples@satvafoods.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-satva-dark uppercase tracking-wider mb-1">WhatsApp Trade Line</p>
                    <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-satva-gold transition-colors">+91 XXXX XXX XXX</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded shadow-card p-6">
                <h3 className="font-sans font-semibold text-satva-dark mb-4">Response Times</h3>
                <div className="space-y-2.5 text-sm">
                  {[
                    ['General enquiries', '< 24 hours'],
                    ['Sample requests', '< 24 hours, dispatch in 5 days'],
                    ['Bulk quote requests', '< 48 hours'],
                    ['WhatsApp messages', 'Same business day'],
                  ].map(([type, time]) => (
                    <div key={type} className="flex justify-between gap-4 py-2 border-b border-satva-border last:border-0">
                      <span className="text-satva-mid">{type}</span>
                      <span className="text-satva-forest font-medium text-xs whitespace-nowrap">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-satva-deep rounded p-6">
                <h3 className="font-sans font-semibold text-satva-cream mb-2">New to Makhana?</h3>
                <p className="text-sm text-satva-cream/60 mb-4">We&apos;ll send you a complimentary sample kit — up to 3 SKUs, your choice.</p>
                <a href="#form" className="text-sm text-satva-gold font-medium hover:underline">Start with a sample →</a>
              </div>
            </div>

            {/* Form */}
            <div id="form" className="lg:col-span-2 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Enquiry type tabs */}
                <div>
                  <label className="form-label">Enquiry Type</label>
                  <div className="flex gap-3">
                    {([['sample', 'Sample Request'], ['bulk', 'Bulk / Export'], ['general', 'General']] as [FormType, string][]).map(([val, label]) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => update('type', val)}
                        className={`text-sm font-sans font-medium px-4 py-2 rounded-sm border transition-colors ${
                          form.type === val
                            ? 'bg-satva-deep text-satva-cream border-satva-deep'
                            : 'bg-white text-satva-mid border-satva-border hover:border-satva-deep'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input id="name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className="form-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="company" className="form-label">Company / Organisation</label>
                    <input id="company" type="text" value={form.company} onChange={(e) => update('company', e.target.value)} className="form-input" placeholder="Company name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="form-input" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="form-input" placeholder="+971 50 000 0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="form-label">Country *</label>
                  <select id="country" required value={form.country} onChange={(e) => update('country', e.target.value)} className="form-input">
                    <option value="">Select country…</option>
                    {['United Arab Emirates', 'United Kingdom', 'United States', 'Canada', 'Australia', 'Saudi Arabia', 'Germany', 'Netherlands', 'Singapore', 'Other'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="products" className="form-label">Products of Interest</label>
                  <input id="products" type="text" value={form.products} onChange={(e) => update('products', e.target.value)} className="form-input" placeholder="e.g. Premium White Makhana, Organic Makhana" />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Your Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="form-input resize-none"
                    placeholder={
                      form.type === 'sample'
                        ? 'Tell us which SKUs you\'d like to sample, your intended use, and preferred shipping address country.'
                        : form.type === 'bulk'
                        ? 'Share your target quantity, grade requirements, destination port, and any specific documentation needs.'
                        : 'How can we help you?'
                    }
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Enquiry
                </button>
                <p className="text-xs text-satva-mid text-center">
                  We respond within 1 business day. Your details are never shared with third parties.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
