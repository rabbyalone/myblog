'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const pathname = usePathname() ?? ''

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="surface-shell mx-auto">
        <div className="surface-panel flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" aria-label={siteMetadata.headerTitle} className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-surface-strong)] text-[var(--color-fg)]">
                <Logo className="h-7 w-7" />
              </div>
              <p className="truncate text-sm font-semibold tracking-[-0.02em] text-[var(--color-fg)] sm:text-base">
                Rabby Hasan&apos;s Engineering journal
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isActive(link.href)
                    ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="hidden text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-fg)] md:inline-flex"
            >
              Contact
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
