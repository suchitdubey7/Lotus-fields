import { Product, FAQItem, Certification, Testimonial, NavItem } from './types'

/* ─── Products ──────────────────────────────────────────────────── */
export const products: Product[] = [
  {
    slug: 'premium-white-makhana',
    name: 'Premium White Makhana',
    subtitle: 'Single-Origin · Bihar · Grade A',
    description:
      'Our bestselling fox nuts — large, crisp, ivory-white pods hand-sorted from Mithila farms and delivered fresh to your door.',
    longDescription:
      "SATVA Premium White Makhana is sourced exclusively from cooperative farmers in the Darbhanga and Madhubani districts of Bihar — the world's largest Makhana-producing region. Every batch is kiln-roasted to perfect crispness, lab-tested for aflatoxins and heavy metals, and double-sorted by size and colour before packaging. Enjoy them roasted as a snack, in curries, or as a high-protein addition to your morning bowl.",
    grade: 'Premium',
    size: '4–6 mm',
    packSizes: ['100g', '250g', '500g', '1 kg'],
    minOrderQty: '100g',
    pricePerKg: 'From $8 / pack',
    features: [
      'Single-origin: Mithila, Bihar',
      'Hand-sorted for uniform size & colour',
      '100% natural — zero additives',
      'Naturally gluten-free & vegan',
      'Lab-tested — aflatoxin & heavy metals',
      'Shelf life: 12 months sealed',
    ],
    certifications: ['FSSAI', 'ISO 22000', 'Lab Tested'],
    origin: 'Darbhanga & Madhubani, Bihar, India',
    imageSrc: 'https://images.unsplash.com/photo-1710421576768-ff985fa63b60?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'SATVA Premium White Makhana in kraft paper packaging',
    isFeatured: true,
    tags: ['bestseller', 'snack', 'healthy'],
  },
  {
    slug: 'jumbo-makhana',
    name: 'Jumbo Makhana',
    subtitle: 'Large Pod · Gourmet Grade · Limited Harvest',
    description:
      'The rarest grade — oversized pods with an exceptionally delicate crunch. Perfect for gifting and gourmet snacking.',
    longDescription:
      'SATVA Jumbo Makhana represents the top 8–10% of each harvest by size. These large-pod fox nuts are coveted for their dramatic visual presence and luxuriously light texture. Hand-picked during the peak July–September harvest window, each batch is individually inspected before packaging in our signature resealable kraft-lined pouches. Makes a stunning, healthy gift.',
    grade: 'Gourmet',
    size: '6–8 mm',
    packSizes: ['100g', '250g', '500g'],
    minOrderQty: '100g',
    pricePerKg: 'From $12 / pack',
    features: [
      'Top 8–10% of harvest by size',
      'Peak-season harvest only',
      'Individually inspected pods',
      'Perfect for gifting',
      'Premium resealable pouch',
      'Shelf life: 12 months sealed',
    ],
    certifications: ['FSSAI', 'Lab Tested'],
    origin: 'Madhubani, Bihar, India',
    imageSrc: 'https://images.unsplash.com/photo-1725436027903-4a02d56c34f9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'SATVA Jumbo Makhana — large-pod gourmet grade',
    isFeatured: true,
    isNew: true,
    tags: ['gourmet', 'limited', 'gift'],
  },
  {
    slug: 'organic-makhana',
    name: 'Certified Organic Makhana',
    subtitle: 'India Organic · No Pesticides · Chemical-Free',
    description:
      'Grown without any synthetic inputs and certified organic. The purest choice for health-conscious families.',
    longDescription:
      "SATVA Organic Makhana is grown by a dedicated cluster of certified farmers who have maintained chemical-free pond cultivation for three or more consecutive years. Certified annually by an NPOP-accredited agency, these fox nuts are as close to nature as it gets. No pesticides. No fertilisers. Just pure, wholesome goodness from Bihar's sacred ponds.",
    grade: 'Organic',
    size: '4–6 mm',
    packSizes: ['250g', '500g', '1 kg'],
    minOrderQty: '250g',
    pricePerKg: 'From $10 / pack',
    features: [
      'India Organic / NPOP certified',
      'Zero synthetic pesticides or fertilisers',
      'Full traceability to farm',
      'Annual third-party audit',
      'Ideal for kids & health-conscious families',
      'Shelf life: 12 months sealed',
    ],
    certifications: ['FSSAI', 'India Organic (NPOP)', 'Lab Tested'],
    origin: 'Certified Cluster, Darbhanga, Bihar',
    imageSrc: 'https://images.unsplash.com/photo-1600986803572-8328914ef676?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'SATVA Certified Organic Makhana',
    isFeatured: true,
    tags: ['organic', 'certified', 'family-friendly'],
  },
  {
    slug: 'roasted-salted-makhana',
    name: 'Roasted & Lightly Salted',
    subtitle: 'Ready-to-Eat · Himalayan Salt · Snack Pack',
    description:
      'Perfectly roasted with a touch of Himalayan pink salt. Open the bag and snack — no prep needed.',
    longDescription:
      'SATVA Roasted Makhana uses our premium Grade A pods, slow-roasted to a golden crisp and seasoned with a measured pinch of hand-harvested Himalayan pink salt. Each pouch is nitrogen-flushed at point of filling for maximum freshness without preservatives. No oil. No artificial flavouring. Just pure crunch in every bite.',
    grade: 'Premium',
    size: '4–6 mm',
    packSizes: ['60g', '100g', '250g'],
    minOrderQty: '60g',
    pricePerKg: 'From $5 / pack',
    features: [
      'Ready to eat — no prep needed',
      'Himalayan pink salt only',
      'Nitrogen-flushed for freshness',
      'No oil, no artificial flavouring',
      'Only 347 kcal per 100g',
      'Shelf life: 9 months',
    ],
    certifications: ['FSSAI', 'Lab Tested'],
    origin: 'Processed at SATVA facility, Bihar',
    imageSrc: 'https://images.unsplash.com/photo-1711963915993-5967d3e64310?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'SATVA Roasted and Lightly Salted Makhana snack pack',
    isFeatured: false,
    tags: ['ready-to-eat', 'snack', 'bestseller'],
  },
  {
    slug: 'makhana-flour',
    name: 'Makhana Flour',
    subtitle: 'Stone-Ground · Gluten-Free · Baking-Ready',
    description:
      'Fine-milled fox nut flour for gluten-free baking, rotis, and health recipes. A pantry essential.',
    longDescription:
      'SATVA Makhana Flour is cold stone-milled from premium Grade A Makhana to preserve its native protein and mineral content. With a neutral flavour profile and fine texture, it blends seamlessly into baked goods, rotis, protein blends, baby foods, and traditional sweets like kheer and halwa. Naturally gluten-free and high in protein.',
    grade: 'Export',
    size: '200 micron mesh',
    packSizes: ['250g', '500g', '1 kg'],
    minOrderQty: '250g',
    pricePerKg: 'From $6 / pack',
    features: [
      'Cold stone-milled',
      'Fine, smooth texture',
      'Naturally gluten-free — lab tested',
      'High protein: ~9.7g per 100g',
      'Great for rotis, bakes & sweets',
      'Shelf life: 9 months',
    ],
    certifications: ['FSSAI', 'Gluten-Free Lab Certificate'],
    origin: 'Processed at SATVA facility, Bihar',
    imageSrc: 'https://images.unsplash.com/photo-1689536211041-08f7b1e556e4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'SATVA Makhana Flour in food-grade packaging',
    isFeatured: false,
    tags: ['ingredient', 'gluten-free', 'baking'],
  },
]

