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
    <section className="bg-satva-deep text-satva-cream py-4 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-base">{item.icon}</span>
              <span className="text-xs font-sans font-medium tracking-wide text-satva-cream/80">
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
