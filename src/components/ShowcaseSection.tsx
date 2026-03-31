import type { ReactNode } from 'react'

export default function ShowcaseSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4">
        {title}
      </h2>
      <div className="bg-chalk rounded-xl border border-blackboard-25 p-8">
        {children}
      </div>
    </section>
  )
}
