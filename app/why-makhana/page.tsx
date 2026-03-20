import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Why Makhana — The Superfood Story',
  description:
    'Discover why Makhana (fox nuts) is the next global superfood — superior nutrition, low glycaemic index, gluten-free, Ayurvedic heritage, and massive market momentum.',
}

const nutrients = [
  { name: 'Energy', value: '347 kcal', per: '100g', note: 'Lower than almonds (579) & cashews (553)' },
  { name: 'Protein', value: '9.7g', per: '100g', note: 'Comparable to quinoa, higher than rice' },
  { name: 'Carbohydrates', value: '76.9g', per: '100g', note: 'Slow-release complex carbs, low GI < 50' },
  { name: 'Fat', value: '0.1g', per: '100g', note: 'One of the lowest-fat snack ingredients available' },
  { name: 'Magnesium', value: '67mg', per: '100g', note: '16% RDA — supports muscle and nerve function' },
  { name: 'Potassium', value: '500mg', per: '100g', note: '11% RDA — cardiovascular health' },
  { name: 'Phosphorus', value: '200mg', per: '100g', note: '29% RDA — bone mineralisation' },
  { name: 'Calcium', value: '60mg', per: '100g', note: '6% RDA — bone and teeth health' },
]

const markets = [
  { flag: '🇦🇪', market: 'UAE & GCC', insight: 'Strong South Asian diaspora (4M+), growing health-premium segment, high purchasing power, Halal compliance easily met.' },
  { flag: '🇬🇧', market: 'United Kingdom', insight: 'UK\'s largest ethnic grocery market; growing mainstream adoption via Waitrose, Holland & Barrett, and online. Organic range particularly well-positioned.' },
  { flag: '🇺🇸', market: 'United States', insight: 'Indian-American community (4.4M) is the primary early adopter base. Mainstream crossover accelerating via Amazon, Thrive Market, and clean-label snack brands.' },
]

export default function WhyMakhanaPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="label text-satva-gold mb-3 block">The Superfood Story</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              Why the World is Discovering Makhana
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-lg text-satva-cream/70 leading-relaxed max-w-xl">
              Ancient in heritage, exceptional in nutrition, and perfectly aligned with the most powerful trends in global food retail.
            </p>
          </div>
        </div>
      </section>

      {/* What is Makhana */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="label mb-3 block">What is Makhana?</span>
              <h2 className="font-display text-display-md text-satva-dark text-balance mb-2">
                Sacred, Ancient, and Scientifically Exceptional
              </h2>
              <span className="gold-line" />
              <div className="space-y-4 text-satva-mid leading-relaxed">
                <p>
                  Makhana (Euryale ferox) is the popped seed of the Euryale ferox water lily, cultivated in the shallow ponds and wetlands of Bihar's Mithila region. Bihar produces over 90% of the world's supply — making it a uniquely concentrated origin crop.
                </p>
                <p>
                  Harvested from June to September, Makhana seeds are sun-dried, then kiln-roasted to produce the ivory-white, airy pods that are the finished product. The crop has been cultivated for over 3,000 years, features prominently in Ayurvedic medicine as a Sattvic (pure, calming) food, and is offered in temples across the subcontinent.
                </p>
                <p>
                  Global demand is now accelerating rapidly as Western health food buyers recognise the nutritional profile that Indian consumers have always known: low fat, modest glycaemic index, high mineral content, and entirely natural — no additives, no processing aids.
                </p>
              </div>
            </div>
            <div className="bg-satva-linen rounded p-8">
              <h3 className="font-display text-xl text-satva-dark mb-6">Makhana vs. Competing Snack Ingredients</h3>
              <div className="space-y-3 text-sm">
                {[
                  { item: 'Makhana', cal: 347, fat: 0.1, protein: 9.7, gf: '✓', color: 'bg-satva-deep text-white' },
                  { item: 'Almonds', cal: 579, fat: 50, protein: 21, gf: '✓', color: 'bg-satva-linen text-satva-dark' },
                  { item: 'Popcorn', cal: 387, fat: 4.5, protein: 13, gf: '✓', color: 'bg-satva-linen text-satva-dark' },
                  { item: 'Rice cakes', cal: 385, fat: 3, protein: 8, gf: '✓', color: 'bg-satva-linen text-satva-dark' },
                ].map((row) => (
                  <div key={row.item} className={`rounded px-4 py-3 grid grid-cols-5 gap-2 text-center ${row.color}`}>
                    <span className="col-span-2 text-left font-medium">{row.item}</span>
                    <span>{row.cal}</span>
                    <span>{row.fat}g</span>
                    <span className="text-satva-gold font-bold">{row.gf}</span>
                  </div>
                ))}
                <div className="grid grid-cols-5 gap-2 text-center text-xs text-satva-mid px-4">
                  <span className="col-span-2 text-left">Product</span>
                  <span>kcal</span>
                  <span>Fat</span>
                  <span>GF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition table */}
      <section className="section bg-satva-linen">
        <div className="container-content">
          <SectionHeading
            eyebrow="Nutritional Profile"
            title="The Numbers Behind the Superfood"
            subtitle="Per 100g of raw Makhana — source: ICMR NIN Food Composition Tables, India."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nutrients.map((n) => (
              <div key={n.name} className="bg-white rounded shadow-card p-5">
                <p className="font-sans font-semibold text-satva-deep text-sm mb-0.5">{n.name}</p>
                <p className="font-display text-2xl text-satva-dark mb-1">{n.value}</p>
                <p className="text-xs text-satva-gold mb-2">per {n.per}</p>
                <p className="text-xs text-satva-mid leading-snug">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <SectionHeading
            eyebrow="Market Opportunity"
            title="Three High-Value Markets, One Product"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {markets.map((m) => (
              <div key={m.market} className="bg-white rounded shadow-card p-6">
                <span className="text-4xl mb-4 block">{m.flag}</span>
                <h3 className="font-display text-xl text-satva-dark mb-3">{m.market}</h3>
                <p className="text-sm text-satva-mid leading-relaxed">{m.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-satva-deep">
        <div className="container-content text-center">
          <h2 className="font-display text-display-sm text-satva-cream mb-4">Ready to Bring Makhana to Your Market?</h2>
          <p className="text-satva-cream/60 mb-8 max-w-lg mx-auto">
            Request a sample pack and see for yourself why SATVA is the standard for export-grade Makhana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="gold">Request Sample</Button>
            <Button href="/products" variant="outline-light">View Products</Button>
          </div>
        </div>
      </section>
    </>
  )
}
