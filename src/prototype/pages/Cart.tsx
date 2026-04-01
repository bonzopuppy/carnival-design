import { Link, useNavigate } from 'react-router-dom'
import { usePrototype } from '../PrototypeContext'
import Button from '../components/Button'

export default function Cart() {
  const { cart, removeFromCart } = usePrototype()
  const navigate = useNavigate()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 8.49 : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <img src="/icons/cart.svg" alt="" className="w-12 h-12 opacity-20 mx-auto mb-4" />
        <h1 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 24 }}>Your Cart is Empty</h1>
        <p className="text-sm text-text-secondary mb-6">Add some products from the marketplace.</p>
        <Button variant="primary" size="sm" to="/prototype/marketplace">Browse Marketplace</Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-6">
      <h1 className="font-tempo text-text uppercase mb-6" style={{ fontSize: 28 }}>Your Cart</h1>

      <div className="space-y-3 mb-6">
        {cart.map(item => (
          <div key={item.productId} className="bg-card rounded-lg border border-border p-4 flex items-center gap-4">
            {/* Thumbnail — card image pattern */}
            <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
              <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-8 h-8 opacity-20" />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-text">{item.name}</div>
              <div className="text-xs text-text-muted mt-0.5">
                Personalization: {item.personalization}
              </div>
              <div className="text-xs text-text-muted">Qty: {item.quantity}</div>
            </div>

            {/* Price & Actions */}
            <div className="text-right shrink-0">
              {/* Price tag pattern */}
              <div className="text-lg font-bold text-primary-500">${(item.price * item.quantity).toFixed(2)}</div>
              <div className="flex items-center gap-3 mt-2">
                {/* Edit link — design system edit link pattern */}
                <Link
                  to={`/prototype/editor/${item.productId}`}
                  className="text-primary-500 font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4"
                >
                  Edit
                </Link>
                {/* Danger link */}
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="text-error font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary — card pattern */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 18 }}>Order Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Estimated Shipping</span>
            <span className="font-bold">${shipping.toFixed(2)}</span>
          </div>
          <div className="border-t border-border pt-3 mt-3 flex justify-between">
            {/* Total — price tag large pattern */}
            <span className="font-bold">Estimated Total</span>
            <span className="text-xl font-bold text-primary-500">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-5">
          <Button variant="cta" fullWidth onClick={() => navigate('/prototype/checkout')}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
