import { useNavigate } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'
import Button from '../components/Button'

export default function Checkout() {
  const { cart, clearCart } = usePrototype()
  const navigate = useNavigate()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 8.49
  const total = subtotal + shipping

  const handlePlaceOrder = () => {
    clearCart()
    navigate('/prototype/confirmation')
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-6">
      <h1 className="font-tempo text-text uppercase mb-6" style={{ fontSize: 28 }}>Checkout</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Forms */}
        <div className="md:col-span-2 space-y-5">
          {/* Shipping — card pattern */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 18 }}>Shipping Address</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">First Name</label>
                {/* Pre-filled — fixing known bug from UX audit */}
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">Last Name</label>
                <input
                  type="text"
                  defaultValue="Smith"
                  className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-text-secondary mb-1">Address</label>
                <input type="text" placeholder="Street address" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">City</label>
                <input type="text" placeholder="City" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">State</label>
                <input type="text" placeholder="State" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">ZIP Code</label>
                <input type="text" placeholder="ZIP" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">Country</label>
                <input type="text" defaultValue="United States" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Payment — card pattern */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 18 }}>Payment</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-text-secondary mb-1">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-text-secondary mb-1">CVV</label>
                  <input type="text" placeholder="123" className="w-full h-[44px] px-3 border border-border rounded-[2px] text-sm focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar — card pattern */}
        <div>
          <div className="bg-card rounded-lg border border-border p-5 sticky top-4">
            <h2 className="font-tempo text-text uppercase mb-3" style={{ fontSize: 18 }}>Order Summary</h2>

            <div className="space-y-2 mb-3">
              {cart.map(item => (
                <div key={item.productId} className="flex justify-between text-xs">
                  <span className="text-text-secondary truncate mr-2">{item.name} &times; {item.quantity}</span>
                  <span className="font-bold shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              {/* Shipping visible BEFORE order — fixing UX audit bug #17 */}
              <div className="flex justify-between">
                <span className="text-text-secondary">Shipping</span>
                <span className="font-bold">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold text-primary-500">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="cta" fullWidth onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </div>

            {/* Updated shipping copy — fixing UX audit bug #16 */}
            <div className="text-[11px] text-text-muted mt-3 text-center">
              Shipping to US, Canada, and Puerto Rico
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
