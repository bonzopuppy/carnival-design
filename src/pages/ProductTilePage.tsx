import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function ProductTile({
  name,
  price,
  description,
  actionText = 'SHOP NOW',
}: {
  name: string
  price: string
  description: string
  actionText?: string
}) {
  return (
    <div className="bg-card flex flex-col">
      {/* Product image */}
      <div className="w-full aspect-square bg-primary-50 rounded-lg flex items-center justify-center mb-4">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-black-25">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Title — headline-m */}
      <h2 className="font-tempo text-primary-500 uppercase mb-2" style={{ fontSize: '22px' }}>{name}</h2>

      {/* Price — body-s bold */}
      <div className="text-sm font-bold text-text mb-2">Starting at {price}</div>

      {/* Description — body-s regular */}
      <p className="text-sm text-text mb-4 leading-relaxed">{description}</p>

      {/* CTA — SECONDARY button with arrow */}
      <button className="w-full inline-flex items-center justify-center gap-2 border border-primary-500 text-primary-500 font-tempo uppercase tracking-wider text-[16px] rounded-[2px] h-[44px] hover:bg-primary-50 transition-colors mt-auto">
        {actionText}
        <img src="/icons/arrow-right.svg" alt="" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }} />
      </button>
    </div>
  )
}

export default function ProductTilePage() {
  return (
    <PageLayout
      title="PRODUCT TILE"
      subtitle="Marketplace product cards from personal-marketplace-homepage. Title uses headline-m ($primary-500), price uses body-s bold, CTA uses SECONDARY button style with arrow-right icon."
    >
      <ShowcaseSection title="Default">
        <div className="max-w-[280px]">
        <ProductTile
          name="Canvas Print"
          price="$24.99"
          description="Turn your favorite cruise photo into a stunning canvas print. Available in multiple sizes."
        />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Grid Layout">
        <div className="grid grid-cols-2 gap-6">
          <ProductTile
            name="Canvas Print"
            price="$24.99"
            description="Turn your favorite cruise photo into a stunning canvas print."
          />
          <ProductTile
            name="Photo Mug"
            price="$14.99"
            description="Custom ceramic mug with your cruise photos. Dishwasher safe."
          />
          <ProductTile
            name="Puzzle"
            price="$29.99"
            description="500-piece custom jigsaw puzzle featuring your favorite memory."
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Product Tile Tokens Reference">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">component:</span> personal-marketplace-homepage</div>
          <div><span className="text-text-muted">title:</span> .headline-m — TempoStd, 22px, uppercase, $primary-500</div>
          <div><span className="text-text-muted">price:</span> .body-s .bold — "Starting at $X.XX" with localeCurrency</div>
          <div><span className="text-text-muted">description:</span> .body-s .regular — 14px, normal weight</div>
          <div><span className="text-text-muted">CTA button:</span> SECONDARY style — border $primary-500, text $primary-500, 44px height</div>
          <div><span className="text-text-muted">CTA icon:</span> arrow-right.svg, 24x24, filtered to branding blue</div>
          <div><span className="text-text-muted">image:</span> full-width product image from CDN</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
