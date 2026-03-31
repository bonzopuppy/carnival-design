import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const placeholderColors = [
  'bg-primary-200/40', 'bg-primary-200/60', 'bg-primary-200/30', 'bg-secondary-200/50',
  'bg-primary-200/50', 'bg-primary-200/20', 'bg-secondary-200/30', 'bg-primary-200/45',
  'bg-primary-200/35', 'bg-secondary-200/40', 'bg-primary-200/55', 'bg-primary-200/25',
]

function PhotoThumbnail({ color, index }: { color: string; index: number }) {
  return (
    <div className={`aspect-square rounded-lg ${color} flex items-center justify-center relative group cursor-pointer overflow-hidden`}>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-black-25">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      <div className="absolute bottom-1 right-1 text-[10px] text-black-50 font-mono">{index + 1}</div>
    </div>
  )
}

export default function PhotoGridPage() {
  return (
    <PageLayout
      title="PHOTO GRID"
      subtitle="Date-labeled section headers with responsive photo thumbnail grid. Selected photos use $photo-selected-border-color: #4185ef with $primary-500 checkmark."
    >
      <ShowcaseSection title="Single Day">
        <div>
          <div className="text-sm font-semibold text-text mb-3">Saturday, January 24, 2026</div>
          <div className="grid grid-cols-4 gap-2">
            {placeholderColors.slice(0, 8).map((c, i) => (
              <PhotoThumbnail key={i} color={c} index={i} />
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Multiple Days">
        <div className="space-y-6">
          <div>
            <div className="text-sm font-semibold text-text mb-3">Saturday, January 24, 2026</div>
            <div className="grid grid-cols-4 gap-2">
              {placeholderColors.slice(0, 4).map((c, i) => (
                <PhotoThumbnail key={i} color={c} index={i} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-text mb-3">Sunday, January 25, 2026</div>
            <div className="grid grid-cols-4 gap-2">
              {placeholderColors.slice(4, 10).map((c, i) => (
                <PhotoThumbnail key={i} color={c} index={i + 4} />
              ))}
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Selection">
        <div>
          <div className="text-sm font-semibold text-text mb-3">Saturday, January 24, 2026</div>
          <div className="grid grid-cols-4 gap-2">
            {placeholderColors.slice(0, 8).map((c, i) => (
              <div key={i} className={`aspect-square rounded-lg ${c} flex items-center justify-center relative cursor-pointer overflow-hidden ${i === 1 || i === 3 ? 'ring-2 ring-photo-selected ring-offset-2' : ''}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-black-25">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {(i === 1 || i === 3) && (
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
