import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { certifications } from '@/lib/products'

const ic = 'w-5 h-5 text-satva-gold'

const certIcons: Record<string, JSX.Element> = {
  'shield-check': (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  'badge-check': (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4M7 8h10M7 11h5"/>
    </svg>
  ),
  'award': (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <polyline points="9.09 15 8 22 12 19.27 16 22 14.91 15"/>
      <polyline points="9 8 11 10 15 6"/>
    </svg>
  ),
  'leaf': (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  'flask': (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v7l-5 9a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 19l-5-9V3"/>
      <path d="M6.5 14.5h11"/>
    </svg>
  ),
}

const coaIcon = (
  <svg className="w-5 h-5 text-satva-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

export default function CertificationsSection() {
  return (
    <section className="section bg-satva-linen">
      <div className="container-content">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Certifications That Open Doors"
          subtitle="Every shipment from SATVA is backed by a complete compliance documentation package. Our certifications meet the import requirements of UAE, UK, and USA without exception."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded shadow-card p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-sm bg-satva-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                {certIcons[cert.icon] ?? certIcons['shield-check']}
              </div>
              <div>
                <h4 className="font-sans font-semibold text-satva-dark text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-satva-gold mb-2">{cert.issuer}</p>
                <p className="text-xs text-satva-mid leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}

          {/* Lab testing card */}
          <div className="bg-satva-deep rounded shadow-card p-6 flex gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-sm bg-satva-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              {coaIcon}
            </div>
            <div>
              <h4 className="font-sans font-semibold text-satva-cream text-sm mb-1">Batch-Level COA</h4>
              <p className="text-xs text-satva-gold mb-2">Certificate of Analysis with every shipment</p>
              <p className="text-xs text-satva-cream/60 leading-relaxed">
                Aflatoxin B1 &amp; Total · Lead, Cadmium, Arsenic · Pesticide residue panel · Total plate count · Moisture · Protein · Fat
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button href="/quality" variant="primary">
            Full Quality Overview
          </Button>
        </div>
      </div>
    </section>
  )
}
