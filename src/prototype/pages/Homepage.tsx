import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePrototype } from '../PrototypeContext'
import { getProductsByJourneyState, type Product } from '../data/products'
import Button from '../components/Button'
import CalendarModal from '../components/CalendarModal'

/* ── Entitlement Banner ────────────────────────────────── */

function EntitlementBanner() {
  const { entitlement } = usePrototype()
  if (entitlement === 'none') return null

  const showBook = entitlement === 'compact-book' || entitlement === 'both'
  const showCalendar = entitlement === 'calendar' || entitlement === 'both'

  return (
    <div className="mb-6">
      <div
        className="w-full text-white text-center flex items-center justify-center gap-4 px-4 mb-4 rounded-[2px]"
        style={{ height: 50, backgroundColor: '#0f559a', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.8)' }}
      >
        <span className="text-sm">You have included products available with your package!</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {showBook && (
          <Link to="/prototype/entitlement/book" className="flex-1 bg-card rounded-lg flex flex-col border border-border hover:shadow-md transition-shadow overflow-hidden">
            <div className="px-6 pt-6">
              <div className="h-32 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <div className="w-16 h-24 bg-white rounded shadow-md flex items-center justify-center">
                  <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-8 h-8 opacity-20" />
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex flex-col flex-1">
              <h3 className="font-tempo text-primary-500 uppercase tracking-wide text-center mb-2" style={{ fontSize: 22 }}>Compact Photo Book</h3>
              <p className="text-sm text-text text-center mb-4">Included with your package</p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#0F559A"/><path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm text-text">20-page softcover book</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#0F559A"/><path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm text-text">Auto-populated with your cruise photos</span>
                </div>
              </div>
              <span className="w-full bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors inline-flex items-center justify-center mt-auto">Start Building</span>
            </div>
          </Link>
        )}
        {showCalendar && (
          <Link to="/prototype/entitlement/calendar" className="flex-1 bg-card rounded-lg flex flex-col border border-border hover:shadow-md transition-shadow overflow-hidden">
            <div className="px-6 pt-6">
              <div className="h-32 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <div className="w-20 h-20 bg-white rounded shadow-md flex items-center justify-center">
                  <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-8 h-8 opacity-20" />
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex flex-col flex-1">
              <h3 className="font-tempo text-primary-500 uppercase tracking-wide text-center mb-2" style={{ fontSize: 22 }}>Wall Calendar</h3>
              <p className="text-sm text-text text-center mb-4">Included with your package</p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#0F559A"/><path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm text-text">12-month personalized calendar</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#0F559A"/><path d="M5.5 9L8 11.5L12.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm text-text">Choose your own cruise photos</span>
                </div>
              </div>
              <span className="w-full bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors inline-flex items-center justify-center mt-auto">Start Building</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

/* ── Product Card (matches Figma: 253px wide, image + name + price + secondary button) ── */

function HomepageProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/prototype/marketplace/select/${product.id}`}
      className="flex flex-col gap-[16px] items-start w-full group"
    >
      {/* Image container: bg-primary-50, rounded-[4px], 222px tall */}
      <div className="bg-primary-50 h-[222px] overflow-hidden rounded-[4px] w-full flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="max-w-none object-cover h-full" />
        ) : (
          <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-16 h-16 opacity-20" />
        )}
      </div>

      {/* Info: name + price + button */}
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex flex-col gap-[8px] items-start w-full">
          {/* Product name — TempoStd 18px, primary-500, uppercase */}
          <p className="font-tempo text-primary-500 uppercase w-full" style={{ fontSize: 18, lineHeight: 1.2 }}>
            {product.name}
          </p>
          {/* Price — Helvetica Neue Medium 14px, black */}
          <p className="text-[14px] text-text w-full" style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, lineHeight: 1.3 }}>
            {product.priceLabel || `$${product.price.toFixed(2)}`}
          </p>
        </div>

        {/* Secondary button — border primary-500, TempoStd 16px, tracking 0.64px, with arrow */}
        <div className="w-full border border-primary-500 rounded-[2px] flex items-center justify-center gap-[12px] px-[20px] py-[12px] group-hover:bg-primary-50 transition-colors">
          <span className="font-tempo text-primary-500 uppercase whitespace-nowrap" style={{ fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}>
            {product.shopLabel || 'Personalize'}
          </span>
          <img src="/images/arrow-forward.svg" alt="" className="w-[13px] h-[13px]" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }} />
        </div>
      </div>
    </Link>
  )
}

/* ── Post-Cruise Hero ─────────────────────────────────── */

function PostCruiseHero() {
  return (
    <div className="bg-primary-500 rounded-l-[4px] overflow-hidden relative" style={{ height: 600 }}>
      {/* Left: light blue panel with photobook */}
      <div className="absolute left-0 top-0 h-full overflow-hidden rounded-l-[4px]" style={{ width: 680, backgroundColor: '#c2daf1' }}>
        <img
          src="/images/hero/photobook-open.png"
          alt="Open photo book"
          className="absolute"
          style={{ left: 72, top: 144, width: 514, boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.25)' }}
        />
        {/* Video card */}
        <div className="absolute bg-white rounded-[4px] overflow-hidden flex" style={{ left: 16, top: 472, width: 258, height: 112 }}>
          <div className="relative rounded-[2px] overflow-hidden shrink-0" style={{ width: 128, height: 96, margin: 8 }}>
            <img src="/images/hero/video-thumbnail.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM25 16L11 8V24L25 16Z" fill="rgba(243,246,250,0.9)"/>
              </svg>
            </div>
          </div>
          <p className="font-tempo text-primary-700 uppercase" style={{ fontSize: 18, lineHeight: 1.2, padding: 12 }}>
            Watch your photobook create itself
          </p>
        </div>
      </div>

      {/* Right: text content + CTA */}
      <div className="absolute flex flex-col gap-[8px] items-start" style={{ left: 736, top: 56, width: 548 }}>
        <h1 className="font-tempo text-white uppercase" style={{ fontSize: 48, lineHeight: 1.2 }}>
          Turn your cruise photos into a beautiful keepsake
          <br />— Automatically
        </h1>
        <p className="text-primary-50 font-semibold" style={{ fontSize: 20, lineHeight: 1.3, maxWidth: 457 }}>
          Start your photobook and capture your Carnival cruise memories
        </p>
      </div>

      <div className="absolute flex items-center" style={{ left: 736, top: 500 }}>
        <Link
          to="/prototype/entitlement/book"
          className="inline-flex items-center justify-center gap-[12px] bg-secondary-500 text-primary-50 font-tempo uppercase rounded-[2px] px-[20px] py-[12px] hover:bg-secondary-600 transition-colors whitespace-nowrap"
          style={{ fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}
        >
          Start your photobook
          <svg width="13" height="13" viewBox="0 0 13.3333 13.3333" fill="none"><path d="M6.66667 0L5.49167 1.175L10.1417 5.83333H0V7.5H10.1417L5.49167 12.1583L6.66667 13.3333L13.3333 6.66667L6.66667 0Z" fill="#F3F6FA"/></svg>
        </Link>
      </div>
    </div>
  )
}

/* ── Generic Hero (pre-cruise, in-cruise, none) ───────── */

function GenericHero() {
  const { journeyState } = usePrototype()

  const heroContent: Record<string, { heading: string; sub: string; cta: string; ctaLabel: string; heroImage: string }> = {
    none: {
      heading: 'Create Your Photo Book',
      sub: 'Turn your cruise photos into a beautiful keepsake you\'ll treasure forever.',
      cta: '/prototype/entitlement/book',
      ctaLabel: 'Start Your Book',
      heroImage: '/images/hero-precruise.jpg',
    },
    'pre-cruise': {
      heading: 'Get Ready for Your Cruise',
      sub: 'Discover travel essentials and custom keepsakes, ready before you board.',
      cta: '/prototype/marketplace',
      ctaLabel: 'Shop Now',
      heroImage: '/images/hero-precruise.jpg',
    },
  }

  const content = heroContent[journeyState]
  if (!content) return null
  const { heading, sub, cta, ctaLabel, heroImage } = content

  return (
    <div className="bg-primary-500 rounded-[4px] overflow-hidden relative" style={{ height: 600 }}>
      <div className="absolute left-0 top-0 h-full overflow-hidden rounded-l-[4px]" style={{ width: '50%' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)' }} />
        <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="absolute flex flex-col gap-[8px] items-start" style={{ left: '54%', top: 56, width: 548 }}>
        <h1 className="font-tempo text-white uppercase" style={{ fontSize: 48, lineHeight: 1.2 }}>
          {heading}
        </h1>
        <p className="text-primary-50 font-semibold" style={{ fontSize: 20, lineHeight: 1.3, maxWidth: 457 }}>
          {sub}
        </p>
      </div>

      <div className="absolute flex items-center" style={{ left: '54%', top: 500 }}>
        <Link
          to={cta}
          className="inline-flex items-center justify-center gap-[12px] bg-secondary-500 text-primary-50 font-tempo uppercase rounded-[2px] px-[20px] py-[12px] hover:bg-secondary-600 transition-colors"
          style={{ width: 225, fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px' }}
        >
          {ctaLabel}
          <svg width="13" height="13" viewBox="0 0 13.3333 13.3333" fill="none"><path d="M6.66667 0L5.49167 1.175L10.1417 5.83333H0V7.5H10.1417L5.49167 12.1583L6.66667 13.3333L13.3333 6.66667L6.66667 0Z" fill="#F3F6FA"/></svg>
        </Link>
      </div>
    </div>
  )
}

/* ── Homepage ──────────────────────────────────────────── */

export default function Homepage() {
  const { journeyState, entitlement } = usePrototype()
  const products = getProductsByJourneyState(journeyState)
  const showPhotobookHero = journeyState === 'post-cruise' || journeyState === 'in-cruise'
  const hasCalendarEntitlement = entitlement === 'calendar' || entitlement === 'both'
  const [calendarModalOpen, setCalendarModalOpen] = useState(false)

  useEffect(() => {
    if (hasCalendarEntitlement) setCalendarModalOpen(true)
    else setCalendarModalOpen(false)
  }, [hasCalendarEntitlement, journeyState])

  // Section heading by journey state
  const sectionHeading: Record<string, string> = {
    none: 'Start with Travel Must-Haves',
    'pre-cruise': 'Start with Travel Must-Haves',
    'in-cruise': 'Make the Most of Every Moment',
    'post-cruise': 'Bring your Cruise memories Home',
  }

  return (
    <div className="bg-white">
      {/* Calendar entitlement modal */}
      <CalendarModal open={calendarModalOpen} onClose={() => setCalendarModalOpen(false)} />

      {/* Welcome title */}
      <div className="px-10 pt-12 pb-8 text-center">
        <h2 className="font-tempo text-secondary-500 uppercase" style={{ fontSize: 36, lineHeight: 1.2 }}>
          Welcome to Carnival Memories
        </h2>
      </div>

      {/* Hero Section — 1360px max, 40px side padding */}
      <div className="max-w-[1360px] mx-auto px-10">
        {showPhotobookHero ? <PostCruiseHero /> : <GenericHero />}
      </div>


      {/* Product Grid Section */}
      {products.length > 0 && (
        <div className="max-w-[1360px] mx-auto px-10 pt-12 pb-16">
          <div className="flex flex-col gap-[32px] items-center">
            {/* Section heading — TempoStd 36px, black, centered, uppercase */}
            <h2 className="font-tempo text-text uppercase text-center w-full" style={{ fontSize: 36, lineHeight: 1.2 }}>
              {sectionHeading[journeyState]}
            </h2>

            {/* Product grid — 5 columns, 24px gap; post-cruise shows 2 rows */}
            <div className="flex gap-[24px] items-start w-full">
              {products.slice(0, 5).map(product => (
                <div key={product.id} className="w-[253px] shrink-0">
                  <HomepageProductCard product={product} />
                </div>
              ))}
            </div>

            {journeyState === 'post-cruise' && products.length > 5 && (
              <div className="flex gap-[24px] items-start w-full">
                {products.slice(5, 10).map(product => (
                  <div key={product.id} className="w-[253px] shrink-0">
                    <HomepageProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}


    </div>
  )
}
