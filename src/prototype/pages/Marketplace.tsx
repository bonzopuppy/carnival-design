import { Link, useNavigate } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'
import { getProductsByJourneyState, type Product } from '../data/products'

function MarketplaceCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/prototype/marketplace/select/${product.id}`}
      className="flex flex-col gap-[20px] items-start group"
      style={{ width: 287 }}
    >
      {/* Image — square, bg primary-50 */}
      <div className="h-[287px] overflow-hidden relative shrink-0 w-full">
        <div className="absolute inset-0 bg-primary-50" />
        {product.image ? (
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-16 h-16 opacity-20" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-[20px] items-start w-full">
        <div className="flex flex-col gap-[8px] items-start w-full">
          {/* Name — TempoStd 22px, primary-500, uppercase */}
          <p className="font-tempo text-primary-500 uppercase w-full" style={{ fontSize: 22, lineHeight: 1.1 }}>
            {product.name}
          </p>
          {/* Price — Helvetica Neue Medium 14px, black */}
          <p
            className="text-text w-full"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: 1.3 }}
          >
            {product.priceLabel || `$${product.price.toFixed(2)}`}
          </p>
          {/* Description — Helvetica Neue Regular 14px, black/70, fixed 2-line height */}
          <p
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, lineHeight: 1.3, color: 'rgba(0,0,0,0.7)', maxWidth: 271, minHeight: 36, marginBottom: 4 }}
          >
            {product.description}
          </p>
        </div>

        {/* CTA — secondary button: "SHOP [NAME]" */}
        <div className="w-full border border-primary-500 rounded-[2px] flex items-center justify-center gap-[12px] px-[20px] py-[12px] group-hover:bg-primary-50 transition-colors">
          <span
            className="font-tempo text-primary-500 uppercase whitespace-nowrap"
            style={{ fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}
          >
            Shop {product.name}
          </span>
          <img
            src="/images/arrow-forward.svg"
            alt=""
            className="w-[13px] h-[13px]"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
          />
        </div>
      </div>
    </Link>
  )
}

export default function Marketplace() {
  const { journeyState } = usePrototype()
  const navigate = useNavigate()
  const products = getProductsByJourneyState(journeyState)

  return (
    <div className="bg-white">
      <div className="max-w-[1210px] mx-auto px-6 py-6">
        {/* Header: back link + centered title + subtitle */}
        <div className="relative mb-8">
          {/* Back link — top left */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1 flex items-center gap-1"
          >
            <img
              src="/icons/arrow-left.svg"
              alt=""
              className="w-5 h-5"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
            />
            <span className="font-tempo text-primary-500 uppercase" style={{ fontSize: 16 }}>Back</span>
          </button>

          {/* Title — centered */}
          <h1
            className="font-tempo text-primary-500 uppercase text-center"
            style={{ fontSize: 28, lineHeight: 1.2 }}
          >
            The Carnival Marketplace
          </h1>

          {/* Subtitle */}
          <p
            className="text-center mt-2"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, lineHeight: 1.3, color: 'rgba(0,0,0,0.7)' }}
          >
            Made just for you. Capture the spirit of your Carnival cruise with custom merchandise.
          </p>
        </div>

        {/* Product grid — 4 columns, 20px gap, 32px row gap */}
        {products.length > 0 ? (
          <div
            className="grid justify-center"
            style={{ gridTemplateColumns: 'repeat(4, 287px)', gap: '32px 20px' }}
          >
            {products.map(product => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-primary-50 rounded-[4px] p-12 text-center">
            <img src="/icons/cruise-ship.svg" alt="" className="w-16 h-16 opacity-20 mx-auto mb-4" />
            {journeyState === 'in-cruise' ? (
              <>
                <h2 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 22 }}>Coming Soon</h2>
                <p style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, lineHeight: 1.3, color: 'rgba(0,0,0,0.7)' }}>
                  In-cruise marketplace products are being curated. Check back soon for exclusive onboard offerings.
                </p>
              </>
            ) : (
              <>
                <h2 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 22 }}>No Products Available</h2>
                <p style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, lineHeight: 1.3, color: 'rgba(0,0,0,0.7)' }}>
                  Select a journey state using the controls above to see available products.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
