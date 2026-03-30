const s = 'w-4 h-4 flex-shrink-0 text-satva-gold'

const icons = {
  truck: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  shield: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  leaf: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  lock: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  star: (
    <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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
  { icon: icons.truck,  text: 'Ships to UAE · UK · USA' },
  { icon: icons.leaf,   text: '100% Natural, No Additives' },
  { icon: icons.shield, text: 'FSSAI & Lab Certified' },
  { icon: icons.lock,   text: 'Secure Checkout' },
  { icon: icons.star,   text: 'Farm-Direct Quality' },
  { icon: icons.globe,  text: 'Dispatched from Bihar in 48hrs' },
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
