import { Product, FAQItem, Certification, Testimonial, NavItem } from './types'

/* ─── Products ──────────────────────────────────────────────────── */
export const products: Product[] = [
  {
    slug: 'premium-white-makhana',
    name: 'Premium White Makhana',
    subtitle: 'Single-Origin · Bihar · Grade A',
    description:
      'Our flagship product — large, crisp, ivory-white fox nuts hand-sorted from Mithila farms. The standard for discerning importers.',
    longDescription:
      'SATVA Premium White Makhana is sourced exclusively from cooperative farmers in the Darbhanga and Madhubani districts of Bihar — the world's largest Makhana-producing region. Every batch is kiln-roasted to 98% moisture compliance, lab-tested for aflatoxins and heavy metals, and double-sorted by size and colour before packaging. The result: consistent, premium-grade fox nuts that meet the strictest import standards across the UAE, UK, and USA.',
    grade: 'Premium',
    size: '4–6 mm',
    packSizes: ['100g', '250g', '500g', '1 kg', '5 kg', '25 kg'],
    minOrderQty: '25 kg',
    pricePerKg: '$18–$22',
    features: [
      'Single-origin: Mithila, Bihar',
      'Hand-sorted for uniform size & colour',
      '98% moisture compliance',
      'Zero artificial additives',
      'Lab-tested — aflatoxin & heavy metals',
      'Shelf life: 12 months sealed',
    ],
    certifications: ['FSSAI', 'APEDA Registered', 'ISO 22000'],
    origin: 'Darbhanga & Madhubani, Bihar, India',
    imageSrc: '/images/product-premium-white.jpg',
    imageAlt: 'SATVA Premium White Makhana in kraft paper packaging',
    isFeatured: true,
    tags: ['bestseller', 'export-grade', 'bulk-available'],
  },
  {
    slug: 'jumbo-makhana',
    name: 'Jumbo Makhana',
    subtitle: 'Large Pod · Gourmet Grade · Limited Harvest',
    description:
      'The rare top-grade selection — oversized pods with an exceptionally delicate crunch, reserved for premium retail and gourmet channels.',
    longDescription:
      'SATVA Jumbo Makhana represents the top 8–10% of each harvest by size. These large-pod fox nuts command a premium in gourmet retail and specialty food stores because of their dramatic visual presence and luxuriously light texture. Hand-picked during the peak July–September harvest window, each batch is individually inspected before packaging in our signature resealable kraft-lined pouches.',
    grade: 'Gourmet',
    size: '6–8 mm',
    packSizes: ['100g', '250g', '500g'],
    minOrderQty: '10 kg',
    pricePerKg: '$28–$34',
    features: [
      'Top 8–10% of harvest by size',
      'Peak-season July–September harvest only',
      'Individually inspected pods',
      'Ideal for gourmet retail & gifting',
      'Premium resealable packaging',
      'Shelf life: 12 months sealed',
    ],
    certifications: ['FSSAI', 'APEDA Registered'],
    origin: 'Madhubani, Bihar, India',
    imageSrc: '/images/product-jumbo.jpg',
    imageAlt: 'SATVA Jumbo Makhana — large-pod gourmet grade',
    isFeatured: true,
    isNew: true,
    tags: ['gourmet', 'limited', 'premium-retail'],
  },
  {
    slug: 'organic-makhana',
    name: 'Certified Organic Makhana',
    subtitle: 'India Organic · No Pesticides · Export Certified',
    description:
      'Grown without synthetic inputs and certified to India Organic standards. Purpose-built for natural food retailers and health-conscious markets.',
    longDescription:
      'SATVA Organic Makhana is grown by a dedicated cluster of certified farmers who have maintained chemical-free pond cultivation for three or more consecutive years. Certification is issued annually by an NPOP-accredited agency, and our export documentation package includes the full organic certification chain for UK and EU import compliance. For US import, we provide full traceability to support USDA NOP equivalency claims.',
    grade: 'Organic',
    size: '4–6 mm',
    packSizes: ['250g', '500g', '1 kg', '5 kg', '25 kg'],
    minOrderQty: '25 kg',
    pricePerKg: '$24–$28',
    features: [
      'India Organic / NPOP certified',
      'No synthetic pesticides or fertilisers',
      'Full traceability to farm cluster',
      'Annual third-party audit',
      'Export doc pack included',
      'Shelf life: 12 months sealed',
    ],
    certifications: ['FSSAI', 'India Organic (NPOP)', 'APEDA Registered'],
    origin: 'Certified Cluster, Darbhanga, Bihar',
    imageSrc: '/images/product-organic.jpg',
    imageAlt: 'SATVA Certified Organic Makhana',
    isFeatured: true,
    tags: ['organic', 'certified', 'natural-retail'],
  },
  {
    slug: 'roasted-salted-makhana',
    name: 'Roasted & Lightly Salted',
    subtitle: 'Ready-to-Eat · Himalayan Salt · Consumer Pack',
    description:
      'Perfectly roasted with a touch of Himalayan pink salt. A ready-to-eat snack designed for D2C, Amazon, and specialty grocery retail.',
    longDescription:
      'SATVA Roasted Makhana uses our premium Grade A pods, slow-roasted to a golden crisp and seasoned with a measured pinch of hand-harvested Himalayan pink salt. Each pouch is nitrogen-flushed at point of filling to extend shelf life without preservatives. Private-label packaging is available from 500-unit MOQ, with custom flavour development possible on a 90-day lead.',
    grade: 'Premium',
    size: '4–6 mm',
    packSizes: ['60g', '100g', '250g'],
    minOrderQty: '500 units',
    pricePerKg: '$32–$38',
    features: [
      'Slow-roasted in-house',
      'Himalayan pink salt only',
      'Nitrogen-flushed packaging',
      'No oil, no artificial flavouring',
      'Private-label from 500 units MOQ',
      'Shelf life: 9 months',
    ],
    certifications: ['FSSAI', 'APEDA Registered'],
    origin: 'Processed at SATVA facility, Bihar',
    imageSrc: '/images/product-roasted-salted.jpg',
    imageAlt: 'SATVA Roasted and Lightly Salted Makhana snack pack',
    isFeatured: false,
    tags: ['ready-to-eat', 'snack', 'd2c', 'amazon', 'private-label'],
  },
  {
    slug: 'makhana-flour',
    name: 'Makhana Flour',
    subtitle: 'Stone-Ground · Gluten-Free · Food-Grade',
    description:
      'Fine-milled fox nut flour for bakeries, food manufacturers, and health food brands seeking a gluten-free, high-protein base ingredient.',
    longDescription:
      'SATVA Makhana Flour is cold stone-milled from premium Grade A Makhana to preserve the native protein and mineral content. With a neutral flavour profile and fine mesh size (200 micron), it blends seamlessly into baked goods, protein blends, baby foods, and traditional sweets. Supplied in food-grade multi-wall kraft bags with inner PE liner for moisture control during ocean freight.',
    grade: 'Export',
    size: '200 micron mesh',
    packSizes: ['1 kg', '5 kg', '25 kg'],
    minOrderQty: '50 kg',
    pricePerKg: '$14–$18',
    features: [
      'Cold stone-milled',
      '200-micron fine mesh',
      'Gluten-free — lab tested',
      'High protein: ~9.7g per 100g',
      'Food-grade multi-wall kraft bags',
      'Shelf life: 9 months',
    ],
    certifications: ['FSSAI', 'APEDA Registered', 'Gluten-Free Lab Certificate'],
    origin: 'Processed at SATVA facility, Bihar',
    imageSrc: '/images/product-flour.jpg',
    imageAlt: 'SATVA Makhana Flour in food-grade packaging',
    isFeatured: false,
    tags: ['ingredient', 'gluten-free', 'b2b', 'food-manufacturing'],
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
    description: 'India's primary food safety regulatory certification — mandatory for all food manufacturers and exporters.',
    icon: 'shield-check',
  },
  {
    name: 'APEDA Registered',
    issuer: 'Agricultural and Processed Food Products Export Development Authority',
    description: 'Government of India export registration enabling legal export of agricultural and processed food products.',
    icon: 'badge-check',
  },
  {
    name: 'ISO 22000',
    issuer: 'International Organisation for Standardisation',
    description: 'International Food Safety Management System standard — covers hazard analysis (HACCP) and traceability requirements.',
    icon: 'award',
  },
  {
    name: 'India Organic (NPOP)',
    issuer: 'APEDA / Accredited Certification Body',
    description: 'National Programme for Organic Production — recognised for equivalency with the EU and Switzerland organic standards.',
    icon: 'leaf',
  },
  {
    name: 'Lab Tested',
    issuer: 'NABL-Accredited Laboratory',
    description: 'Every batch tested for aflatoxins, heavy metals (lead, cadmium, arsenic), pesticide residues, and microbial counts.',
    icon: 'flask',
  },
]

