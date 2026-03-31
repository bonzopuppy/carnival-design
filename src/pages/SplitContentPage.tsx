import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function SplitContent({
  headline,
  body,
  ctaText = 'START YOUR PHOTOBOOK',
  reversed = false,
}: {
  headline: string
  body: string
  ctaText?: string
  reversed?: boolean
}) {
  const imagePanel = (
    <div className="w-1/2 bg-primary-200/20 flex items-center justify-center p-8">
      <div className="w-48 h-56 bg-white rounded-lg shadow-lg flex items-center justify-center transform -rotate-2">
        <div className="text-center">
          <div className="font-tempo text-primary-500 text-[10px] tracking-wider mb-2">CARNIVAL</div>
          <div className="w-28 h-20 bg-primary-50 rounded mx-auto mb-2" />
          <div className="font-tempo text-[8px] text-primary-200">MEMORIES</div>
        </div>
      </div>
    </div>
  )

  const contentPanel = (
    <div className="w-1/2 bg-primary-800 flex flex-col justify-center px-10 py-12">
      <h2 className="font-tempo text-white text-3xl leading-tight mb-5 uppercase">
        {headline}
      </h2>
      <p className="text-primary-200 text-sm mb-8 max-w-sm leading-relaxed">
        {body}
      </p>
      <div>
        <button className="bg-secondary-500 text-white font-tempo uppercase tracking-wider text-sm h-[52px] px-8 rounded-[2px] hover:bg-secondary-600 transition-colors inline-flex items-center gap-2">
          {ctaText}
          <img src="/icons/arrow-right.svg" alt="" className="w-5 h-5" />
        </button>
      </div>
    </div>
  )

  return (
    <div className="rounded-xl overflow-hidden border border-border flex" style={{ minHeight: '400px' }}>
      {reversed ? (
        <>
          {contentPanel}
          {imagePanel}
        </>
      ) : (
        <>
          {imagePanel}
          {contentPanel}
        </>
      )}
    </div>
  )
}

export default function SplitContentPage() {
  return (
    <PageLayout
      title="SPLIT CONTENT SECTION"
      subtitle="Left-image / right-dark-panel layout from the Carnival Memories home page. Image or photobook mockup on one side, $primary-800 navy panel with TempoStd headline + body + $secondary-500 red CTA."
    >
      <ShowcaseSection title="Default (Image Left, Content Right)">
        <SplitContent
          headline="TURN YOUR CRUISE PHOTOS INTO A BEAUTIFUL KEEPSAKE — AUTOMATICALLY"
          body="Start your photobook and capture your Carnival cruise memories."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Reversed (Content Left, Image Right)">
        <SplitContent
          headline="PRESERVE YOUR CRUISE MEMORIES FOREVER"
          body="Create a beautiful hardcover photobook from your Carnival cruise vacation. Upload your photos and we'll do the rest."
          reversed
        />
      </ShowcaseSection>

      <ShowcaseSection title="Components Breakdown">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-primary-800 rounded-lg p-6 mb-2">
              <div className="font-tempo text-white text-lg uppercase">HEADLINE</div>
              <div className="text-primary-200 text-xs mt-2">Body text</div>
            </div>
            <div className="text-xs text-text-muted">$primary-800 (#051a2e)</div>
          </div>
          <div className="text-center">
            <div className="bg-secondary-500 rounded-lg p-6 mb-2 flex items-center justify-center">
              <span className="text-white font-tempo uppercase text-sm tracking-wider">CTA BUTTON</span>
            </div>
            <div className="text-xs text-text-muted">$secondary-500 (#dc1225)</div>
          </div>
          <div className="text-center">
            <div className="bg-primary-200/20 rounded-lg p-6 mb-2 flex items-center justify-center">
              <div className="w-16 h-20 bg-card rounded shadow-md" />
            </div>
            <div className="text-xs text-text-muted">Image / mockup panel</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Split Content Tokens">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">source:</span> cruise-landing-split-screen template + Carnival home page</div>
          <div><span className="text-text-muted">dark panel bg:</span> $primary-800 (#051a2e)</div>
          <div><span className="text-text-muted">headline:</span> TempoStd, white, uppercase</div>
          <div><span className="text-text-muted">body text:</span> $primary-200 (#9abdde)</div>
          <div><span className="text-text-muted">CTA button:</span> $secondary-500 bg, white text, 52px height, 2px radius</div>
          <div><span className="text-text-muted">CTA icon:</span> arrow-right.svg (white fill)</div>
          <div><span className="text-text-muted">image panel bg:</span> light blue / $primary-200 with opacity</div>
          <div><span className="text-text-muted">layout:</span> 50/50 flex split, min-height ~400px</div>
          <div><span className="text-text-muted">from .trconf:</span> usePrimaryButton: false (red CTA on landing)</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
