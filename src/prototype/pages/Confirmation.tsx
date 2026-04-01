import Button from '../components/Button'

export default function Confirmation() {
  const orderNumber = `CM-${Date.now().toString().slice(-6)}`

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <div className="bg-card rounded-lg border border-border p-8">
        {/* Success icon — design system circle check */}
        <div className="mx-auto mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto">
            <circle cx="32" cy="32" r="32" fill="#0F559A" opacity="0.1"/>
            <circle cx="32" cy="32" r="24" fill="#0F559A"/>
            <path d="M22 32L29 39L42 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 28 }}>Order Confirmed</h1>
        <p className="text-sm text-text-secondary mb-1">Thank you for your order!</p>
        <p className="text-xs text-text-muted mb-6">Order #{orderNumber}</p>

        {/* Summary — voyage info badge pattern */}
        <div className="bg-primary-50 rounded-lg p-4 mb-6 text-left">
          <h2 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 18 }}>Order Summary</h2>
          <div className="text-sm text-text-secondary space-y-2">
            <div className="flex justify-between">
              <span>Estimated delivery</span>
              <span className="font-bold text-text">5–7 business days</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-bold text-text">$8.49</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-text-muted mb-6">
          A confirmation email has been sent to your account email address.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" size="sm" to="/prototype/order-history">View Order History</Button>
          <Button variant="secondary" size="sm" to="/prototype/marketplace">Back to Marketplace</Button>
        </div>
      </div>
    </div>
  )
}
