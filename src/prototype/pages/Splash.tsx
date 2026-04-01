import { Link } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'
import EntitlementSplash from './EntitlementSplash'

export default function Splash() {
  const { entryPoint, entitlement, journeyState } = usePrototype()

  if (entitlement !== 'none' && journeyState !== 'pre-cruise') {
    return <EntitlementSplash />
  }

  const isPostOrInCruise = journeyState === 'in-cruise' || journeyState === 'post-cruise'

  if (isPostOrInCruise) {
    return <PostCruiseSplash />
  }

  const headlines: Record<string, { heading: string; sub: string; cta: string }> = {
    direct: {
      heading: "LET'S GET YOU READY TO SAIL",
      sub: 'Discover travel essentials personalized for your Carnival cruise — packed and ready before you board.',
      cta: 'Shop Before You Sail',
    },
    'pre-cruise-email': {
      heading: "LET'S GET YOU READY TO SAIL",
      sub: 'Discover travel essentials personalized for your Carnival cruise — packed and ready before you board.',
      cta: 'Shop Before You Sail',
    },
    'post-cruise-email': {
      heading: 'YOUR MEMORIES ARE READY',
      sub: 'Turn your cruise photos into personalized keepsakes.',
      cta: 'Shop Keepsakes',
    },
  }

  const { heading, sub, cta } = headlines[entryPoint]

  return (
    <div className="relative min-h-full flex flex-col">
      {/* Background photo + blue overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/splash-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(15,85,154,0.5) 0%, rgba(15,85,154,0.5) 100%), linear-gradient(180deg, rgba(15,85,154,0.8) 0%, rgba(15,85,154,0) 100%)',
          }}
        />
      </div>

      {/* Inner frame with semi-transparent white border */}
      <div className="relative z-10 flex-1 flex flex-col m-6 border-[8px] border-white/50 rounded-sm">
        {/* Logo */}
        <div className="flex justify-center pt-10">
          <img src="/logo.svg" alt="Carnival" className="h-7 w-auto" />
        </div>

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-[1076px] w-full flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-2 w-full">
              <h1
                className="font-tempo text-white uppercase w-full"
                style={{ fontSize: 80, lineHeight: 1.1 }}
              >
                {heading}
              </h1>
              <p
                className="text-white w-full"
                style={{
                  fontFamily: 'HelveticaNeueRegular, sans-serif',
                  fontSize: 18,
                  lineHeight: 1.4,
                  textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                }}
              >
                {sub}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              {/* CTA button */}
              <Link
                to="/prototype/book/demo"
                className="inline-flex items-center justify-center gap-3 font-tempo uppercase text-white text-[16px] leading-[1.5] bg-secondary-500 h-[52px] px-5 rounded-[2px] hover:bg-secondary-600 active:bg-secondary-700 transition-colors"
              >
                {cta}
                <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
              </Link>

              {/* Login link */}
              <p className="text-white text-[14px] leading-[1.3]" style={{ fontFamily: 'HelveticaNeueRegular, sans-serif' }}>
                Already have an account?{' '}
                <Link to="/prototype/book/demo" className="font-bold underline">
                  LOG IN
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center px-6 pb-3 -mt-3 text-white/70 text-[10px]" style={{ fontFamily: 'HelveticaNeueRegular, sans-serif' }}>
        <span>Legal Notices・Privacy &amp; Cookies</span>
        <span>© 2026 Treering Corporation &amp; Carnival Corporation</span>
      </div>
    </div>
  )
}

/* ── In/Post-Cruise Splash (no entitlement) ──────────── */

function PostCruiseSplash() {
  return (
    <div className="relative min-h-full flex flex-col">
      {/* Background photo + blue overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/images/postcruise-splash-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center bottom' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(15,85,154,0.3) 0%, rgba(15,85,154,0.3) 100%), linear-gradient(180deg, rgba(15,85,154,0.8) 6%, rgba(111,93,89,0) 57%)',
          }}
        />
      </div>

      {/* Inner frame with semi-transparent white border */}
      <div className="relative z-10 flex-1 flex flex-col m-6 border-[8px] border-white/50 rounded-sm">
        {/* Logo */}
        <div className="flex justify-center pt-10">
          <img src="/logo.svg" alt="Carnival" className="h-7 w-auto" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-start text-center px-6 pt-10">
          {/* Heading + subtitle */}
          <div className="max-w-[1076px] w-full flex flex-col items-center gap-2 mb-10">
            <h1
              className="font-tempo text-white uppercase w-full whitespace-nowrap"
              style={{ fontSize: 80, lineHeight: 1.1 }}
            >
              Capture Your Carnival Experience
            </h1>
            <p
              className="text-white w-full"
              style={{
                fontFamily: 'HelveticaNeueRegular, sans-serif',
                fontSize: 18,
                lineHeight: 1.4,
                textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
              }}
            >
              Start Your Free Book – Just Pay Shipping.
            </p>
          </div>

          {/* CTA + Login */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <Link
              to="/prototype/book/demo"
              className="inline-flex items-center justify-center gap-3 font-tempo uppercase text-white text-[16px] leading-[1.5] bg-secondary-500 h-[52px] px-5 rounded-[2px] hover:bg-secondary-600 active:bg-secondary-700 transition-colors"
            >
              Get Started
              <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
            </Link>
            <p className="text-white text-[14px] leading-[1.3]" style={{ fontFamily: 'HelveticaNeueRegular, sans-serif' }}>
              Already have an account?{' '}
              <Link to="/prototype/book/demo" className="font-bold underline">
                LOG IN
              </Link>
            </p>
          </div>

          {/* Video thumbnail */}
          <div className="max-w-[622px] w-full">
            <div className="relative rounded-[16px] border-4 border-white/50 overflow-hidden cursor-pointer group aspect-[622/350]">
              <img
                src="/images/video-thumbnail.png"
                alt="Watch photobook creation"
                className="absolute object-cover"
                style={{ top: '50%', left: '50%', width: '130%', height: '130%', transform: 'translate(-50%, -50%)' }}
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#09335C">
                    <polygon points="8,5 20,12 8,19" />
                  </svg>
                </div>
                <span
                  className="text-white"
                  style={{
                    fontFamily: 'HelveticaNeueRegular, sans-serif',
                    fontSize: 16,
                    textShadow: '0px 4px 20px rgba(0,0,0,0.25)',
                  }}
                >
                  Watch your photobook create itself
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-center px-6 pb-3 -mt-3 text-white/70 text-[10px]" style={{ fontFamily: 'HelveticaNeueRegular, sans-serif' }}>
        <span>Legal Notices・Privacy &amp; Cookies</span>
        <span>© 2026 Treering Corporation &amp; Carnival Corporation</span>
      </div>
    </div>
  )
}
