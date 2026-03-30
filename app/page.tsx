import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import BrandStory from '@/components/sections/BrandStory'
import HealthBenefits from '@/components/sections/HealthBenefits'
import HowItWorks from '@/components/sections/HowItWorks'
import CertificationsSection from '@/components/sections/CertificationsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import FAQAccordion from '@/components/sections/FAQAccordion'
import { faqs } from '@/lib/products'

export const metadata: Metadata = {
  title: 'SATVA — Premium Makhana Delivered Worldwide | Bihar Fox Nuts',
  description:
    "Order premium single-origin Makhana direct from Bihar's Mithila farms. 100% natural, lab-tested, certified organic. Ships to UAE, UK & USA in 48 hours. Pure goodness, delivered.",
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
      <HowItWorks />
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
                subtitle="Answers to the questions our customers ask most — about quality, shipping, and what makes SATVA different."
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
