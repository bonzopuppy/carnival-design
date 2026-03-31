import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Intro from './pages/Intro'
import ColorPalette from './pages/ColorPalette'
import Typography from './pages/Typography'
import SpacingGrid from './pages/SpacingGrid'
import Shadows from './pages/Shadows'
import IconsPage from './pages/IconsPage'
import ButtonPage from './pages/ButtonPage'
import NavbarPage from './pages/NavbarPage'
import NavDrawerPage from './pages/NavDrawerPage'
import CardPage from './pages/CardPage'
import FeatureListPage from './pages/FeatureListPage'
import PriceTagPage from './pages/PriceTagPage'
import PhotoUploadZonePage from './pages/PhotoUploadZonePage'
import PhotoGridPage from './pages/PhotoGridPage'
import ProductTilePage from './pages/ProductTilePage'
import BadgeTagPage from './pages/BadgeTagPage'
import AlertBannerPage from './pages/AlertBannerPage'
import VideoCardPage from './pages/VideoCardPage'
import SplitContentPage from './pages/SplitContentPage'

export default function App() {
  return (
    <div className="flex h-screen bg-bg font-body">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-10 py-12">
          <Routes>
            <Route path="/" element={<Navigate to="/intro" replace />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/colors" element={<ColorPalette />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/spacing" element={<SpacingGrid />} />
            <Route path="/shadows" element={<Shadows />} />
            <Route path="/icons" element={<IconsPage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/navbar" element={<NavbarPage />} />
            <Route path="/nav-drawer" element={<NavDrawerPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/feature-list" element={<FeatureListPage />} />
            <Route path="/price-tag" element={<PriceTagPage />} />
            <Route path="/photo-upload-zone" element={<PhotoUploadZonePage />} />
            <Route path="/photo-grid" element={<PhotoGridPage />} />
            <Route path="/product-tile" element={<ProductTilePage />} />
            <Route path="/badge-tag" element={<BadgeTagPage />} />
            <Route path="/alert-banner" element={<AlertBannerPage />} />
            <Route path="/video-card" element={<VideoCardPage />} />
            <Route path="/split-content" element={<SplitContentPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
