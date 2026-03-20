import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section className="section bg-satva-linen overflow-hidden">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <span className="label mb-3 block">Our Story</span>
            <h2 className="font-display text-display-md text-satva-dark text-balance mb-2">
              From Bihar&apos;s Sacred Ponds
              <br />
              to Your Market
            </h2>
            <span className="gold-line" />

            <div className="space-y-4 text-satva-mid leading-relaxed">
              <p>
                Makhana has nourished India for centuries — offered in temples, prescribed by Ayurvedic physicians, and harvested by hand from the waterlogged ponds of Mithila. Yet for too long, this ancient superfood reached the world as a commodity: inconsistent grade, unknown origin, minimal documentation.
              </p>
              <p>
                SATVA was founded to change that. We work directly with farmer cooperatives in Darbhanga and Madhubani — the heartland of global Makhana production — paying above-market rates for premium Grade A lots. Every batch is traceable to its source pond, tested at NABL-accredited labs, and packed to specification for its destination market.
              </p>
              <p>
                <em>Satva</em> is the Sanskrit word for purity and goodness. It is the quality we bring to every kilo we ship.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/about" variant="primary">
                Our Full Story
              </Button>
              <Button href="/quality" variant="outline">
                Quality Standards
              </Button>
            </div>
          </div>

          {/* Image + Stats */}
          <div className="flex flex-col gap-4">

            {/* Hero image */}
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1681891231100-32bd84732a94?auto=format&fit=crop&w=900&q=85"
                alt="Lotus seed pod — the source plant of Makhana, growing in Bihar wetlands"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-satva-deep/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-satva-cream/90 text-xs font-sans tracking-wider uppercase">
                  Euryale ferox · Mithila, Bihar
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
            {[
              { value: '90%', label: 'of global Makhana supply comes from Bihar' },
              { value: '2,000+', label: 'farmer families in our supply network' },
              { value: '5', label: 'certifications covering food safety, organic & export' },
              { value: '3', label: 'continents served: Asia, Europe, North America' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded shadow-card p-6 flex flex-col gap-2"
              >
                <span className="font-display text-display-sm text-satva-deep">{stat.value}</span>
                <span className="text-sm text-satva-mid leading-snug">{stat.label}</span>
              </div>
            ))}
            </div>{/* end stats grid */}

          </div>{/* end image + stats column */}

        </div>
      </div>
    </section>
  )
}
