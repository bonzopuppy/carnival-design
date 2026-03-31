import PageLayout from '../components/PageLayout'

export default function Intro() {
  return (
    <PageLayout
      title="CARNIVAL MEMORIES"
      subtitle="Design system for the Carnival Memories cruise photobook experience. Brand tokens from _carnival.scss, platform tokens from _variables.scss."
    >
      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-card rounded-xl border border-border p-8">
          <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#0f559a"/>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-text mb-2">Carnival Brand</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Primary Blue (#0F559A) and Secondary Red (#DC1225) with full shade scales. HelveticaNeueRegular for body, TempoStd Heavy Condensed for display headings (uppercase). Buttons use 2px border-radius.
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-8">
          <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#0f559a"/>
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#0f559a" opacity="0.6"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#0f559a" opacity="0.6"/>
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#0f559a" opacity="0.3"/>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-text mb-2">Component Library</h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            Buttons, nav bars, cards, photo grids, product tiles, and more. Documented with exact SCSS variable names and Carnival-specific overrides.
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-8">
        <h3 className="text-lg font-bold text-text mb-4">Quick Reference</h3>
        <div className="space-y-3 text-sm text-text-secondary">
          <p>
            <strong className="text-text">Style Guide</strong> — Colors (Carnival blue/red + V7 shared palettes), Typography (HelveticaNeue + TempoStd), Spacing (breakpoints, layout dims, border radii), and Shadows.
          </p>
          <p>
            <strong className="text-text">Components</strong> — Interactive examples of every UI component with Carnival-specific states and variants.
          </p>
          <p>
            <strong className="text-text">Key Tokens</strong> — Primary <code className="bg-primary-50 px-1.5 py-0.5 rounded text-xs font-mono text-primary-500">#0F559A</code>, Secondary <code className="bg-secondary-200 px-1.5 py-0.5 rounded text-xs font-mono text-secondary-700">#DC1225</code>, Display font <code className="bg-primary-50 px-1.5 py-0.5 rounded text-xs font-mono">TempoStd</code>, Body font <code className="bg-primary-50 px-1.5 py-0.5 rounded text-xs font-mono">HelveticaNeueRegular</code>.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-primary-50 rounded-xl border border-primary-200 p-8">
        <h3 className="text-lg font-bold text-primary-700 mb-3">Source Files</h3>
        <div className="space-y-1 text-sm font-mono text-text-secondary">
          <div>src/environments/branding/_carnival.scss <span className="text-text-muted">— Carnival brand overrides (colors, buttons, fonts)</span></div>
          <div>src/environments/branding/carnival.trconf <span className="text-text-muted">— app config (name, logos, features)</span></div>
          <div>src/styles/_variables.scss <span className="text-text-muted">— shared platform tokens</span></div>
          <div>src/styles/ui-fonts.scss <span className="text-text-muted">— @font-face declarations</span></div>
          <div>src/styles/v6-main.scss <span className="text-text-muted">— CSS custom property mappings</span></div>
        </div>
      </div>
    </PageLayout>
  )
}
