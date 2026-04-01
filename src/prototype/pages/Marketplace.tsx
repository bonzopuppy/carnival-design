import { usePrototype } from '../PrototypeContext'
import { getProductsByJourneyState } from '../data/products'
import ProductTile from '../components/ProductTile'

export default function Marketplace() {
  const { journeyState } = usePrototype()
  const products = getProductsByJourneyState(journeyState)

  const stateLabels: Record<string, string> = {
    none: 'Marketplace',
    'pre-cruise': 'Travel Essentials',
    'in-cruise': 'In-Cruise Services',
    'post-cruise': 'Keepsakes & Travel Products',
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Secondary nav-style header */}
      <div className="mb-6">
        <h1 className="font-tempo text-text uppercase mb-1" style={{ fontSize: 28 }}>
          {stateLabels[journeyState]}
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          {journeyState === 'pre-cruise' && 'Personalized travel products to get you ready for your cruise.'}
          {journeyState === 'post-cruise' && 'Turn your cruise memories into personalized keepsakes.'}
          {journeyState === 'in-cruise' && 'Services and products available during your voyage.'}
          {journeyState === 'none' && 'Browse our collection of personalized products.'}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty state — card with centered content */
        <div className="bg-card rounded-lg border border-border p-12 text-center">
          <img src="/icons/cruise-ship.svg" alt="" className="w-16 h-16 opacity-20 mx-auto mb-4" />
          {journeyState === 'in-cruise' ? (
            <>
              <h2 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 22 }}>Coming Soon</h2>
              <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                In-cruise marketplace products are being curated. Check back soon for exclusive onboard offerings.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 22 }}>No Products Available</h2>
              <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                Select a journey state using the controls above to see available products.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
