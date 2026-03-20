import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/lib/products'

const flagEmoji: Record<string, string> = {
  AE: '🇦🇪',
  GB: '🇬🇧',
  US: '🇺🇸',
}

export default function TestimonialsSection() {
  return (
    <section className="section bg-satva-warm">
      <div className="container-content">
        <SectionHeading
          eyebrow="Buyer Voices"
          title="Trusted by Importers Across Three Continents"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded shadow-card p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-satva-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-satva-mid leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-start gap-3 pt-4 border-t border-satva-border">
                <div className="w-10 h-10 rounded-full bg-satva-deep flex items-center justify-center text-satva-cream font-display font-medium flex-shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-satva-dark text-sm">{t.author}</p>
                  <p className="text-xs text-satva-mid">{t.role}, {t.company}</p>
                  <p className="text-xs text-satva-mid mt-0.5">
                    {flagEmoji[t.countryCode] ?? '🌍'} {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
