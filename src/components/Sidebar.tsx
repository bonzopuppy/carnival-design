import { NavLink } from 'react-router-dom'

const sections = [
  {
    label: 'WELCOME',
    items: [{ name: 'Intro', path: '/intro' }],
  },
  {
    label: 'STYLE GUIDE',
    items: [
      { name: 'Color Palette', path: '/colors' },
      { name: 'Typography', path: '/typography' },
      { name: 'Spacing & Grid', path: '/spacing' },
      { name: 'Shadows', path: '/shadows' },
      { name: 'Icons', path: '/icons' },
    ],
  },
  {
    label: 'COMPONENTS',
    items: [
      { name: 'Button', path: '/button' },
      { name: 'Navbar', path: '/navbar' },
      { name: 'Nav Drawer', path: '/nav-drawer' },
      { name: 'Card', path: '/card' },
      { name: 'Feature List', path: '/feature-list' },
      { name: 'Price Tag', path: '/price-tag' },
      { name: 'Photo Upload Zone', path: '/photo-upload-zone' },
      { name: 'Photo Grid', path: '/photo-grid' },
      { name: 'Product Tile', path: '/product-tile' },
      { name: 'Badge & Tag', path: '/badge-tag' },
      { name: 'Alert & Banner', path: '/alert-banner' },
      { name: 'Video Card', path: '/video-card' },
      { name: 'Split Content', path: '/split-content' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="w-[260px] shrink-0 h-screen bg-primary-800 flex flex-col overflow-y-auto">
      <div className="px-6 pt-6 pb-4 border-b border-white/15">
        <img src="/logo.svg" alt="Carnival Memories" className="h-8 w-auto mb-2" />
        <div className="text-xs text-white/60">Design System</div>
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
