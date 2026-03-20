'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navItems } from '@/lib/products'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none" aria-label="SATVA Home">
            <span className={`font-display text-2xl tracking-wider transition-colors duration-300 ${
              scrolled || mobileOpen ? 'text-satva-deep' : 'text-satva-cream'
            }`}>
              SATVA
            </span>
            <span className={`text-[9px] font-sans tracking-[0.25em] uppercase transition-colors duration-300 ${
              scrolled || mobileOpen ? 'text-satva-gold' : 'text-satva-gold'
            }`}>
              Pure Makhana
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-sans font-medium tracking-wide transition-colors duration-200 hover:text-satva-gold ${
                  scrolled ? 'text-satva-dark' : 'text-satva-cream/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={`btn btn-outline-light text-sm px-6 py-2.5 ${
                scrolled
                  ? 'border-satva-deep text-satva-deep hover:bg-satva-deep hover:text-satva-cream'
                  : 'border-satva-cream/70 text-satva-cream hover:bg-satva-cream hover:text-satva-deep'
              }`}
            >
              Request Sample
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled || mobileOpen ? 'text-satva-dark' : 'text-satva-cream'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[28rem] border-t border-satva-border' : 'max-h-0'
        }`}
      >
        <div className="bg-white px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-base font-sans font-medium text-satva-dark hover:text-satva-gold border-b border-satva-border last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contact"
              className="btn-primary w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Request Sample
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
