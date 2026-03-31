import type { ReactNode } from 'react'

export default function PageLayout({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <>
      <h1 className="font-tempo text-4xl text-primary-500 mb-2">{title}</h1>
      <p className="text-text-secondary text-lg mb-6">{subtitle}</p>
      <hr className="border-blackboard-25 mb-10" />
      {children}
    </>
  )
}
