import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { MDXDocument, coreContent } from 'pliny/utils/contentlayer'
import { allAuthors } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import apiService from 'utils/ApiService'
// import { useState, useEffect } from 'react'
import { Post } from 'app/postmodel'
import LoadingSpinner from '@/components/LoadingSpinner'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'
import { Suspense } from 'react'

const isProduction = process.env.NODE_ENV === 'production'
const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const response = await apiService.get(`/api/posts/${slug}`)
  const post = response.data as Post
  const authorList = ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    return
  }

  const publishedAt = new Date(post?.createDate).toISOString()
  const modifiedAt = new Date(post.lastmod || post.createDate).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  let loading: boolean = true
  const response = await apiService.get(`/api/posts/${slug}`)
  const post = response.data as Post
  const prev = {
    path: `${post?.previous?.id ? `blog/${post?.previous?.id}` : ''}`,
    title: `Previous - ${post?.previous?.title}`,
  }
  const next = {
    path: `${post?.next?.id ? `blog/${post?.next?.id}` : ''}`,
    title: `Next - ${post?.next?.title}`,
  }
  // const post = getPostById(slug)

  const authorList = ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = {
    filepath: '',
    path: '',
    slug: slug,
    createDate: post?.createDate,
    title: post?.title,
    tags: post?.tags,
    //path, slug, createDate, title, tags
  }
  const jsonLd = post?.structuredData
  if (jsonLd) {
    jsonLd['author'] = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      }
    })
  }

  const Layout = layouts[defaultLayout]
  let cont
  if (post?.content) {
    cont = JSON.parse(post.content)
  }
  loading = false
  return (
    <>
      {/* {loading && <LoadingSpinner />} */}

      {isProduction && post && 'draft' in post && post.draft === true ? (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      ) : (
        <>
          <Suspense fallback={<LoadingSpinner />}>
            <script type="application/ld+json" suppressHydrationWarning>
              {JSON.stringify(jsonLd)}
            </script>
            <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{cont}</ReactMarkdown>
            </Layout>
          </Suspense>
        </>
      )}
    </>
  )
}
