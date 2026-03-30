'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = navShow ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [navShow])

  useEffect(() => {
    setNavShow(false)
  }, [pathname])

  const onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="icon-button lg:hidden">
        <span className="relative h-4 w-4">
          <span
            className={`absolute left-0 top-0 h-[1.5px] w-4 rounded-full bg-current transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              navShow ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] h-[1.5px] w-4 rounded-full bg-current transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              navShow ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-current transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              navShow ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <div
        className={`pointer-events-none fixed inset-0 z-50 lg:hidden ${
          navShow ? 'pointer-events-auto' : ''
        }`}
      >
        <button
          aria-label="Close Menu"
          onClick={onToggleNav}
          className={`absolute inset-0 bg-[rgba(16,12,10,0.42)] backdrop-blur-sm transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            navShow ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`surface-shell absolute left-4 right-4 top-24 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            navShow ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="surface-panel p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Menu
                </p>
                <p className="mt-1 font-serif text-2xl tracking-[-0.04em] text-[var(--color-fg)]">
                  Explore the journal
                </p>
              </div>
              <span className="eyebrow">Navigation</span>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {headerNavLinks.map((link, index) => {
                const active =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(`${link.href}/`))

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={onToggleNav}
                    className={`rounded-[1.5rem] px-4 py-3 text-lg font-medium transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      active
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]'
                        : 'bg-transparent text-[var(--color-fg)]'
                    } ${navShow ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
                    style={{ transitionDelay: navShow ? `${index * 70}ms` : '0ms' }}
                  >
                    {link.title}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-6 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-accent-soft)] px-4 py-4 text-sm text-[var(--color-muted-strong)]">
              Articles on architecture, delivery, and software craft.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
