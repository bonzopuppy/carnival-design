import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function BorderBtn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`flex items-center justify-center w-11 h-11 border border-primary-400 rounded-sm ${className}`}>
      {children}
    </button>
  )
}

function MainTopNav({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-white" style={{ height: compact ? '64px' : '110px' }}>
      <div className="grid h-full px-6" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
        {/* Left — hamburger */}
        <div className="flex items-center">
          {compact ? (
            <button className="p-2">
              <img src="/icons/hamburger-menu.svg" alt="Menu" className="w-5 h-5" />
            </button>
          ) : (
            <BorderBtn>
              <img src="/icons/hamburger-menu.svg" alt="Menu" className="w-5 h-5" />
            </BorderBtn>
          )}
        </div>
        {/* Center — logo */}
        <div className="flex items-center justify-center">
          <img src="/icons/carnival-logo-small.svg" alt="Carnival Memories" style={{ maxHeight: compact ? '31px' : '50px' }} className="w-auto" />
        </div>
        {/* Right — cart + account */}
        <div className="flex items-center justify-end gap-2">
          {compact ? (
            <>
              <button className="p-2">
                <img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" />
              </button>
              <button className="p-2">
                <img src="/icons/account.svg" alt="Account" className="w-6 h-6" />
              </button>
            </>
          ) : (
            <>
              <BorderBtn>
                <img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" />
              </BorderBtn>
              <BorderBtn>
                <img src="/icons/account.svg" alt="Account" className="w-6 h-6" />
              </BorderBtn>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function CruiseSubbar({ shipName = 'Carnival Breeze', dates = 'Mar 05 - Mar 09, 2026' }: { shipName?: string; dates?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 px-6 py-3" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
      <img src="/icons/cruise-ship.svg" alt="" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }} />
      <span className="text-sm text-primary-500">{shipName} <sup>&reg;</sup></span>
      <span className="text-sm text-primary-500">({dates})</span>
      <button className="font-tempo text-xs text-primary-500 uppercase tracking-wider underline underline-offset-2 ml-1">EDIT</button>
    </div>
  )
}

function SecondaryTopNav({ variant = 'home' }: { variant?: 'home' | 'inner' }) {
  if (variant === 'inner') {
    return (
      <div className="bg-white flex items-center px-6" style={{ height: '64px' }}>
        <div className="flex-1 flex items-center">
          <button className="flex items-center gap-1.5">
            <img src="/icons/arrow-left-2.svg" alt="" width="25" height="24" />
            <span className="font-tempo text-primary-500 uppercase" style={{ fontSize: '16px' }}>BACK</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="font-tempo text-text uppercase" style={{ fontSize: '18px' }}>CREATE YOUR BOOK</span>
          <img src="/icons/cloud-check.svg" alt="Synced" className="w-5 h-5" />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button className="flex items-center gap-2 border border-primary-400 rounded-sm px-4 h-11 text-sm font-tempo text-primary-500 uppercase">
            ADD PHOTOS
            <img src="/icons/add-photo.svg" alt="" className="w-5 h-5" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white flex items-center px-6" style={{ height: '64px' }}>
      <div className="flex-1 flex items-center">
        <BorderBtn>
          <img src="/icons/hamburger-menu.svg" alt="Menu" className="w-5 h-5" />
        </BorderBtn>
      </div>
      <div className="flex items-center justify-center">
        <img src="/icons/carnival-logo-small.svg" alt="Carnival Memories" className="h-7 w-auto" />
      </div>
      <div className="flex-1" />
    </div>
  )
}

export default function NavbarPage() {
  return (
    <PageLayout
      title="NAVBAR"
      subtitle="Two-tier navigation. Main nav: 110px, 3-col CSS grid with bordered icon buttons. Secondary nav: 64px desktop / 48px mobile. White background, $primary-400 icon borders."
    >
      <ShowcaseSection title="Main Top Nav — Desktop (1440px+)">
        <p className="text-xs text-text-muted mb-4">110px tall, bordered icon buttons (1px solid $primary-400).</p>
        <div className="rounded-lg overflow-hidden border border-border">
          <MainTopNav />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Main Top Nav — Below 1440px">
        <p className="text-xs text-text-muted mb-4">64px tall, no borders on icon buttons. Same layout, compact treatment.</p>
        <div className="rounded-lg overflow-hidden border border-border">
          <MainTopNav compact />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Home Page — Nav + Cruise Subbar (Desktop)">
        <div className="rounded-lg overflow-hidden border border-border">
          <MainTopNav />
          <CruiseSubbar />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Home Page — Nav + Cruise Subbar (< 1440px)">
        <div className="rounded-lg overflow-hidden border border-border">
          <MainTopNav compact />
          <CruiseSubbar />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Inner Page — Secondary Nav (Back + Title + Action)">
        <div className="rounded-lg overflow-hidden border border-border">
          <SecondaryTopNav variant="inner" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Landing — Secondary Nav (Hamburger + Logo)">
        <div className="rounded-lg overflow-hidden border border-border">
          <SecondaryTopNav variant="home" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Cruise Subbar Variants">
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-border">
            <CruiseSubbar shipName="Carnival Celebration" dates="Jan 19 - Jan 26, 2026" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <CruiseSubbar shipName="Carnival Breeze" dates="Mar 05 - Mar 09, 2026" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <CruiseSubbar shipName="Mardi Gras" dates="Apr 14 - Apr 21, 2026" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Border Button Component">
        <p className="text-xs text-text-muted mb-4">Nav icon buttons have a 1px solid $primary-400 (#3773AD) border, rounded-sm. Size: 44x44px.</p>
        <div className="flex gap-4 items-center">
          <BorderBtn><img src="/icons/hamburger-menu.svg" alt="Menu" className="w-5 h-5" /></BorderBtn>
          <BorderBtn><img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" /></BorderBtn>
          <BorderBtn><img src="/icons/account.svg" alt="Account" className="w-6 h-6" /></BorderBtn>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Nav Tokens Reference">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">#main-top-nav height:</span> 110px (desktop 1440px+)</div>
          <div><span className="text-text-muted">#secondary-top-nav height:</span> 64px desktop, 48px mobile</div>
          <div><span className="text-text-muted">$nav-background-color:</span> #fff (white)</div>
          <div><span className="text-text-muted">$nav-border-color:</span> $primary-400 (#3773AD)</div>
          <div><span className="text-text-muted">$nav-text-color:</span> $primary-500 (#0f559a)</div>
          <div><span className="text-text-muted">layout:</span> CSS grid — 1fr auto 1fr</div>
          <div><span className="text-text-muted">icon sizing:</span> hamburger 20x20, cart/account 24x24</div>
          <div><span className="text-text-muted">logo:</span> carnival/logo-small.svg (130x31, max-height 50px)</div>
          <div><span className="text-text-muted">border-btn:</span> 1px solid $primary-400, 44x44</div>
          <div><span className="text-text-muted">back arrow:</span> arrow-left-2.svg (25x24, filled $primary-400)</div>
          <div><span className="text-text-muted">back text:</span> TempoStd, 16px, uppercase, $primary-500</div>
          <div><span className="text-text-muted">inner page title:</span> TempoStd, 18px, uppercase, $text (black)</div>
          <div><span className="text-text-muted">action btn:</span> bordered, TempoStd uppercase, $primary-500</div>
          <div><span className="text-text-muted">cruise subbar:</span> centered — cruise-ship icon + ship name® + (dates) + EDIT link</div>
          <div><span className="text-text-muted">EDIT link:</span> TempoStd, uppercase, $primary-500, underlined</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