export const featuredProducts = products.filter((p) => p.isFeatured)

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug)
}

/* ─── Certifications ────────────────────────────────────────────── */
export const certifications: Certification[] = [
  {
    name: 'FSSAI Licensed',
    issuer: 'Food Safety and Standards Authority of India',
    description: "India's primary food safety certification — every product meets strict hygiene and quality standards before it leaves our facility.",
    icon: 'shield-check',
  },
  {
    name: 'Lab Tested Every Batch',
    issuer: 'NABL-Accredited Laboratory',
    description: "Every batch tested for aflatoxins, heavy metals, pesticide residues, and microbial counts — so you know exactly what you're eating.",
    icon: 'flask',
  },
  {
    name: 'ISO 22000 Certified',
    issuer: 'International Organisation for Standardisation',
    description: 'International Food Safety Management System — covering hazard analysis, traceability, and facility hygiene at our processing unit.',
    icon: 'award',
  },
  {
    name: 'India Organic (NPOP)',
    issuer: 'APEDA / Accredited Certification Body',
    description: 'Our organic range carries the National Programme for Organic Production certification — no synthetic pesticides, no fertilisers, ever.',
    icon: 'leaf',
  },
  {
    name: 'Export Registered',
    issuer: 'APEDA — Govt. of India',
    description: 'Fully registered for international shipping — cleared for UAE, UK, and USA import without exception.',
    icon: 'badge-check',
  },
]

