import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProductById } from '../data/products'
import { usePrototype } from '../PrototypeContext'
import Button from '../components/Button'

export default function Editor() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addToCart } = usePrototype()
  const product = getProductById(productId || '')
  const [personalizationText, setPersonalizationText] = useState('')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="font-tempo text-text uppercase" style={{ fontSize: 24 }}>Product Not Found</h1>
      </div>
    )
  }

  const isMonogram = product.personalizationType === 'monogram'
  const isGraphicText = product.personalizationType === 'graphic-text'
  const isPhotoText = product.personalizationType === 'photo-text'
  const needsText = isMonogram || isGraphicText || isPhotoText
  const needsPhoto = !isMonogram

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      personalization: personalizationText || (needsPhoto ? 'Photo selected' : 'Default'),
      quantity: 1,
    })
    setAdded(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Back link — edit link style */}
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
        Back to Product
      </button>

      {/* Secondary nav title pattern */}
      <h1 className="font-tempo text-text uppercase mb-1" style={{ fontSize: 24 }}>
        Personalize Your {product.name}
      </h1>
      <p className="text-sm text-text-muted mb-6">
        Personalization type: {product.personalizationLabel}
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Preview Area — card pattern */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="bg-primary-200/20 aspect-[4/3] flex flex-col items-center justify-center p-6">
            <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-16 h-16 opacity-20 mb-3" />
            <span className="text-xs text-text-muted">Product Preview</span>
            {personalizationText && (
              <div className="mt-4 font-tempo text-primary-500 uppercase tracking-wider" style={{ fontSize: 20 }}>
                {personalizationText}
              </div>
            )}
          </div>
          {/* Cover page editable note — design system edit link */}
          <div className="px-4 py-2 border-t border-border text-xs flex items-center gap-2" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
            <img
              src="/icons/edit-pencil.svg"
              alt=""
              className="w-3.5 h-3.5"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
            />
            <span className="text-primary-500 font-bold uppercase text-xs tracking-wider">Cover page is editable</span>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-5">
          {needsText && (
            <div>
              <label className="block text-sm font-bold text-text mb-1.5">
                {isMonogram ? 'Name or Monogram' : 'Custom Text'}
              </label>
              <input
                type="text"
                value={personalizationText}
                onChange={(e) => setPersonalizationText(e.target.value)}
                placeholder={isMonogram ? 'e.g. J.S. or John Smith' : 'Enter your custom text'}
                className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors"
                maxLength={30}
              />
              <div className="text-xs text-text-muted mt-1">{personalizationText.length}/30 characters</div>
            </div>
          )}

          {needsPhoto && (
            <div>
              <label className="block text-sm font-bold text-text mb-1.5">Photo</label>
              {/* PhotoUploadZone pattern from design system */}
              <div className="border-2 border-dashed border-black-25 bg-card rounded-xl p-10 text-center transition-colors hover:border-primary-500 hover:bg-photo-upload-bg cursor-pointer">
                <img src="/icons/upload.svg" alt="" className="mx-auto mb-4 w-12 h-12 opacity-30" />
                <div className="font-tempo text-sm text-text tracking-wider mb-1">Upload a Photo</div>
                <div className="text-sm text-text-muted">or drag and drop here</div>
              </div>
            </div>
          )}

          {isPhotoText && (
            <div>
              <label className="block text-sm font-bold text-text mb-1.5">Caption Text</label>
              <input
                type="text"
                value={personalizationText}
                onChange={(e) => setPersonalizationText(e.target.value)}
                placeholder="Add a caption"
                className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors"
                maxLength={50}
              />
            </div>
          )}

          {/* Add to Cart */}
          {!added ? (
            <Button variant="cta" fullWidth onClick={handleAddToCart}>
              Add to Cart — ${product.price.toFixed(2)}
            </Button>
          ) : (
            <div className="space-y-3">
              {/* Banner message — success variant */}
              <div
                className="w-full text-white text-center flex items-center justify-center gap-2 px-4 rounded-[2px]"
                style={{ height: 50, backgroundColor: '#0f559a' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="white"/>
                  <path d="M5.5 9L8 11.5L12.5 7" stroke="#0F559A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-bold">Added to Cart</span>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm" onClick={() => navigate('/prototype/marketplace')} className="flex-1">
                  Continue Shopping
                </Button>
                <Button variant="primary" size="sm" disabled className="flex-1">
                  View Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
