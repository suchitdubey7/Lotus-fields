import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import BrandStory from '@/components/sections/BrandStory'
import HealthBenefits from '@/components/sections/HealthBenefits'
import B2BSection from '@/components/sections/B2BSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import FAQAccordion from '@/components/sections/FAQAccordion'
import { faqs } from '@/lib/products'

export const metadata: Metadata = {
  title: 'SATVA — Premium Makhana from Bihar | Export-Grade Fox Nuts',
  description:
    'SATVA sources single-origin Makhana (fox nuts) direct from Bihar's Mithila farms. FSSAI certified, lab-tested, export-ready for UAE, UK & USA. Premium quality. Pure goodness.',
}

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 6)

  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <BrandStory />
      <HealthBenefits />
      <B2BSection />
      <CertificationsSection />
      <TestimonialsSection />

      {/* FAQ Teaser */}
      <section className="section bg-satva-linen">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Common Questions"
                title="Everything You Need to Know"
                subtitle="Answers to the questions importers, distributors, and retail buyers ask most."
                align="left"
                className="mb-0"
              />
              <div className="mt-8">
                <Button href="/faq" variant="outline">
                  View All FAQs
                </Button>
              </div>
            </div>
            <div>
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
