'use client'
import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostById } from './../../../service/post'
import apiService from 'utils/ApiService'
import axios from 'axios'
import { useState, useEffect } from 'react'

let markdown =
  "A sample post with markdown.\n\n## Inline Highlighting\n\nSample of inline highlighting `sum = parseInt(num1) + parseInt(num2)`\n\n## Code Blocks\n\nSome Javascript code\n\n```javascript\nvar num1, num2, sum\nnum1 = prompt('Enter first number')\nnum2 = prompt('Enter second number')\nsum = parseInt(num1) + parseInt(num2) // \"+\" means \"add\"\nalert('Sum = ' + sum) // \"+\" means combine into a string\n```\n\nSome Python code 🐍\n\n```python\ndef fib():\n    a, b = 0, 1\n    while True:            # First iteration:\n        yield a            # yield 0 to start with and then\n        a, b = b, a + b    # a will now be 1, and b will also be 1, (0 + 1)\n\nfor index, fibonacci_number in zip(range(10), fib()):\n     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))\n```\n"

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

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  console.log(slug)
  const [post, setPost] = useState()

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await apiService.get(`/api/posts/${slug}`)
        setPost(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Call the fetchData function
    fetchData()
  }, post)

  const sortedPosts = sortPosts(allBlogs) as Blog[]
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug)
  const prev = { path: 'Test', title: 'Previous' }
  const next = { path: '', title: 'next' }
  // const post = getPostById(slug)

  const authorList = ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
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
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          </Layout>
        </>
      )}
    </>
  )
}
