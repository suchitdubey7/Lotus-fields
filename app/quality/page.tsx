import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { certifications } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Quality & Certifications',
  description:
    'SATVA's quality system: FSSAI, APEDA, ISO 22000, India Organic, and NABL batch testing. Every shipment backed by a complete Certificate of Analysis and export document pack.',
}

const testParams = [
  { test: 'Aflatoxin B1', limit: '< 5 ppb', method: 'HPLC / ELISA' },
  { test: 'Total Aflatoxin (B1+B2+G1+G2)', limit: '< 15 ppb', method: 'HPLC' },
  { test: 'Lead (Pb)', limit: '< 0.1 ppm', method: 'ICP-MS' },
  { test: 'Cadmium (Cd)', limit: '< 0.1 ppm', method: 'ICP-MS' },
  { test: 'Arsenic (As)', limit: '< 0.5 ppm', method: 'ICP-MS' },
  { test: 'Pesticide Residues', limit: 'MRL compliant (EU Reg. 396/2005)', method: 'GC-MS/MS + LC-MS/MS' },
  { test: 'Moisture Content', limit: '< 12%', method: 'Oven gravimetric' },
  { test: 'Total Plate Count', limit: '< 100,000 CFU/g', method: 'ISO 4833' },
  { test: 'Yeast & Mould', limit: '< 500 CFU/g', method: 'ISO 21527' },
  { test: 'Salmonella spp.', limit: 'Absent in 25g', method: 'ISO 6579' },
  { test: 'E. coli', limit: '< 10 CFU/g', method: 'ISO 16649' },
]

const qcSteps = [
  { step: '01', title: 'Farm-Level Pre-Harvest', desc: 'Visual crop inspection at cooperative clusters. Farmers briefed on harvest window and moisture thresholds. Rejected lots never enter the supply chain.' },
  { step: '02', title: 'Intake Inspection', desc: 'On arrival at our processing facility, each lot is weighed, sampled, and assessed for moisture, colour, and physical grade before acceptance.' },
  { step: '03', title: 'Kiln Roasting & Drying', desc: 'Lots roasted to internal specification — maintaining moisture below 12% and achieving the characteristic ivory-white finish without over-roasting.' },
  { step: '04', title: 'Sizing & Optical Sorting', desc: 'Mechanical grading by sieve size followed by optical colour sorting to remove discoloured, cracked, or undersized pods.' },
  { step: '05', title: 'NABL Lab Testing', desc: 'Representative samples from each production batch dispatched to our NABL-accredited partner laboratory. Batch is held until COA is received and reviewed.' },
  { step: '06', title: 'Packaging & Sealing', desc: 'Approved batches packed in food-grade packaging (nitrogen-flushed for retail packs) with batch code, production date, and best-before date.' },
]

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            <span className="label text-satva-gold mb-3 block">Quality & Certifications</span>
            <h1 className="font-display text-display-lg text-satva-cream text-balance mb-4">
              No Claim Without Evidence
            </h1>
            <span className="block w-12 h-0.5 bg-satva-gold mt-4 mb-6" />
            <p className="text-lg text-satva-cream/70 leading-relaxed max-w-xl">
              Every batch is lab-tested by a NABL-accredited facility before it ships. Your COA arrives with your Bill of Lading — without asking.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <SectionHeading
            eyebrow="Certifications"
            title="Our Compliance Stack"
            subtitle="Five certifications covering food safety, organic integrity, export authorisation, and laboratory traceability."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded shadow-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-satva-deep flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>
      </section>

      {/* QC process */}
      <section className="section bg-satva-linen">
        <div className="container-content">
          <SectionHeading
            eyebrow="Quality Control Process"
            title="Six Steps from Farm to Approved Batch"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qcSteps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <span className="font-display text-3xl text-satva-gold/40 flex-shrink-0 leading-none">{s.step}</span>
                <div>
                  <h4 className="font-sans font-semibold text-satva-dark mb-1">{s.title}</h4>
                  <p className="text-sm text-satva-mid leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test parameters */}
      <section className="section bg-satva-warm">
        <div className="container-content">
          <SectionHeading
            eyebrow="Laboratory Testing"
            title="What We Test. What We Guarantee."
            subtitle="Every COA covers the following parameters at minimum. Additional tests available on request."
            className="mb-10"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-satva-deep text-satva-cream">
                  <th className="text-left px-4 py-3 font-sans font-medium text-xs uppercase tracking-wider">Test Parameter</th>
                  <th className="text-left px-4 py-3 font-sans font-medium text-xs uppercase tracking-wider">Specification Limit</th>
                  <th className="text-left px-4 py-3 font-sans font-medium text-xs uppercase tracking-wider">Method</th>
                </tr>
              </thead>
              <tbody>
                {testParams.map((row, i) => (
                  <tr key={row.test} className={i % 2 === 0 ? 'bg-white' : 'bg-satva-linen'}>
                    <td className="px-4 py-3 text-satva-dark font-medium">{row.test}</td>
                    <td className="px-4 py-3 text-satva-mid">{row.limit}</td>
                    <td className="px-4 py-3 text-satva-mid">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-satva-mid mt-4">
            * Limits comply with FSSAI Food Safety Regulations, EU Regulation 2023/465 (aflatoxins), and MRL Regulation 396/2005 (pesticides).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-satva-deep">
        <div className="container-content text-center">
          <h2 className="font-display text-display-sm text-satva-cream mb-4">Request a Sample COA</h2>
          <p className="text-satva-cream/60 mb-8 max-w-md mx-auto">
            We can share a redacted Certificate of Analysis from a recent production batch so you can evaluate our quality documentation format before placing an order.
          </p>
          <Button href="/contact" variant="gold">Request Sample COA</Button>
        </div>
      </section>
    </>
  )
}
