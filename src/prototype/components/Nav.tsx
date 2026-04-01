import { Link } from 'react-router-dom'
import { useState } from 'react'
import { usePrototype } from '../PrototypeContext'

function BorderBtn({ to, title, children, className = '' }: { to: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      title={title}
      className={`flex items-center justify-center w-11 h-11 border border-primary-400 rounded-sm ${className}`}
    >
      {children}
    </Link>
  )
}

const iconFilter = 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)'

/* Nav drawer items with inline SVG paths from the design system */
const drawerNavItems = [
  { label: 'Home', path: '/prototype/book/demo', svgPath: 'M4 21.1475V9.14746L12 3.14746L20 9.14746V21.1475H14V14.1475H10V21.1475H4Z' },
  { label: 'Photobook', path: '/prototype/entitlement/book', svgPath: 'M7 16.1475H9V4.14746H7V16.1475ZM21 22.1475H6C5.16667 22.1475 4.45833 21.8558 3.875 21.2725C3.29167 20.6891 3 19.9808 3 19.1475V5.14746C3 4.31413 3.29167 3.60579 3.875 3.02246C4.45833 2.43913 5.16667 2.14746 6 2.14746H12.8C12.2333 2.73079 11.7917 3.40579 11.475 4.17246C11.1583 4.93913 11 5.76413 11 6.64746C11 8.36413 11.5792 9.83913 12.7375 11.0725C13.8958 12.3058 15.3167 12.9891 17 13.1225V18.1475H6C5.71667 18.1475 5.47917 18.2433 5.2875 18.435C5.09583 18.6266 5 18.8641 5 19.1475C5 19.4308 5.09583 19.6683 5.2875 19.86C5.47917 20.0516 5.71667 20.1475 6 20.1475H19V12.9725C19.3667 12.8891 19.7167 12.7766 20.05 12.635C20.3833 12.4933 20.7 12.3225 21 12.1225V22.1475ZM17.5 12.1475C17.5 10.6141 18.0333 9.31413 19.1 8.24746C20.1667 7.18079 21.4667 6.64746 23 6.64746C21.4667 6.64746 20.1667 6.11413 19.1 5.04746C18.0333 3.98079 17.5 2.68079 17.5 1.14746C17.5 2.68079 16.9667 3.98079 15.9 5.04746C14.8333 6.11413 13.5333 6.64746 12 6.64746C13.5333 6.64746 14.8333 7.18079 15.9 8.24746C16.9667 9.31413 17.5 10.6141 17.5 12.1475Z' },
  { label: 'Memories', path: '/prototype/book/demo', svgPath: 'M18.6002 7.34745V5.54745H16.8002V3.74745H18.6002V1.94745H20.4002V3.74745H22.2002V5.54745H20.4002V7.34745H18.6002ZM10.8002 17.5474C12.0002 17.5474 13.0002 17.1391 13.8002 16.3224C14.6002 15.5058 15.0002 14.5141 15.0002 13.3474C15.0002 12.1974 14.6002 11.2099 13.8002 10.3849C13.0002 9.55995 12.0002 9.14745 10.8002 9.14745C9.6002 9.14745 8.6002 9.55995 7.8002 10.3849C7.0002 11.2099 6.6002 12.2016 6.6002 13.3599C6.6002 14.5183 7.0002 15.5058 7.8002 16.3224C8.6002 17.1391 9.6002 17.5474 10.8002 17.5474ZM10.8002 15.7474C10.1002 15.7474 9.5252 15.5224 9.0752 15.0724C8.6252 14.6224 8.4002 14.0599 8.4002 13.3849C8.4002 12.7099 8.6252 12.1349 9.0752 11.6599C9.5252 11.1849 10.1002 10.9474 10.8002 10.9474C11.5002 10.9474 12.0752 11.1849 12.5252 11.6599C12.9752 12.1349 13.2002 12.7099 13.2002 13.3849C13.2002 14.0599 12.9752 14.6224 12.5252 15.0724C12.0752 15.5224 11.5002 15.7474 10.8002 15.7474ZM3.0002 20.5474C2.51686 20.5474 2.09603 20.3683 1.7377 20.0099C1.37936 19.6516 1.2002 19.2308 1.2002 18.7474V7.94745C1.2002 7.46412 1.37936 7.04328 1.7377 6.68495C2.09603 6.32662 2.51686 6.14745 3.0002 6.14745H6.0002L7.8002 3.74745H15.0002V7.34745H16.8002V9.14745H20.4002V18.7474C20.4002 19.2308 20.2239 19.6516 19.8714 20.0099C19.5189 20.3683 19.0952 20.5474 18.6002 20.5474H3.0002Z' },
  { label: 'Marketplace', path: '/prototype/marketplace', svgPath: 'M20.75 22.1484H17V15.2734H13.25V22.1484H3.25V11.5234H20.75V22.1484ZM8.25 14.6484C7.38705 14.6484 6.6875 15.3479 6.6875 16.2109C6.6875 17.0739 7.38705 17.7734 8.25 17.7734C9.11295 17.7734 9.8125 17.0739 9.8125 16.2109C9.8125 15.3479 9.11295 14.6484 8.25 14.6484ZM22 5.89844V6.31543C21.9998 8.15611 20.5077 9.64824 18.667 9.64844C16.8264 9.64844 15.3334 8.15605 15.333 6.31543C15.3326 8.15605 13.8407 9.64844 12 9.64844C10.1592 9.64844 8.66717 8.15623 8.66699 6.31543C8.66681 8.15623 7.17385 9.64844 5.33301 9.64844C3.49232 9.64826 2.00018 8.15612 2 6.31543V5.89844L5.75 2.14844H18.25L22 5.89844Z', directFill: '#3773AD' },
  { label: 'Support', path: '/prototype/book/demo', svgPath: 'M12 22.1475L11.75 19.1475H11.5C9.13333 19.1475 7.125 18.3225 5.475 16.6725C3.825 15.0225 3 13.0141 3 10.6475C3 8.28079 3.825 6.27246 5.475 4.62246C7.125 2.97246 9.13333 2.14746 11.5 2.14746C12.6833 2.14746 13.7875 2.36829 14.8125 2.80996C15.8375 3.25163 16.7375 3.85996 17.5125 4.63496C18.2875 5.40996 18.8958 6.30996 19.3375 7.33496C19.7792 8.35996 20 9.46413 20 10.6475C20 11.8975 19.7958 13.0975 19.3875 14.2475C18.9792 15.3975 18.4208 16.4641 17.7125 17.4475C17.0042 18.4308 16.1625 19.3225 15.1875 20.1225C14.2125 20.9225 13.15 21.5975 12 22.1475ZM11.475 16.1225C11.7583 16.1225 12 16.0225 12.2 15.8225C12.4 15.6225 12.5 15.3808 12.5 15.0975C12.5 14.8141 12.4 14.5725 12.2 14.3725C12 14.1725 11.7583 14.0725 11.475 14.0725C11.1917 14.0725 10.95 14.1725 10.75 14.3725C10.55 14.5725 10.45 14.8141 10.45 15.0975C10.45 15.3808 10.55 15.6225 10.75 15.8225C10.95 16.0225 11.1917 16.1225 11.475 16.1225ZM10.75 12.9475H12.25C12.25 12.4475 12.3 12.0975 12.4 11.8975C12.5 11.6975 12.8167 11.3308 13.35 10.7975C13.65 10.4975 13.9 10.1725 14.1 9.82246C14.3 9.47246 14.4 9.09746 14.4 8.69746C14.4 7.84746 14.1125 7.20996 13.5375 6.78496C12.9625 6.35996 12.2833 6.14746 11.5 6.14746C10.7667 6.14746 10.15 6.35163 9.65 6.75996C9.15 7.16829 8.8 7.66413 8.6 8.24746L10 8.79746C10.0833 8.51413 10.2417 8.23496 10.475 7.95996C10.7083 7.68496 11.05 7.54746 11.5 7.54746C11.95 7.54746 12.2875 7.67246 12.5125 7.92246C12.7375 8.17246 12.85 8.44746 12.85 8.74746C12.85 9.03079 12.7667 9.28496 12.6 9.50996C12.4333 9.73496 12.2333 9.96413 12 10.1975C11.4167 10.6975 11.0625 11.0933 10.9375 11.385C10.8125 11.6766 10.75 12.1975 10.75 12.9475Z', directFill: '#3773AD' },
]

