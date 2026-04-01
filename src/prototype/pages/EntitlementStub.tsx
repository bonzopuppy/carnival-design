import { useParams, Link } from 'react-router-dom'

export default function EntitlementStub() {
  const { type } = useParams()
  const isBook = type === 'book'

  return (
    <div className="bg-white">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background image + blue overlay */}
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

        {/* Logo */}
        <div className="relative z-10 flex justify-center pt-8">
          <img src="/logo.svg" alt="Carnival" className="h-7 w-auto" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-28 px-6">
          {/* Headline + CTA */}
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
                textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
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

          {/* Floating product images */}
          <div className="flex items-end justify-center gap-4 mb-8">
            <img
              src="/images/products/canvas.png"
              alt="Canvas"
              className="w-[176px] h-[176px] object-contain drop-shadow-xl"
              style={{ transform: 'rotate(-8deg)' }}
            />
            <img
              src={isBook ? '/images/photobook-open.png' : '/images/products/calendar.png'}
              alt={isBook ? 'Photo Book' : 'Calendar'}
              className="w-[156px] h-[156px] object-contain drop-shadow-xl -mx-4 relative z-10"
              style={{ marginBottom: 8 }}
            />
            <img
              src="/images/products/mug.png"
              alt="Mug"
              className="w-[176px] h-[176px] object-contain drop-shadow-xl"
              style={{ transform: 'rotate(8deg)' }}
            />
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
      <section id="how-it-works" className="bg-white py-20 px-6">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#0F559A" strokeWidth="2" />
            <text x="12" y="16" textAnchor="middle" fill="#0F559A" fontSize="14" fontWeight="bold">i</text>
          </svg>
          <span
            className="font-tempo text-primary-500 uppercase"
            style={{ fontSize: 14, letterSpacing: '0.5px' }}
          >
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-tempo text-text uppercase text-center mb-16"
          style={{ fontSize: 64, lineHeight: 1.1 }}
        >
          Three easy steps
        </h2>

        {/* Steps grid */}
        <div className="max-w-[1100px] mx-auto flex gap-8 justify-center">
          {/* Step 1 */}
          <StepCard
            number={1}
            image="/images/hero-precruise.jpg"
            title="Create your account"
            description="Sign up in seconds using the email from your cruise booking"
          />
          {/* Step 2 */}
          <StepCard
            number={2}
            image="/images/hero-precruise.jpg"
            title="Upload Your Photos"
            description="Add your favorite cruise photos or use the ones from your digital package"
          />
          {/* Step 3 */}
          <StepCard
            number={3}
            image="/images/hero-precruise.jpg"
            title="Personalize your keepsake"
            description="Create personalized souvenirs to capture your best memories from your trip"
          />
        </div>
      </section>

      {/* ── Video Section ────────────────────────────────── */}
      <section className="bg-white pb-20 px-6">
        <div className="max-w-[622px] mx-auto">
          {/* Video thumbnail */}
          <div className="relative rounded-lg overflow-hidden mb-4 cursor-pointer group">
            <img
              src="/images/video-thumbnail.png"
              alt="Watch photobook creation"
              className="w-full aspect-video object-cover"
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
      <section className="relative py-40 px-6">
        {/* Background image + blue overlay */}
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
                'linear-gradient(90deg, rgba(15,85,154,0.65) 0%, rgba(15,85,154,0.65) 100%)',
            }}
          />
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
}: {
  number: number
  image: string
  title: string
  description: string
}) {
  return (
    <div className="flex-1 max-w-[346px]">
      {/* Image with number badge */}
      <div className="relative rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full aspect-[4/3] object-cover" />
        {/* Number badge */}
        <div
          className="absolute top-3 left-3 w-[40px] h-[40px] bg-secondary-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-sm font-bold">{number}</span>
        </div>
      </div>
      {/* Text */}
      <h3
        className="font-tempo text-text uppercase mb-2"
        style={{ fontSize: 20, lineHeight: 1.3 }}
      >
        {title}
      </h3>
      <p
        className="text-text-secondary"
        style={{
          fontFamily: 'HelveticaNeueRegular, sans-serif',
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </div>
  )
}
