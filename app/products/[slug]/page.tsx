import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { products, getProductBySlug, getProductSlugs } from '@/lib/products'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      <section className="bg-satva-linen pt-28 md:pt-36 pb-16">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Image */}
            <div className="relative aspect-[4/3] bg-satva-warm rounded shadow-card overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block text-[10px] font-sans font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm bg-satva-deep text-satva-cream">
                  {product.grade} Grade
                </span>
              </div>
            </div>

            {/* Details */}
            <div>
              <span className="label mb-2 block">{product.subtitle}</span>
              <h1 className="font-display text-display-md text-satva-dark text-balance mb-2">{product.name}</h1>
              <span className="gold-line" />
              <p className="text-satva-mid leading-relaxed mb-6">{product.longDescription}</p>

              {/* Quick specs */}
              <div className="bg-white rounded shadow-card p-5 mb-6">
                <h3 className="font-sans font-semibold text-satva-dark text-sm uppercase tracking-wider mb-4">Product Specification</h3>
                <div className="space-y-2.5">
                  {[
                    ['Grade', product.grade],
                    ['Size', product.size],
                    ['Pack Sizes', product.packSizes.join(', ')],
                    ['MOQ (B2B)', product.minOrderQty],
                    ['Price Guide', product.pricePerKg ?? 'Contact for quote'],
                    ['Origin', product.origin],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-4 py-2 border-b border-satva-border last:border-0">
                      <span className="text-xs font-sans font-semibold text-satva-mid uppercase tracking-wider w-28 flex-shrink-0">{k}</span>
                      <span className="text-sm text-satva-dark">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-sans font-semibold text-satva-dark text-sm uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-satva-mid">
                      <span className="text-satva-gold mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.certifications.map((cert) => (
                  <span key={cert} className="cert-badge text-xs py-1 px-3">{cert}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="primary" size="lg">Request Sample / Quote</Button>
                <Button href="/contact#bulk" variant="outline" size="lg">Bulk Enquiry</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="section-sm bg-satva-warm">
        <div className="container-content">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl text-satva-dark">More from SATVA</h2>
            <Button href="/products" variant="ghost">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 4)
              .map((p) => (
                <a
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="product-card block group"
                >
                  <div className="relative aspect-[4/3] bg-satva-linen overflow-hidden">
                    <Image
                      src={p.imageSrc}
                      alt={p.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="label-muted mb-1 text-xs">{p.grade}</p>
                    <h4 className="font-display text-base text-satva-dark group-hover:text-satva-forest transition-colors">{p.name}</h4>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
