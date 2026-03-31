import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function BannerMessage({
  message,
  bgColor,
  buttonText,
}: {
  message: string
  bgColor: string
  buttonText?: string
}) {
  return (
    <div
      className="w-full text-white text-center flex items-center justify-center gap-4 px-4"
      style={{
        backgroundColor: bgColor,
        height: '50px',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.8)',
      }}
    >
      <span className="text-sm">{message}</span>
      {buttonText && (
        <button
          className="text-sm font-bold underline hover:bg-white hover:text-black px-2 py-0.5 rounded-sm transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default function AlertBannerPage() {
  return (
    <PageLayout
      title="ALERT & BANNER"
      subtitle="banner-message shared component. Fixed-position, full-width, top of page. Dynamic background color, white text, box-shadow. Optional action button."
    >
      <ShowcaseSection title="Banner — Info / Success ($primary-500)">
        <p className="text-xs text-text-muted mb-4">Carnival uses $primary-500 for both info and success ($ngtr-notification-status-success: $primary-500).</p>
        <div className="rounded-lg overflow-hidden">
          <BannerMessage
            message="Your photobook has been saved and synced to the cloud."
            bgColor="#0f559a"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Banner — With Action Button">
        <div className="rounded-lg overflow-hidden">
          <BannerMessage
            message="Updates are available for your photobook."
            bgColor="#0f559a"
            buttonText="Refresh"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Banner — Snackbar ($snackbar #0f7dfe)">
        <div className="rounded-lg overflow-hidden">
          <BannerMessage
            message="Photo uploaded successfully."
            bgColor="#0f7dfe"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Banner — Error ($heart-100 #b60016)">
        <p className="text-xs text-text-muted mb-4">Carnival uses $heart_balloon_100 for failure notifications ($ngtr-notification-status-failure).</p>
        <div className="rounded-lg overflow-hidden">
          <BannerMessage
            message="Upload failed. Please check your connection and try again."
            bgColor="#b60016"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Banner — Warning ($marigold)">
        <div className="rounded-lg overflow-hidden">
          <div
            className="w-full text-text text-center flex items-center justify-center gap-4 px-4"
            style={{
              backgroundColor: '#f9de6d',
              height: '50px',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.8)',
            }}
          >
            <span className="text-sm">You have unsaved changes. Please save before leaving this page.</span>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Update Modal">
        <p className="text-xs text-text-muted mb-4">Modal backdrop uses $modal-backdrop: $primary-500. Heading uses $secondary-500 red.</p>
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-xl shadow-lg border border-border p-6">
            <h3 className="text-lg font-bold text-secondary-500 mb-2">Updates are available</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              New photos from your cruise have been added to your gallery. Would you like to review and add them to your photobook?
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-primary-500 text-white font-tempo uppercase tracking-wider text-xs rounded-[2px] h-[44px] hover:bg-primary-400 transition-colors">
                REVIEW NOW
              </button>
              <button className="flex-1 border border-primary-500 text-primary-500 font-tempo uppercase tracking-wider text-xs rounded-[2px] h-[44px] hover:bg-primary-50 transition-colors">
                LATER
              </button>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Banner Tokens Reference">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">component:</span> banner-message (shared)</div>
          <div><span className="text-text-muted">position:</span> fixed, top: 0, left: 0, width: 100%</div>
          <div><span className="text-text-muted">z-index:</span> 100000 (above top nav)</div>
          <div><span className="text-text-muted">height:</span> 50px (configurable via input)</div>
          <div><span className="text-text-muted">box-shadow:</span> 0px 0px 10px 0px rgba(0, 0, 0, 0.8)</div>
          <div><span className="text-text-muted">text color:</span> white ($snackbar-font-color)</div>
          <div><span className="text-text-muted">$snackbar-color:</span> #0f7dfe</div>
          <div><span className="text-text-muted">$ngtr-notification-status-success:</span> $primary-500 (#0f559a)</div>
          <div><span className="text-text-muted">$ngtr-notification-status-failure:</span> $heart-100 (#b60016)</div>
          <div><span className="text-text-muted">button hover:</span> white bg, inherits text color</div>
          <div><span className="text-text-muted">$modal-backdrop:</span> $primary-500</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
