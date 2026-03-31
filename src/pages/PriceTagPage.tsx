import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function PriceTag({ price, caption = 'Free Shipping' }: { price: string; caption?: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-primary-500">{price}</div>
      <div className="text-sm text-text-muted">{caption}</div>
    </div>
  )
}

export default function PriceTagPage() {
  return (
    <PageLayout
      title="PRICE TAG"
      subtitle="Large $primary-500 blue price display with shipping caption, used in book cards and product tiles."
    >
      <ShowcaseSection title="Default">
        <PriceTag price="$69.99" />
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="flex gap-12">
          <div>
            <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Standard</div>
            <PriceTag price="$69.99" />
          </div>
          <div>
            <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Premium</div>
            <PriceTag price="$99.99" />
          </div>
          <div>
            <div className="text-xs text-text-muted uppercase tracking-wider mb-2">Starting at</div>
            <PriceTag price="$14.99" caption="Starting at" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="In Card Context">
        <div className="w-[320px] bg-primary-50 rounded-xl border border-border p-5">
          <h3 className="font-tempo text-secondary-500 text-base tracking-wide mb-3">STANDARD BOOK</h3>
          <PriceTag price="$69.99" />
          <button className="w-full mt-5 bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors">
            CREATE YOUR BOOK
          </button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Large Display">
        <div className="text-center py-4">
          <div className="text-5xl font-bold text-primary-500 mb-1">$69.99</div>
          <div className="text-base text-text-muted">Free Shipping &middot; Premium Hardcover</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
