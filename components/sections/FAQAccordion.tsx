'use client'

import { useState } from 'react'
import { FAQItem } from '@/lib/types'

interface Props {
  items: FAQItem[]
  limit?: number
}

export default function FAQAccordion({ items, limit }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const visible = limit ? items.slice(0, limit) : items

  return (
    <div className="divide-y divide-satva-border">
      {visible.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-start justify-between gap-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-sans font-medium text-satva-dark text-base group-hover:text-satva-forest transition-colors leading-snug">
              {item.question}
            </span>
            <span
              className={`text-satva-gold flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <p className="text-satva-mid text-sm leading-relaxed pr-8">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
