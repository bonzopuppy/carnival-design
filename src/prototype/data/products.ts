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
  image?: string
  shopLabel?: string
}

export const products: Product[] = [
  // Post-cruise keepsake products (row 1 in Figma homepage)
  {
    id: 'wall-calendar',
    name: 'Calendar',
    price: 14.99,
    priceLabel: 'Starting from $14.99',
    description: 'Custom wall calendar featuring your favorite cruise photos. Relive your memories every month.',
    personalizationType: 'photo-layout',
    personalizationLabel: 'Photo selection + layout',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
    image: '/images/products/calendar.png',
    shopLabel: 'Shop Calendar',
  },
  {
    id: 'personalized-mug',
    name: 'Mugs',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Custom mug with your cruise photos and text. Start every morning with happy memories.',
    personalizationType: 'photo-text',
    personalizationLabel: 'Photo + text',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
    image: '/images/products/mug.png',
    shopLabel: 'Shop Mugs',
  },
  {
    id: 'canvas-print',
    name: 'Canvas',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Gallery-quality canvas print of your favorite cruise photo. Museum-wrapped and ready to hang.',
    personalizationType: 'photo',
    personalizationLabel: 'Photo selection + crop',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'photo',
    image: '/images/products/canvas.png',
    shopLabel: 'Shop Canvas',
  },
  {
    id: 'ornaments',
    name: 'Ornaments',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Custom ornaments featuring your cruise photos. Perfect for holiday memories.',
    personalizationType: 'photo',
    personalizationLabel: 'Photo selection',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
    image: '/images/products/ornament.png',
    shopLabel: 'Shop Ornaments',
  },
  {
    id: 'tshirts',
    name: 'T-Shirts',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Custom t-shirts featuring your cruise photos and designs.',
    personalizationType: 'graphic-text',
    personalizationLabel: 'Graphic / text',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'apparel',
    image: '/images/products/tshirt.png',
    shopLabel: 'Shop T-Shirts',
  },
  // Travel products (row 2 in Figma post-cruise homepage, also shown pre-cruise)
  {
    id: 'leather-luggage-tag',
    name: 'Leather Luggage Tag',
    price: 14.99,
    priceLabel: 'Starting from $14.99',
    description: 'Premium leather luggage tag personalized with your name or monogram. The perfect travel companion for your cruise adventure.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
    image: '/images/products/luggage-tag.png',
    shopLabel: 'Shop Calendar',
  },
  {
    id: 'leather-passport-holder',
    name: 'Leather Passport Holder',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Elegant leather passport holder with custom engraving. Keep your travel documents stylish and secure.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
    image: '/images/products/passport-holder.png',
    shopLabel: 'Shop Mugs',
  },
  {
    id: 'engraved-toiletry-bag',
    name: 'Engraved Toiletry Bag',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Spacious toiletry bag with custom engraving. Organize your essentials in style.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
    image: '/images/products/toiletry-bag.png',
    shopLabel: 'Shop Canvas',
  },
  {
    id: 'soft-leather-journal',
    name: 'Soft Leather Journal',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Beautifully crafted leather journal to capture your cruise memories. Personalized with your name.',
    personalizationType: 'monogram',
    personalizationLabel: 'Name / monogram',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'Teelaunch',
    category: 'travel',
    image: '/images/products/leather-journal.png',
    shopLabel: 'Shop Ornaments',
  },
  {
    id: 'softstyle-tshirt',
    name: 'Softstyle T-Shirt',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Comfortable softstyle t-shirt with custom graphic or text. Show your cruise spirit.',
    personalizationType: 'graphic-text',
    personalizationLabel: 'Graphic / text',
    availability: ['pre-cruise', 'post-cruise'],
    vendor: 'DPI',
    category: 'apparel',
    image: '/images/products/softstyle-tshirt.png',
    shopLabel: 'Shop T-Shirts',
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
