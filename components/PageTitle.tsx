import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-serif text-4xl leading-none tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}
