import Button from '@/components/ui/Button'

const channels = [
  {
    icon: '🏪',
    title: 'Importers & Distributors',
    desc: 'Full export documentation pack, COA, phytosanitary, APEDA cert. FCL and LCL ocean freight from JNPT/Mundra.',
    detail: 'MOQ: 100 kg · EXW / FOB',
  },
  {
    icon: '🛒',
    title: 'Amazon & E-Commerce Brands',
    desc: 'Retail-ready SKUs with compliant FBA labelling, barcode-ready packaging, and reorder lead times under 3 weeks.',
    detail: 'MOQ: 500 units per SKU',
  },
  {
    icon: '🏷️',
    title: 'Private Label',
    desc: 'Your brand on our product. Artwork-to-dispatch in 4–6 weeks. Custom flavour development on 90-day lead.',
    detail: 'From 500 units · Full dieline support',
  },
  {
    icon: '🏬',
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
                  <span className="text-satva-gold mt-0.5">✓</span>
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
                <span className="text-2xl mb-3 block">{ch.icon}</span>
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
