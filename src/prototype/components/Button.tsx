import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'cta' | 'secondary' | 'link' | 'danger'
type Size = 'lg' | 'sm'

interface ButtonProps {
  variant?: Variant
  size?: Size
  disabled?: boolean
  fullWidth?: boolean
  to?: string
  onClick?: () => void
  children: ReactNode
  className?: string
}

const base = 'inline-flex items-center justify-center font-tempo tracking-wider uppercase transition-all min-w-[135px]'

const sizes: Record<Size, string> = {
  lg: 'h-[52px] px-5 text-[16px] rounded-[2px]',
  sm: 'h-[44px] px-5 text-[16px] rounded-[2px]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary-500 text-white border border-primary-500 hover:bg-primary-400 hover:border-primary-400 active:bg-primary-700 active:border-primary-700 focus:bg-primary-600',
  cta: 'bg-secondary-500 text-white border border-secondary-500 hover:bg-secondary-500 active:bg-secondary-700 active:border-secondary-700 focus:bg-secondary-600',
  secondary: 'bg-white text-primary-500 border border-primary-500 hover:text-primary-400 hover:border-primary-400 active:text-primary-700 active:border-primary-700',
  link: 'bg-transparent text-primary-500 border-b-[1.5px] border-primary-200 rounded-none min-w-0 px-0 hover:border-primary-500',
  danger: 'bg-white text-error border border-error hover:bg-secondary-200/20',
}

export default function Button({ variant = 'primary', size = 'lg', disabled, fullWidth, to, onClick, children, className = '' }: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? 'opacity-20 cursor-not-allowed' : ''} ${fullWidth ? 'w-full' : ''} ${className}`

  if (to && !disabled) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
