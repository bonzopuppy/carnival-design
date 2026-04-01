import { Link } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'

const mockOrders = [
  { id: 'ord-001', productName: 'Leather Luggage Tag', personalization: 'J.S.', date: 'March 28, 2026', price: 19.99, status: 'Shipped' as const },
  { id: 'ord-002', productName: 'Softstyle T-Shirt', personalization: 'Carnival 2026', date: 'March 25, 2026', price: 24.99, status: 'Delivered' as const },
  { id: 'ord-003', productName: 'Wall Calendar', personalization: '12 cruise photos', date: 'March 20, 2026', price: 14.99, status: 'Delivered' as const },
]

export default function OrderHistory() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-6">
      <h1 className="font-tempo text-text uppercase mb-6" style={{ fontSize: 28 }}>Order History</h1>

      <div className="space-y-3">
        {mockOrders.map(order => (
          <div key={order.id} className="bg-card rounded-lg border border-border p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
            {/* Thumbnail — card image pattern */}
            <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
              <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-8 h-8 opacity-20" />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-text">{order.productName}</div>
              <div className="text-xs text-text-muted mt-0.5">Personalization: {order.personalization}</div>
              <div className="text-xs text-text-muted">Ordered: {order.date}</div>
            </div>

            {/* Status & Price */}
            <div className="text-right shrink-0">
              <div className="text-lg font-bold text-primary-500">${order.price.toFixed(2)}</div>
              <div className="mt-1">
                <StatusBadge variant={order.status === 'Delivered' ? 'completed' : 'in-progress'}>
                  {order.status}
                </StatusBadge>
              </div>
            </div>

            {/* Actions — edit link pattern */}
            <div className="shrink-0 flex flex-col gap-2">
              <Link
                to="/prototype/marketplace"
                className="text-primary-500 font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                Reorder
              </Link>
              <button className="text-primary-500 font-bold uppercase text-xs tracking-wider hover:underline underline-offset-4">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
