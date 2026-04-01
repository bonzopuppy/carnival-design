import { Outlet } from 'react-router-dom'
import { PrototypeProvider } from './PrototypeContext'
import PrototypeControls from './PrototypeControls'
import Nav from './components/Nav'

export default function PrototypeLayout() {
  return (
    <PrototypeProvider>
      <div className="flex flex-col h-screen bg-bg font-body">
        <PrototypeControls />
        <Nav />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </PrototypeProvider>
  )
}
