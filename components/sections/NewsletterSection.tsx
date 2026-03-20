'use client'

import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // In production: POST to your email service (Mailchimp, ConvertKit, etc.)
    setStatus('submitted')
  }

  return (
    <section className="section-sm bg-satva-deep">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          <span className="label text-satva-gold mb-3 block">Trade Updates</span>
          <h2 className="font-display text-display-sm text-satva-cream mb-3">
            Stay Ahead of the Season
          </h2>
          <span className="block w-12 h-0.5 bg-satva-gold mx-auto mt-4 mb-6" />
          <p className="text-satva-cream/60 text-base leading-relaxed mb-8">
            Get harvest updates, pricing windows, new SKU launches, and export market intelligence — direct to your inbox. No spam. Unsubscribe any time.
          </p>

          {status === 'submitted' ? (
            <div className="bg-white/10 border border-satva-gold/30 rounded px-6 py-4 text-satva-cream">
              <span className="text-2xl block mb-2">✓</span>
              <p className="font-sans font-medium">You&apos;re on the list.</p>
              <p className="text-sm text-satva-cream/60 mt-1">We&apos;ll be in touch before the next harvest window.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="form-input flex-1 bg-white/10 border-satva-cream/20 text-satva-cream placeholder:text-satva-cream/30 focus:border-satva-gold"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
