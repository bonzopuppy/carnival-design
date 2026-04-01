import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

const pspProducts = new Set(['personalized-mug', 'tshirts', 'ornaments'])

export default function ProductTile({ product }: { product: Product }) {
  const dest = pspProducts.has(product.id) ? `/prototype/marketplace/select/${product.id}` : `/prototype/marketplace/product/${product.id}`
  return (
    <Link
      to={dest}
      className="bg-card flex flex-col group"
    >
      {/* Image */}
      <div className="w-full aspect-square bg-primary-50 rounded-lg flex items-center justify-center mb-4">
        <img
          src="/icons/marketplace-item-placeholder.svg"
          alt=""
          className="w-16 h-16 opacity-20 group-hover:opacity-30 transition-opacity"
        />
      </div>

      {/* Title */}
      <h3 className="font-tempo text-primary-500 uppercase mb-2" style={{ fontSize: 22 }}>
        {product.name}
      </h3>

      {/* Price */}
      <div className="text-sm font-bold text-text mb-2">
        {product.priceLabel ? (
          <><span className="text-text-muted font-normal">Starting at </span>{product.priceLabel}</>
        ) : (
          `$${product.price.toFixed(2)}`
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text mb-4 leading-relaxed line-clamp-2">{product.description}</p>

      {/* CTA — secondary button style with arrow */}
      <span className="w-full inline-flex items-center justify-center gap-2 border border-primary-500 text-primary-500 font-tempo uppercase tracking-wider text-[16px] rounded-[2px] h-[44px] hover:bg-primary-50 transition-colors mt-auto">
        Personalize
        <img
          src="/icons/arrow-right.svg"
          alt=""
          className="w-4 h-4"
          style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
        />
      </span>
    </Link>
  )
}
