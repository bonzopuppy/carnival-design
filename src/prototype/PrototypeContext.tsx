import { createContext, useContext, useState, type ReactNode } from 'react'

export type JourneyState = 'none' | 'pre-cruise' | 'in-cruise' | 'post-cruise'
export type Entitlement = 'none' | 'compact-book' | 'calendar' | 'both'
export type EntryPoint = 'direct' | 'pre-cruise-email' | 'post-cruise-email'

interface CartItem {
  productId: string
  name: string
  price: number
  personalization: string
  quantity: number
}

interface PrototypeState {
  journeyState: JourneyState
  entitlement: Entitlement
  entryPoint: EntryPoint
  cart: CartItem[]
  setJourneyState: (s: JourneyState) => void
  setEntitlement: (e: Entitlement) => void
  setEntryPoint: (e: EntryPoint) => void
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string) => void
  updateCartItem: (productId: string, updates: Partial<CartItem>) => void
  clearCart: () => void
}

const PrototypeContext = createContext<PrototypeState | null>(null)

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [journeyState, setJourneyState] = useState<JourneyState>('pre-cruise')
  const [entitlement, setEntitlement] = useState<Entitlement>('none')
  const [entryPoint, setEntryPoint] = useState<EntryPoint>('direct')
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.productId === item.productId)
      if (existing) {
        return prev.map(i => i.productId === item.productId ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, item]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(i => i.productId !== productId))
  }

  const updateCartItem = (productId: string, updates: Partial<CartItem>) => {
    setCart(prev => prev.map(i => i.productId === productId ? { ...i, ...updates } : i))
  }

  const clearCart = () => setCart([])

  return (
    <PrototypeContext.Provider value={{
      journeyState, entitlement, entryPoint, cart,
      setJourneyState, setEntitlement, setEntryPoint,
      addToCart, removeFromCart, updateCartItem, clearCart,
    }}>
      {children}
    </PrototypeContext.Provider>
  )
}

export function usePrototype() {
  const ctx = useContext(PrototypeContext)
  if (!ctx) throw new Error('usePrototype must be used within PrototypeProvider')
  return ctx
}
