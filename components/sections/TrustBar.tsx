export default function TrustBar() {
  const items = [
    { icon: '🛡️', text: 'FSSAI Licensed' },
    { icon: '📋', text: 'APEDA Registered' },
    { icon: '🏅', text: 'ISO 22000 Certified' },
    { icon: '🌿', text: 'India Organic / NPOP' },
    { icon: '🔬', text: 'NABL Lab Tested' },
    { icon: '🚢', text: 'Export to UAE · UK · USA' },
  ]

  return (
    <section className="bg-satva-deep text-satva-cream py-5 md:py-4 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-12">
        {/* Mobile: 2-col grid | Desktop: single flex row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between items-center gap-y-3 gap-x-4 md:gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-base flex-shrink-0">{item.icon}</span>
              <span className="text-xs font-sans font-medium tracking-wide text-satva-cream/80 leading-tight">
                {item.text}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-satva-cream/20 ml-4">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
