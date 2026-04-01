import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProductById } from '../data/products'

export default function ProductSelection() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId || '')

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 28 }}>Product Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-primary-500 font-bold uppercase text-xs tracking-wider border-b-[1.5px] border-primary-200 pb-0.5 hover:border-primary-500 transition-colors"
        >
          Back to Marketplace
        </button>
      </div>
    )
  }

  const variants = product.variants || [
    { id: product.id, label: 'Standard', image: product.image },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-[1360px] mx-auto px-10 py-8">
        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary-500 font-bold uppercase text-xs tracking-wider border-b-[1.5px] border-primary-200 pb-0.5 mb-8 inline-flex items-center gap-1 hover:border-primary-500 transition-colors"
        >
          <img
            src="/icons/arrow-left.svg"
            alt=""
            className="w-4 h-4"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
          />
          Back to Marketplace
        </button>

        {/* Page heading */}
        <div className="text-center mb-8">
          <h1 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 36, lineHeight: 1.2 }}>
            {product.name}
          </h1>
          <p
            className="text-text-secondary max-w-lg mx-auto"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 16, lineHeight: 1.3 }}
          >
            {product.description}
          </p>
        </div>

        {/* Variant grid */}
        <div className="flex gap-[24px] flex-wrap justify-center">
          {variants.map(variant => (
            <Link
              key={variant.id}
              to={`/prototype/marketplace/product/${product.id}`}
              className="flex flex-col gap-[16px] items-start group"
              style={{ width: 253 }}
            >
              {/* Image */}
              <div className="bg-primary-50 h-[253px] overflow-hidden rounded-[4px] w-full flex items-center justify-center">
                {variant.image ? (
                  <img src={variant.image} alt={variant.label} className="max-w-none object-cover h-full" />
                ) : (
                  <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-16 h-16 opacity-20" />
                )}
              </div>

              {/* Label + color swatch */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="flex items-center gap-2">
                  {variant.color && (
                    <span
                      className="w-4 h-4 rounded-full border border-border shrink-0"
                      style={{ backgroundColor: variant.color }}
                    />
                  )}
                  <p className="font-tempo text-primary-500 uppercase" style={{ fontSize: 18, lineHeight: 1.2 }}>
                    {variant.label}
                  </p>
                </div>
                <p
                  className="text-text"
                  style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: 1.3 }}
                >
                  {product.priceLabel || `$${product.price.toFixed(2)}`}
                </p>
              </div>

              {/* CTA */}
              <div className="w-full border border-primary-500 rounded-[2px] flex items-center justify-center gap-[12px] px-[20px] py-[12px] group-hover:bg-primary-50 transition-colors">
                <span className="font-tempo text-primary-500 uppercase whitespace-nowrap" style={{ fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}>
                  Personalize
                </span>
                <img src="/images/arrow-forward.svg" alt="" className="w-[13px] h-[13px]" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
