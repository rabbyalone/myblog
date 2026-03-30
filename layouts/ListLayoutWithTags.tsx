'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Post } from 'app/postmodel'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import apiService from 'utils/ApiService'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Post>[]
  title: string
  initialDisplayPosts?: CoreContent<Post>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname() ?? ''
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="mt-10 border-t border-[var(--color-border)] pt-5">
      <nav className="flex items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="secondary-button px-4 py-2"
          >
            Previous
          </Link>
        ) : (
          <span className="opacity-40">Previous</span>
        )}
        <span className="font-medium text-[var(--color-fg)]">
          Page {currentPage} of {totalPages}
        </span>
        {nextPage ? (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="secondary-button px-4 py-2"
          >
            Next
          </Link>
        ) : (
          <span className="opacity-40">Next</span>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname() ?? ''
  const [tagsObject, setTagsObject] = useState<Record<string, number>>({})
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiService.get('/api/posts/tags')
        setTagsObject(response.data)
      } catch (error) {
        console.error('Error fetching tags:', error)
      }
    }

    fetchData()
  }, [])

  const searchSource = posts.filter((post) => {
    const searchContent = `${post.title} ${post.summary} ${post.tags?.join(' ') ?? ''}`
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const visiblePosts =
    searchValue.length > 0
      ? searchSource
      : initialDisplayPosts.length > 0
      ? initialDisplayPosts
      : posts

  const tags = Object.keys(tagsObject).sort((a, b) => tagsObject[b] - tagsObject[a])
  const activeTag = decodeURIComponent(pathname.split('/tags/')[1] || '')
  const introCopy =
    title === 'All Posts'
      ? 'A minimal archive for essays on engineering, architecture, and delivery.'
      : `Entries filed under ${title}.`

  return (
    <div className="pb-10">
      <section className="animate-fade-up border-b border-[var(--color-border)] pb-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <span className="eyebrow">Archive</span>
            <h1 className="section-title mt-5">{title}</h1>
            <p className="section-copy mt-4 max-w-3xl">{introCopy}</p>
          </div>
          <label className="block">
            <span className="sr-only">Search articles</span>
            <div className="rounded-[10px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3">
              <input
                aria-label="Search articles"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
                className="w-full border-0 bg-transparent p-0 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)] focus:ring-0"
              />
            </div>
          </label>
        </div>

        {tags.length > 0 && (
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            <Link
              href="/blog"
              className={`luxury-tag whitespace-nowrap ${
                pathname.startsWith('/blog')
                  ? 'border-[var(--color-accent)] text-[var(--color-fg)]'
                  : ''
              }`}
            >
              All posts
            </Link>
            {tags.slice(0, 10).map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className={`luxury-tag whitespace-nowrap ${
                  activeTag === tag ? 'border-[var(--color-accent)] text-[var(--color-fg)]' : ''
                }`}
              >
                {tag}
                <span className="ml-1 text-[0.68rem] text-[var(--color-muted)]">
                  {tagsObject[tag]}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mt-8 grid gap-8 xl:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="hidden xl:block">
          <div className="xl:sticky xl:top-32">
            <div className="border-l border-[var(--color-border)] pl-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Topics
              </p>
              <div className="mt-5 flex flex-col gap-1.5">
                <Link
                  href="/blog"
                  className={`rounded-md px-3 py-2.5 text-sm transition ${
                    pathname.startsWith('/blog')
                      ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]'
                      : 'text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)]'
                  }`}
                >
                  All posts
                </Link>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm transition ${
                      activeTag === tag
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]'
                        : 'text-[var(--color-fg)] hover:bg-[var(--color-accent-soft)]'
                    }`}
                  >
                    <span>{tag}</span>
                    <span className="text-[0.68rem] text-[var(--color-muted)]">
                      {tagsObject[tag]}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          {!visiblePosts.length ? (
            <div className="border-b border-[var(--color-border)] px-1 py-8 text-[var(--color-muted)]">
              No posts found.
            </div>
          ) : (
            <ul>
              {visiblePosts.map((post, index) => (
                <li
                  key={post.id}
                  className={`animate-fade-up border-b border-[var(--color-border)] py-8 ${
                    index % 2 ? 'animate-delay-150' : ''
                  }`}
                >
                  <article className="transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-[2px]">
                    <div className="grid gap-5 lg:grid-cols-[10rem_minmax(0,1fr)_auto] lg:items-start">
                      <time
                        dateTime={post.createDate}
                        className="block pt-1 text-sm text-[var(--color-muted)]"
                      >
                        {formatDate(post.createDate, siteMetadata.locale)}
                      </time>
                      <div className="max-w-3xl">
                        <h2 className="font-serif text-3xl leading-none tracking-[-0.045em] text-[var(--color-fg)]">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-[var(--color-muted-strong)] sm:text-base">
                          {post.summary}
                        </p>
                        <div className="mt-5 flex flex-wrap">
                          {post.tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                      </div>
                      <div className="lg:flex lg:justify-end">
                        <Link href={`/blog/${post.id}`} className="read-more-link">
                          Read more
                          <span className="animate-button-nudge inline-flex" aria-hidden="true">
                            -&gt;
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}

          {pagination && pagination.totalPages > 1 && !searchValue && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </section>
    </div>
  )
}
