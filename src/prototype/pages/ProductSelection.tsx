import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProductById } from '../data/products'

const pspTitles: Record<string, string> = {
  'personalized-mug': 'Choose Your Mug',
  tshirts: 'Choose Your T-Shirt',
  ornaments: 'Choose Your Ornament',
}

const pspSubtitles: Record<string, string> = {
  'personalized-mug': 'Select from curated designs and themes, personalize it to match your story, and choose from a variety of colors to make it truly yours.',
  tshirts: 'Pick a design that captures your cruise vibe, then personalize it with your own text and photos.',
  ornaments: 'Choose a keepsake ornament design and personalize it with your cruise photos and details.',
}

export default function ProductSelection() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId || '')

  if (!product) {
    return (
      <div className="bg-white max-w-[1210px] mx-auto px-6 py-12 text-center">
        <h1 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 28 }}>Product Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="font-tempo text-primary-500 uppercase text-sm"
        >
          ← Back
        </button>
      </div>
    )
  }

  const variants = product.variants || [
    { id: product.id, label: product.name, image: product.image },
  ]

  const title = pspTitles[product.id] || `Choose Your ${product.name}`
  const subtitle = pspSubtitles[product.id] || 'Select a design to personalize.'

  return (
    <div className="bg-white">
      <div className="max-w-[1210px] mx-auto px-6 py-6">
        {/* Header: back + centered title + subtitle */}
        <div className="relative mb-8">
          {/* Back link */}
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

          {/* Title */}
          <h1
            className="font-tempo text-text uppercase text-center"
            style={{ fontSize: 28, lineHeight: 1.2 }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-center mt-2 mx-auto"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, lineHeight: 1.3, color: 'rgba(0,0,0,0.7)', maxWidth: 600 }}
          >
            {subtitle}
          </p>
        </div>

        {/* Design variant grid — 4 columns, matching marketplace layout */}
        <div
          className="grid justify-center"
          style={{ gridTemplateColumns: 'repeat(4, 287px)', gap: '32px 20px' }}
        >
          {variants.map(variant => (
            <Link
              key={variant.id}
              to={`/prototype/marketplace/product/${product.id}`}
              className="flex flex-col gap-[16px] items-start group"
            >
              {/* Image */}
              <div className="h-[287px] overflow-hidden relative shrink-0 w-full bg-primary-50 flex items-center justify-center">
                {variant.image ? (
                  <img src={variant.image} alt={variant.label} className="max-w-[85%] max-h-[85%] object-contain" />
                ) : (
                  <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-16 h-16 opacity-20" />
                )}
              </div>

              {/* Name + price */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="font-tempo text-primary-500 uppercase w-full" style={{ fontSize: 18, lineHeight: 1.2 }}>
                  {variant.label}
                </p>
                <p
                  className="text-text w-full"
                  style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: 1.3 }}
                >
                  Starting from ${product.price.toFixed(2)}
                </p>
              </div>

              {/* SELECT button — filled primary blue */}
              <div
                className="w-full bg-primary-500 rounded-[2px] flex items-center justify-center px-[20px] py-[12px] group-hover:bg-primary-400 transition-colors"
              >
                <span
                  className="font-tempo text-white uppercase whitespace-nowrap"
                  style={{ fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}
                >
                  Select
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
