import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: 'High Protein',
    stat: '9.7g per 100g',
    desc: 'More protein per calorie than most nuts. Ideal for plant-based protein positioning.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M7 13s.5-5 5-5 5 5 5 5"/>
        <path d="M9 17c1-1 3-2 6-1"/>
      </svg>
    ),
    title: 'Naturally Gluten-Free',
    stat: 'Lab certified',
    desc: 'Zero gluten content verified by NABL-accredited lab testing — perfect for Coeliac and gluten-free markets.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Low Glycaemic Index',
    stat: 'GI < 50',
    desc: 'Slow-release carbohydrates with a lower blood sugar impact than rice, corn, or wheat snacks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    title: 'Rich in Minerals',
    stat: 'Mg · K · P · Ca',
    desc: 'A natural source of magnesium, potassium, phosphorus, and calcium — supporting bone, heart, and muscle health.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Low in Fat',
    stat: '~0.1g fat per 100g',
    desc: 'One of the lowest-fat snack ingredients available — popular in weight-management and clean-label formulations.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22c-4.97 0-9-2.69-9-6V8c0-3.31 4.03-6 9-6s9 2.69 9 6v8c0 3.31-4.03 6-9 6z"/>
        <path d="M3 8c0 3.31 4.03 6 9 6s9-2.69 9-6"/>
      </svg>
    ),
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
              <span className="text-satva-forest mb-4 block">{b.icon}</span>
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
