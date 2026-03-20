import Link from 'next/link'

const footerLinks = {
  Products: [
    { label: 'Premium White Makhana', href: '/products/premium-white-makhana' },
    { label: 'Jumbo Makhana', href: '/products/jumbo-makhana' },
    { label: 'Organic Makhana', href: '/products/organic-makhana' },
    { label: 'Roasted Makhana', href: '/products/roasted-salted-makhana' },
    { label: 'Makhana Flour', href: '/products/makhana-flour' },
    { label: 'All Products', href: '/products' },
  ],
  Company: [
    { label: 'About SATVA', href: '/about' },
    { label: 'Why Makhana', href: '/why-makhana' },
    { label: 'Quality & Certifications', href: '/quality' },
    { label: 'Export & B2B', href: '/export' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Request Sample', href: '/contact#sample' },
    { label: 'Bulk Enquiry', href: '/contact#bulk' },
    { label: 'Private Label', href: '/export#private-label' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-satva-dark text-satva-cream/80">

      {/* Main footer */}
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="font-display text-3xl text-satva-cream tracking-wider">SATVA</span>
              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-satva-gold mt-0.5">
                Pure Makhana
              </p>
            </Link>
            <p className="text-sm leading-relaxed text-satva-cream/60 max-w-xs mb-6">
              Premium single-origin Makhana sourced from the Mithila heartland of Bihar. Export-grade quality, certified purity, trusted by importers across three continents.
            </p>
            <div className="space-y-1.5 text-sm text-satva-cream/60">
              <p>📧 <a href="mailto:alumni.chinmaya@gmail.com" className="hover:text-satva-gold transition-colors">alumni.chinmaya@gmail.com</a></p>
              <p>🌐 satvafoods.com</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-sans font-semibold text-satva-cream uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-satva-cream/60 hover:text-satva-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certification strip */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-xs text-satva-cream/40 mr-2">Certified &amp; Compliant:</span>
            {['FSSAI Licensed', 'APEDA Registered', 'ISO 22000', 'India Organic / NPOP', 'NABL Lab Tested'].map((cert) => (
              <span key={cert} className="cert-badge border-white/20 text-satva-cream/50 text-xs py-1 px-3">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-satva-cream/40">
            © {new Date().getFullYear()} SATVA Foods. All rights reserved. Originating from Bihar, India.
          </p>
          <div className="flex items-center gap-4 text-xs text-satva-cream/40">
            <Link href="/faq" className="hover:text-satva-gold transition-colors">FAQ</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-satva-gold transition-colors">Contact</Link>
            <span>·</span>
            <span>Built with ♥ in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