/* ─── FAQs ──────────────────────────────────────────────────────── */
export const faqs: FAQItem[] = [
  {
    question: 'What is Makhana and why should I eat it?',
    answer:
      "Makhana (also called fox nuts or lotus seeds) is an ancient Indian superfood harvested from water ponds in Bihar. It's naturally low in fat, high in protein, gluten-free, and loaded with magnesium, potassium, and antioxidants. A perfect guilt-free snack and a healthy swap for chips and popcorn.",
    category: 'product',
  },
  {
    question: 'Where does SATVA Makhana come from?',
    answer:
      "Every bag is sourced directly from farmer cooperatives in Mithila, Bihar — the region that produces over 90% of the world's Makhana. We work directly with farmers, which means fresher produce, fairer pay for growers, and full traceability for you.",
    category: 'product',
  },
  {
    question: 'Which countries do you ship to?',
    answer:
      "We ship to UAE, UK, and USA. Orders are dispatched from Bihar within 48 hours. International delivery takes 5–10 business days depending on your location. We're expanding to more countries soon — sign up to our newsletter to be notified.",
    category: 'ordering',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Orders are packed and dispatched within 48 hours. Estimated delivery: UAE — 4–6 business days; UK — 6–8 business days; USA — 8–12 business days. You will receive a tracking number as soon as your order ships.',
    category: 'ordering',
  },
  {
    question: 'Is the Organic Makhana really chemical-free?',
    answer:
      'Yes. Our Certified Organic Makhana carries India Organic / NPOP certification issued by an accredited third-party agency annually. This means zero synthetic pesticides, zero chemical fertilisers, and full farm-level traceability. Certification documents are on our Quality page.',
    category: 'quality',
  },
  {
    question: 'Are SATVA products suitable for children?',
    answer:
      'Absolutely. Makhana is naturally gluten-free, dairy-free, and free from artificial colours or preservatives — making it a great snack for children. Our Certified Organic range is especially popular with parents. The roasted variety is a fun, healthy alternative to chips.',
    category: 'product',
  },
  {
    question: 'Can I return or get a refund?',
    answer:
      "We stand behind every order. If you're not happy for any reason — quality, freshness, or anything else — contact us within 14 days of delivery and we'll arrange a replacement or full refund. No hassle.",
    category: 'ordering',
  },
  {
    question: 'How should I store my Makhana?',
    answer:
      'Keep in a cool, dry place away from direct sunlight. Once opened, transfer to an airtight container. If your Makhana loses crunch after opening, a quick 2-minute dry roast in a pan will revive it perfectly.',
    category: 'product',
  },
  {
    question: 'Do you offer wholesale or bulk orders?',
    answer:
      'Yes — we work with restaurants, health food stores, and Indian grocery shops. Contact us via the Contact page for wholesale pricing and private-label options. We respond within 24 hours.',
    category: 'ordering',
  },
  {
    question: 'What pack sizes do you offer?',
    answer:
      'From 60g trial packs to 1 kg family bags. Roasted snack packs: 60g, 100g, 250g. Raw Makhana: 100g, 250g, 500g, 1 kg. Makhana Flour: 250g, 500g, 1 kg.',
    category: 'product',
  },
]

/* ─── Testimonials ──────────────────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I've tried many brands but SATVA is on a different level. The Jumbo Makhana is so fresh and crispy — arrived beautifully packed and the whole family loves it. Ordering again!",
    author: 'Fatima Al-Rashidi',
    role: 'Home Cook & Wellness Enthusiast',
    company: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
  },
  {
    quote:
      "As someone who grew up eating Makhana back home, finding SATVA in the UK felt like a gift. The organic range is incredible — clean, fresh, and you can genuinely taste the quality.",
    author: 'Priya Mehta',
    role: 'Nutritionist',
    company: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  {
    quote:
      'Finally a Makhana brand that takes quality seriously. The roasted salted pack is my go-to desk snack. Shipped fast to New Jersey, arrived perfectly sealed. Highly recommend.',
    author: 'Raj Patel',
    role: 'Software Engineer & Health Food Fan',
    company: 'New Jersey',
    country: 'United States',
    countryCode: 'US',
  },
]

/* ─── Navigation ─────────────────────────────────────────────────── */
export const navItems: NavItem[] = [
  { label: 'Shop', href: '/products' },
  { label: 'Why Makhana', href: '/why-makhana' },
  { label: 'Our Story', href: '/about' },
  { label: 'Quality', href: '/quality' },
  { label: 'Contact', href: '/contact' },
]
