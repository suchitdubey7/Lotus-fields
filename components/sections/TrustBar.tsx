const s = 'w-4 h-4 flex-shrink-0 text-satva-gold'

const icons = {
  shield: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  certificate: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 8h10M7 11h6"/>
    </svg>
  ),
  award: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <polyline points="9.09 15 8 22 12 19.27 16 22 14.91 15"/>
      <polyline points="9 8 11 10 15 6"/>
    </svg>
  ),
  leaf: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  flask: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v7l-5 9a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 19l-5-9V3"/>
      <path d="M6.5 14.5h11"/>
    </svg>
  ),
  globe: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
}

const items = [
  { icon: icons.shield,      text: 'FSSAI Licensed' },
  { icon: icons.certificate, text: 'APEDA Registered' },
  { icon: icons.award,       text: 'ISO 22000 Certified' },
  { icon: icons.leaf,        text: 'India Organic / NPOP' },
  { icon: icons.flask,       text: 'NABL Lab Tested' },
  { icon: icons.globe,       text: 'Export to UAE · UK · USA' },
]

export default function TrustBar() {
  return (
    <section className="bg-satva-deep text-satva-cream py-5 md:py-4 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between items-center gap-y-3 gap-x-4 md:gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item.icon}
              <span className="text-xs font-sans font-medium tracking-wide text-satva-cream/80 leading-tight whitespace-nowrap">
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
