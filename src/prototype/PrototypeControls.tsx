import { Link, useLocation, useNavigate } from 'react-router-dom'
import { usePrototype, type JourneyState, type Entitlement, type EntryPoint } from './PrototypeContext'

function Dropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 shrink-0">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="bg-white/10 text-white text-[12px] font-medium border border-white/20 rounded-md px-2 py-1 outline-none cursor-pointer hover:bg-white/15 transition-colors appearance-none pr-6"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='white' stroke-opacity='0.6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 6px center' }}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-primary-800 text-white">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

interface FlowStep {
  label: string
  path: string
}

const flows: Record<string, FlowStep[]> = {
  'pre-cruise': [
    { label: 'Splash', path: '/prototype/home' },
    { label: 'Homepage', path: '/prototype/book/demo' },
    { label: 'Marketplace', path: '/prototype/marketplace' },
    { label: 'PDP', path: '/prototype/marketplace/product/leather-luggage-tag' },
    { label: 'Editor', path: '/prototype/editor/leather-luggage-tag' },
  ],
  'in-cruise': [
    { label: 'Splash', path: '/prototype/home' },
    { label: 'Homepage', path: '/prototype/book/demo' },
    { label: 'Book Selection', path: '/prototype/book-selection' },
    { label: 'Marketplace', path: '/prototype/marketplace' },
    { label: 'PDP', path: '/prototype/marketplace/product/leather-luggage-tag' },
    { label: 'Editor', path: '/prototype/editor/leather-luggage-tag' },
  ],
  'post-cruise': [
    { label: 'Splash', path: '/prototype/home' },
    { label: 'Homepage', path: '/prototype/book/demo' },
    { label: 'Book Selection', path: '/prototype/book-selection' },
    { label: 'Marketplace', path: '/prototype/marketplace' },
    { label: 'Product Selection', path: '/prototype/marketplace/select/personalized-mug' },
    { label: 'PDP', path: '/prototype/marketplace/product/personalized-mug' },
    { label: 'Editor', path: '/prototype/editor/personalized-mug' },
  ],
}

function FlowNav() {
  const { journeyState } = usePrototype()
  const location = useLocation()
  const navigate = useNavigate()
  const flow = flows[journeyState] || flows.none

  // Match by exact path or by route pattern (e.g. any /marketplace/select/* matches the PSP step)
  const currentIndex = flow.findIndex(step => {
    if (location.pathname === step.path) return true
    // Pattern match: strip the last segment and compare prefixes
    const stepBase = step.path.replace(/\/[^/]+$/, '')
    const locBase = location.pathname.replace(/\/[^/]+$/, '')
    return stepBase === locBase && stepBase !== '/prototype'
  })
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < flow.length - 1 && currentIndex >= 0

  return (
    <div className="flex items-center gap-2">
      {/* Page dropdown */}
      <div className="flex items-center gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 shrink-0">Page</span>
        <select
          value={currentIndex >= 0 ? flow[currentIndex].path : ''}
          onChange={(e) => navigate(e.target.value)}
          className="bg-white/10 text-white text-[12px] font-medium border border-white/20 rounded-md px-2 py-1 outline-none cursor-pointer hover:bg-white/15 transition-colors appearance-none pr-6"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='white' stroke-opacity='0.6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 6px center' }}
        >
          {flow.map((step, i) => (
            <option key={step.path} value={step.path} className="bg-primary-800 text-white">
              {i + 1}. {step.label}
            </option>
          ))}
        </select>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center">
        <button
          onClick={() => hasPrev && navigate(flow[currentIndex - 1].path)}
          disabled={!hasPrev}
          className={`px-3 py-1.5 rounded-l-md border border-r-0 text-[16px] font-bold transition-colors leading-none ${
            hasPrev ? 'border-white/30 text-white/90 hover:bg-white/10' : 'border-white/10 text-white/20 cursor-not-allowed'
          }`}
          title="Previous step"
        >
          ‹
        </button>
        <button
          onClick={() => hasNext && navigate(flow[currentIndex + 1].path)}
          disabled={!hasNext}
          className={`px-3 py-1.5 rounded-r-md border text-[16px] font-bold transition-colors leading-none ${
            hasNext ? 'border-white/30 text-white/90 hover:bg-white/10' : 'border-white/10 text-white/20 cursor-not-allowed'
          }`}
          title="Next step"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default function PrototypeControls() {
  const { journeyState, entitlement, setJourneyState, setEntitlement } = usePrototype()

  const handleJourneyChange = (state: JourneyState) => {
    setJourneyState(state)
    if (state === 'pre-cruise') {
      setEntitlement('none')
    }
  }

  return (
    <div className="bg-primary-800 border-b border-white/10 px-4 py-2 flex items-center gap-4 z-50">
      <Link to="/" className="flex items-center justify-center w-7 h-7 rounded-sm border border-white/20 hover:bg-white/10 transition-colors shrink-0" title="Back to Home">
        <img src="/icons/arrow-left.svg" alt="Back" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
      </Link>

      <div className="flex items-center gap-2 mr-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Prototype</span>
      </div>

      <Dropdown<JourneyState>
        label="Journey"
        value={journeyState}
        onChange={handleJourneyChange}
        options={[
          { value: 'pre-cruise', label: 'Pre-Cruise' },
          { value: 'in-cruise', label: 'In-Cruise' },
          { value: 'post-cruise', label: 'Post-Cruise' },
        ]}
      />

      {journeyState !== 'pre-cruise' && (
        <Dropdown<Entitlement>
          label="Entitlements"
          value={entitlement}
          onChange={setEntitlement}
          options={[
            { value: 'none', label: 'None' },
            { value: 'compact-book', label: 'Compact Book' },
            { value: 'calendar', label: 'Calendar' },
            { value: 'both', label: 'Both' },
          ]}
        />
      )}

      <div className="ml-auto">
        <FlowNav />
      </div>
    </div>
  )
}
