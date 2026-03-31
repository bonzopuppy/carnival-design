import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const navIcons = [
  'hamburger-menu', 'account', 'cart', 'arrow-left', 'arrow-right',
  'back-arrow', 'caret-down', 'caret-up', 'x', 'x-3', 'modal-x-icon',
]

const actionIcons = [
  'check', 'checkmark', 'selected-check', 'checked-oval', 'empty-oval',
  'grey-checkbox', 'cloud-check', 'add-photo', 'add-plus', 'edit-pencil',
  'trash', 'copy', 'download', 'upload', 'filter', 'rotate',
  'arrow-rotate-left', 'refresh', 'replace-photo', 'swap-icon',
  'regenerate-icon', 're-order', 'pickphoto-icon', 'signature',
]

const statusIcons = [
  'info', 'info-black', 'info-circle', 'circle-exclamation',
  'bulb', 'lightbulb', 'lock', 'no-preview', 'eyeball-hide',
  'notification-default', 'notification-done', 'notification-warning', 'notification-x-icon',
]

const interactionIcons = [
  'drag-handle', 'drag-bars', 'drag-up', 'drag-down',
  'right-btn', 'right-btn-disabled', 'background',
]

const decorativeIcons = [
  'favorite', 'selected-heart', 'heart',
  'stars-blue', 'stars-red', 'cruise-ship',
]

const carnivalBrandIcons = [
  'carnival-logo-small', 'carnival-logo-small-light', 'carnival-header',
  'carnival-icon', 'CarnivalTail', 'partner-symbol',
]

const marketplaceDarkIcons = [
  'icon_marketplace_plus', 'icon_marketplace_minus',
]

const marketplaceWhiteIcons = [
  'icon_marketplace_arrow_right', 'marketplace-item-placeholder',
]

const whiteStrokeIcons = [
  'play', 'arrow-right', 'icon_marketplace_arrow_right',
]

function IconGrid({
  icons,
  darkBg = false,
}: {
  icons: string[]
  darkBg?: boolean
}) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
      {icons.map((name) => (
        <div
          key={name}
          className={`flex flex-col items-center gap-2 p-3 rounded-lg border ${
            darkBg
              ? 'bg-primary-800 border-primary-700'
              : 'bg-blackboard-5 border-blackboard-10'
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <img
              src={`/icons/${name}.svg`}
              alt={name}
              className="max-w-full max-h-full"
            />
          </div>
          <span
            className={`text-[9px] font-mono text-center leading-tight break-all ${
              darkBg ? 'text-white/60' : 'text-text-muted'
            }`}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function IconsPage() {
  return (
    <PageLayout
      title="ICONS"
      subtitle="72 SVG icons from TRCruise. Sources: src/images/cruise/, src/images/icons/, src/images/v6/, src/images/brands/carnival/, src/images/marketplace/."
    >
      <ShowcaseSection title="Navigation">
        <IconGrid icons={navIcons} />
      </ShowcaseSection>

      <ShowcaseSection title="Actions">
        <IconGrid icons={actionIcons} />
      </ShowcaseSection>

      <ShowcaseSection title="Status & Info">
        <IconGrid icons={statusIcons} />
      </ShowcaseSection>

      <ShowcaseSection title="Interaction & Controls">
        <IconGrid icons={interactionIcons} />
      </ShowcaseSection>

      <ShowcaseSection title="Decorative">
        <IconGrid icons={decorativeIcons} />
      </ShowcaseSection>

      <ShowcaseSection title="Carnival Brand">
        <IconGrid icons={carnivalBrandIcons} />
      </ShowcaseSection>

      <ShowcaseSection title="Carnival Brand (on dark)">
        <IconGrid icons={carnivalBrandIcons} darkBg />
      </ShowcaseSection>

      <ShowcaseSection title="Marketplace">
        <IconGrid icons={marketplaceDarkIcons} />
        <div className="mt-3 text-[10px] text-text-muted mb-2">White stroke icons (shown on dark):</div>
        <IconGrid icons={marketplaceWhiteIcons} darkBg />
      </ShowcaseSection>

      <ShowcaseSection title="White Fill/Stroke Icons (on dark)">
        <p className="text-xs text-text-muted mb-3">These icons use white fills or strokes and are designed for use on colored backgrounds.</p>
        <IconGrid icons={whiteStrokeIcons} darkBg />
      </ShowcaseSection>

      <ShowcaseSection title="Usage Notes">
        <div className="text-sm space-y-2 text-text-secondary">
          <p>
            <strong className="text-text">Fill colors:</strong> Nav icons use <code className="bg-primary-50 px-1 py-0.5 rounded text-xs font-mono text-primary-500">#3773AD</code> ($primary-400). Action icons use <code className="bg-primary-50 px-1 py-0.5 rounded text-xs font-mono text-primary-500">#0F559A</code> ($primary-500). Destructive icons use <code className="bg-secondary-200 px-1 py-0.5 rounded text-xs font-mono text-secondary-700">#DC1225</code> ($secondary-500). Some icons use white fills for dark backgrounds.
          </p>
          <p>
            <strong className="text-text">Sizes:</strong> Nav icons: 20&times;20. Action icons: 18&ndash;24px. Cart: 32&times;32. Play: 63&times;61. Normalize with width/height attributes.
          </p>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
