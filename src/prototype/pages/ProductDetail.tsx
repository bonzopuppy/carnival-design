import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import Button from '../components/Button'
import StatusBadge from '../components/StatusBadge'

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId || '')

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 24 }}>Product Not Found</h1>
        <Button variant="link" to="/prototype/marketplace">Back to Marketplace</Button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Back link — design system edit link style */}
      <button
        onClick={() => navigate(-1)}
        className="text-primary-500 font-bold uppercase text-xs tracking-wider border-b-[1.5px] border-primary-200 pb-0.5 mb-6 inline-flex items-center gap-1 hover:border-primary-500 transition-colors"
      >
        <img
          src="/icons/arrow-left.svg"
          alt=""
          className="w-4 h-4"
          style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
        />
        Back to Marketplace
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image — card pattern with rounded-lg */}
        <div className="bg-card rounded-lg border border-border aspect-square flex items-center justify-center">
          <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-24 h-24 opacity-20" />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 28 }}>{product.name}</h1>

          {/* Price — design system PriceTag pattern */}
          <div className="text-3xl font-bold text-primary-500 mb-1">
            {product.priceLabel || `$${product.price.toFixed(2)}`}
          </div>
          <p className="text-sm text-text-muted mb-4">
            {product.priceLabel ? '' : 'Free shipping on orders over $50'}
          </p>

          <p className="text-sm text-text-secondary mb-6 leading-relaxed">{product.description}</p>

          {/* Personalization type — Voyage Info Badge pattern */}
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-2 mb-6">
            <span className="font-semibold text-sm text-text">Personalization</span>
            <span className="text-black-25">&middot;</span>
            <span className="text-sm text-text-muted">{product.personalizationLabel}</span>
          </div>

          <div className="mb-6">
            <Button variant="cta" to={`/prototype/editor/${product.id}`} fullWidth>
              Personalize This
            </Button>
          </div>

          <div className="space-y-2">
            {/* Feature list pattern — circle check icon */}
            <div className="flex items-start gap-2.5">
              <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="9" fill="#0F559A"/>
                <path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-text">Made to order — ships in 5–7 business days</span>
            </div>
            <div className="flex items-start gap-2.5">
              <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="9" fill="#0F559A"/>
                <path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-text">Vendor: {product.vendor}</span>
            </div>
          </div>

          <div className="mt-4">
            <StatusBadge variant={product.availability.includes('pre-cruise') ? 'completed' : 'in-progress'}>
              {product.availability.includes('pre-cruise') ? 'Available Pre-Cruise' : 'Post-Cruise Only'}
            </StatusBadge>
          </div>
        </div>
      </div>
    </div>
  )
}
