import type { Metadata } from 'next'
import FAQAccordion from '@/components/sections/FAQAccordion'
import Button from '@/components/ui/Button'
import { faqs } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about SATVA Makhana — product grades, nutrition, export documentation, MOQ, private label, and how to place an order.',
}

const categories = [
  { id: 'product', label: 'Product & Nutrition' },
  { id: 'quality', label: 'Quality & Certifications' },
  { id: 'export', label: 'Export & Shipping' },
  { id: 'ordering', label: 'Ordering & Private Label' },
] as const

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <span className="label text-satva-gold mb-3 block">FAQ</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              Common Questions, Clear Answers
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-lg text-satva-cream/70 leading-relaxed">
              Everything importers, distributors, and retail buyers ask us most — answered directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs by category */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            {categories.map((cat) => {
              const items = faqs.filter((f) => f.category === cat.id)
              if (!items.length) return null
              return (
                <div key={cat.id} className="mb-12">
                  <h2 className="font-display text-xl text-satva-dark mb-2">{cat.label}</h2>
                  <span className="block w-8 h-0.5 bg-satva-gold mb-6" />
                  <FAQAccordion items={items} />
                </div>
              )
            })}

            {/* Still have questions */}
            <div className="mt-12 bg-satva-linen rounded p-8 text-center">
              <h3 className="font-display text-xl text-satva-dark mb-2">Still have a question?</h3>
              <p className="text-satva-mid text-sm mb-6 max-w-md mx-auto">
                Our team responds within 1 business day. For trade enquiries, WhatsApp is often fastest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" variant="primary">Send an Enquiry</Button>
                <Button href="https://wa.me/91XXXXXXXXXX" variant="outline" external>WhatsApp Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
