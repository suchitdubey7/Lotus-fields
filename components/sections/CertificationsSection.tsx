import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { certifications } from '@/lib/products'

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
                <span className="text-satva-gold text-lg">
                  {cert.icon === 'shield-check' && '🛡️'}
                  {cert.icon === 'badge-check' && '📋'}
                  {cert.icon === 'award' && '🏅'}
                  {cert.icon === 'leaf' && '🌿'}
                  {cert.icon === 'flask' && '🔬'}
                </span>
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
              <span className="text-satva-gold text-lg">📊</span>
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
