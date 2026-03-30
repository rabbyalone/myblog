import SocialIcon from '@/components/social-icons'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function Footer() {
  return (
    <footer className="pb-10 pt-20 sm:pt-24">
      <div className="border-t border-[var(--color-border)] pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Engineering journal
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-[0.98] tracking-[-0.04em] text-[var(--color-fg)] sm:text-[2.2rem]">
              Case studies and software notes for production-minded teams.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Architecture, delivery, and enterprise engineering.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="transition hover:text-[var(--color-fg)]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5.5} />
              <SocialIcon kind="github" href={siteMetadata.github} size={5.5} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5.5} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5.5} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            {siteMetadata.author} · © {new Date().getFullYear()}
          </div>
          <Link
            href="https://rabbyhasan.com.bd/"
            className="text-[var(--color-fg)] hover:text-[var(--color-accent-strong)]"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </footer>
  )
}
