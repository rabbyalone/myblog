'use client'

import Link from '@/components/Link'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useEffect, useState } from 'react'
import apiService from 'utils/ApiService'

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [tagsObject, setTagsObject] = useState<Record<string, number>>({})

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await apiService.get('/api/posts/tags')
        setTagsObject(response.data)
      } catch (error) {
        console.error('Error fetching tags:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const tags = Object.entries(tagsObject).sort(([, countA], [, countB]) => countB - countA)

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="pb-10">
          <section className="surface-shell animate-fade-up">
            <div className="surface-panel px-6 py-8 sm:px-8 sm:py-10">
              <span className="eyebrow">Topics</span>
              <h1 className="section-title mt-5">Tags</h1>
              <p className="section-copy mt-4">
                Explore the archive by subject and jump into the areas that come up most often in
                the writing.
              </p>
            </div>
          </section>

          <section className="mt-8">
            {!tags.length ? (
              <div className="surface-shell">
                <div className="surface-panel px-6 py-8 text-[var(--color-muted)]">
                  No tags found.
                </div>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {tags.map(([tag, count], index) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className={`surface-shell block transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lift ${
                      index % 2 ? 'animate-fade-up animate-delay-150' : 'animate-fade-up'
                    }`}
                  >
                    <div className="surface-panel h-full px-6 py-6">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Topic
                      </p>
                      <h2 className="mt-4 font-serif text-3xl leading-none tracking-[-0.04em] text-[var(--color-fg)]">
                        {tag}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                        {count} {count === 1 ? 'article' : 'articles'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </>
  )
}
