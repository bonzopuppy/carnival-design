import { Link } from 'react-router-dom'

const prototypeScreens = [
  {
    name: 'Splash / Sign In',
    description: 'Entry screen with sign-in and create account CTAs. Adapts copy based on entry point.',
    path: '/prototype/home',
  },
  {
    name: 'Homepage',
    description: 'Main landing after auth. Hero and content adapt to journey state and entitlements.',
    path: '/prototype/book/demo',
  },
  {
    name: 'Marketplace Grid',
    description: 'Product grid filtered by journey state. Pre-cruise, post-cruise, and empty states.',
    path: '/prototype/marketplace',
  },
  {
    name: 'Product Selection (PSP)',
    description: 'All variants of a product — colors, designs, iterations. Bridges marketplace to PDP.',
    path: '/prototype/marketplace/select/personalized-mug',
  },
  {
    name: 'Product Detail (PDP)',
    description: 'Product image, description, price, and personalization entry point.',
    path: '/prototype/marketplace/product/leather-luggage-tag',
  },
  {
    name: 'Personalization Editor',
    description: 'Shell editor with preview, text/photo inputs, and add-to-cart CTA.',
    path: '/prototype/editor/leather-luggage-tag',
  },
]

const useCaseFlows = [
  {
    id: 'UC7',
    name: 'Pre-Cruise',
    description: 'Set Journey to Pre-Cruise. Splash → Homepage → Marketplace → PDP → Editor.',
  },
  {
    id: 'UC8',
    name: 'In-Cruise',
    description: 'Set Journey to In-Cruise. Splash → Homepage → Marketplace (empty/TBD state).',
  },
  {
    id: 'UC9',
    name: 'Post-Cruise',
    description: 'Set Journey to Post-Cruise. Splash → Homepage → Marketplace → PSP → PDP → Editor.',
  },
  {
    id: 'UC2',
    name: 'Compact Book Entitlement',
    description: 'Set Entitlement to Compact Book. Homepage shows entitlement banner → book flow stub.',
  },
  {
    id: 'UC3',
    name: 'Calendar Entitlement',
    description: 'Set Entitlement to Calendar. Homepage shows calendar modal → calendar flow stub.',
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg font-body">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-end gap-3">
            <img src="/treering-logo.svg" alt="TreeRing" className="h-7 w-auto" />
            <span className="text-blackboard-50 text-base font-light select-none">|</span>
            <span className="font-tempo text-secondary-500 tracking-wider relative top-0" style={{ fontSize: 16 }}>Carnival Memories</span>
          </div>
          <Link
            to="/style-guide/intro"
            className="inline-flex items-center justify-center h-[36px] px-4 bg-secondary-500 text-white text-xs font-bold rounded-[2px] hover:bg-secondary-600 transition-colors"
          >
            Design System
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Prototype Section */}
        <section className="mb-12">
          <h2 className="font-tempo text-[24px] tracking-wider text-text mb-2">CARNIVAL MARKETPLACE V2</h2>
          <p className="text-sm text-text-secondary mb-6 max-w-2xl">
            Clickable flow explorer for design review. Use the prototype controls at the top to toggle journey state
            and entitlements. All screens reactively update based on selections.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prototypeScreens.map(screen => (
              <Link
                key={screen.path}
                to={screen.path}
                className="group block"
              >
                <div className="text-primary-500 font-bold text-sm group-hover:underline mb-0.5">
                  {screen.name}
                  {screen.path === '/prototype/home' && (
                    <span className="ml-2 inline-flex items-center bg-secondary-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Start here</span>
                  )}
                </div>
                <div className="text-xs text-text-muted leading-relaxed">{screen.description}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Use Case Flows */}
        <section className="mb-12">
          <h2 className="font-tempo text-[20px] tracking-wider text-text mb-2">USE CASE WALKTHROUGH</h2>
          <p className="text-sm text-text-secondary mb-4">
            Configure the prototype controls to match each scenario, then follow the happy path.
          </p>

          <div className="space-y-3">
            {useCaseFlows.map(flow => (
              <div key={flow.id} className="bg-white border border-border rounded-[2px] p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-50 text-primary-500 px-2 py-0.5 rounded-full">
                    {flow.id}
                  </span>
                  <span className="font-bold text-sm">{flow.name}</span>
                </div>
                <p className="text-xs text-text-muted">{flow.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Notes */}
        <section>
          <h2 className="font-tempo text-[20px] tracking-wider text-text mb-2">PROJECT NOTES</h2>
          <div className="bg-white border border-border rounded-[2px] p-4 text-sm text-text-secondary leading-relaxed">
            <p className="mb-2"><span className="font-bold text-text">Cart, Checkout, Order Confirmation, and Order History</span> are not included in this prototype — those pages are not changing as part of the Travel Marketplace project. They may be added in a future iteration if needed for end-to-end flow testing.</p>
            <p><span className="font-bold text-text">Product Selection Page (PSP)</span> only appears for products with multiple variations (colors, designs, shapes). If a product has only one variation, clicking it on the marketplace grid goes directly to the PDP.</p>
          </div>
        </section>
      </div>

      <footer className="border-t border-border mt-12">
        <div className="max-w-5xl mx-auto px-6 py-4 text-[11px] text-text-muted">
          Carnival Memories &copy; 2026
        </div>
      </footer>
    </div>
  )
}
