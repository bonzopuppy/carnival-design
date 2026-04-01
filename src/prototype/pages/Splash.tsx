import { Link } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'

export default function Splash() {
  const { entryPoint } = usePrototype()

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
        <span>© 2024 Treering &amp; Lindblad Expeditions &amp; NATIONAL GEOGRAPHIC EXPEDITIONS All rights reserved</span>
      </div>
    </div>
  )
}