/* ─── FAQs ──────────────────────────────────────────────────────── */
export const faqs: FAQItem[] = [
  {
    question: 'What is Makhana and where does it come from?',
    answer:
      'Makhana (Euryale ferox), also called fox nuts or lotus seeds, is an aquatic crop grown in the ponds and wetlands of Bihar, India — which produces over 90% of the world\'s supply. Bihar\'s Mithila region, particularly Darbhanga and Madhubani districts, is the heartland of Makhana cultivation.',
    category: 'product',
  },
  {
    question: 'What nutritional benefits does Makhana offer?',
    answer:
      'Makhana is naturally low in calories (~347 kcal/100g) and fat, while being rich in protein (~9.7g/100g), complex carbohydrates, magnesium, potassium, phosphorus, and antioxidants. It is naturally gluten-free, cholesterol-free, and has a low glycaemic index — making it popular among health-conscious consumers, diabetics, and those following Ayurvedic, Vegan, or Jain diets.',
    category: 'product',
  },
  {
    question: 'What grades of Makhana does SATVA offer?',
    answer:
      'We supply four grades: Premium White (4–6 mm, Grade A — our flagship export grade), Jumbo (6–8 mm, Gourmet Grade, limited seasonal availability), Certified Organic (4–6 mm, India Organic / NPOP certified), and Processed products including Roasted Makhana and Makhana Flour.',
    category: 'product',
  },
  {
    question: 'What certifications does SATVA hold?',
    answer:
      'SATVA holds FSSAI License, APEDA Exporter Registration, and ISO 22000 (Food Safety Management System) for our processing facility. Our Organic range carries India Organic / NPOP certification. Every batch is lab-tested by a NABL-accredited laboratory for aflatoxins, heavy metals, pesticide residues, and microbial count.',
    category: 'quality',
  },
  {
    question: 'What is the minimum order quantity for export?',
    answer:
      'For B2B and wholesale export orders, our standard MOQ is 25 kg per SKU (Premium White and Organic grades) and 10 kg for Jumbo Makhana. For private-label retail packs (60g–250g), the MOQ is 500 units per SKU. Sample orders of 1–2 kg are available for qualified buyers at cost price plus shipping.',
    category: 'export',
  },
  {
    question: 'Which markets do you export to?',
    answer:
      'We currently export to UAE, UK, USA, Canada, and GCC countries. Our documentation package supports food import compliance for all three regions — including Certificate of Origin, Phytosanitary Certificate, FSSAI export licence, lab reports, and an organic certificate chain for the UK/EU market.',
    category: 'export',
  },
  {
    question: 'What documentation do you provide for customs clearance?',
    answer:
      'Standard export document pack includes: Commercial Invoice, Packing List, Bill of Lading / Airway Bill, Certificate of Origin (Chamber-attested), Phytosanitary Certificate (APEDA/STA), FSSAI Export NOC, COA from NABL Lab, and Organic Certificate (for organic SKUs). Additional documents (Halal Certificate, FDA Prior Notice for USA) available on request.',
    category: 'export',
  },
  {
    question: 'How long does an export shipment take?',
    answer:
      'Lead time from confirmed Purchase Order to ex-factory is 7–14 days (production, packaging, documentation). Ocean freight transit: India to UAE 6–8 days; India to UK 22–28 days; India to USA East Coast 28–35 days. Air freight for sample or urgent orders is 3–5 days to any of these destinations.',
    category: 'export',
  },
  {
    question: 'Can you do private-label packaging for our brand?',
    answer:
      'Yes — we offer full private-label services from MOQ 500 units per SKU. You supply the artwork (we provide a dieline template); we handle FDA/FSSAI-compliant label review, printing, and packaging. For custom formulations (flavoured variants, blended packs), we require a 90-day product development lead time.',
    category: 'ordering',
  },
  {
    question: 'How do I request a sample before placing a bulk order?',
    answer:
      'Fill in the Sample Request form on our Contact page or email us at samples@satvafoods.com. We send 200g samples of up to 3 SKUs per inquiry. Sample cost is charged at cost price; shipping is at buyer\'s expense. Most sample requests are dispatched within 5 business days.',
    category: 'ordering',
  },
]

