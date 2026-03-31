import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const shadows = [
  { name: 'sm', value: '0 1px 2px rgba(0,0,0,0.05)', desc: 'Subtle — inputs, badges', token: '--shadow-sm' },
  { name: 'md', value: '0 2px 8px rgba(0,0,0,0.1)', desc: 'Default — cards, tiles', token: '--shadow-md' },
  { name: 'lg', value: '0 4px 16px rgba(0,0,0,0.12)', desc: 'Elevated — dropdowns, drawers', token: '--shadow-lg' },
  { name: 'card', value: '0 1px 3px rgba(0,0,0,0.08)', desc: 'Card — light card shadow', token: '--shadow-card' },
]

export default function Shadows() {
  return (
    <PageLayout
      title="SHADOWS"
      subtitle="Elevation system for depth and hierarchy. Note: TRCruise uses $btn-box-shadow: none for buttons."
    >
      <ShowcaseSection title="Shadow Scale">
        <div className="grid grid-cols-2 gap-8">
          {shadows.map((s) => (
            <div key={s.name} className="text-center">
              <div
                className="h-32 bg-chalk rounded-xl flex items-center justify-center border border-blackboard-10"
                style={{ boxShadow: s.value }}
              >
                <span className="font-mono text-xs text-text-muted">{s.token}</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-text">{s.name}</div>
              <div className="text-xs text-text-muted">{s.desc}</div>
              <div className="text-[10px] font-mono text-text-muted mt-1">{s.value}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Applied Examples">
        <div className="flex gap-6">
          <div className="w-48 bg-chalk rounded-lg p-4 border border-blackboard-10" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div className="text-[10px] text-text-muted mb-1">Input Field</div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-blackboard-50 rounded-[4px] px-3 py-2 text-sm"
              readOnly
            />
          </div>
          <div className="w-48 bg-chalk rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <div className="w-full h-16 bg-blackboard-10 rounded mb-2" />
            <div className="text-sm font-bold text-text">Card</div>
            <div className="text-xs text-text-muted">shadow-card</div>
          </div>
          <div className="w-48 bg-chalk rounded-lg p-4 border border-blackboard-10" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
            <div className="text-sm font-bold text-secondary-500 mb-1">Modal</div>
            <div className="text-xs text-text-secondary">Shadow lg for overlays and modal dialogs.</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Shadow Note">
        <div className="bg-sunflower-10 border border-sunflower-25 rounded-lg p-4 text-sm">
          <strong className="text-sunflower-100">Important:</strong> <span className="text-text-secondary">TRCruise sets <code className="font-mono text-xs bg-chalk px-1 py-0.5 rounded">$btn-box-shadow: none</code>, <code className="font-mono text-xs bg-chalk px-1 py-0.5 rounded">$btn-focus-box-shadow: none</code>, and <code className="font-mono text-xs bg-chalk px-1 py-0.5 rounded">$btn-active-box-shadow: none</code>. Buttons have zero shadow in all states.</span>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
