import PageLayout from '../components/PageLayout'
import ShowcaseSection from '../components/ShowcaseSection'

function Button({
  variant = 'primary',
  size = 'lg',
  disabled = false,
  children,
}: {
  variant?: 'primary' | 'secondary' | 'cta' | 'link' | 'danger'
  size?: 'lg' | 'sm'
  disabled?: boolean
  children: React.ReactNode
}) {
  const base = 'inline-flex items-center justify-center font-tempo tracking-wider uppercase transition-all min-w-[135px]'
  const sizes = {
    lg: 'h-[52px] px-5 text-[16px] rounded-[2px]',
    sm: 'h-[44px] px-5 text-[16px] rounded-[2px]',
  }
  const variants = {
    primary: `bg-primary-500 text-white border border-primary-500 hover:bg-primary-400 hover:border-primary-400 active:bg-primary-700 active:border-primary-700 focus:bg-primary-600 ${disabled ? 'opacity-20 cursor-not-allowed' : ''}`,
    cta: `bg-secondary-500 text-white border border-secondary-500 hover:bg-secondary-500 active:bg-secondary-700 active:border-secondary-700 focus:bg-secondary-600 ${disabled ? 'opacity-20 cursor-not-allowed' : ''}`,
    secondary: `bg-white text-primary-500 border border-primary-500 hover:text-primary-400 hover:border-primary-400 active:text-primary-700 active:border-primary-700 ${disabled ? 'opacity-20 cursor-not-allowed' : ''}`,
    link: `bg-transparent text-primary-500 border-b-[1.5px] border-primary-200 rounded-none min-w-0 px-0 hover:border-primary-500 ${disabled ? 'opacity-20 cursor-not-allowed' : ''}`,
    danger: `bg-white text-error border border-error hover:bg-secondary-200/20 ${disabled ? 'opacity-20 cursor-not-allowed' : ''}`,
  }

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]}`} disabled={disabled}>
      {children}
    </button>
  )
}

export default function ButtonPage() {
  return (
    <PageLayout
      title="BUTTON"
      subtitle="Carnival buttons use TempoStd font, uppercase, 2px border-radius. Height: 52px (lg) / 44px (sm). Min-width: 135px."
    >
      <ShowcaseSection title="Variants — Large (52px)">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">PRIMARY</Button>
          <Button variant="cta">CTA (RED)</Button>
          <Button variant="secondary">SECONDARY</Button>
          <Button variant="link">LINK STYLE</Button>
          <Button variant="danger">DANGER</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants — Small (44px)">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">PRIMARY</Button>
          <Button variant="cta" size="sm">CTA (RED)</Button>
          <Button variant="secondary" size="sm">SECONDARY</Button>
          <Button variant="link" size="sm">LINK STYLE</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Primary States">
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <div className="bg-primary-500 text-white border border-primary-500 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">DEFAULT</div>
            <div className="text-[10px] text-text-muted mt-2">$primary-500</div>
          </div>
          <div className="text-center">
            <div className="bg-primary-400 text-white border border-primary-400 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">HOVER</div>
            <div className="text-[10px] text-text-muted mt-2">$primary-400</div>
          </div>
          <div className="text-center">
            <div className="bg-primary-600 text-white border border-primary-600 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">FOCUS</div>
            <div className="text-[10px] text-text-muted mt-2">$primary-600</div>
          </div>
          <div className="text-center">
            <div className="bg-primary-700 text-white border border-primary-700 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">ACTIVE</div>
            <div className="text-[10px] text-text-muted mt-2">$primary-700</div>
          </div>
          <div className="text-center">
            <div className="bg-primary-500 text-white border border-primary-500 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px] opacity-20">DISABLED</div>
            <div className="text-[10px] text-text-muted mt-2">opacity: 0.2</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="CTA (Red) States">
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <div className="bg-secondary-500 text-white border border-secondary-500 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">DEFAULT</div>
            <div className="text-[10px] text-text-muted mt-2">$secondary-500</div>
          </div>
          <div className="text-center">
            <div className="bg-secondary-600 text-white border border-secondary-600 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">FOCUS</div>
            <div className="text-[10px] text-text-muted mt-2">$secondary-600</div>
          </div>
          <div className="text-center">
            <div className="bg-secondary-700 text-white border border-secondary-700 font-tempo uppercase tracking-wider inline-flex items-center justify-center h-[52px] px-5 text-[16px] rounded-[2px] min-w-[135px]">ACTIVE</div>
            <div className="text-[10px] text-text-muted mt-2">$secondary-700</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Full-Width CTA (Card Context)">
        <div className="max-w-xs">
          <button className="w-full bg-primary-500 text-white font-tempo uppercase tracking-wider rounded-[2px] h-[52px] text-[16px] hover:bg-primary-400 transition-colors">
            CREATE YOUR BOOK
          </button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Tokens Reference">
        <div className="text-sm space-y-1 font-mono text-text-secondary">
          <div><span className="text-text-muted">$ngtr-button-font-family:</span> $header-font (TempoStd)</div>
          <div><span className="text-text-muted">$ngtr-button-font-size:</span> 16px</div>
          <div><span className="text-text-muted">$ngtr-button-font-weight:</span> $font-weight-normal (400)</div>
          <div><span className="text-text-muted">$ngtr-button-text-transform:</span> uppercase</div>
          <div><span className="text-text-muted">$ngtr-button-large-height:</span> 52px</div>
          <div><span className="text-text-muted">$ngtr-button-large-padding:</span> 14px 20px</div>
          <div><span className="text-text-muted">$ngtr-button-large-border-radius:</span> 2px</div>
          <div><span className="text-text-muted">$ngtr-button-small-height:</span> 44px</div>
          <div><span className="text-text-muted">$ngtr-button-small-padding:</span> 12px 20px</div>
          <div><span className="text-text-muted">$ngtr-button-small-border-radius:</span> 2px</div>
          <div><span className="text-text-muted">$ngtr-button-min-width:</span> 135px</div>
          <div><span className="text-text-muted">$btn-box-shadow:</span> none</div>
          <div><span className="text-text-muted">$ngtr-button-disabled-color:</span> $black-100 (opacity 0.2)</div>
        </div>
      </ShowcaseSection>
    </PageLayout>
  )
}
