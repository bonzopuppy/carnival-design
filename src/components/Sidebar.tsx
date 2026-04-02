import { NavLink, Link } from 'react-router-dom'

const sections = [
  {
    label: 'WELCOME',
    items: [{ name: 'Intro', path: '/style-guide/intro' }],
  },
  {
    label: 'STYLE GUIDE',
    items: [
      { name: 'Color Palette', path: '/style-guide/colors' },
      { name: 'Typography', path: '/style-guide/typography' },
      { name: 'Spacing & Grid', path: '/style-guide/spacing' },
      { name: 'Shadows', path: '/style-guide/shadows' },
      { name: 'Icons', path: '/style-guide/icons' },
    ],
  },
  {
    label: 'COMPONENTS',
    items: [
      { name: 'Button', path: '/style-guide/button' },
      { name: 'Navbar', path: '/style-guide/navbar' },
      { name: 'Nav Drawer', path: '/style-guide/nav-drawer' },
      { name: 'Card', path: '/style-guide/card' },
      { name: 'Feature List', path: '/style-guide/feature-list' },
      { name: 'Price Tag', path: '/style-guide/price-tag' },
      { name: 'Photo Upload Zone', path: '/style-guide/photo-upload-zone' },
      { name: 'Photo Grid', path: '/style-guide/photo-grid' },
      { name: 'Product Tile', path: '/style-guide/product-tile' },
      { name: 'Badge & Tag', path: '/style-guide/badge-tag' },
      { name: 'Alert & Banner', path: '/style-guide/alert-banner' },
      { name: 'Video Card', path: '/style-guide/video-card' },
      { name: 'Split Content', path: '/style-guide/split-content' },
      { name: 'Hero', path: '/style-guide/hero' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="w-[260px] shrink-0 h-screen bg-primary-800 flex flex-col overflow-y-auto">
      <div className="px-6 pt-6 pb-4 border-b border-white/15">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors text-xs mb-3">
          <img src="/icons/arrow-left.svg" alt="" className="w-3.5 h-3.5" style={{ filter: 'brightness(0) invert(1) opacity(0.6)' }} />
          Back to Home
        </Link>
        <Link to="/">
          <img src="/logo.svg" alt="Carnival Memories" className="h-8 w-auto mb-2" />
        </Link>
        <div className="text-xs text-white/60">Carnival Memories · Design System</div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-6">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="text-[10px] font-bold tracking-widest text-white/50 uppercase px-2 mb-2">
              {section.label}
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white font-semibold'
                          : 'text-white/75 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-white/15 text-[11px] text-white/40">
        Carnival Memories &copy; 2026
      </div>
    </aside>
  )
}
