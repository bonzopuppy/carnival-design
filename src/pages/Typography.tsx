import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const headingScale = [
  { class: 'headline-xl', family: 'TempoStd', size: '36px', weight: 400, color: '#0f559a', sample: 'CARNIVAL MEMORIES' },
  { class: 'headline-l', family: 'TempoStd', size: '28px', weight: 400, color: '#0f559a', sample: 'CREATE YOUR PHOTOBOOK' },
  { class: 'headline-m', family: 'TempoStd', size: '22px', weight: 400, color: '#0f559a', sample: 'STANDARD PHOTO BOOK' },
  { class: 'headline-s', family: 'TempoStd', size: '18px', weight: 400, color: '#0f559a', sample: 'UPLOAD YOUR PHOTOS' },
  { class: 'headline-xs', family: 'TempoStd', size: '16px', weight: 400, color: '#0f559a', sample: 'SECTION LABEL' },
]

const bodyScale = [
  { class: 'body-m', size: '16px', weight: 500, sample: 'Preserve your cruise memories in a beautiful hardcover photobook.' },
  { class: 'body-s', size: '14px', weight: 400, sample: 'Each book includes up to 80 pages of premium quality photo printing.' },
  { class: 'body-xs', size: '12px', weight: 500, sample: 'Free shipping on all photobook orders within the continental US.' },
  { class: 'utility-m', size: '16px', weight: 400, sample: 'UTILITY LABEL', transform: 'uppercase' },
  { class: 'utility-s', size: '14px', weight: 700, sample: 'UTILITY SMALL', transform: 'uppercase' },
]

const fontSizeScale = [
  { name: '8', rem: '0.5rem', px: '8px' },
  { name: '10', rem: '0.625rem', px: '10px' },
  { name: '12', rem: '0.75rem', px: '12px' },
  { name: '14', rem: '0.875rem', px: '14px' },
  { name: '16', rem: '1rem', px: '16px' },
  { name: '18', rem: '1.125rem', px: '18px' },
  { name: '20', rem: '1.25rem', px: '20px' },
  { name: '24', rem: '1.5rem', px: '24px' },
  { name: '28', rem: '1.75rem', px: '28px' },
  { name: '32', rem: '2rem', px: '32px' },
  { name: '36', rem: '2.25rem', px: '36px' },
  { name: '48', rem: '3rem', px: '48px' },
]

const fontWeights = [
  { name: 'Ultra Lite', value: 100 },
  { name: 'Lite', value: 300 },
  { name: 'Normal', value: 400 },
  { name: 'Semi Bold', value: 500 },
  { name: 'Bold', value: 700 },
]

export default function Typography() {
  return (
    <PageLayout
      title="TYPOGRAPHY"
      subtitle="Carnival uses HelveticaNeueRegular for body and TempoStd Heavy Condensed for display headings. All headings are uppercase, font-weight: normal (400)."
    >
      <ShowcaseSection title="Display Font — TempoStd (Carnival Headings)">
        <div className="space-y-6">
          {headingScale.map((h) => (
            <div key={h.class}>
              <div className="text-[10px] text-text-muted mb-1 uppercase tracking-wider font-mono">
                .{h.class} / {h.size} / weight {h.weight}
              </div>
              <div
                className="font-tempo"
                style={{ fontSize: h.size, fontWeight: h.weight, color: h.color }}
              >
                {h.sample}
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Body Font — HelveticaNeueRegular">
        <div className="space-y-5 font-body">
          {bodyScale.map((b) => (
            <div key={b.class}>
              <div className="text-[10px] text-text-muted mb-1 uppercase tracking-wider font-mono">
                .{b.class} / {b.size} / weight {b.weight}
              </div>
              <p
                className="text-text"
                style={{
                  fontSize: b.size,
                  fontWeight: b.weight,
                  textTransform: b.transform as 'uppercase' | undefined,
                }}
              >
                {b.sample}
              </p>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Carnival Heading Color Mapping">
        <div className="space-y-2 text-sm font-mono">
          <div className="flex items-center gap-4">
            <div className="w-40 text-text-muted">.headline-xl/.headline-l</div>
            <div className="w-6 h-6 rounded" style={{ backgroundColor: '#0f559a' }} />
            <div className="text-text">$primary-500 (#0f559a)</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40 text-text-muted">.headline-m/.headline-s</div>
            <div className="w-6 h-6 rounded" style={{ backgroundColor: '#0f559a' }} />
            <div className="text-text">$primary-500 (#0f559a)</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40 text-text-muted">.headline-xs</div>
            <div className="w-6 h-6 rounded" style={{ backgroundColor: '#0f559a' }} />
            <div className="text-text">$primary-500 (#0f559a)</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40 text-text-muted">.primary modifier</div>
            <div className="w-6 h-6 rounded" style={{ backgroundColor: '#0f559a' }} />
            <div className="text-text">$primary-500 (#0f559a)</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-40 text-text-muted">.secondary modifier</div>
            <div className="w-6 h-6 rounded" style={{ backgroundColor: '#dc1225' }} />
            <div className="text-text">$secondary-500 (#dc1225)</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Font Size Scale (rem)">
        <div className="space-y-2">
          {fontSizeScale.map((fs) => (
            <div key={fs.name} className="flex items-center gap-4">
              <div className="w-12 text-[11px] font-mono text-text-muted text-right">{fs.px}</div>
              <div className="text-text font-body truncate flex-1" style={{ fontSize: fs.rem }}>
                The quick brown fox
              </div>
              <div className="text-[10px] font-mono text-text-muted whitespace-nowrap">{fs.rem}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Font Weights">
        <div className="space-y-3 text-[1.25rem] font-body text-text">
          {fontWeights.map((fw) => (
            <div key={fw.value} className="flex items-baseline gap-4">
              <div style={{ fontWeight: fw.value }} className="flex-1">
                {fw.name} ({fw.value})
              </div>
              <div className="text-[10px] font-mono text-text-muted">$font-weight-{fw.name.toLowerCase().replace(' ', '-')}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Responsive Font Base (from :host)">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-32 font-mono text-text-muted text-[11px]">&lt; 834px</div>
            <div className="text-text font-semibold">12px</div>
            <div className="text-text-muted text-[11px]">mobile ($tr-1col)</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-32 font-mono text-text-muted text-[11px]">834px &ndash; 1439px</div>
            <div className="text-text font-semibold">14px</div>
            <div className="text-text-muted text-[11px]">tablet ($tr-2col)</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-32 font-mono text-text-muted text-[11px]">&ge; 1440px</div>
            <div className="text-text font-semibold">16px</div>
            <div className="text-text-muted text-[11px]">desktop ($tr-3col)</div>
          </div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