const caretPath = 'M12.6 12.1475L8 7.54746L9.4 6.14746L15.4 12.1475L9.4 18.1475L8 16.7475L12.6 12.1475Z'

function NavDrawerOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { journeyState } = usePrototype()
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" onClick={onClose} style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="absolute left-0 top-0 h-full bg-white shadow-lg" onClick={e => e.stopPropagation()} style={{ width: 425, maxWidth: '100%' }}>
        {/* Header — close button */}
        <div className="flex items-center px-5" style={{ height: 64 }}>
          <button onClick={onClose}>
            <img src="/icons/x-black.svg" alt="Close" className="w-6 h-6" style={{ filter: iconFilter }} />
          </button>
        </div>

        {/* Logo */}
        <div className="px-5" style={{ marginBottom: 32 }}>
          <img src="/icons/carnival-logo-small.svg" alt="Carnival Memories" width="130" height="31" />
        </div>

        {/* Cruise info header */}
        {journeyState !== 'none' && (
          <div className="mx-5 px-4 py-3 flex items-center justify-between rounded-sm mb-4" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
            <div className="flex items-center gap-2">
              <img src="/icons/cruise-ship.svg" alt="" className="w-5 h-5" style={{ filter: iconFilter }} />
              <span className="text-sm font-semibold text-primary-500">Carnival Celebration<sup>&reg;</sup></span>
              <span className="text-sm text-primary-500">
                {journeyState === 'pre-cruise' && '(Apr 15 - Apr 22, 2026)'}
                {journeyState === 'in-cruise' && '(Oct 27 - Nov 3, 2024)'}
                {journeyState === 'post-cruise' && '(Oct 27 - Nov 3, 2024)'}
              </span>
            </div>
            <button className="font-tempo text-xs text-primary-500 uppercase tracking-wider underline underline-offset-2">EDIT</button>
          </div>
        )}

        {/* Nav items */}
        <nav>
          {drawerNavItems.map((item, i) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={`w-full flex items-center gap-4 px-5 py-4 transition-colors ${i === 0 ? 'bg-primary-50' : 'hover:bg-primary-50/50'}`}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
            >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="shrink-0" style={{ filter: iconFilter }}>
                <path d={item.svgPath} fill={item.directFill || 'currentColor'} />
              </svg>
              <span className="flex-1 text-left font-tempo text-primary-500 uppercase" style={{ fontSize: 18 }}>
                {item.label}
              </span>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" className="shrink-0">
                <path d={caretPath} fill="#3773AD" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-xs font-semibold underline text-text">Legal Notices</span>
            <span className="text-xs font-semibold text-text">・</span>
            <span className="text-xs font-semibold underline text-text">Privacy &amp; Cookies</span>
          </div>
          <div className="text-xs font-semibold text-text">
            &copy; 2026 Treering Corporation &amp; Carnival Corporation
            <br />All rights reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Nav() {
  const { cart, journeyState } = usePrototype()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div className="shrink-0">
      <NavDrawerOverlay open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Top Nav — 110px at 1440px+, 64px below */}
      <nav className="bg-white h-16 xl:h-[110px]">
        <div
          className="grid h-full px-6"
          style={{ gridTemplateColumns: '1fr auto 1fr' }}
        >
          {/* Left — hamburger */}
          <div className="flex items-center">
            {/* Desktop (xl+): bordered button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="hidden xl:flex items-center justify-center w-11 h-11 border border-primary-400 rounded-sm"
            >
              <img src="/icons/hamburger-menu.svg" alt="Menu" className="w-5 h-5" />
            </button>
            {/* Mobile/tablet: no border */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="xl:hidden p-2"
            >
              <img src="/icons/hamburger-menu.svg" alt="Menu" className="w-5 h-5" />
            </button>
          </div>

          {/* Center — logo */}
          <div className="flex items-center justify-center">
            <Link to="/prototype/home">
              <img
                src="/icons/carnival-logo-small.svg"
                alt="Carnival Memories"
                className="w-auto max-h-[31px] xl:max-h-[50px]"
              />
            </Link>
          </div>

          {/* Right — cart + account (visible but not linked — out of scope) */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden xl:flex items-center gap-2">
              <span className="flex items-center justify-center w-11 h-11 border border-primary-400 rounded-sm">
                <img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" />
              </span>
              <span className="flex items-center justify-center w-11 h-11 border border-primary-400 rounded-sm">
                <img src="/icons/account.svg" alt="Account" className="w-6 h-6" />
              </span>
            </div>
            <div className="xl:hidden flex items-center gap-1">
              <span className="p-2">
                <img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" />
              </span>
              <span className="p-2">
                <img src="/icons/account.svg" alt="Account" className="w-6 h-6" />
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Cruise Subbar */}
      {journeyState !== 'none' && (
        <div
          className="flex items-center justify-center gap-2 px-6 py-3"
          style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
        >
          <img src="/icons/cruise-ship.svg" alt="" className="w-5 h-5" style={{ filter: iconFilter }} />
          <span className="text-sm text-primary-500">
            Carnival Celebration<sup>&reg;</sup>
          </span>
          <span className="text-sm text-primary-500">
            {journeyState === 'pre-cruise' && '(Apr 15 - Apr 22, 2026)'}
            {journeyState === 'in-cruise' && '(Oct 27 - Nov 3, 2024)'}
            {journeyState === 'post-cruise' && '(Oct 27 - Nov 3, 2024)'}
          </span>
          <button className="font-tempo text-xs text-primary-500 uppercase tracking-wider underline underline-offset-2 ml-1">
            Edit
          </button>
        </div>
      )}
    </div>
  )
}
