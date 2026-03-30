import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const profileSignals = [
  { label: 'Primary focus', value: 'Architecture, APIs, and full-stack delivery' },
  { label: 'Based in', value: 'Dhaka, working with remote and global teams' },
  { label: 'Current level', value: 'Senior engineer with lead-level delivery ownership' },
]

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <div className="pb-10">
      <section className="surface-shell animate-fade-up">
        <div className="surface-panel px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
            <div className="space-y-5">
              <span className="eyebrow">About</span>
              <div className="surface-shell">
                <div className="surface-panel px-6 py-6 text-center">
                  {avatar && (
                    <Image
                      src={avatar}
                      alt={`${name} portrait`}
                      width={224}
                      height={224}
                      className="mx-auto h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
                    />
                  )}
                  <h2 className="mt-5 font-serif text-3xl leading-none tracking-[-0.04em] text-[var(--color-fg)]">
                    {name}
                  </h2>
                  <p className="mt-3 text-sm font-medium text-[var(--color-muted-strong)] sm:text-base">
                    {occupation}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{company}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <SocialIcon kind="mail" href={`mailto:${email}`} />
                    <SocialIcon kind="github" href={github} />
                    <SocialIcon kind="linkedin" href={linkedin} />
                    <SocialIcon kind="twitter" href={twitter} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="section-title max-w-4xl">
                Engineering systems that stay useful after launch.
              </h1>
              <p className="section-copy mt-5 max-w-3xl">
                I work across architecture, product delivery, and implementation with a strong bias
                toward maintainable systems. The through-line is usually the same: understand the
                business pressure, design a practical path forward, and ship software that teams can
                confidently keep evolving.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${email}`} className="premium-button">
                  Start a conversation
                </a>
                <Link href="https://rabbyhasan.com.bd/projects" className="secondary-button">
                  View full portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        {profileSignals.map((signal, index) => (
          <div
            key={signal.label}
            className={`surface-shell animate-fade-up ${
              index === 1 ? 'animate-delay-150' : index === 2 ? 'animate-delay-300' : ''
            }`}
          >
            <div className="surface-panel h-full px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {signal.label}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted-strong)]">
                {signal.value}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-6">
          <div className="surface-shell animate-fade-up">
            <div className="surface-panel px-6 py-7">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Quick facts
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.4rem] border border-[var(--color-border)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Specialties
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted-strong)]">
                    .NET, Web APIs, clean architecture, front-end delivery, cloud workflows,
                    enterprise modernization.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-[var(--color-border)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Working style
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted-strong)]">
                    Calm execution, collaborative problem solving, and a strong focus on code that
                    stays maintainable under delivery pressure.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-[var(--color-border)] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Contact
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-2 block text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent-strong)]"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="surface-shell animate-fade-up animate-delay-150">
          <div className="surface-panel px-6 py-8 sm:px-10 sm:py-10">
            <div className="prose max-w-none dark:prose-invert sm:prose-lg">{children}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
