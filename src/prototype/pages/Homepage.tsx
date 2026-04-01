import { Link } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'
import Button from '../components/Button'

function EntitlementBanner() {
  const { entitlement } = usePrototype()
  if (entitlement === 'none') return null

  const showBook = entitlement === 'compact-book' || entitlement === 'both'
  const showCalendar = entitlement === 'calendar' || entitlement === 'both'

  return (
    <div className="mb-6">
      {/* Banner message — design system info banner */}
      <div
        className="w-full text-white text-center flex items-center justify-center gap-4 px-4 mb-4 rounded-[2px]"
        style={{ height: 50, backgroundColor: '#0f559a', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.8)' }}
      >
        <span className="text-sm">You have included products available with your package!</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {showBook && (
          <Link
            to="/prototype/entitlement/book"
            className="flex-1 bg-card rounded-lg flex flex-col border border-border hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* BookCard-inspired layout */}
            <div className="px-6 pt-6">
              <div className="h-32 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <div className="w-16 h-24 bg-white rounded shadow-md flex items-center justify-center">
                  <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-8 h-8 opacity-20" />
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex flex-col flex-1">
              <h3 className="font-tempo text-primary-500 uppercase tracking-wide text-center mb-2" style={{ fontSize: 22 }}>
                Compact Photo Book
              </h3>
              <p className="text-sm text-text text-center mb-4">Included with your package</p>
              {/* Feature list pattern */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#0F559A"/>
                    <path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-text">20-page softcover book</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#0F559A"/>
                    <path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-text">Auto-populated with your cruise photos</span>
                </div>
              </div>
              {/* Full-width primary CTA — design system pattern */}
              <span className="w-full bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors inline-flex items-center justify-center mt-auto">
                Start Building
              </span>
            </div>
          </Link>
        )}
        {showCalendar && (
          <Link
            to="/prototype/entitlement/calendar"
            className="flex-1 bg-card rounded-lg flex flex-col border border-border hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="px-6 pt-6">
              <div className="h-32 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <div className="w-20 h-20 bg-white rounded shadow-md flex items-center justify-center">
                  <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-8 h-8 opacity-20" />
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex flex-col flex-1">
              <h3 className="font-tempo text-primary-500 uppercase tracking-wide text-center mb-2" style={{ fontSize: 22 }}>
                Wall Calendar
              </h3>
              <p className="text-sm text-text text-center mb-4">Included with your package</p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#0F559A"/>
                    <path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-text">12-month personalized calendar</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#0F559A"/>
                    <path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-text">Choose your own cruise photos</span>
                </div>
              </div>
              <span className="w-full bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors inline-flex items-center justify-center mt-auto">
                Start Building
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Homepage() {
  const { journeyState } = usePrototype()

  const heroContent: Record<string, { heading: string; sub: string; cta: string; ctaLabel: string }> = {
    none: {
      heading: 'CREATE YOUR PHOTO BOOK',
      sub: 'Turn your cruise photos into a beautiful keepsake you\'ll treasure forever.',
      cta: '/prototype/entitlement/book',
      ctaLabel: 'Start Your Book',
    },
    'pre-cruise': {
      heading: 'GET READY FOR YOUR CRUISE',
      sub: 'Shop personalized travel essentials and accessories before you set sail.',
      cta: '/prototype/marketplace',
      ctaLabel: 'Shop Travel Essentials',
    },
    'in-cruise': {
      heading: 'MAKE THE MOST OF YOUR VOYAGE',
      sub: 'Explore in-cruise services and start capturing memories.',
      cta: '/prototype/marketplace',
      ctaLabel: 'Explore Services',
    },
    'post-cruise': {
      heading: 'RELIVE YOUR MEMORIES',
      sub: 'Create personalized keepsakes, photo books, and more from your cruise photos.',
      cta: '/prototype/marketplace',
      ctaLabel: 'Shop Keepsakes',
    },
  }

  const { heading, sub, cta, ctaLabel } = heroContent[journeyState]

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Hero — Split Content pattern from design system */}
      <div className="rounded-xl overflow-hidden border border-border flex mb-6" style={{ minHeight: 340 }}>
        {/* Image panel */}
        <div className="w-1/2 bg-primary-200/20 flex items-center justify-center p-8 relative">
          <div className="w-48 h-56 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center transform -rotate-2">
            <span className="font-tempo text-primary-500 tracking-wider mb-2" style={{ fontSize: 10 }}>CARNIVAL</span>
            <div className="w-28 h-20 bg-primary-50 rounded mx-auto mb-2 flex items-center justify-center">
              <img src="/icons/cruise-ship.svg" alt="" className="w-10 h-10 opacity-20" />
            </div>
            <span className="font-tempo text-primary-200" style={{ fontSize: 8 }}>MEMORIES</span>
          </div>
        </div>
        {/* Content panel */}
        <div className="w-1/2 bg-primary-800 flex flex-col justify-center px-10 py-12">
          <h1 className="font-tempo text-white uppercase leading-tight mb-5" style={{ fontSize: 30 }}>
            {heading}
          </h1>
          <p className="text-primary-200 text-sm mb-8 max-w-sm leading-relaxed">{sub}</p>
          <Button variant="cta" to={cta}>
            {ctaLabel}
          </Button>
        </div>
      </div>

      {/* Entitlement Banner */}
      <EntitlementBanner />

      {/* Voyage Info + Marketplace Card */}
      {journeyState !== 'none' && (
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* Voyage Info Badge — design system pattern */}
          <div className="bg-card rounded-lg border border-border p-5">
            <div className="inline-flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-2 mb-3 w-full">
              <img
                src="/icons/cruise-ship.svg"
                alt=""
                className="w-5 h-5"
                style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
              />
              <span className="font-semibold text-sm text-text">Carnival Celebration</span>
              <span className="text-black-25">&middot;</span>
              <span className="text-sm text-text-muted">
                {journeyState === 'pre-cruise' && 'Apr 15–22, 2026'}
                {journeyState === 'in-cruise' && 'Day 3 of 7 — At Sea'}
                {journeyState === 'post-cruise' && 'Mar 10–17, 2026'}
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              {journeyState === 'pre-cruise' ? 'Your cruise departs from Miami in 15 days.' : journeyState === 'in-cruise' ? 'Enjoy your voyage!' : 'Welcome back from your Western Caribbean cruise.'}
            </p>
          </div>

          {/* Marketplace CTA card — uses ProductTile-style CTA */}
          <Link
            to="/prototype/marketplace"
            className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="font-tempo text-primary-500 uppercase mb-2" style={{ fontSize: 22 }}>
              Marketplace
            </h3>
            <p className="text-sm text-text mb-4 leading-relaxed flex-1">
              {journeyState === 'pre-cruise' ? 'Travel accessories & personalized essentials for your cruise.' : journeyState === 'in-cruise' ? 'In-cruise services and onboard products.' : 'Personalized keepsakes and travel products.'}
            </p>
            <span className="w-full inline-flex items-center justify-center gap-2 border border-primary-500 text-primary-500 font-tempo uppercase tracking-wider text-[16px] rounded-[2px] h-[44px] hover:bg-primary-50 transition-colors">
              Browse Products
              <img
                src="/icons/arrow-right.svg"
                alt=""
                className="w-4 h-4"
                style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
              />
            </span>
          </Link>
        </div>
      )}

      {/* Photo Book CTA */}
      {journeyState !== 'none' && (
        <div className="bg-card rounded-lg border border-border p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-tempo text-primary-500 uppercase mb-1" style={{ fontSize: 18 }}>Photo Book</h3>
              <p className="text-sm text-text">Create a custom photo book from your cruise memories.</p>
            </div>
            <Button variant="primary" size="sm" to="/prototype/entitlement/book" className="shrink-0 ml-4">
              Start Building
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
