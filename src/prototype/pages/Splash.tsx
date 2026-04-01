import { Link } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'

export default function Splash() {
  const { entryPoint } = usePrototype()

  const headlines: Record<string, { heading: string; sub: string }> = {
    direct: {
      heading: 'YOUR CRUISE MEMORIES, PERSONALIZED',
      sub: 'Create keepsakes, shop travel essentials, and relive every moment.',
    },
    'pre-cruise-email': {
      heading: 'YOUR CRUISE IS ALMOST HERE',
      sub: 'Shop personalized travel essentials before you sail.',
    },
    'post-cruise-email': {
      heading: 'YOUR MEMORIES ARE READY',
      sub: 'Turn your cruise photos into personalized keepsakes.',
    },
  }

  const { heading, sub } = headlines[entryPoint]

  return (
    <div className="min-h-full flex flex-col">
      {/* Hero — uses Split Content pattern: primary-800 bg + cta button */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-20 text-center bg-primary-800">
        <div className="absolute inset-0 bg-[url('/icons/cruise-ship.svg')] bg-no-repeat bg-center bg-[length:200px] opacity-5" />

        <div className="relative z-10 max-w-lg">
          <img src="/logo.svg" alt="Carnival Memories" className="h-10 w-auto mx-auto mb-8" />

          <h1 className="font-tempo text-white uppercase leading-tight mb-3" style={{ fontSize: 36 }}>
            {heading}
          </h1>
          <p className="text-primary-200 text-sm mb-10 max-w-sm mx-auto leading-relaxed">{sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* CTA button — design system cta variant */}
            <Link
              to="/prototype/book/demo"
              className="inline-flex items-center justify-center font-tempo tracking-wider uppercase transition-all min-w-[135px] h-[52px] px-5 text-[16px] rounded-[2px] bg-secondary-500 text-white border border-secondary-500 active:bg-secondary-700 active:border-secondary-700 focus:bg-secondary-600"
            >
              Sign In
            </Link>
            {/* Secondary button — design system secondary variant */}
            <Link
              to="/prototype/book/demo"
              className="inline-flex items-center justify-center font-tempo tracking-wider uppercase transition-all min-w-[135px] h-[52px] px-5 text-[16px] rounded-[2px] bg-white text-primary-500 border border-primary-500 hover:text-primary-400 hover:border-primary-400 active:text-primary-700 active:border-primary-700"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
