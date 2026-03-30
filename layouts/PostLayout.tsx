'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import PostEngagement from '@/components/PostEngagement'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: {
    slug: string
    createDate: string
    title: string
    tags: string[]
  }
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { slug, createDate, title, tags } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="pb-12">
        <header className="animate-fade-up border-b border-[var(--color-border)] pb-8">
          <Link href="/blog" className="eyebrow">
            Journal archive
          </Link>
          <div className="mt-6 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-4xl">
              <time dateTime={createDate} className="block text-sm text-[var(--color-muted)]">
                {new Date(createDate).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
              <div className="mt-4">
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap xl:max-w-sm xl:justify-end">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="mt-5 animate-fade-up animate-delay-150">
          <PostEngagement slug={slug} title={title} />
        </div>

        <div className="mt-8 grid gap-10 xl:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="space-y-8 xl:sticky xl:top-32 xl:self-start">
            <div className="border-l border-[var(--color-border)] pl-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Written by
              </p>
              <ul className="mt-5 space-y-4">
                {authorDetails.map((author) => (
                  <li key={author.name} className="flex items-center gap-3">
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={48}
                        height={48}
                        alt={`${author.name} avatar`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-[var(--color-fg)]">{author.name}</p>
                      {author.linkedin && (
                        <Link
                          href={author.linkedin}
                          className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-strong)]"
                        >
                          {author.linkedin.replace('https://www.linkedin.com/in/', '@')}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {(prev?.path || next?.path) && (
              <div className="border-l border-[var(--color-border)] pl-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Continue reading
                </p>
                <div className="mt-5 space-y-4">
                  {prev?.path && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        Previous
                      </p>
                      <Link
                        href={`/${prev.path}`}
                        className="mt-2 block text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent-strong)]"
                      >
                        {prev.title}
                      </Link>
                    </div>
                  )}
                  {next?.path && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        Next
                      </p>
                      <Link
                        href={`/${next.path}`}
                        className="mt-2 block text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent-strong)]"
                      >
                        {next.title}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </aside>

          <div className="space-y-6">
            <div className="animate-fade-up animate-delay-150 border-b border-[var(--color-border)] pb-10">
              <div className="prose max-w-none text-base dark:prose-invert sm:prose-lg">
                {children}
              </div>
            </div>

            {siteMetadata.comments && (
              <div id="comment" className="border-b border-[var(--color-border)] pb-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Discussion
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-muted-strong)]">
                  Add a question, a correction, or your own experience with the topic.
                </p>
                <div className="mt-6">
                  <Comments slug={slug} />
                </div>
              </div>
            )}

            <div className="pt-2">
              <Link href="/blog" className="secondary-button">
                Back to the blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
