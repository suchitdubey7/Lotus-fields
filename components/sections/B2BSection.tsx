import Button from '@/components/ui/Button'

const ci = 'w-5 h-5 text-satva-gold'

const channels = [
  {
    icon: (
      <svg className={ci} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Importers & Distributors',
    desc: 'Full export documentation pack, COA, phytosanitary, APEDA cert. FCL and LCL ocean freight from JNPT/Mundra.',
    detail: 'MOQ: 100 kg · EXW / FOB',
  },
  {
    icon: (
      <svg className={ci} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: 'Amazon & E-Commerce Brands',
    desc: 'Retail-ready SKUs with compliant FBA labelling, barcode-ready packaging, and reorder lead times under 3 weeks.',
    detail: 'MOQ: 500 units per SKU',
  },
  {
    icon: (
      <svg className={ci} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    title: 'Private Label',
    desc: 'Your brand on our product. Artwork-to-dispatch in 4–6 weeks. Custom flavour development on 90-day lead.',
    detail: 'From 500 units · Full dieline support',
  },
  {
    icon: (
      <svg className={ci} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v4H3zM3 7v14h18V7"/>
        <path d="M9 11h6M9 15h4"/>
      </svg>
    ),
    title: 'Specialty & Indian Grocery Retail',
    desc: 'UK/US/UAE Indian grocery chains, health food stores, and zero-waste bulk retailers. Shelf-ready presentation packs available.',
    detail: 'MOQ varies · Customisable packaging',
  },
]

export default function B2BSection() {
  return (
    <section className="section bg-satva-deep text-satva-cream relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 hero-texture pointer-events-none opacity-50" />

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div>
            <span className="label text-satva-gold mb-3 block">Export & B2B</span>
            <h2 className="font-display text-display-md text-satva-cream text-balance mb-2">
              A Supply Partner Built
              <br />
              for International Trade
            </h2>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-satva-cream/70 leading-relaxed mb-6">
              SATVA is structured from day one for B2B export. We hold all mandatory certifications, maintain a standing export document template, and can turn a confirmed Purchase Order into a shipped container in 10–14 days.
            </p>
            <ul className="space-y-3 text-satva-cream/70 text-sm mb-8">
              {[
                'Complete document pack: Invoice, Packing List, CoO, Phytosanitary, FSSAI NOC, COA',
                'Halal Certificate available on request',
                'FDA Prior Notice support for USA shipments',
                'LC / TT / Advance Payment — flexible terms for vetted buyers',
                'Dedicated WhatsApp account manager from enquiry to delivery',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-satva-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/export" variant="gold">
                Export Enquiry
              </Button>
              <Button href="/contact" variant="outline-light">
                Request Sample
              </Button>
            </div>
          </div>

          {/* Right — channel cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {channels.map((ch) => (
              <div
                key={ch.title}
                className="bg-white/5 border border-satva-cream/10 rounded p-5 hover:bg-white/8 transition-colors duration-200"
              >
                <span className="mb-3 block">{ch.icon}</span>
                <h4 className="font-sans font-semibold text-satva-cream text-base mb-2">{ch.title}</h4>
                <p className="text-sm text-satva-cream/60 leading-relaxed mb-3">{ch.desc}</p>
                <span className="text-xs text-satva-gold font-sans font-medium">{ch.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
