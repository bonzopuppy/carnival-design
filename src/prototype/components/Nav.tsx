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

const navItems = [
  { label: 'Home', path: '/prototype/book/demo', icon: '/icons/carnival-logo-small.svg' },
  { label: 'Memories', path: '/prototype/book/demo', icon: '/icons/heart.svg' },
  { label: 'Marketplace', path: '/prototype/marketplace', icon: '/icons/cart.svg' },
  { label: 'Order History', path: '/prototype/order-history', icon: '/icons/account.svg' },
]

function NavDrawerOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-modal-backdrop/80" />

      {/* Drawer — design system NavDrawer pattern */}
      <div className="absolute left-0 top-0 h-full w-[300px] bg-white shadow-lg" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center px-5 h-16">
          <button onClick={onClose} className="p-1">
            <img src="/icons/x-black.svg" alt="Close" className="w-6 h-6" style={{ filter: iconFilter }} />
          </button>
        </div>

        {/* Logo */}
        <div className="px-5 mb-8">
          <img src="/icons/carnival-logo-small.svg" alt="Carnival Memories" className="h-8 w-auto" />
        </div>

        {/* Nav items */}
        <nav>
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={`w-full flex items-center gap-4 px-5 py-4 transition-colors hover:bg-primary-50/50 ${i === 0 ? 'bg-primary-50' : ''}`}
              style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
            >
              <img src={item.icon} alt="" className="w-6 h-6" style={{ filter: iconFilter }} />
              <span className="flex-1 text-left font-tempo text-primary-500 uppercase" style={{ fontSize: 18 }}>
                {item.label}
              </span>
              <img src="/icons/arrow-right.svg" alt="" className="w-5 h-5" style={{ filter: iconFilter }} />
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-6 text-center">
          <div className="text-xs font-semibold text-text">
            <span className="underline">Terms of Service</span>
            <span className="mx-1">·</span>
            <span className="underline">Privacy Policy</span>
          </div>
          <div className="text-xs font-semibold text-text mt-2">Carnival Memories &copy; 2026</div>
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

      {/* Main Top Nav */}
      <nav className="bg-white h-16 xl:h-[110px]">
        <div
          className="h-full px-6"
          style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}
        >
          {/* Left — hamburger */}
          <div className="flex items-center">
            <button className="p-2" onClick={() => setDrawerOpen(true)}>
              <img src="/icons/hamburger-menu.svg" alt="Menu" className="w-6 h-6" />
            </button>
          </div>

          {/* Center — logo (rendered ONCE) */}
          <div className="flex items-center justify-center">
            <Link to="/prototype/home">
              <img
                src="/logo-black.svg"
                alt="Carnival Memories"
                className="max-h-[31px] xl:max-h-[50px] w-auto"
              />
            </Link>
          </div>

          {/* Right — cart + account */}
          <div className="flex items-center justify-end gap-2">
            <BorderBtn to="/prototype/order-history" title="Account">
              <img src="/icons/account.svg" alt="Account" className="w-5 h-5" style={{ filter: iconFilter }} />
            </BorderBtn>
            <BorderBtn to="/prototype/cart" title="Cart" className="relative">
              <img src="/icons/cart.svg" alt="Cart" className="w-5 h-5" style={{ filter: iconFilter }} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </BorderBtn>
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
          <span className="text-sm font-semibold text-primary-500">Carnival Celebration</span>
          <span className="text-sm text-primary-500">
            {journeyState === 'pre-cruise' && '· Apr 15–22, 2026'}
            {journeyState === 'in-cruise' && '· Day 3 of 7'}
            {journeyState === 'post-cruise' && '· Mar 10–17, 2026'}
          </span>
          <Link to="/prototype/book/demo" className="font-tempo text-xs text-primary-500 uppercase tracking-wider underline underline-offset-2 ml-1">
            Edit
          </Link>
        </div>
      )}
    </div>
  )
}
