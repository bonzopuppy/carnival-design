import { useNavigate } from 'react-router-dom'

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <svg width="16" height="16" viewBox="0 0 13.3333 13.3333" fill="none" className="shrink-0 mt-0.5">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 6.66667C0 2.98667 2.98667 0 6.66667 0C10.3467 0 13.3333 2.98667 13.3333 6.66667C13.3333 10.3467 10.3467 13.3333 6.66667 13.3333C2.98667 13.3333 0 10.3467 0 6.66667ZM2 6.66667L5.33333 10L11.3333 4L10.3933 3.05333L5.33333 8.11333L2.94 5.72667L2 6.66667Z" fill="#0F559A"/>
      </svg>
      <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: '#000' }}>
        {children}
      </span>
    </div>
  )
}

export default function BookSelection() {
  const navigate = useNavigate()

  return (
    <div className="bg-white">
      <div className="max-w-[1210px] mx-auto px-6 py-6">
        {/* Header */}
        <div className="relative mb-10">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1 flex items-center gap-1"
          >
            <img
              src="/icons/arrow-left.svg"
              alt=""
              className="w-5 h-5"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
            />
            <span
              className="font-tempo text-primary-500 uppercase pb-0.5"
              style={{ fontSize: 18, borderBottom: '1.5px solid #9ABDDE' }}
            >
              Back
            </span>
          </button>

          <h1 className="font-tempo text-text uppercase text-center" style={{ fontSize: 28, lineHeight: 1.2 }}>
            The Best Moments Deserve More Space
          </h1>
          <p
            className="text-center mt-3 mx-auto"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 15, lineHeight: 1.4, color: 'rgba(0,0,0,0.7)', maxWidth: 520 }}
          >
            Want bigger pages to showcase your best shots?<br />Upgrade to a 10x10 standard or premium book.
          </p>
        </div>

        {/* Book cards — Standard + Premium */}
        <div className="flex justify-center relative" style={{ gap: 26 }}>
          {/* Premium badge — starburst */}
          <div
            className="absolute z-10 flex items-center justify-center text-center"
            style={{ right: 25, top: -30, width: 117, height: 123 }}
          >
            <img src="/images/badge-starburst.svg" alt="" className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(6deg)' }} />
            <span className="relative px-1" style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: 1.2, color: 'white', maxWidth: 113 }}>
              Choose for extra pages, bigger layouts, and Carnival&#8209;branded images
            </span>
          </div>

          {/* Standard Book */}
          <div className="bg-primary-50 flex flex-col items-center px-6 pt-6 pb-6" style={{ width: 502, minHeight: 539 }}>
            {/* Book images — cover + spread side by side */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/images/book-cover-standard.png" alt="Standard book cover" style={{ height: 115, position: 'relative' as const, top: -3, filter: 'drop-shadow(3px 3px 8px rgba(0,0,0,0.2))' }} />
              <img src="/images/book-spread-standard.png" alt="Standard book spread" style={{ height: 131, filter: 'drop-shadow(2px 2px 6px rgba(0,0,0,0.15))' }} />
            </div>

            {/* Title — red */}
            <h3 className="font-tempo text-secondary-500 uppercase text-center mb-3" style={{ fontSize: 22, lineHeight: 1.1 }}>
              Standard Book (10" x 10")
            </h3>

            {/* Subtitle */}
            <p className="text-center mb-4" style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: 1.3, color: '#000' }}>
              Choose standard if you want:
            </p>

            {/* Features */}
            <div className="space-y-4 mb-6 w-full" style={{ maxWidth: 330 }}>
              <CheckItem>A classic hardcover with traditional binding</CheckItem>
              <CheckItem>Just the right amount of space for your favorite moments (up to 28 pages)</CheckItem>
              <CheckItem>A beautiful, well-balanced keepsake you'll enjoy pulling off the shelf</CheckItem>
            </div>

            {/* Price */}
            <div className="text-center mb-4 mt-auto">
              <span className="font-tempo text-primary-500" style={{ fontSize: 28, lineHeight: 1.2 }}>$74.99</span>
              <p style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 12, lineHeight: 1.2, color: '#0F559A', marginTop: 4 }}>Free shipping</p>
            </div>

            {/* CTA */}
            <button
              className="bg-primary-500 text-white font-tempo uppercase rounded-[2px] hover:bg-primary-400 transition-colors"
              style={{ width: 326, height: 44, fontSize: 16, letterSpacing: '0.64px' }}
            >
              Select Standard Book
            </button>
          </div>

          {/* Premium Book */}
          <div className="bg-primary-50 flex flex-col items-center px-6 pt-6 pb-6" style={{ width: 502, minHeight: 539 }}>
            {/* Book images — cover + spread side by side */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/images/book-cover-premium.png" alt="Premium book cover" style={{ height: 115, position: 'relative' as const, top: -3, filter: 'drop-shadow(3px 3px 8px rgba(0,0,0,0.2))' }} />
              <img src="/images/book-spread-premium.png" alt="Premium book spread" style={{ height: 131, filter: 'drop-shadow(2px 2px 6px rgba(0,0,0,0.15))' }} />
            </div>

            {/* Title — red */}
            <h3 className="font-tempo text-secondary-500 uppercase text-center mb-3" style={{ fontSize: 22, lineHeight: 1.1 }}>
              Premium Book (10" x 10")
            </h3>

            <p className="text-center mb-4" style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: 1.3, color: '#000' }}>
              Choose premium if you want:
            </p>

            <div className="space-y-4 mb-6 w-full" style={{ maxWidth: 330 }}>
              <CheckItem>The most luxe and display-worthy souvenir with our signature layflat design and thicker pages</CheckItem>
              <CheckItem>Extra space for every memory (up to 34 pages)</CheckItem>
              <CheckItem>Full-page spreads and enhanced layouts for a more immersive way to relive your cruise</CheckItem>
            </div>

            <div className="text-center mb-4 mt-auto">
              <span className="font-tempo text-primary-500" style={{ fontSize: 28, lineHeight: 1.2 }}>$109.99</span>
              <p style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 12, lineHeight: 1.2, color: '#0F559A', marginTop: 4 }}>Free shipping</p>
            </div>

            <button
              className="bg-primary-500 text-white font-tempo uppercase rounded-[2px] hover:bg-primary-400 transition-colors"
              style={{ width: 326, height: 44, fontSize: 16, letterSpacing: '0.64px' }}
            >
              Select Premium Book
            </button>
          </div>
        </div>

        {/* Compact Book — bottom card */}
        <div
          className="mx-auto flex items-center mt-8 overflow-hidden"
          style={{ maxWidth: 650, height: 163, backgroundColor: '#F3F6FA' }}
        >
          {/* Book image */}
          <div className="shrink-0 overflow-hidden" style={{ width: 151, height: 163 }}>
            <img src="/images/book-compact.png" alt="Compact book" className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex-1 px-5 py-4">
            <h4 className="font-tempo text-text uppercase mb-1" style={{ fontSize: 18, lineHeight: 1.2 }}>
              Compact Book (6" x 6")
            </h4>
            <p className="mb-3" style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 16, lineHeight: 1.3, color: '#4A5565', maxWidth: 291 }}>
              Softcover, 20 pages. Your photos only, no Carnival images included.
            </p>
            <button
              className="inline-flex items-center gap-3 bg-white border border-primary-500 text-primary-500 font-tempo uppercase rounded-[2px] px-5 py-3 hover:bg-primary-50 transition-colors"
              style={{ fontSize: 16, letterSpacing: '0.64px' }}
            >
              Select Compact Book
              <svg width="13" height="13" viewBox="0 0 13.3333 13.3333" fill="none">
                <path d="M6.66667 0L5.49167 1.175L10.1417 5.83333H0V7.5H10.1417L5.49167 12.1583L6.66667 13.3333L13.3333 6.66667L6.66667 0Z" fill="#0F559A"/>
              </svg>
            </button>
          </div>

          {/* Price — right aligned */}
          <div className="shrink-0 text-right pr-6" style={{ width: 118 }}>
            <span className="font-tempo text-primary-500 uppercase" style={{ fontSize: 28, lineHeight: 1.2 }}>Free</span>
            <p style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 12, color: '#2C69A6', marginTop: 2 }}>Shipping not included</p>
          </div>
        </div>
      </div>
    </div>
  )
}
