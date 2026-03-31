import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const playSvg = (
  <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden="true">
    <path
      fill="rgba(255,255,255,0.9)"
      fillRule="evenodd"
      d="M50 5 a45 45 0 1 0 0 90 a45 45 0 1 0 0 -90 M40 30 L72 50 L40 70 Z"
    />
  </svg>
)

function VideoCard({ text = 'WATCH YOUR PHOTOBOOK CREATE ITSELF' }: { text?: string }) {
  return (
    <div className="flex rounded-lg overflow-hidden bg-primary-200/30" style={{ maxWidth: '500px' }}>
      {/* Left — video poster with play button */}
      <div className="relative w-1/2 flex items-center justify-center bg-primary-200/40 p-4">
        {/* Poster placeholder */}
        <div className="w-full aspect-video bg-primary-200/50 rounded flex items-center justify-center">
          <div className="w-20 h-14 bg-white/40 rounded" />
        </div>
        {/* Play button centered over poster */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button aria-label="Play">
            {playSvg}
          </button>
        </div>
      </div>

      {/* Right — text */}
      <div className="w-1/2 flex items-center justify-center p-6">
        <h3 className="font-tempo text-primary-800 uppercase leading-tight" style={{ fontSize: '22px' }}>
          {text}
        </h3>
      </div>
    </div>
  )
}

export default function VideoCardPage() {
  return (
    <PageLayout
      title="VIDEO CARD"
      subtitle="Video thumbnail card from the cruise landing page. Horizontal layout: video poster + play button left, TempoStd heading in $primary-800 right, on a light blue background."
    >
      <ShowcaseSection title="Default">
        <VideoCard />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Text">
        <VideoCard text="SEE HOW IT WORKS" />
      </ShowcaseSection>

      <ShowcaseSection title="Play Button">
        <p className="text-xs text-text-muted mb-4">SVG circle+triangle, rgba(255,255,255,0.9) fill. Used on video posters and dark backgrounds.</p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-primary-800 rounded-xl flex items-center justify-center">
            {playSvg}
          </div>
          <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
            {playSvg}
          </div>
          <div className="w-16 h-16 bg-primary-200 rounded-xl flex items-center justify-center">
            {playSvg}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Video Card Tokens">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">source:</span> #videoTemplate in cruise-landing-video</div>
          <div><span className="text-text-muted">layout:</span> horizontal — poster left, text right</div>
          <div><span className="text-text-muted">background:</span> light blue ($primary-200 with opacity)</div>
          <div><span className="text-text-muted">heading:</span> TempoStd, $primary-800 (#051a2e), uppercase</div>
          <div><span className="text-text-muted">play button:</span> SVG circle+triangle, rgba(255,255,255,0.9)</div>
          <div><span className="text-text-muted">video poster:</span> landing-video-poster.webp from S3</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
