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
    description: 'Turn your photos into a year of memories with a personalized calendar.',
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
      { id: 'mug-1photo', label: 'Our Family Cruise 1 Photo Mug', image: '/images/mugs/mug-01-wheel.png' },
      { id: 'mug-lineart', label: 'Our Family Cruise Lineart Mug', image: '/images/mugs/mug-02-lineart.png' },
      { id: 'mug-wheel', label: 'Our Family Cruise Wheel Mug', image: '/images/mugs/mug-03-icons.png' },
      { id: 'mug-icons', label: 'Our Family Cruise Icons Mug', image: '/images/mugs/mug-04-3photo.png' },
      { id: 'mug-3photo', label: 'Our Family Cruise 3 Photo Mug', image: '/images/mugs/mug-05-lineart2.png' },
      { id: 'mug-sippin', label: "Sippin' & Shippin Logo Mug", image: '/images/mugs/mug-06-sippin.png' },
      { id: 'mug-squad', label: 'Cruise Squad 3 Photo Mug', image: '/images/mugs/mug-07-squad.png' },
      { id: 'mug-1photo-b', label: '1 Photo Mug', image: '/images/mugs/mug-08-1photo.png' },
      { id: 'mug-2photo', label: '2 Photo Mug', image: '/images/mugs/mug-09-2photo.png' },
      { id: 'mug-3photo-b', label: '3 Photo Mug', image: '/images/mugs/mug-10-3photo.png' },
      { id: 'mug-shipfaced', label: 'Too Ship Faced for Decaf Mug', image: '/images/mugs/mug-11-shipfaced.png' },
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
      { id: 'ornament-cruise-ship', label: 'Cruise Ship Ornament', image: '/images/products/ornament.png' },
      { id: 'ornament-porthole', label: 'Porthole Photo Ornament', image: '/images/products/ornament.png' },
      { id: 'ornament-anchor', label: 'Anchor Ornament', image: '/images/products/ornament.png' },
      { id: 'ornament-family', label: 'Family Cruise Ornament', image: '/images/products/ornament.png' },
      { id: 'ornament-wave', label: 'Wave Design Ornament', image: '/images/products/ornament.png' },
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
