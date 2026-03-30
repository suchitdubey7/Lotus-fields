import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7 text-satva-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Sourced Direct from Bihar',
    desc: 'We partner directly with farmer cooperatives in Mithila — no middlemen. Every batch is hand-sorted and lab-tested before leaving the farm.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7 text-satva-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Packed Fresh & Sealed',
    desc: 'Your order is packed to order in resealable, food-grade kraft pouches with nitrogen flushing — preserving crunch and freshness without any preservatives.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7 text-satva-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Dispatched in 48 Hours',
    desc: 'Orders ship from Bihar within 48 hours of being placed. You get a tracking number the moment your parcel is on its way to UAE, UK, or USA.',
  },
  {
    number: '04',
    icon: (
      <svg className="w-7 h-7 text-satva-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Delivered to Your Door',
    desc: 'Farm-fresh Makhana delivered right to your home in 5–12 business days. Not happy? We offer a no-questions-asked refund within 14 days.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section bg-satva-deep text-satva-cream relative overflow-hidden">
      <div className="absolute inset-0 hero-texture pointer-events-none opacity-50" />

      <div className="container-content relative z-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Farm to Your Doorstep"
          subtitle="We cut out every middleman so you get fresher Makhana at a fairer price — directly from the source in Bihar, India."
          className="mb-14"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-8 border-t border-dashed border-satva-gold/30 z-0" />
              )}
              <div className="bg-white/5 border border-satva-cream/10 rounded p-6 h-full hover:bg-white/8 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  {step.icon}
                  <span className="font-display text-3xl text-satva-gold/30 leading-none">{step.number}</span>
                </div>
                <h3 className="font-sans font-semibold text-satva-cream text-base mb-2">{step.title}</h3>
                <p className="text-sm text-satva-cream/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button href="/products" variant="gold">
            Shop Now
          </Button>
          <Button href="/contact" variant="outline-light">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
