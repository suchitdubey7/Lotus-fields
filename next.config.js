/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploy to Vercel, Netlify, GitHub Pages, or any CDN
  output: 'export',

  // Image optimisation: disabled for static export; re-enable with a loader for Vercel
  images: {
    unoptimized: true,
  },

  // Trailing slash for static hosting compatibility
  trailingSlash: true,

  // Clean URL support
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
