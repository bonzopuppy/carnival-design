import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

const checkCircleSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 6.66667C0 2.98667 2.98667 0 6.66667 0C10.3467 0 13.3333 2.98667 13.3333 6.66667C13.3333 10.3467 10.3467 13.3333 6.66667 13.3333C2.98667 13.3333 0 10.3467 0 6.66667ZM2 6.66667L5.33333 10L11.3333 4L10.3933 3.05333L5.33333 8.11333L2.94 5.72667L2 6.66667Z" fill="#0F559A" />
  </svg>
)

function BookCard({
  title,
  subtitle,
  features,
  price,
  shipping = 'Free Shipping',
  buttonText,
}: {
  title: string
  subtitle: string
  features: string[]
  price: string
  shipping?: string
  buttonText: string
}) {
  return (
    <div className="w-[360px] bg-white rounded-lg flex flex-col">
      {/* Book images — cover + spread */}
      <div className="px-6 pt-6">
        <div className="h-40 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
          <div className="w-20 h-28 bg-white rounded shadow-md flex items-center justify-center">
            <div className="text-center">
              <div className="font-tempo text-primary-500 text-[8px] tracking-wider">CARNIVAL</div>
              <div className="w-12 h-8 bg-primary-50 rounded mx-auto my-1" />
            </div>
          </div>
        </div>
        <div className="h-28 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-14 h-20 bg-white rounded shadow-sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col flex-1">
        {/* Title — headline-m, $primary-500 blue */}
        <h3 className="font-tempo text-primary-500 uppercase tracking-wide text-center mb-4" style={{ fontSize: '22px' }}>
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-text text-center mb-4">{subtitle}</p>

        {/* Feature checklist — blue circle-check + body-s */}
        <div className="space-y-3 mb-6">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-2.5">
              {checkCircleSvg}
              <span className="text-sm text-text">{f}</span>
            </div>
          ))}
        </div>

        {/* Price — headline-l, $primary-500, centered */}
        <div className="text-center mt-auto">
          <div className="font-tempo text-primary-500 mb-1" style={{ fontSize: '32px' }}>{price}</div>
          <div className="text-sm text-primary-500 italic mb-5">{shipping}</div>
        </div>

        {/* CTA button — full width, primary */}
        <button className="w-full bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default function CardPage() {
  return (
    <PageLayout
      title="CARD"
      subtitle="Book selection cards from the Create Your Book page. Title and price in $primary-500 blue TempoStd. Blue filled circle-check icons. Full-width primary CTA."
    >
      <ShowcaseSection title="Standard Book">
        <BookCard
          title='STANDARD BOOK (10" X 10")'
          subtitle="Choose Standard if you want:"
          features={[
            'A classic hardcover with traditional binding',
            'Just the right amount of space for your favorite moments (up to 28 pages)',
            'A beautiful, well-balanced keepsake you\'ll enjoy pulling off the shelf',
          ]}
          price="$74.99"
          buttonText="SELECT STANDARD BOOK"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Premium Book">
        <BookCard
          title='PREMIUM BOOK (10" X 10")'
          subtitle="Choose Premium if you want:"
          features={[
            'The most luxe and display-worthy souvenir with our signature layflat design and thicker pages',
            'Extra space for every memory (up to 34 pages)',
            'Full-page spreads and enhanced layouts for a more immersive way to relive your cruise',
          ]}
          price="$109.99"
          buttonText="SELECT PREMIUM BOOK"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Side by Side (as on live site)">
        <div className="flex gap-6 flex-wrap justify-center">
          <BookCard
            title='STANDARD BOOK (10" X 10")'
            subtitle="Choose Standard if you want:"
            features={[
              'A classic hardcover with traditional binding',
              'Just the right amount of space for your favorite moments (up to 28 pages)',
              'A beautiful, well-balanced keepsake you\'ll enjoy pulling off the shelf',
            ]}
            price="$74.99"
            buttonText="SELECT STANDARD BOOK"
          />
          <BookCard
            title='PREMIUM BOOK (10" X 10")'
            subtitle="Choose Premium if you want:"
            features={[
              'The most luxe and display-worthy souvenir with our signature layflat design and thicker pages',
              'Extra space for every memory (up to 34 pages)',
              'Full-page spreads and enhanced layouts for a more immersive way to relive your cruise',
            ]}
            price="$109.99"
            buttonText="SELECT PREMIUM BOOK"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Card Tokens Reference">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">title:</span> .headline-m — TempoStd, 22px, uppercase, $primary-500, centered</div>
          <div><span className="text-text-muted">subtitle:</span> .body-s — 14px, normal weight, centered</div>
          <div><span className="text-text-muted">feature icon:</span> filled circle-check SVG, $primary-500 (#0F559A)</div>
          <div><span className="text-text-muted">feature text:</span> .body-s — 14px, normal weight</div>
          <div><span className="text-text-muted">price:</span> .headline-l .primary — TempoStd, ~32px, $primary-500, centered</div>
          <div><span className="text-text-muted">shipping:</span> .body-s .primary — 14px, $primary-500, italic, centered</div>
          <div><span className="text-text-muted">CTA button:</span> full-width, $primary-500 bg, 52px height, 2px radius</div>
          <div><span className="text-text-muted">card background:</span> white, no visible border on live site</div>
          <div><span className="text-text-muted">card gap:</span> 24px between cards</div>
          <div><span className="text-text-muted">books shown:</span> Standard + Premium (no Compact on Carnival)</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
