import Link from '@/components/Link'
import ScrollReveal from '@/components/ScrollReveal'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import { useEffect, useState } from 'react'
import apiService from 'utils/ApiService'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const [tagsObject, setTagsObject] = useState<Record<string, number>>({})

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

  const featuredPosts = posts.slice(0, MAX_DISPLAY)
  const leadPost = featuredPosts[0]
  const secondaryPosts = featuredPosts.slice(1)
  const topTags = Object.entries(tagsObject)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 8)
  const summaryBand = [
    { label: 'Published posts', value: String(posts.length || 0) },
    { label: 'Active topics', value: String(topTags.length || 0) },
    { label: 'Primary focus', value: 'Architecture and delivery' },
  ]

  return (
    <div className="pb-8 sm:pb-12">
      <section className="border-t border-[var(--color-border)] pb-14 pt-8 sm:pt-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <span className="eyebrow rounded-none bg-transparent px-0 py-0 text-[var(--color-accent-strong)]">
                Modern engineering journal
              </span>
              <h1 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-none tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl lg:text-[3.55rem]">
                Software engineering notes on architecture, systems design, and delivery.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.05rem]">
                Essays and field notes from Rabby Hasan on building reliable software systems,
                designing maintainable APIs, and shipping production-grade web and cloud platforms
                with clarity.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/blog" className="premium-button">
                  Read all blogs
                  <span className="animate-button-nudge inline-flex" aria-hidden="true">
                    -&gt;
                  </span>
                </Link>
                <a href={`mailto:${siteMetadata.email}`} className="secondary-button">
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mt-8 grid gap-3 rounded-[1.75rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.58)] p-4 backdrop-blur-sm sm:grid-cols-3 sm:p-5 dark:bg-[rgba(255,255,255,0.02)]">
            {summaryBand.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] px-3 py-3 sm:px-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold tracking-[-0.03em] text-[var(--color-fg)] sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="pb-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Latest posts</span>
            <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.045em] text-[var(--color-fg)]">
              Recent writing
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Fresh essays and technical notes arranged with a more magazine-like rhythm.
            </p>
          </div>
          <Link href="/blog" className="secondary-button self-start sm:self-auto">
            View all posts
          </Link>
        </div>

        {!featuredPosts.length ? (
          <div className="mt-8 border-b border-t border-[var(--color-border)] px-1 py-8 text-[var(--color-muted)]">
            No posts found.
          </div>
        ) : (
          <div className="mt-8 grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            {leadPost && (
              <ScrollReveal delay={120}>
                <article className="editorial-block border-b border-t border-[var(--color-border)] px-4 py-8 sm:px-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Featured article
                  </p>
                  <time
                    dateTime={leadPost.createDate}
                    className="mt-5 block text-sm text-[var(--color-muted)]"
                  >
                    {formatDate(leadPost.createDate, siteMetadata.locale)}
                  </time>
                  <h3 className="mt-3 max-w-3xl font-serif text-4xl leading-none tracking-[-0.05em] text-[var(--color-fg)]">
                    <Link href={`/blog/${leadPost.id}`}>{leadPost.title}</Link>
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted-strong)]">
                    {leadPost.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap">
                    {leadPost.tags?.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                  <div className="mt-8">
                    <Link
                      href={`/blog/${leadPost.id}`}
                      className="text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent-strong)]"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            )}

            <div>
              <div className="border-t border-[var(--color-border)]">
                {secondaryPosts.map((post, index) => (
                  <ScrollReveal key={post.id} delay={120 + index * 90}>
                    <article className="editorial-block border-b border-[var(--color-border)] px-3 py-6 sm:px-4">
                      <time
                        dateTime={post.createDate}
                        className="block text-sm text-[var(--color-muted)]"
                      >
                        {formatDate(post.createDate, siteMetadata.locale)}
                      </time>
                      <h3 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.04em] text-[var(--color-fg)]">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)] sm:text-base">
                        {post.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap">
                        {post.tags?.slice(0, 3).map((tag) => <Tag key={tag} text={tag} />)}
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {siteMetadata.newsletter?.provider && (
        <section className="animate-fade-up border-t border-[var(--color-border)] pb-8 pt-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Newsletter</span>
            <h2 className="mt-4 font-serif text-3xl leading-none tracking-[-0.04em] text-[var(--color-fg)]">
              Follow the latest notes without checking back manually.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              New posts land in a cleaner, more focused reading experience. Subscribe for the next
              one.
            </p>
          </div>
          <ScrollReveal delay={140}>
            <div className="newsletter-shell editorial-block mx-auto mt-8 max-w-3xl px-6 py-7 sm:px-8">
              <NewsletterForm title="" />
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  )
}
