import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'About SATVA',
  description:
    'Learn how SATVA was built to bring single-origin Bihar Makhana to global markets — with full traceability, certified purity, and direct farmer partnerships.',
}

const values = [
  {
    icon: '🌾',
    title: 'Source Integrity',
    desc: 'Every batch is traceable to a named cooperative cluster in Darbhanga or Madhubani. We know our farmers by name.',
  },
  {
    icon: '🔬',
    title: 'Verified Purity',
    desc: 'No claim is unsubstantiated. Every lot ships with a NABL lab COA covering aflatoxins, heavy metals, and pesticide residues.',
  },
  {
    icon: '🤝',
    title: 'Fair Trade Ethos',
    desc: 'We pay above-market rates to Grade A producers, creating a direct incentive for quality over volume.',
  },
  {
    icon: '🌍',
    title: 'Export Excellence',
    desc: 'Built for global commerce: our documentation, packaging, and lead times are designed to satisfy the strictest import standards.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="label text-satva-gold mb-3 block">Our Story</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              Born in Bihar. Built for the World.
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-xl text-satva-cream/70 leading-relaxed">
              SATVA exists to connect the world's finest Makhana — grown in the sacred ponds of Mithila — with the buyers and consumers who value its purity.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="label mb-3 block">The Problem We Solved</span>
              <h2 className="font-display text-display-md text-satva-dark text-balance mb-2">
                A Commodity Masquerading as a Premium Product
              </h2>
              <span className="gold-line" />
              <div className="space-y-4 text-satva-mid leading-relaxed">
                <p>
                  Bihar produces over 90% of the world's Makhana, yet the crop has historically reached international markets as a low-margin commodity — traded by weight, with no grade consistency, no lab documentation, and no brand identity.
                </p>
                <p>
                  We saw an opportunity: the global health food market was actively searching for the next clean-label, plant-based superfood. Makhana had the nutritional credentials, the ancient heritage, and the production scale. What it lacked was a premium supply chain and a brand worthy of the product.
                </p>
                <p>
                  SATVA was incorporated to build that supply chain from the ground up — sourcing directly from cooperative farmers, investing in on-site quality control, and creating a full export documentation stack that removes friction from the import process for buyers in the UAE, UK, and USA.
                </p>
              </div>
            </div>
            <div className="bg-satva-linen rounded p-8">
              <h3 className="font-display text-xl text-satva-dark mb-6">Key Facts</h3>
              <div className="space-y-4">
                {[
                  ['Founded', 'Bihar, India'],
                  ['Supply Origin', 'Darbhanga & Madhubani, Mithila'],
                  ['Farmer Network', '2,000+ families across cooperative clusters'],
                  ['Quality Standard', 'Grade A export specification (4–6 mm, <12% moisture)'],
                  ['Certifications', 'FSSAI · APEDA · ISO 22000 · India Organic · NABL Lab'],
                  ['Export Markets', 'UAE · United Kingdom · United States · Canada · GCC'],
                ].map(([key, val]) => (
                  <div key={key} className="flex gap-4 py-3 border-b border-satva-border last:border-0">
                    <span className="text-xs font-sans font-semibold text-satva-mid uppercase tracking-wider w-28 flex-shrink-0 mt-0.5">{key}</span>
                    <span className="text-sm text-satva-dark">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-satva-linen">
        <div className="container-content">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Founding Principles"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded shadow-card p-7">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-display text-lg text-satva-dark mb-2">{v.title}</h3>
                <p className="text-sm text-satva-mid leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-satva-deep">
        <div className="container-content text-center">
          <h2 className="font-display text-display-sm text-satva-cream mb-4">
            Ready to Start a Conversation?
          </h2>
          <p className="text-satva-cream/60 mb-8 max-w-lg mx-auto">
            Whether you're an importer, distributor, retailer, or Amazon brand — we'd love to understand your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="gold">Get in Touch</Button>
            <Button href="/products" variant="outline-light">Explore Products</Button>
          </div>
        </div>
      </section>
    </>
  )
}
