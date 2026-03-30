'use client'

import { useMemo, useState } from 'react'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

interface PostEngagementProps {
  slug: string
  title: string
}

export default function PostEngagement({ slug, title }: PostEngagementProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'shared'>('idle')

  const articleUrl = useMemo(() => `${siteMetadata.siteUrl}/blog/${slug}`, [slug])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setStatus('copied')
    } catch (error) {
      console.error('Unable to copy article URL:', error)
    }
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: articleUrl,
        })
        setStatus('shared')
        return
      }

      await handleCopyLink()
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Unable to share article:', error)
      }
    }
  }

  const statusLabel =
    status === 'copied'
      ? 'Link copied for sharing.'
      : status === 'shared'
      ? 'Share sheet opened.'
      : 'Invite a response or pass the article along.'

  return (
    <div className="border-b border-t border-[var(--color-border)] py-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Reader actions
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-muted-strong)]">
            Questions, corrections, and your own experience are welcome.
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {statusLabel}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="#comment" className="secondary-button px-4 py-2.5">
            Join discussion
          </Link>
          <button type="button" onClick={handleCopyLink} className="secondary-button px-4 py-2.5">
            Copy link
          </button>
          <button type="button" onClick={handleShare} className="premium-button px-4 py-2.5">
            Share article
          </button>
        </div>
      </div>
    </div>
  )
}
