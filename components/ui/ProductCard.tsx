import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
}

const gradeColor: Record<string, string> = {
  Premium: 'bg-satva-deep text-satva-cream',
  Gourmet: 'bg-satva-gold text-satva-dark',
  Organic: 'bg-emerald-700 text-white',
  Export:  'bg-satva-mid text-white',
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card block group">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-satva-linen overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className={`inline-block text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm ${gradeColor[product.grade] ?? 'bg-satva-dark text-white'}`}>
            {product.grade}
          </span>
          {product.isNew && (
            <span className="inline-block text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm bg-satva-gold text-satva-dark">
              New
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="label-muted mb-1">{product.subtitle}</p>
        <h3 className="font-display text-lg text-satva-dark mb-2 group-hover:text-satva-forest transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-satva-mid leading-relaxed line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-3 border-t border-satva-border">
          <div>
            {product.pricePerKg && (
              <span className="text-sm font-sans font-medium text-satva-forest">
                {product.pricePerKg} / kg
              </span>
            )}
            <p className="text-xs text-satva-mid mt-0.5">MOQ: {product.minOrderQty}</p>
          </div>
          <span className="text-xs font-sans font-medium text-satva-gold tracking-wide uppercase">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}
