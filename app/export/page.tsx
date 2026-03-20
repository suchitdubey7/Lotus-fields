import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Export & B2B Partnership',
  description:
    'SATVA is a structured B2B Makhana export partner. Full documentation, flexible MOQs, private-label capability, and dedicated trade support for UAE, UK, and USA importers.',
}

const docList = [
  'Commercial Invoice (CIF / FOB)',
  'Packing List',
  'Bill of Lading / Airway Bill',
  'Certificate of Origin (Chamber-attested)',
  'Phytosanitary Certificate (APEDA / STA)',
  'FSSAI Export NOC',
  'Certificate of Analysis — NABL Lab (every batch)',
  'India Organic Certificate (organic SKUs)',
  'Halal Certificate (on request)',
  'FDA Prior Notice (US shipments)',
]

const process = [
  { step: '01', title: 'Enquiry & Sample', desc: 'Submit an enquiry or sample request. We dispatch 200g samples of up to 3 SKUs within 5 business days.' },
  { step: '02', title: 'Trial Order & Approval', desc: 'Place a trial order (25–50 kg). We confirm production specs, packaging format, and documentation requirements.' },
  { step: '03', title: 'Proforma Invoice', desc: 'We issue a PI with unit price, total, Incoterms, and payment terms. Standard terms: 50% advance, 50% on BL copy.' },
  { step: '04', title: 'Production & Packing', desc: 'Production, quality inspection, packaging, and labelling: 7–10 business days from payment receipt.' },
  { step: '05', title: 'Documentation', desc: 'Full export document pack prepared and shared digitally within 48 hours of dispatch. Originals follow by courier.' },
  { step: '06', title: 'Shipment & Tracking', desc: 'Shipment booked — ocean or air. AWB / BL shared. Dedicated WhatsApp contact for real-time tracking until delivery.' },
]

export default function ExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="label text-satva-gold mb-3 block">Export & B2B</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              Your Makhana Export Partner from India
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-lg text-satva-cream/70 leading-relaxed max-w-xl">
              Structured for international trade from day one. Competitive pricing, complete documentation, and lead times that match your buying cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href="/contact#bulk" variant="gold" size="lg">Start an Enquiry</Button>
              <Button href="/contact" variant="outline-light" size="lg">Request Sample</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why SATVA for export */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <SectionHeading
            eyebrow="Why SATVA"
            title="The Exporter Built Around Your Needs"
            subtitle="We designed our supply chain, documentation, and operations specifically for international B2B trade — not as an afterthought."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Complete Documentation', desc: 'Every document your customs broker needs, prepared to spec, shared digitally within 24 hours of dispatch.' },
              { icon: '⏱️', title: 'Reliable Lead Times', desc: '7–14 days from confirmed PO to ex-factory. No surprises, no last-minute delays.' },
              { icon: '🔬', title: 'Batch-Level Lab Testing', desc: 'NABL-accredited COA with every shipment — no batch ships without sign-off on aflatoxins, metals, and residues.' },
              { icon: '🏷️', title: 'Private Label', desc: 'Your brand on our product from 500-unit MOQ. Dieline template, FDA/FSSAI label review, custom flavours.' },
              { icon: '💳', title: 'Flexible Payment', desc: 'LC · TT (advance + BL) · Escrow for new buyers. We work with your preferred terms as the relationship matures.' },
              { icon: '📱', title: 'Dedicated Account Manager', desc: 'WhatsApp-first communication from enquiry to port delivery. No ticket queues, no rotating reps.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded shadow-card p-6">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-display text-lg text-satva-dark mb-2">{item.title}</h3>
                <p className="text-sm text-satva-mid leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order process */}
      <section className="section bg-satva-linen">
        <div className="container-content">
          <SectionHeading
            eyebrow="How It Works"
            title="From First Enquiry to Delivered Cargo"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.step} className="flex gap-4">
                <span className="font-display text-3xl text-satva-gold/40 leading-none flex-shrink-0">{step.step}</span>
                <div>
                  <h4 className="font-sans font-semibold text-satva-dark mb-1">{step.title}</h4>
                  <p className="text-sm text-satva-mid leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="documents" className="section bg-satva-warm">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="label mb-3 block">Export Documents</span>
              <h2 className="font-display text-display-md text-satva-dark text-balance mb-2">
                Everything Your Customs Broker Needs
              </h2>
              <span className="gold-line" />
              <p className="text-satva-mid leading-relaxed mb-6">
                We maintain standing templates for all standard export documents and issue them within 24–48 hours of dispatch. Document originals are couriered to buyer-specified address within 72 hours.
              </p>
              <Button href="/contact" variant="primary">Request Document Checklist</Button>
            </div>
            <div className="bg-satva-linen rounded p-6">
              <h4 className="font-sans font-semibold text-satva-dark text-sm uppercase tracking-wider mb-4">Standard Export Document Pack</h4>
              <ul className="space-y-2.5">
                {docList.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5 text-sm text-satva-mid">
                    <span className="text-satva-gold mt-0.5 flex-shrink-0">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Private label */}
      <section id="private-label" className="section bg-satva-deep">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <span className="label text-satva-gold mb-3 block">Private Label</span>
            <h2 className="font-display text-display-md text-satva-cream mb-4">
              Your Brand. Our Product. Seamless.
            </h2>
            <span className="block w-12 h-0.5 bg-satva-gold mx-auto mt-4 mb-6" />
            <p className="text-satva-cream/60 leading-relaxed mb-8">
              Launch your own Makhana brand in as little as 6 weeks. We supply finished, retail-ready packs in your packaging — from concept to container.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { val: '500', label: 'Min units per SKU' },
                { val: '4–6 wk', label: 'Artwork to dispatch' },
                { val: '90 days', label: 'Custom flavour lead' },
                { val: 'Full', label: 'Label compliance review' },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded p-4 text-center">
                  <span className="font-display text-xl text-satva-gold block mb-1">{s.val}</span>
                  <span className="text-xs text-satva-cream/50">{s.label}</span>
                </div>
              ))}
            </div>
            <Button href="/contact" variant="gold" size="lg">Discuss Private Label</Button>
          </div>
        </div>
      </section>
    </>
  )
}
