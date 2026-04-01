export type PersonalizationType = 'monogram' | 'graphic-text' | 'photo' | 'photo-text' | 'photo-layout' | 'photo-size'

export interface Product {
  id: string
  name: string
  price: number
  priceLabel?: string
  description: string
  personalizationType: PersonalizationType
  personalizationLabel: string
  availability: ('pre-cruise' | 'post-cruise')[]
  vendor: string
  category: 'travel' | 'keepsake' | 'apparel' | 'photo'
}

export const products: Product[] = [
  // Pre-cruise travel products
  {
    id: 'leather-luggage-tag',
    name: 'Leather Luggage Tag',
    price: 19.99,
    description: 'Premium leather luggage tag personalized with your name or monogram. The perfect travel companion for your cruise adventure.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
  },
  {
    id: 'leather-passport-holder',
    name: 'Leather Passport Holder',
    price: 29.99,
    description: 'Elegant leather passport holder with custom engraving. Keep your travel documents stylish and secure.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
  },
  {
    id: 'engraved-toiletry-bag',
    name: 'Engraved Toiletry Bag',
    price: 34.99,
    description: 'Spacious toiletry bag with custom engraving. Organize your essentials in style.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
  },
  {
    id: 'soft-leather-journal',
    name: 'Soft Leather Journal',
    price: 24.99,
    description: 'Beautifully crafted leather journal to capture your cruise memories. Personalized with your name.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
  },
  {
    id: 'softstyle-tshirt',
    name: 'Softstyle T-Shirt',
    price: 24.99,
    description: 'Comfortable softstyle t-shirt with custom graphic or text. Show your cruise spirit.',
    personalizationType: 'graphic-text',
    personalizationLabel: 'Graphic / text',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'DPI',
    category: 'apparel',
  },
  // Post-cruise additions
  {
    id: 'wall-calendar',
    name: 'Wall Calendar',
    price: 14.99,
    description: 'Custom wall calendar featuring your favorite cruise photos. Relive your memories every month.',
    personalizationType: 'photo-layout',
    personalizationLabel: 'Photo selection + layout',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
  },
  {
    id: 'wall-tiles',
    name: 'Wall Tiles',
    price: 11.99,
    description: 'Adhesive photo wall tiles that bring your cruise memories to life. Easy to apply and reposition.',
    personalizationType: 'photo',
    personalizationLabel: 'Photo selection',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'photo',
  },
  {
    id: 'canvas-print',
    name: 'Canvas Print',
    price: 34.99,
    description: 'Gallery-quality canvas print of your favorite cruise photo. Museum-wrapped and ready to hang.',
    personalizationType: 'photo',
    personalizationLabel: 'Photo selection + crop',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'photo',
  },
  {
    id: 'photo-prints',
    name: 'Photo Prints',
    price: 4.99,
    priceLabel: 'from $4.99',
    description: 'High-quality photo prints in a variety of sizes. Perfect for framing or sharing.',
    personalizationType: 'photo-size',
    personalizationLabel: 'Photo selection + size',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'photo',
  },
  {
    id: 'fleece-blanket',
    name: 'Fleece Blanket',
    price: 49.99,
    description: 'Cozy fleece blanket featuring your cruise photos. Wrap yourself in memories.',
    personalizationType: 'photo',
    personalizationLabel: 'Photo selection',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
  },
  {
    id: 'personalized-mug',
    name: 'Personalized Mug',
    price: 11.99,
    description: 'Custom mug with your cruise photos and text. Start every morning with happy memories.',
    personalizationType: 'photo-text',
    personalizationLabel: 'Photo + text',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
  },
]

export function getProductsByJourneyState(state: string): Product[] {
  if (state === 'pre-cruise') {
    return products.filter(p => p.availability.includes('pre-cruise'))
  }
  if (state === 'post-cruise') {
    return products // post-cruise sees everything
  }
  return [] // in-cruise and none return empty
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}
