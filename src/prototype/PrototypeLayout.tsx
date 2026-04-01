import { Outlet, useLocation } from 'react-router-dom'
import { PrototypeProvider } from './PrototypeContext'
import PrototypeControls from './PrototypeControls'
import Nav from './components/Nav'

export default function PrototypeLayout() {
  const { pathname } = useLocation()
  const hideNav = pathname === '/prototype/home' || pathname.startsWith('/prototype/entitlement') || pathname.startsWith('/prototype/marketplace/product') || pathname.startsWith('/prototype/editor')

  return (
    <PrototypeProvider>
      <div className="flex flex-col h-screen bg-bg font-body">
        <PrototypeControls />
        {!hideNav && <Nav />}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </PrototypeProvider>
  )
}
