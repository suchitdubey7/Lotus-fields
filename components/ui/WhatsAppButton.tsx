'use client'

// Replace YOUR_WHATSAPP_NUMBER with your number in international format, no spaces or dashes
// e.g. 919876543210 for +91 98765 43210
const WHATSAPP_NUMBER = '919930287551'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi SATVA team, I\'m interested in placing a bulk order / sample request for Makhana. Could you share more details?'
)

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
    >
      {/* Tooltip label — slides in on hover */}
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-satva-dark text-satva-cream text-xs font-sans px-3 py-1.5 rounded shadow-elevated whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Button circle */}
      <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-elevated flex items-center justify-center transition-transform duration-200 group-hover:scale-110 active:scale-95">
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.469.651 4.786 1.787 6.793L2 30l7.415-1.754A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.89-1.61l-.422-.25-4.4 1.04 1.063-4.288-.276-.44A11.56 11.56 0 014.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.34-8.67c-.347-.173-2.055-1.013-2.374-1.13-.32-.115-.552-.173-.785.174-.232.347-.9 1.13-1.103 1.363-.203.232-.405.26-.752.087-.347-.174-1.464-.54-2.789-1.72-1.031-.918-1.727-2.052-1.93-2.4-.202-.347-.021-.535.152-.707.156-.156.347-.405.52-.608.174-.202.232-.347.347-.578.116-.232.058-.434-.029-.608-.087-.173-.785-1.89-1.075-2.59-.283-.68-.57-.587-.785-.598l-.668-.011c-.232 0-.608.087-.926.434-.318.347-1.216 1.188-1.216 2.896s1.245 3.36 1.418 3.592c.174.232 2.45 3.74 5.934 5.244.83.358 1.477.572 1.982.732.832.265 1.59.228 2.189.138.668-.1 2.055-.84 2.345-1.652.29-.81.29-1.506.203-1.652-.086-.144-.318-.232-.666-.405z" />
        </svg>
      </div>
    </a>
  )
}
