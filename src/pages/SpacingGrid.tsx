import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const breakpoints = [
  { name: '$tr-1col', value: '390px', desc: '1 column layout, extra padding' },
  { name: '$tr-1col-landscape', value: '576px', desc: '1 column landscape' },
  { name: '$tr-2col', value: '834px', desc: '2 column layout (font-size: 14px)' },
  { name: '$tr-3col', value: '1440px', desc: '3 column layout (font-size: 16px)' },
  { name: '$tr-3col-sideOpen', value: '1390px', desc: '3 column with sidebar open' },
  { name: '$tr-5col', value: '1610px', desc: '5 column layout' },
]

const layoutDimensions = [
  { name: '$v6-nav-height', value: '52px', desc: 'Top nav bar height (desktop)' },
  { name: '$v6-nav-height-mobile', value: '88px', desc: 'Top nav bar height (mobile)' },
  { name: '$sidebar-width', value: '280px', desc: 'Left sidebar width' },
  { name: '$edit-sidebar-width', value: '349px', desc: 'Edit mode sidebar width' },
  { name: '$display-page-sidebar-width', value: '399px', desc: 'Display page sidebar' },
  { name: '$header-height', value: '3.875rem (62px)', desc: 'Header height' },
  { name: '$editor-header-height', value: '48px', desc: 'Editor header height' },
  { name: '$control-height', value: '2.5em', desc: 'Standard control height' },
  { name: '$tr-home-page-max-width', value: '630px', desc: 'Home page max width' },
]

const borderRadii = [
  { name: '$border-radius', value: '0', desc: 'Base (Bootstrap override)' },
  { name: '$btn-corner-radius', value: '4px', desc: 'Button corners' },
  { name: '$tr-stomata-border-radius', value: '0.5rem (8px)', desc: 'Stomata components' },
  { name: '$tr-sub-border-radius', value: '0.75rem (12px)', desc: 'Sub-containers' },
  { name: '$tr-main-border-radius', value: '1rem (16px)', desc: 'Main containers' },
  { name: 'V7 card radius', value: '8px', desc: 'Version-seven cards' },
]

const modalSizes = [
  { name: '$modal-lg', value: '530px' },
  { name: '$modal-sm', value: '300px' },
  { name: '$modal-header-padding', value: '0.9375rem (15px)' },
  { name: '$modal-inner-padding', value: '0.9375rem (15px)' },
]

export default function SpacingGrid() {
  return (
    <PageLayout
      title="SPACING & GRID"
      subtitle="Responsive breakpoints, layout dimensions, border radii, and modal sizes from TRCruise _variables.scss."
    >
      <ShowcaseSection title="Responsive Breakpoints">
        <div className="space-y-3">
          {breakpoints.map((bp) => (
            <div key={bp.name} className="flex items-center gap-4">
              <div className="w-48 text-xs font-mono text-text-muted">{bp.name}</div>
              <div
                className="h-5 bg-primary-400 rounded-sm"
                style={{ width: `min(${bp.value}, 100%)` }}
              />
              <div className="text-sm font-semibold text-text whitespace-nowrap">{bp.value}</div>
              <div className="text-xs text-text-muted hidden lg:block">{bp.desc}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Layout Dimensions">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-wider text-text-muted border-b border-blackboard-25">
                <th className="pb-2 pr-4">Token</th>
                <th className="pb-2 pr-4">Value</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {layoutDimensions.map((d) => (
                <tr key={d.name} className="border-b border-blackboard-10">
                  <td className="py-2 pr-4 font-mono text-xs text-primary-500">{d.name}</td>
                  <td className="py-2 pr-4 font-semibold">{d.value}</td>
                  <td className="py-2 text-text-secondary text-xs">{d.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Border Radius Scale">
        <div className="flex flex-wrap gap-6">
          {borderRadii.map((r) => (
            <div key={r.name} className="text-center">
              <div
                className="w-20 h-20 bg-primary-200 border border-primary-400 mb-2"
                style={{ borderRadius: r.value.split(' ')[0] }}
              />
              <div className="text-xs font-semibold text-text">{r.value}</div>
              <div className="text-[10px] font-mono text-text-muted max-w-[120px]">{r.name}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Modal Sizes">
        <div className="space-y-2">
          {modalSizes.map((m) => (
            <div key={m.name} className="flex items-center gap-4">
              <div className="w-48 text-xs font-mono text-text-muted">{m.name}</div>
              <div className="text-sm font-semibold text-text">{m.value}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Grid — 12 Column">
        <div className="grid grid-cols-12 gap-2 mb-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-12 bg-primary-50 border border-primary-200 rounded flex items-center justify-center text-xs font-mono text-primary-500">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">span-4</div>
            <div className="col-span-8 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">span-8</div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">span-6</div>
            <div className="col-span-6 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">span-6</div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">3</div>
            <div className="col-span-3 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">3</div>
            <div className="col-span-3 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">3</div>
            <div className="col-span-3 h-10 bg-primary-50 rounded flex items-center justify-center text-xs text-primary-500">3</div>
          </div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
