import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── SATVA Brand Palette ───────────────────────────────
        satva: {
          deep:    '#1C3829', // Deep forest green — primary
          forest:  '#2A5238', // Forest green — secondary
          sage:    '#4A7A54', // Sage green — mid-tone
          mist:    '#7AA882', // Mist green — light accent
          fog:     '#C5DEC8', // Fog green — very light
          cream:   '#F7F2E8', // Warm cream — warm background
          linen:   '#EDE8DC', // Linen — section bg variant
          warm:    '#FAFAF7', // Near-white — base background
          gold:    '#C4973A', // Aged gold — premium accent
          'gold-light': '#F5E6C0', // Light gold — hover/highlight
          dark:    '#0F1A14', // Near-black (warm) — body text
          mid:     '#5A6B5E', // Sage-grey — muted text
          border:  '#E0DDD5', // Warm grey — borders
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)',     'system-ui', 'sans-serif'],
      },
      fontSize: {
        // ─── Display scale ─────────────────────────────────────
        'display-2xl': ['clamp(3rem, 8vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-lg':  ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md':  ['clamp(1.5rem, 3vw, 2.25rem)',{ lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '96': '24rem',
        '120': '30rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '1280px',
        'text':    '680px',
        'narrow':  '480px',
      },
      borderRadius: {
        'sm': '2px',
        DEFAULT: '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(15, 26, 20, 0.06)',
        'card-hover': '0 8px 32px rgba(15, 26, 20, 0.12)',
        'elevated': '0 16px 48px rgba(15, 26, 20, 0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1C3829 0%, #2A5238 50%, #1C3829 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(28,56,41,0.7) 0%, rgba(28,56,41,0.85) 100%)',
        'section-warm': 'linear-gradient(180deg, #FAFAF7 0%, #F7F2E8 100%)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
