import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const checkCircle = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 6.66667C0 2.98667 2.98667 0 6.66667 0C10.3467 0 13.3333 2.98667 13.3333 6.66667C13.3333 10.3467 10.3467 13.3333 6.66667 13.3333C2.98667 13.3333 0 10.3467 0 6.66667ZM2 6.66667L5.33333 10L11.3333 4L10.3933 3.05333L5.33333 8.11333L2.94 5.72667L2 6.66667Z" fill="#0F559A" />
  </svg>
)

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      {checkCircle}
      <span className="text-sm text-text">{children}</span>
    </div>
  )
}

export default function FeatureListPage() {
  return (
    <PageLayout
      title="FEATURE LIST"
      subtitle="Inline pattern used inside book selection cards (book-size.component). Not a standalone shared component. Uses filled circle-check SVG (14x14) in $primary-500 + body-s text."
    >
      <ShowcaseSection title="Default">
        <div className="space-y-4 max-w-md">
          <FeatureItem>A classic hardcover with traditional binding</FeatureItem>
          <FeatureItem>Just the right amount of space for your favorite moments (up to 28 pages)</FeatureItem>
          <FeatureItem>A beautiful, well-balanced keepsake you'll enjoy pulling off the shelf</FeatureItem>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Premium Features">
        <div className="space-y-4 max-w-md">
          <FeatureItem>The most luxe and display-worthy souvenir with our signature layflat design and thicker pages</FeatureItem>
          <FeatureItem>Extra space for every memory (up to 34 pages)</FeatureItem>
          <FeatureItem>Full-page spreads and enhanced layouts for a more immersive way to relive your cruise</FeatureItem>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="In Card Context">
        <div className="w-[320px] bg-primary-50 rounded-lg p-5">
          <h3 className="font-tempo text-primary-500 uppercase text-center mb-3" style={{ fontSize: '22px' }}>STANDARD BOOK</h3>
          <p className="text-sm text-text text-center mb-4">Choose Standard if you want:</p>
          <div className="space-y-4">
            <FeatureItem>A classic hardcover with traditional binding</FeatureItem>
            <FeatureItem>Just the right amount of space for your favorite moments (up to 28 pages)</FeatureItem>
            <FeatureItem>A beautiful, well-balanced keepsake you'll enjoy pulling off the shelf</FeatureItem>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Feature List Tokens">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">type:</span> inline pattern (not a shared component)</div>
          <div><span className="text-text-muted">used in:</span> book-size.component (book selection cards)</div>
          <div><span className="text-text-muted">icon:</span> filled circle-check SVG, 14x14, $primary-500 (#0F559A)</div>
          <div><span className="text-text-muted">text:</span> .body-s — 14px, normal weight</div>
          <div><span className="text-text-muted">gap between items:</span> 16px</div>
          <div><span className="text-text-muted">icon-text gap:</span> ~10px</div>
          <div><span className="text-text-muted">list width:</span> 80-90% of card width</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
