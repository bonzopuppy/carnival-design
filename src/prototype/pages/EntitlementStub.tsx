import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import StatusBadge from '../components/StatusBadge'

export default function EntitlementStub() {
  const { type } = useParams()
  const isBook = type === 'book'

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <div className="bg-card rounded-lg border border-border p-8">
        {/* Product image — card pattern */}
        <div className="w-20 h-20 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4">
          <img src="/icons/marketplace-item-placeholder.svg" alt="" className="w-10 h-10 opacity-20" />
        </div>

        <h1 className="font-tempo text-text uppercase mb-2" style={{ fontSize: 24 }}>
          {isBook ? 'Compact Photo Book' : 'Wall Calendar'}
        </h1>

        <div className="mb-4">
          <StatusBadge variant="included">Included with your package</StatusBadge>
        </div>

        <p className="text-sm text-text-secondary mb-6 max-w-sm mx-auto leading-relaxed">
          {isBook
            ? 'Your complimentary compact photo book is ready to build. Upload your cruise photos and create a keepsake to remember your voyage.'
            : 'Your complimentary wall calendar is ready to customize. Select your favorite cruise photos for each month.'}
        </p>

        {/* Stub notice — info banner pattern */}
        <div
          className="w-full text-white text-center flex items-center justify-center gap-4 px-4 rounded-[2px] mb-6"
          style={{ height: 50, backgroundColor: '#0f7dfe' }}
        >
          <span className="text-sm">
            Stub screen — launches {isBook ? 'book builder' : 'calendar editor'} in full app
          </span>
        </div>

        <Button variant="primary" size="sm" to="/prototype/book/demo">Back to Homepage</Button>
      </div>
    </div>
  )
}
