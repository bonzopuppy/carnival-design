import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProductById } from '../data/products'

// Color options per product type
const colorOptions: Record<string, { name: string; color: string }[]> = {
  'leather-luggage-tag': [
    { name: 'Brown', color: '#8B6914' },
    { name: 'Pink', color: '#E8A0A0' },
    { name: 'Light', color: '#C4B5A0' },
  ],
  'leather-passport-holder': [
    { name: 'Brown', color: '#8B6914' },
    { name: 'Pink', color: '#E8A0A0' },
    { name: 'Light', color: '#C4B5A0' },
  ],
  'engraved-toiletry-bag': [
    { name: 'Grey', color: '#6B6B4B' },
    { name: 'Pink', color: '#E8A0A0' },
    { name: 'Brown', color: '#C4B5A0' },
  ],
  'soft-leather-journal': [
    { name: 'Brown', color: '#8B6914' },
    { name: 'Pink', color: '#E8A0A0' },
    { name: 'Light', color: '#C4B5A0' },
  ],
  'softstyle-tshirt': [
    { name: 'White', color: '#FFFFFF' },
    { name: 'Black', color: '#242627' },
    { name: 'Light Blue', color: '#87CEEB' },
    { name: 'Navy', color: '#3B5998' },
    { name: 'Pink', color: '#FFB6C1' },
    { name: 'Red', color: '#DC1225' },
  ],
  'personalized-mug': [
    { name: 'White', color: '#FFFFFF' },
    { name: 'Black', color: '#242627' },
    { name: 'Light Blue', color: '#87CEEB' },
    { name: 'Navy', color: '#3B5998' },
    { name: 'Pink', color: '#FFB6C1' },
    { name: 'Red', color: '#DC1225' },
  ],
  ornaments: [],
  'wall-calendar': [],
  'canvas-print': [],
}

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId || '')
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="bg-white max-w-[1440px] mx-auto px-6 py-12 text-center">
        <h1 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 28 }}>Product Not Found</h1>
        <button onClick={() => navigate(-1)} className="font-tempo text-primary-500 uppercase text-sm">← Back</button>
      </div>
    )
  }

  const colors = colorOptions[product.id] || []
  const isCalendar = product.id === 'wall-calendar'
  const isMug = product.id === 'personalized-mug'
  const isCanvas = product.id === 'canvas-print'
  const isTshirt = product.id === 'softstyle-tshirt'
  const [selectedSize, setSelectedSize] = useState(1)
  const [selectedOrientation, setSelectedOrientation] = useState(1) // 0=landscape, 1=portrait
  const [selectedFit, setSelectedFit] = useState(1) // 0=Men, 1=Women, 2=Kids, 3=Unisex
  const subtotal = (product.price * quantity).toFixed(2)

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Top bar — "EDIT DESIGN" + "✕ CLOSE" */}
      <div
        className="flex items-center justify-between px-[26px] py-[24px] border-b"
        style={{ borderColor: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(60px)', height: 58 }}
      >
        <h1 className="font-tempo text-text uppercase text-center flex-1" style={{ fontSize: 28, lineHeight: 1.2 }}>
          Edit Design
        </h1>
        <button
          onClick={() => navigate('/prototype/marketplace')}
          className="absolute right-[26px] flex items-center gap-1.5"
        >
          <img src="/icons/x-black.svg" alt="" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }} />
          <span
            className="font-tempo text-primary-500 uppercase pb-1"
            style={{ fontSize: 18, letterSpacing: '0.72px', borderBottom: '1.5px solid #9ABDDE' }}
          >
            Close
          </span>
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Product image + thumbnails + description */}
        <div className="flex-1 flex flex-col items-center pt-8 px-10 relative">
          {/* Main image */}
          <div
            className="bg-primary-50 rounded-[8px] flex items-center justify-center overflow-hidden relative"
            style={{ width: 500, height: 500 }}
          >
            {isCalendar ? (
              <>
                <img src="/images/calendar-modal-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <img src="/images/calendar-modal-product.png" alt={product.name} className="relative z-10 max-h-[70%] object-contain" style={{ boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.2)' }} />
              </>
            ) : product.image ? (
              <img src={product.image} alt={product.name} className="max-w-[120%] max-h-[120%] object-contain" />
            ) : (
              <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-24 h-24 opacity-20" />
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-4 mt-6">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`w-[100px] h-[100px] rounded-[8px] overflow-hidden cursor-pointer ${
                  i === 0
                    ? 'border-2 border-primary-400 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_4px_20px_0px_rgba(0,0,0,0.15)]'
                    : 'border border-black/10'
                }`}
              >
                {product.image && i < 2 ? (
                  <div className="w-full h-full bg-primary-50">
                    <img src={product.image} alt="" className="w-full h-full object-contain p-2" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-white" />
                )}
              </div>
            ))}
          </div>

          {/* Description */}
          <p
            className="mt-8 max-w-[550px]"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, lineHeight: 1.3, color: '#242627' }}
          >
            {product.description}
          </p>
        </div>

        {/* Right: Config panel */}
        <div
          className="relative flex flex-col border-l"
          style={{ width: 450, borderColor: 'rgba(0,0,0,0.25)' }}
        >
          <div className="flex-1 overflow-y-auto px-6 pt-6">
            {/* Product name */}
            <h2
              className="font-tempo text-[#242627] uppercase mb-6"
              style={{ fontSize: 22, lineHeight: 1.1 }}
            >
              {product.name}
            </h2>

            {/* Size selector — mugs only */}
            {isMug && (
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                What size?
              </p>
              <div className="flex gap-2">
                {['11 oz.', '15 oz.'].map((size, i) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(i)}
                    className="flex items-center justify-center rounded-[2px] transition-colors"
                    style={{
                      width: 80,
                      height: 40,
                      border: i === selectedSize ? '2px solid #0F559A' : '1px solid rgba(0,0,0,0.15)',
                      fontFamily: "'HelveticaNeueRegular', sans-serif",
                      fontSize: 14,
                      fontWeight: i === selectedSize ? 700 : 400,
                      color: i === selectedSize ? '#0F559A' : '#242627',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            )}

            {/* T-shirt: who + size */}
            {isTshirt && (
            <>
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                Who is this for?
              </p>
              <div className="flex gap-2">
                {['Men', 'Women', 'Kids', 'Unisex'].map((fit, i) => (
                  <button
                    key={fit}
                    onClick={() => setSelectedFit(i)}
                    className="flex items-center justify-center rounded-[2px] transition-colors"
                    style={{
                      width: 80,
                      height: 40,
                      border: i === selectedFit ? '2px solid #242627' : '1px solid rgba(0,0,0,0.15)',
                      fontFamily: "'HelveticaNeueRegular', sans-serif",
                      fontSize: 14,
                      fontWeight: i === selectedFit ? 700 : 400,
                      color: '#242627',
                    }}
                  >
                    {fit}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                What size?
              </p>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(i)}
                    className="flex items-center justify-center rounded-[2px] transition-colors"
                    style={{
                      width: 48,
                      height: 40,
                      border: i === selectedSize ? '2px solid #242627' : '1px solid rgba(0,0,0,0.15)',
                      fontFamily: "'HelveticaNeueRegular', sans-serif",
                      fontSize: 14,
                      fontWeight: i === selectedSize ? 700 : 400,
                      color: '#242627',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            </>
            )}

            {/* Canvas size + orientation */}
            {isCanvas && (
            <>
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                What size?
              </p>
              <div className="flex gap-2">
                {['8x10', '11x14', '16x20'].map((size, i) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(i)}
                    className="flex items-center justify-center rounded-[2px] transition-colors"
                    style={{
                      width: 72,
                      height: 40,
                      border: i === selectedSize ? '2px solid #242627' : '1px solid rgba(0,0,0,0.15)',
                      fontFamily: "'HelveticaNeueRegular', sans-serif",
                      fontSize: 14,
                      fontWeight: i === selectedSize ? 700 : 400,
                      color: '#242627',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                Orientation
              </p>
              <div className="flex gap-2">
                {['Landscape', 'Portrait'].map((orient, i) => (
                  <button
                    key={orient}
                    onClick={() => setSelectedOrientation(i)}
                    className="flex items-center justify-center gap-2 rounded-[2px] transition-colors"
                    style={{
                      width: 130,
                      height: 40,
                      border: i === selectedOrientation ? '2px solid #242627' : '1px solid rgba(0,0,0,0.15)',
                      fontFamily: "'HelveticaNeueRegular', sans-serif",
                      fontSize: 14,
                      fontWeight: i === selectedOrientation ? 700 : 400,
                      color: '#242627',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      {i === 0 ? (
                        <rect x="1" y="3" width="14" height="10" rx="1" stroke="#242627" strokeWidth="1.5" fill="none"/>
                      ) : (
                        <rect x="3" y="1" width="10" height="14" rx="1" stroke="#242627" strokeWidth="1.5" fill="none"/>
                      )}
                    </svg>
                    {orient}
                  </button>
                ))}
              </div>
            </div>
            </>
            )}

            {/* Start date — calendar only */}
            {isCalendar && (
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                Choose your start date
              </p>
              <div className="relative inline-flex items-center border border-border-subtle rounded-[2px]" style={{ width: 220, height: 36 }}>
                <span className="pl-4 text-sm" style={{ color: '#737373', fontFamily: "'HelveticaNeueRegular', sans-serif" }}>Month / Year</span>
                <div className="absolute flex items-center justify-center" style={{ right: 0, top: 8, bottom: 8, width: 33 }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, backgroundColor: '#c4c4c4' }} />
                  <svg width="8" height="4" viewBox="0 0 8 5" fill="none" className="ml-1">
                    <path d="M1 1L4 4L7 1" stroke="#242627" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <select className="absolute inset-0 opacity-0 cursor-pointer">
                  <option>Month / Year</option>
                  <option>January 2026</option>
                  <option>February 2026</option>
                  <option>March 2026</option>
                  <option>April 2026</option>
                  <option>May 2026</option>
                  <option>June 2026</option>
                </select>
              </div>
            </div>
            )}

            {/* Color picker — hidden if no colors */}
            {colors.length > 0 && (
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                Choose your color
              </p>
              <div className="flex flex-wrap gap-2">
                {colors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(i)}
                    className="flex flex-col items-center gap-2"
                    style={{ width: 56 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${i === selectedColor ? 'ring-2 ring-primary-400 ring-offset-2' : ''}`}
                      style={{ backgroundColor: c.color, border: c.color === '#FFFFFF' ? '2px solid #242627' : '1px solid rgba(0,0,0,0.1)' }}
                    />
                    <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 12, fontWeight: 500, color: '#737373', lineHeight: '18px' }}>
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p
                className="mb-4"
                style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}
              >
                Quantity
              </p>
              {/* Minus / number / plus stepper */}
              <div className="inline-flex items-center border border-border-subtle rounded-[2px]" style={{ height: 40 }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex items-center justify-center hover:bg-primary-50 transition-colors"
                  style={{ width: 40, height: 40, borderRight: '1px solid rgba(0,0,0,0.15)' }}
                >
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><path d="M0 1H12" stroke="#242627" strokeWidth="1.5"/></svg>
                </button>
                <span
                  className="flex items-center justify-center"
                  style={{ width: 40, height: 40, fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, color: '#242627' }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="flex items-center justify-center hover:bg-primary-50 transition-colors"
                  style={{ width: 40, height: 40, borderLeft: '1px solid rgba(0,0,0,0.15)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 0V12M0 6H12" stroke="#242627" strokeWidth="1.5"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom: subtotal + CTA — fixed to bottom */}
          <div className="px-4 pb-4 mt-auto shrink-0">
            <div className="flex justify-between px-2 mb-4">
              <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}>
                Subtotal:
              </span>
              <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}>
                ${subtotal}
              </span>
            </div>
            <div className="border-t border-black/10 pt-4">
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => navigate(`/prototype/editor/${product.id}`)}
                className="inline-flex items-center justify-center gap-3 bg-primary-500 text-white font-tempo uppercase rounded-[2px] px-5 py-3 hover:bg-primary-400 transition-colors"
                style={{ width: 180, fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}
              >
                Personalize
                <svg width="13" height="13" viewBox="0 0 13.3333 13.3333" fill="none">
                  <path d="M6.66667 0L5.49167 1.175L10.1417 5.83333H0V7.5H10.1417L5.49167 12.1583L6.66667 13.3333L13.3333 6.66667L6.66667 0Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
