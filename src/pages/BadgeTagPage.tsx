import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

export default function BadgeTagPage() {
  return (
    <PageLayout
      title="BADGE & TAG"
      subtitle="Ship name badges, edit link treatments, status tags, and voyage info badges. Uses $primary-500 and $secondary-500."
    >
      <ShowcaseSection title="Ship Name Badge">
        <div className="flex flex-wrap gap-3">
          {['Carnival Celebration', 'Carnival Breeze', 'Mardi Gras'].map((name) => (
            <span key={name} className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-500 text-sm font-semibold px-3 py-1.5 rounded-full">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" fill="currentColor"/>
              </svg>
              {name}
            </span>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Edit Link">
        <p className="text-xs text-text-muted mb-3">
          Uses $primary-500, font-weight: bold, uppercase, tracking-wider. Border-bottom on link variant: 1.5px solid $primary-200.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <button className="text-primary-500 font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4">
            EDIT
          </button>
          <button className="text-primary-500 font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4">
            CHANGE
          </button>
          <button className="text-primary-500 font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4">
            VIEW ALL
          </button>
          <button className="text-primary-500 font-bold uppercase text-xs tracking-wider border-b-[1.5px] border-primary-200 pb-0.5">
            LINK STYLE
          </button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Status Tags">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-50 text-primary-500">
            Completed
          </span>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sunflower-10 text-sunflower-100">
            In Progress
          </span>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-50 text-primary-400">
            Draft
          </span>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blackboard-10 text-blackboard-100">
            Archived
          </span>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary-200 text-secondary-700">
            Expired
          </span>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Carnival Tag Colors">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-500 text-white">
            $primary-500 tag
          </span>
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary-500 text-white">
            $secondary-500 tag
          </span>
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full bg-snackbar text-white">
            $snackbar tag
          </span>
        </div>
        <div className="mt-3 text-[10px] font-mono text-text-muted">
          $ngtr-tag-bg-color: $primary-500 / $ngtr-tag-font-color: $white-100
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Voyage Info Badge">
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-2">
            <span className="font-semibold text-sm text-text">Carnival Celebration</span>
            <span className="text-black-25">&middot;</span>
            <span className="text-sm text-text-muted">Jan 19 &ndash; Jan 26, 2026</span>
            <button className="text-primary-500 font-bold uppercase text-xs tracking-wider ml-2 hover:underline">EDIT</button>
          </div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
