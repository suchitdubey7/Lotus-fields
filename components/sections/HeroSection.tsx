import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="hero-bg hero-texture relative min-h-screen flex items-center overflow-hidden">

      {/* Decorative circle */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full border border-satva-cream/5 pointer-events-none" />
      <div className="absolute right-[-5%] top-[15%] w-[420px] h-[420px] rounded-full border border-satva-cream/8 pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-12 lg:px-16 w-full pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-0.5 bg-satva-gold" />
            <span className="label text-satva-gold">Single-Origin · Bihar, India</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-display-xl text-satva-cream leading-[1.05] text-balance mb-6">
            Pure Makhana.
            <br />
            <span className="text-satva-gold">Premium Quality.</span>
            <br />
            Export Ready.
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-satva-cream/70 leading-relaxed max-w-xl mb-10">
            SATVA sources export-grade fox nuts direct from cooperative farms in Mithila, Bihar — FSSAI certified, lab-tested, and trusted by importers across UAE, UK, and USA.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="gold" size="lg">
              Request a Sample
            </Button>
            <Button href="/products" variant="outline-light" size="lg">
              Explore Products
            </Button>
          </div>

          {/* Micro-trust row */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-satva-cream/10">
            {[
              { value: '90%', label: 'of world supply from Bihar' },
              { value: 'Grade A', label: 'export specification' },
              { value: '12+', label: 'months shelf life' },
              { value: '5-cert', label: 'compliance stack' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl text-satva-gold">{stat.value}</span>
                <span className="text-xs text-satva-cream/50 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-satva-cream uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-satva-cream to-transparent" />
      </div>
    </section>
  )
}
