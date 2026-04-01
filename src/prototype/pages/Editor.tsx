import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProductById } from '../data/products'

// Product shape outlines for the dashed canvas (width x height ratios)
const productShapes: Record<string, { w: number; h: number; label: string }> = {
  'leather-luggage-tag': { w: 280, h: 400, label: 'Luggage Tag' },
  'leather-passport-holder': { w: 300, h: 380, label: 'Passport Holder' },
  'engraved-toiletry-bag': { w: 380, h: 260, label: 'Toiletry Bag' },
  'soft-leather-journal': { w: 300, h: 380, label: 'Journal' },
  'softstyle-tshirt': { w: 340, h: 380, label: 'T-Shirt' },
  'wall-calendar': { w: 320, h: 380, label: 'Calendar' },
  'personalized-mug': { w: 380, h: 280, label: 'Mug' },
  'canvas-print': { w: 360, h: 280, label: 'Canvas' },
  ornaments: { w: 280, h: 280, label: 'Ornament' },
}

export default function Editor() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId || '')
  const [text, setText] = useState('')
  const [editing, setEditing] = useState(false)
  const [fontSize, setFontSize] = useState(32)
  const [textAlign, setTextAlign] = useState(1) // 0=left, 1=center, 2=right
  const [fontFamily, setFontFamily] = useState('Brush Script MT')
  const [textColor, setTextColor] = useState('#555555')

  if (!product) {
    return (
      <div className="bg-white h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-tempo text-text uppercase mb-4" style={{ fontSize: 28 }}>Product Not Found</h1>
          <button onClick={() => navigate(-1)} className="font-tempo text-primary-500 uppercase text-sm">← Back</button>
        </div>
      </div>
    )
  }

  const shape = productShapes[product.id] || { w: 300, h: 380, label: 'Product' }
  const isTextProduct = ['leather-luggage-tag', 'leather-passport-holder', 'engraved-toiletry-bag', 'soft-leather-journal'].includes(product.id)
  const subtotal = product.price.toFixed(2)

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-[26px] py-[24px] border-b shrink-0"
        style={{ borderColor: 'rgba(0,0,0,0.25)', height: 58 }}
      >
        <h1 className="font-tempo text-text uppercase text-center flex-1" style={{ fontSize: 28, lineHeight: 1.2 }}>
          Edit Design
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="absolute right-[26px] flex items-center gap-1.5"
        >
          <img src="/icons/x-black.svg" alt="" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }} />
          <span
            className="font-tempo text-primary-500 uppercase pb-1"
            style={{ fontSize: 18, letterSpacing: '0.72px', borderBottom: '1.5px solid #9ABDDE' }}
          >
            Close
          </span>
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Canvas area */}
        <div className="flex-1 flex flex-col items-center justify-center relative" style={{ backgroundColor: '#FAFAFA' }}>
          {/* Info bar — only over left canvas area */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-center overflow-hidden z-10 px-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          >
            <div className="flex items-center justify-center gap-2 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <circle cx="8" cy="8" r="7.25" fill="#242627"/>
                <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="5" r="0.75" fill="white"/>
              </svg>
              <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: 1.3, color: '#000' }}>
                {isTextProduct ? 'Click text to edit.' : 'Click an element to edit.'}
              </span>
            </div>
          </div>
          {/* Undo/Redo — below info bar */}
          <div className="absolute right-4 flex items-center border border-black/10 rounded-[4px] bg-white" style={{ top: 52 }}>
            <button className="flex items-center justify-center w-9 h-9 hover:bg-primary-50 transition-colors" style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 5L3 8L6 9" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            <button className="flex items-center justify-center w-9 h-9 hover:bg-primary-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: 'scaleX(-1)' }}>
                <path d="M3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 5L3 8L6 9" stroke="#B0B0B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
          </div>

          {/* Dashed product outline with text */}
          <div
            className="flex cursor-pointer px-4"
            style={{
              width: shape.w,
              height: shape.h,
              border: '2px dashed #C3C3C3',
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: textAlign === 0 ? 'flex-start' : textAlign === 2 ? 'flex-end' : 'center',
            }}
            onClick={() => setEditing(true)}
          >
            {editing ? (
              <input
                autoFocus
                value={text}
                onChange={e => setText(e.target.value)}
                onBlur={() => { if (!text) setEditing(false) }}
                placeholder="Type here"
                className="bg-transparent outline-none w-full"
                style={{ fontFamily: `'${fontFamily}', cursive`, fontSize, color: textColor, textAlign: textAlign === 0 ? 'left' : textAlign === 2 ? 'right' : 'center' }}
              />
            ) : (
              <span style={{ fontFamily: `'${fontFamily}', cursive`, fontSize, color: textColor }}>
                {text || 'Text'}
              </span>
            )}
          </div>
        </div>

        {/* Right panel */}
        <div
          className="relative flex flex-col border-l"
          style={{ width: 450, borderColor: 'rgba(0,0,0,0.25)' }}
        >
          <div className="flex-1 overflow-y-auto px-6 pt-8">
            {/* Product name */}
            <h2
              className="font-tempo text-[#242627] uppercase mb-6"
              style={{ fontSize: 22, lineHeight: 1.1 }}
            >
              {product.name}
            </h2>

            {/* Text editing controls — inactive/dimmed */}
            <div className="space-y-6">
              {/* Font size */}
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 14, color: '#242627' }}>
                  Font size
                </span>
                <div className="inline-flex items-center border border-border-subtle rounded-[2px]" style={{ height: 36 }}>
                  <button onClick={() => setFontSize(Math.max(12, fontSize - 2))} className="flex items-center justify-center hover:bg-primary-50 transition-colors" style={{ width: 36, height: 36, borderRight: '1px solid rgba(0,0,0,0.15)' }}>
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><path d="M0 1H12" stroke="#242627" strokeWidth="1.5"/></svg>
                  </button>
                  <span className="flex items-center justify-center" style={{ width: 40, height: 36, fontFamily: "'HelveticaNeueRegular', sans-serif", fontSize: 14, color: '#242627' }}>{fontSize}</span>
                  <button onClick={() => setFontSize(Math.min(72, fontSize + 2))} className="flex items-center justify-center hover:bg-primary-50 transition-colors" style={{ width: 36, height: 36, borderLeft: '1px solid rgba(0,0,0,0.15)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 0V12M0 6H12" stroke="#242627" strokeWidth="1.5"/></svg>
                  </button>
                </div>
              </div>

              {/* Text Align */}
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 14, color: '#242627' }}>
                  Text Align
                </span>
                <div className="flex gap-1">
                  {['left', 'center', 'right'].map((align, i) => (
                    <button
                      key={align}
                      onClick={() => setTextAlign(i)}
                      className="flex items-center justify-center rounded-[2px] hover:bg-primary-50 transition-colors"
                      style={{
                        width: 36,
                        height: 36,
                        backgroundColor: i === textAlign ? '#E7EDF5' : 'transparent',
                      }}
                    >
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                        {align === 'left' && <>
                          <path d="M0 1H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M0 5H12" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M0 9H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M0 13H12" stroke="#242627" strokeWidth="1.5"/>
                        </>}
                        {align === 'center' && <>
                          <path d="M0 1H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M3 5H15" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M0 9H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M3 13H15" stroke="#242627" strokeWidth="1.5"/>
                        </>}
                        {align === 'right' && <>
                          <path d="M0 1H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M6 5H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M0 9H18" stroke="#242627" strokeWidth="1.5"/>
                          <path d="M6 13H18" stroke="#242627" strokeWidth="1.5"/>
                        </>}
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font */}
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 14, color: '#242627' }}>
                  Font
                </span>
                <div className="relative inline-flex items-center border border-border-subtle rounded-[2px]" style={{ width: 180, height: 36 }}>
                  <span className="pl-3 text-sm truncate pr-10" style={{ color: '#242627', fontFamily: `'${fontFamily}', sans-serif` }}>{fontFamily === 'Brush Script MT' ? 'Script' : fontFamily}</span>
                  <div className="absolute flex items-center justify-center" style={{ right: 0, top: 8, bottom: 8, width: 33 }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, backgroundColor: '#c4c4c4' }} />
                    <svg width="8" height="4" viewBox="0 0 8 5" fill="none" className="ml-1">
                      <path d="M1 1L4 4L7 1" stroke="#242627" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <select
                    value={fontFamily}
                    onChange={e => setFontFamily(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  >
                    <option value="Brush Script MT">Script</option>
                    <option value="TempoStd">Tempo (Display)</option>
                    <option value="HelveticaNeueRegular">Helvetica Neue</option>
                    <option value="Georgia">Serif</option>
                    <option value="Impact">Impact</option>
                  </select>
                </div>
              </div>

              {/* Color */}
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 14, color: '#242627' }}>
                  Color
                </span>
                <div className="flex gap-2">
                  {['#555555', '#000000', '#0F559A', '#DC1225', '#8B6914'].map(c => (
                    <button
                      key={c}
                      onClick={() => setTextColor(c)}
                      className={`rounded-[4px] ${textColor === c ? 'ring-2 ring-primary-400 ring-offset-2' : ''}`}
                      style={{ width: 32, height: 32, backgroundColor: c, border: '1px solid rgba(0,0,0,0.1)' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: subtotal + back/review */}
          <div className="px-4 pb-4 mt-auto shrink-0">
            <div className="flex justify-between px-2 mb-4">
              <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}>
                Subtotal:
              </span>
              <span style={{ fontFamily: "'HelveticaNeueRegular', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.3, color: '#242627' }}>
                ${subtotal}
              </span>
            </div>
            <div className="border-t border-black/10 pt-4">
            </div>
            <div className="flex items-center justify-between">
              {/* Back — tertiary button style */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1"
              >
                <img
                  src="/icons/arrow-left.svg"
                  alt=""
                  className="w-[13px] h-[13px]"
                  style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(487%) hue-rotate(176deg) brightness(93%) contrast(92%)' }}
                />
                <span
                  className="font-tempo text-primary-500 uppercase pb-0.5"
                  style={{ fontSize: 14, borderBottom: '1.5px solid #9ABDDE' }}
                >
                  Back
                </span>
              </button>
              {/* Review — active when text is entered */}
              <button
                disabled={!text}
                className="inline-flex items-center justify-center gap-3 font-tempo uppercase rounded-[2px] px-5 py-3 transition-colors"
                style={{
                  width: 180,
                  fontSize: 16,
                  lineHeight: 1.2,
                  letterSpacing: '0.64px',
                  backgroundColor: text ? '#0F559A' : '#E7EDF5',
                  color: text ? '#FFFFFF' : '#9ABDDE',
                  cursor: text ? 'pointer' : 'default',
                }}
              >
                Review
                <svg width="13" height="13" viewBox="0 0 13.3333 13.3333" fill="none">
                  <path d="M6.66667 0L5.49167 1.175L10.1417 5.83333H0V7.5H10.1417L5.49167 12.1583L6.66667 13.3333L13.3333 6.66667L6.66667 0Z" fill={text ? '#FFFFFF' : '#9ABDDE'}/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
