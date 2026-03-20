import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { featuredProducts } from '@/lib/products'

export default function FeaturedProducts() {
  return (
    <section className="section bg-satva-warm">
      <div className="container-content">

        <SectionHeading
          eyebrow="Our Range"
          title="Premium Makhana for Every Market"
          subtitle="From Grade A export bulk to private-label retail packs — each SKU is sourced, processed, and documented to meet international import standards."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
