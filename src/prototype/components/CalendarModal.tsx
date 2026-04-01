import { Link } from 'react-router-dom'

interface CalendarModalProps {
  open: boolean
  onClose: () => void
}

export default function CalendarModal({ open, onClose }: CalendarModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
    >
      {/* Modal — 900px wide, rounded-[8px], white bg */}
      <div
        className="bg-white relative rounded-[8px] overflow-hidden w-full mx-4"
        style={{ maxWidth: 900, height: 752 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Heading — TempoStd 28px, black, centered, uppercase */}
        <p
          className="absolute left-1/2 -translate-x-1/2 font-tempo text-text uppercase text-center whitespace-nowrap"
          style={{ fontSize: 28, lineHeight: 1.2, top: 40 }}
        >
          Use this code to claim your free wall calendar
        </p>

        {/* Close button — top right */}
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center"
          style={{ right: 16, top: 26 }}
        >
          <img src="/icons/x-black.svg" alt="Close" className="w-5 h-5 opacity-50" />
        </button>

        {/* Code badge — bg rgba(0,0,0,0.05), rounded-[4px], Helvetica Neue Medium 16px */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-[4px] px-4 py-2"
          style={{ top: 90, backgroundColor: 'rgba(0,0,0,0.05)' }}
        >
          <span
            className="text-text uppercase whitespace-nowrap"
            style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: 1.3 }}
          >
            #I'm a code
          </span>
        </div>

        {/* Image container — 400x400, centered, rounded-[8px] */}
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-[8px]"
          style={{ width: 400, height: 400, top: 159 }}
        >
          {/* Background room image */}
          <img
            src="/images/calendar-modal-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Calendar product overlay */}
          <img
            src="/images/calendar-modal-product.png"
            alt="Wall Calendar"
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: '4%', height: '85%', width: 'auto', boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.2)' }}
          />
        </div>

        {/* Body copy — Helvetica Neue Regular 16px, #666, centered */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{
            top: 583,
            width: 358,
            fontFamily: "'HelveticaNeueRegular', sans-serif",
            fontSize: 16,
            lineHeight: 1.3,
            color: '#666',
          }}
        >
          Turn your photos into a year of memories with a personalized calendar. Each month features a moment you'll love revisiting.
        </p>

        {/* CTA Button — primary blue (#0F559A), full width with padding, TempoStd 16px */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 32 }}>
          <Link
            to="/prototype/entitlement/calendar"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-[12px] bg-primary-500 text-white font-tempo uppercase rounded-[2px] px-[20px] py-[12px] hover:bg-primary-400 transition-colors"
            style={{ fontSize: 16, lineHeight: 1.2, letterSpacing: '0.64px', paddingLeft: 40, paddingRight: 40 }}
          >
            Get Started
            <svg width="13" height="13" viewBox="0 0 13.3333 13.3333" fill="none">
              <path d="M6.66667 0L5.49167 1.175L10.1417 5.83333H0V7.5H10.1417L5.49167 12.1583L6.66667 13.3333L13.3333 6.66667L6.66667 0Z" fill="white"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