/* ─── Testimonials ──────────────────────────────────────────────── */
export const testimonials: Testimonial[] = [
  {
    quote:
      'SATVA has become our primary source for premium Makhana. The consistency in grade, moisture levels, and documentation is simply the best we\'ve encountered from an Indian supplier.',
    author: 'Aisha Al-Mansoori',
    role: 'Purchasing Manager',
    company: 'NatureFoods FZE',
    country: 'United Arab Emirates',
    countryCode: 'AE',
  },
  {
    quote:
      'We switched from our previous Bihar supplier to SATVA last year and haven\'t looked back. The organic certification documentation they provide is exactly what our UK retail buyers require.',
    author: 'Priya Mehta',
    role: 'Director',
    company: 'IndiaOrganics Ltd.',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  {
    quote:
      'Their Jumbo grade Makhana sells out every week on our Amazon storefront. The product quality photographs beautifully and the reorder process is completely painless.',
    author: 'Raj Patel',
    role: 'Founder',
    company: 'HealthNuts Co.',
    country: 'United States',
    countryCode: 'US',
  },
]

/* ─── Navigation ─────────────────────────────────────────────────── */
export const navItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Why Makhana', href: '/why-makhana' },
  { label: 'Quality', href: '/quality' },
  { label: 'Export / B2B', href: '/export' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
