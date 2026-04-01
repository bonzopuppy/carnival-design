import { Link } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'

export default function EntitlementSplash() {
  const { entitlement } = usePrototype()
  const isBook = entitlement === 'compact-book' || entitlement === 'both'

  return (
    <div>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#0C447B' }}
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/entitlement-hero-bg.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center bottom' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(9, 51, 92, 0.6)' }} />
        </div>

        {/* Logo */}
        <div className="relative z-10 flex justify-center pt-8">
          <img src="/logo.svg" alt="Carnival" className="h-7 w-auto" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-28 px-6">
          {/* Headline */}
          <div className="max-w-[763px] w-full text-center mb-8">
            <h1
              className="font-tempo text-white uppercase"
              style={{ fontSize: 80, lineHeight: 1.1 }}
            >
              Claim Your Free Gift
            </h1>
            <p
              className="text-white mt-2 mx-auto max-w-[650px]"
              style={{
                fontFamily: 'HelveticaNeueRegular, sans-serif',
                fontSize: 16,
                lineHeight: 1.5,
              }}
            >
              Your digital photo package includes a complimentary Carnival Memories keepsake.
              Create your free account to redeem it.
            </p>
          </div>

          {/* CTA + Login */}
          <div className="flex flex-col items-center gap-3 mb-16">
            <Link
              to="/prototype/book/demo"
              className="inline-flex items-center justify-center gap-3 font-tempo uppercase text-white text-[16px] leading-[1.5] bg-secondary-500 h-[52px] px-8 rounded-[2px] hover:bg-secondary-600 active:bg-secondary-700 transition-colors"
            >
              Create My Account
              <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
            </Link>
            <p
              className="text-white text-[14px] leading-[1.3]"
              style={{ fontFamily: 'HelveticaNeueRegular, sans-serif' }}
            >
              Already have an account?{' '}
              <Link to="/prototype/book/demo" className="font-bold underline">
                LOG IN
              </Link>
            </p>
          </div>

          {/* Floating product images — matching Figma layout */}
          <div className="flex items-center justify-center mb-8" style={{ gap: 0 }}>
            {/* Left: Blanket/Mug — rotated -8deg */}
            <div
              className="w-[156px] h-[156px] rounded-[16px] border-[6px] border-white overflow-hidden flex-shrink-0"
              style={{
                transform: 'rotate(-8deg)',
                boxShadow: '0px 6px 18px rgba(0,0,0,0.16)',
                marginRight: -20,
                zIndex: 1,
              }}
            >
              <img
                src="/images/entitlement-mug.png"
                alt="Personalized Mug"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center: Book cover — elevated, blue bg */}
            <div
              className="w-[156px] h-[156px] rounded-[16px] border-[6px] border-white overflow-hidden flex-shrink-0 flex items-center justify-center"
              style={{
                backgroundColor: '#c2daf1',
                boxShadow: '0px 12px 24px rgba(0,0,0,0.24)',
                zIndex: 3,
              }}
            >
              <img
                src="/images/entitlement-book-cover.png"
                alt={isBook ? 'Photo Book' : 'Calendar'}
                className="max-w-[85%] max-h-[85%] object-contain"
                style={{ marginLeft: 14, marginTop: 14 }}
              />
            </div>

            {/* Right: Canvas — rotated 8deg */}
            <div
              className="w-[156px] h-[156px] rounded-[16px] border-[6px] border-white overflow-hidden flex-shrink-0"
              style={{
                transform: 'rotate(8deg)',
                boxShadow: '0px 6px 18px rgba(0,0,0,0.16)',
                marginLeft: -20,
                zIndex: 2,
                backgroundColor: '#f3f6fa',
              }}
            >
              <img
                src="/images/entitlement-canvas.png"
                alt="Canvas Print"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tagline */}
          <h2
            className="font-tempo text-white uppercase text-center max-w-[696px] mx-auto"
            style={{ fontSize: 24, lineHeight: 1.3 }}
          >
            Turn your cruise photos into beautiful photobooks, souvenirs, and more
          </h2>

          {/* See how it works */}
          <a
            href="#how-it-works"
            className="flex flex-col items-center gap-1 mt-6 mb-10 text-white"
            style={{ fontFamily: 'HelveticaNeueRegular, sans-serif', fontSize: 14 }}
          >
            <span>See how it works</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Three Easy Steps Section ─────────────────────── */}
      <section id="how-it-works" className="py-20 px-6" style={{ backgroundColor: '#C2DAF1' }}>
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="/icons/support-24.svg" alt="" className="w-6 h-6" />
          <span
            className="font-tempo uppercase"
            style={{ fontSize: 22, lineHeight: 1.1, color: '#09335C' }}
          >
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-tempo uppercase text-center mb-16"
          style={{ fontSize: 96, lineHeight: 1.1, color: '#09335C' }}
        >
          Three easy steps
        </h2>

        {/* Steps grid — 410px white rounded cards */}
        <div className="max-w-[1310px] mx-auto flex gap-8 justify-center">
          <StepCard
            number={1}
            image="/images/step-create-account.jpg"
            title="Create your account"
            description="Sign up in seconds using the email from your cruise booking"
          />
          <StepCard
            number={2}
            image="/images/step-upload-photos.jpg"
            title="Upload Your Photos"
            description="Add your favorite cruise photos or use the ones from your digital package"
          />
          <StepCard
            number={3}
            image="/images/step-personalize.jpg"
            title="Personalize your keepsake"
            description="Create personalized souvenirs to capture your best memories from your trip"
            imageBg="#e7edf5"
          />
        </div>
      </section>

      {/* ── Video Section ────────────────────────────────── */}
      <section className="pb-20 pt-16 px-6" style={{ backgroundColor: '#C2DAF1' }}>
        <div className="max-w-[622px] mx-auto">
          {/* Video thumbnail */}
          <div className="relative rounded-[16px] border-4 border-white overflow-hidden mb-4 cursor-pointer group aspect-[622/350]">
            <img
              src="/images/video-thumbnail.png"
              alt="Watch photobook creation"
              className="absolute object-cover"
              style={{ top: '50%', left: '50%', width: '130%', height: '130%', transform: 'translate(-50%, -50%)' }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <img src="/images/hero/play-icon.svg" alt="Play" className="w-16 h-16 drop-shadow-lg" />
            </div>
            <div
              className="absolute bottom-4 left-0 right-0 text-center text-white"
              style={{
                fontFamily: 'HelveticaNeueRegular, sans-serif',
                fontSize: 14,
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              Watch your photobook create itself
            </div>
          </div>

          {/* Video label */}
          <div className="flex items-center justify-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#0F559A" strokeWidth="2" />
              <polygon points="10,7 17,12 10,17" fill="#0F559A" />
            </svg>
            <span
              className="font-tempo text-primary-500 uppercase"
              style={{ fontSize: 14, letterSpacing: '0.5px' }}
            >
              Watch a Carnival Memories photobook come to life
            </span>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Section ───────────────────────────── */}
      <section
        className="relative py-40 px-6 overflow-hidden"
        style={{ background: '#0C447B' }}
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/entitlement-cta-bg.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '30% 70%' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(9, 51, 92, 0.75)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[763px] mx-auto text-center">
          <h2
            className="font-tempo text-white uppercase mb-4"
            style={{ fontSize: 80, lineHeight: 1.05 }}
          >
            Ready to redeem your gift?
          </h2>
          <p
            className="text-white mb-10"
            style={{
              fontFamily: 'HelveticaNeueRegular, sans-serif',
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            It only takes a minute to get started
          </p>
          <Link
            to="/prototype/book/demo"
            className="inline-flex items-center justify-center gap-3 font-tempo uppercase text-white text-[16px] leading-[1.5] bg-secondary-500 h-[52px] px-8 rounded-[2px] hover:bg-secondary-600 active:bg-secondary-700 transition-colors"
          >
            Create My Account
            <img src="/icons/arrow-right.svg" alt="" className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}

/* ── Step Card Component ─────────────────────────────── */

function StepCard({
  number,
  image,
  title,
  description,
  imageBg,
}: {
  number: number
  image: string
  title: string
  description: string
  imageBg?: string
}) {
  return (
    <div className="flex-1 max-w-[410px] bg-white rounded-[16px] overflow-hidden">
      {/* Image area — 315px tall */}
      <div
        className="relative h-[315px] overflow-hidden"
        style={{ backgroundColor: imageBg || 'white' }}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Number badge — 48px red circle */}
        <div className="absolute top-6 left-6 w-[48px] h-[48px] bg-secondary-500 rounded-full flex items-center justify-center">
          <span
            className="font-tempo text-white uppercase"
            style={{ fontSize: 22, lineHeight: 1.1 }}
          >
            {number}
          </span>
        </div>
      </div>
      {/* Text content — padded */}
      <div className="px-8 py-8 flex flex-col gap-2">
        <h3
          className="font-tempo text-primary-500 uppercase"
          style={{ fontSize: 28, lineHeight: 1.2 }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'HelveticaNeueRegular, sans-serif',
            fontSize: 16,
            lineHeight: 1.3,
            color: 'rgba(0,0,0,0.5)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
