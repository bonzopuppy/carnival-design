import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function PhotoUploadZone({ state = 'default' }: { state?: 'default' | 'hover' | 'uploading' }) {
  return (
    <div
      className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
        state === 'hover'
          ? 'border-primary-500 bg-photo-upload-bg'
          : state === 'uploading'
          ? 'border-primary-200 bg-photo-upload-bg'
          : 'border-black-25 bg-card'
      }`}
    >
      {state === 'uploading' ? (
        <>
          <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin" />
          <div className="font-tempo text-sm text-primary-500 tracking-wider mb-1">UPLOADING PHOTOS...</div>
          <p className="text-sm text-text-muted">12 of 48 photos uploaded</p>
        </>
      ) : (
        <>
          <img src="/icons/add-photo.svg" alt="" className="mx-auto mb-4 w-12 h-12" />
          <div className="font-tempo text-sm text-text tracking-wider mb-1">UPLOAD YOUR PHOTOS</div>
          <p className="text-sm text-text-muted">We recommend at least 40 photos for a great photobook</p>
        </>
      )}
    </div>
  )
}

export default function PhotoUploadZonePage() {
  return (
    <PageLayout
      title="PHOTO UPLOAD ZONE"
      subtitle="Dashed border upload area. Uses $photo-upload-bg-color: #c2daf140, $primary-500 for active/hover borders, $photo-selected-border-color: #4185ef."
    >
      <ShowcaseSection title="Default">
        <div className="max-w-lg mx-auto">
          <PhotoUploadZone />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Hover / Drag Over">
        <div className="max-w-lg mx-auto">
          <PhotoUploadZone state="hover" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Uploading">
        <div className="max-w-lg mx-auto">
          <PhotoUploadZone state="uploading" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Upload Zone Tokens">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">$photo-upload-bg-color:</span> #c2daf140</div>
          <div><span className="text-text-muted">$photo-selected-border-color:</span> #4185ef</div>
          <div><span className="text-text-muted">border (default):</span> $black-25 (#00000040)</div>
          <div><span className="text-text-muted">border (active):</span> $primary-500 (#0f559a)</div>
          <div><span className="text-text-muted">spinner color:</span> $primary-500</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
