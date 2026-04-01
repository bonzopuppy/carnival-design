export type PersonalizationType = 'monogram' | 'graphic-text' | 'photo' | 'photo-text' | 'photo-layout' | 'photo-size'

export interface ProductVariant {
  id: string
  label: string
  color?: string
  image?: string
}

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
  variants?: ProductVariant[]
}

export const products: Product[] = [
  // Post-cruise keepsake products (row 1 in Figma homepage)
  {
    id: 'wall-calendar',
    name: 'Calendar',
    price: 14.99,
    priceLabel: 'Starting from $14.99',
    description: 'Personalized wall calendar with your cruise photos for every month.',
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
    description: 'Custom mug featuring your cruise photos and personalized text.',
    personalizationType: 'photo-text',
    personalizationLabel: 'Photo + text',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
    image: '/images/products/mug.png',
    shopLabel: 'Shop Mugs',
    variants: [
      { id: 'mug-white', label: 'Classic White', color: '#FFFFFF', image: '/images/products/mug.png' },
      { id: 'mug-black', label: 'Matte Black', color: '#242627', image: '/images/products/mug.png' },
      { id: 'mug-blue', label: 'Ocean Blue', color: '#0F559A', image: '/images/products/mug.png' },
      { id: 'mug-red', label: 'Carnival Red', color: '#DC1225', image: '/images/products/mug.png' },
    ],
  },
  {
    id: 'canvas-print',
    name: 'Canvas',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Gallery-quality canvas print of your favorite cruise photo.',
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
    description: 'Custom ornaments with your cruise photos for holiday keepsakes.',
    personalizationType: 'photo',
    personalizationLabel: 'Photo selection',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'keepsake',
    image: '/images/products/ornament.png',
    shopLabel: 'Shop Ornaments',
    variants: [
      { id: 'ornament-round', label: 'Round', image: '/images/products/ornament.png' },
      { id: 'ornament-star', label: 'Star', image: '/images/products/ornament.png' },
      { id: 'ornament-heart', label: 'Heart', image: '/images/products/ornament.png' },
    ],
  },
  {
    id: 'tshirts',
    name: 'T-Shirts',
    price: 9.99,
    priceLabel: 'Starting from $9.99',
    description: 'Soft cotton t-shirt with your custom cruise graphic or text.',
    personalizationType: 'graphic-text',
    personalizationLabel: 'Graphic / text',
    availability: ['post-cruise'],
    vendor: 'DPI',
    category: 'apparel',
    image: '/images/products/tshirt.png',
    shopLabel: 'Shop T-Shirts',
    variants: [
      { id: 'tshirt-white', label: 'White', color: '#FFFFFF', image: '/images/products/tshirt.png' },
      { id: 'tshirt-navy', label: 'Navy', color: '#051A2E', image: '/images/products/tshirt.png' },
      { id: 'tshirt-heather', label: 'Heather Grey', color: '#A2A5A6', image: '/images/products/tshirt.png' },
      { id: 'tshirt-red', label: 'Red', color: '#DC1225', image: '/images/products/tshirt.png' },
    ],
  },
  // Travel products (row 2 in Figma post-cruise homepage, also shown pre-cruise)
  {
    id: 'leather-luggage-tag',
    name: 'Leather Luggage Tag',
    price: 14.99,
    priceLabel: 'Starting from $14.99',
    description: 'Premium leather luggage tag personalized with your name or monogram.',
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
    description: 'Elegant leather passport holder with custom engraving.',
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
    description: 'Spacious toiletry bag with custom engraving for your essentials.',
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
    description: 'Beautifully crafted leather journal personalized with your name.',
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
    description: 'Comfortable softstyle t-shirt with your custom cruise graphic.',
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
  if (state === 'pre-cruise' || state === 'in-cruise') {
    return products.filter(p => p.availability.includes('pre-cruise'))
  }
  if (state === 'post-cruise') {
    return products // post-cruise sees everything
  }
  return [] // none returns empty
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}
