'use client'
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
import { useState, useEffect } from 'react'
import { Post } from 'app/postmodel'

const isProduction = process.env.NODE_ENV === 'production'
const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string[] }
// }): Promise<Metadata | undefined> {
//   const slug = decodeURI(params.slug.join('/'))

//   console.log(slug)
//   const post = getPostById(slug) as any

//   //const post = allBlogs.find((p) => p.slug === slug)
//   const authorList = ['default']
//   const authorDetails = authorList.map((author) => {
//     const authorResults = allAuthors.find((p) => p.slug === author)
//     return coreContent(authorResults as Authors)
//   })
//   if (!post) {
//     return
//   }

//   // const publishedAt = new Date(post.date).toISOString()
//   // const modifiedAt = new Date(post.lastmod || post.date).toISOString()
//   const authors = authorDetails.map((author) => author.name)
//   let imageList = [siteMetadata.socialBanner]
//   if (post.images) {
//     imageList = typeof post.images === 'string' ? [post.images] : post.images
//   }
//   const ogImages = imageList.map((img) => {
//     return {
//       url: img.includes('http') ? img : siteMetadata.siteUrl + img,
//     }
//   })

//   return {
//     title: post.title,
//     description: post.summary,
//     openGraph: {
//       title: post.title,
//       description: post.summary,
//       siteName: siteMetadata.title,
//       locale: 'en_US',
//       type: 'article',
//       publishedTime: new Date().toISOString(),
//       modifiedTime: new Date().toISOString(), //modifiedAt,
//       url: './',
//       images: ogImages,
//       authors: authors.length > 0 ? authors : [siteMetadata.author],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.summary,
//       images: imageList,
//     },
//   }
// }

// export const generateStaticParams = async () => {
//   const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

//   return paths
// }

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  console.log(slug)
  const [postSingle, setPost] = useState<Post | undefined>()

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await apiService.get(`/api/posts/${slug}`)
        setPost(response.data as Post)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Call the fetchData function
    fetchData()
  }, [slug])

  const post = postSingle as Post

  const prev = { path: 'Test', title: 'Previous' }
  const next = { path: '', title: 'next' }
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

  return (
    <>
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
          <script type="application/ld+json" suppressHydrationWarning>
            {JSON.stringify(jsonLd)}
          </script>
          <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
            {/* <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} /> */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{cont}</ReactMarkdown>
          </Layout>
        </>
      )}
    </>
  )
}
