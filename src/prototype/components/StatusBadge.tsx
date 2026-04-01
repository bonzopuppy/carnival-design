type StatusVariant = 'completed' | 'in-progress' | 'draft' | 'archived' | 'expired' | 'included'

const variantClasses: Record<StatusVariant, string> = {
  completed: 'bg-primary-50 text-primary-500',
  'in-progress': 'bg-sunflower-10 text-sunflower-100',
  draft: 'bg-primary-50 text-primary-400',
  archived: 'bg-blackboard-10 text-blackboard-100',
  expired: 'bg-secondary-200 text-secondary-700',
  included: 'bg-primary-500 text-white',
}

export default function StatusBadge({ variant, children }: { variant: StatusVariant; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
