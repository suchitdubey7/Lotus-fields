import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const benefits = [
  {
    icon: '💪',
    title: 'High Protein',
    stat: '9.7g per 100g',
    desc: 'More protein per calorie than most nuts. Ideal for plant-based protein positioning.',
  },
  {
    icon: '🌿',
    title: 'Naturally Gluten-Free',
    stat: 'Lab certified',
    desc: 'Zero gluten content verified by NABL-accredited lab testing — perfect for Coeliac and gluten-free markets.',
  },
  {
    icon: '❤️',
    title: 'Low Glycaemic Index',
    stat: 'GI < 50',
    desc: 'Slow-release carbohydrates with a lower blood sugar impact than rice, corn, or wheat snacks.',
  },
  {
    icon: '⚡',
    title: 'Rich in Minerals',
    stat: 'Mg · K · P · Ca',
    desc: 'A natural source of magnesium, potassium, phosphorus, and calcium — supporting bone, heart, and muscle health.',
  },
  {
    icon: '🔥',
    title: 'Low in Fat',
    stat: '~0.1g fat per 100g',
    desc: 'One of the lowest-fat snack ingredients available — popular in weight-management and clean-label formulations.',
  },
  {
    icon: '🧘',
    title: 'Ayurvedic Heritage',
    stat: '3,000+ year legacy',
    desc: 'Used in Ayurveda as a Sattvic (pure, calming) food. Resonates deeply with wellness and mindful-eating consumers.',
  },
]

export default function HealthBenefits() {
  return (
    <section className="section bg-satva-warm">
      <div className="container-content">
        <SectionHeading
          eyebrow="Why Makhana"
          title="The Superfood Your Market is Ready For"
          subtitle="Makhana's nutritional profile aligns perfectly with the fastest-growing wellness segments — plant protein, gluten-free, low-GI, and clean-label."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded shadow-card p-6 hover:shadow-card-hover transition-shadow duration-300">
              <span className="text-3xl mb-4 block">{b.icon}</span>
              <h3 className="font-display text-lg text-satva-dark mb-1">{b.title}</h3>
              <p className="label text-satva-gold mb-2">{b.stat}</p>
              <p className="text-sm text-satva-mid leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/why-makhana" variant="outline">
            Deep-Dive: Makhana Nutrition
          </Button>
        </div>
      </div>
    </section>
  )
}
