import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

/* ─── Fonts ────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

/* ─── Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://satvafoods.com'),
  title: {
    default: 'SATVA — Premium Makhana from Bihar | Export-Grade Fox Nuts',
    template: '%s | SATVA Makhana',
  },
  description:
    "SATVA sources single-origin Makhana (fox nuts) direct from Bihar's Mithila farms. FSSAI certified, lab-tested, export-ready for UAE, UK & USA. Premium quality. Pure goodness.",
  keywords: [
    'makhana export',
    'fox nuts supplier',
    'premium makhana',
    'Bihar makhana',
    'Mithila fox nuts',
    'organic makhana',
    'makhana wholesale',
    'makhana UAE',
    'makhana UK',
    'makhana USA',
    'healthy snacks export',
    'FSSAI certified makhana',
  ],
  authors: [{ name: 'SATVA Foods' }],
  creator: 'SATVA Foods',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://satvafoods.com',
    siteName: 'SATVA Makhana',
    title: 'SATVA — Premium Makhana from Bihar',
    description:
      'Export-grade fox nuts sourced from Mithila farms. Single-origin, lab-tested, FSSAI certified. Trusted by importers across UAE, UK and USA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SATVA Premium Makhana — Pure. Potent. Bihar-Origin.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SATVA — Premium Makhana from Bihar',
    description:
      'Export-grade fox nuts sourced from Mithila farms. Single-origin, FSSAI certified.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/* ─── Root Layout ──────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
