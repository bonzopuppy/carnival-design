import { Routes, Route, Navigate } from 'react-router-dom'

// Landing
import Landing from './pages/Landing'

// Style Guide layout
import Sidebar from './components/Sidebar'

// Style Guide pages
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

// Prototype
import PrototypeLayout from './prototype/PrototypeLayout'
import Splash from './prototype/pages/Splash'
import Homepage from './prototype/pages/Homepage'
import Marketplace from './prototype/pages/Marketplace'
import ProductSelection from './prototype/pages/ProductSelection'
import ProductDetail from './prototype/pages/ProductDetail'
import Editor from './prototype/pages/Editor'
import Cart from './prototype/pages/Cart'
import Checkout from './prototype/pages/Checkout'
import Confirmation from './prototype/pages/Confirmation'
import OrderHistory from './prototype/pages/OrderHistory'
import EntitlementStub from './prototype/pages/EntitlementStub'
import BookSelection from './prototype/pages/BookSelection'

function StyleGuideLayout() {
  return (
    <div className="flex h-screen bg-bg font-body">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-10 py-12">
          <Routes>
            <Route path="intro" element={<Intro />} />
            <Route path="colors" element={<ColorPalette />} />
            <Route path="typography" element={<Typography />} />
            <Route path="spacing" element={<SpacingGrid />} />
            <Route path="shadows" element={<Shadows />} />
            <Route path="icons" element={<IconsPage />} />
            <Route path="button" element={<ButtonPage />} />
            <Route path="navbar" element={<NavbarPage />} />
            <Route path="nav-drawer" element={<NavDrawerPage />} />
            <Route path="card" element={<CardPage />} />
            <Route path="feature-list" element={<FeatureListPage />} />
            <Route path="price-tag" element={<PriceTagPage />} />
            <Route path="photo-upload-zone" element={<PhotoUploadZonePage />} />
            <Route path="photo-grid" element={<PhotoGridPage />} />
            <Route path="product-tile" element={<ProductTilePage />} />
            <Route path="badge-tag" element={<BadgeTagPage />} />
            <Route path="alert-banner" element={<AlertBannerPage />} />
            <Route path="video-card" element={<VideoCardPage />} />
            <Route path="split-content" element={<SplitContentPage />} />
            <Route path="*" element={<Navigate to="intro" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Landing />} />

      {/* Style Guide */}
      <Route path="/style-guide/*" element={<StyleGuideLayout />} />

      {/* Legacy redirects — old style guide routes */}
      <Route path="/intro" element={<Navigate to="/style-guide/intro" replace />} />
      <Route path="/colors" element={<Navigate to="/style-guide/colors" replace />} />
      <Route path="/typography" element={<Navigate to="/style-guide/typography" replace />} />
      <Route path="/button" element={<Navigate to="/style-guide/button" replace />} />

      {/* Prototype */}
      <Route path="/prototype" element={<PrototypeLayout />}>
        <Route path="home" element={<Splash />} />
        <Route path="book/:id" element={<Homepage />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="marketplace/select/:productId" element={<ProductSelection />} />
        <Route path="marketplace/product/:productId" element={<ProductDetail />} />
        <Route path="editor/:productId" element={<Editor />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="entitlement/:type" element={<EntitlementStub />} />
        <Route path="book-selection" element={<BookSelection />} />
        <Route index element={<Navigate to="home" replace />} />
      </Route>
    </Routes>
  )
}
