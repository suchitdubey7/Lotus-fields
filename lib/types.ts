/* ─── Product Types ─────────────────────────────────────────────── */
export interface Product {
  slug: string
  name: string
  subtitle: string
  description: string
  longDescription: string
  grade: 'Premium' | 'Export' | 'Gourmet' | 'Organic'
  size: string              // e.g. "4–6 mm"
  packSizes: string[]       // e.g. ["250g", "500g", "1kg", "5kg", "25kg"]
  minOrderQty: string       // e.g. "25 kg" for B2B
  pricePerKg?: string       // retail guide price
  features: string[]
  certifications: string[]
  origin: string
  imageSrc: string
  imageAlt: string
  isFeatured: boolean
  isNew?: boolean
  tags: string[]
}

/* ─── FAQ Types ─────────────────────────────────────────────────── */
export interface FAQItem {
  question: string
  answer: string
  category: 'product' | 'export' | 'quality' | 'ordering'
}

/* ─── Certification Types ───────────────────────────────────────── */
export interface Certification {
  name: string
  issuer: string
  description: string
  icon: string
}

/* ─── Testimonial Types ─────────────────────────────────────────── */
export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  country: string
  countryCode: string
}

/* ─── Navigation Types ──────────────────────────────────────────── */
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
