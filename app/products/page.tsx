import type { Metadata } from 'next'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Our Makhana Products',
  description:
    'Browse SATVA's full range — Premium White Makhana, Jumbo Gourmet Grade, Certified Organic, Roasted Snack Packs, and Makhana Flour. Export-grade and retail-ready.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="label text-satva-gold mb-3 block">Our Range</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              Makhana for Every Market
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-lg text-satva-cream/70 leading-relaxed max-w-xl">
              From Grade A export bulk to gourmet retail packs and certified organic — every SKU is documented, tested, and ready to import.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* B2B enquiry band */}
      <section className="section-sm bg-satva-linen">
        <div className="container-content">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl text-satva-dark mb-1">Need a custom pack size or private label?</h3>
              <p className="text-satva-mid text-sm">We accommodate bespoke requirements from 500-unit MOQ. Custom flavours available on 90-day development lead.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button href="/contact" variant="primary">Discuss Requirements</Button>
              <Button href="/export" variant="outline">Export Info</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
