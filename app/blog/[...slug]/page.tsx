'use client'
import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { coreContent } from 'pliny/utils/contentlayer'
import { allAuthors } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import apiService from 'utils/ApiService'
import { useState, useEffect } from 'react'

let markdown =
  '\u0060\u0060\u0060jsx\n\u003Cheader class=\u0022header\u0022 style=\u0022\u0022\u003E\n \u003Cnav class=\u0022navbar navbar-expand-lg navbar-custom\u0022 role=\u0022navigation\u0022\u003E\n\n \u003Cdiv class=\u0022container\u0022\u003E\n\n \u003Cdiv class=\u0022navbar-header\u0022\u003E\n \u003Cbutton class=\u0022navbar-toggler navbar-toggler-right\u0022 type=\u0022button\u0022 data-toggle=\u0022collapse\u0022 data-target=\u0022#navbarNav\u0022 aria-controls=\u0022navbarNav\u0022 aria-expanded=\u0022false\u0022 aria-label=\u0022Toggle navigation\u0022\u003E\n \u003Cspan class=\u0022navbar-toggler-icon\u0022\u003E\u003C/span\u003E\n \u003C/button\u003E\n \u003Ca class=\u0022navbar-brand\u0022 href=\u0022index.html\u0022\u003ERABBY HASAN\u003C/a\u003E\n \u003C/div\u003E\n\n \u003Cdiv class=\u0022collapse navbar-collapse flex-grow-0\u0022 id=\u0022custom-collapse\u0022\u003E\n \u003Cul class=\u0022nav navbar-nav text-right\u0022\u003E\n \u003Cli\u003E\u003Ca class=\u0022nav-link active\u0022 href=\u0022#home\u0022\u003EHome\u003C/a\u003E\u003C/li\u003E\n \u003Cli\u003E\u003Ca class=\u0022nav-link\u0022 href=\u0022#services\u0022\u003EAbout Me\u003C/a\u003E\u003C/li\u003E\n \u003Cli\u003E\u003Ca class=\u0022nav-link\u0022 href=\u0022#skills\u0022\u003ESkills\u003C/a\u003E\u003C/li\u003E\n \u003Cli\u003E\u003Ca class=\u0022nav-link\u0022 href=\u0022#portfolio\u0022\u003EWorks\u003C/a\u003E\u003C/li\u003E\n\n \u003Cli\u003E\u003Ca class=\u0022nav-link\u0022 href=\u0022#testimonials\u0022\u003ETestimonials\u003C/a\u003E\u003C/li\u003E\n \u003C!-- \u003Cli\u003E\u003Ca class=\u0022nav-link\u0022 href=\u0022blog.html\u0022 target=\u0022_blank\u0022\u003EBlog\u003C/a\u003E\u003C/li\u003E --\u003E\n \u003Cli\u003E\u003Ca class=\u0022nav-link\u0022 href=\u0022#contact\u0022\u003EContact\u003C/a\u003E\u003C/li\u003E\n \u003C/ul\u003E\n \u003C/div\u003E\n \u003C/div\u003E\n \u003C!-- .container --\u003E\n \u003C/nav\u003E\n \u003C/header\u003E\n\u0060\u0060\u0060\n\n\\u003Cheader class=\u0022header\u0022 style=\u0022\u0022\u003E\n\n\u0026#x20; \\u003Cnav class=\u0022navbar navbar-expand-lg navbar-custom\u0022 role=\u0022navigation\u0022\u003E\n\n\u0026#x20; \\u003Cdiv class=\u0022container\u0022\u003E\n\n\u0026#x20; \\u003Cdiv class=\u0022navbar-header\u0022\u003E\n\n\u0026#x20; \\u003Cbutton class=\u0022navbar-toggler navbar-toggler-right\u0022 type=\u0022button\u0022 data-toggle=\u0022collapse\u0022 data-target=\u0022#navbarNav\u0022 aria-controls=\u0022navbarNav\u0022 aria-expanded=\u0022false\u0022 aria-label=\u0022Toggle navigation\u0022\u003E\n\n\u0026#x20; \\u003Cspan class=\u0022navbar-toggler-icon\u0022\u003E\\u003C/span\u003E\n\n\u0026#x20; \\u003C/button\u003E\n\n\u0026#x20; \\u003Ca class=\u0022navbar-brand\u0022 href=\u0022index.html\u0022\u003ERABBY HASAN\\u003C/a\u003E\n\n\u0026#x20; \\u003C/div\u003E\n\n\u0026#x20; \\u003Cdiv class=\u0022collapse navbar-collapse flex-grow-0\u0022 id=\u0022custom-collapse\u0022\u003E\n\n\u0026#x20; \\u003Cul class=\u0022nav navbar-nav text-right\u0022\u003E\n\n\u0026#x20; \\u003Cli\u003E\\u003Ca class=\u0022nav-link active\u0022 href=\u0022#home\u0022\u003EHome\\u003C/a\u003E\\u003C/li\u003E\n\n\u0026#x20; \\u003Cli\u003E\\u003Ca class=\u0022nav-link\u0022 href=\u0022#services\u0022\u003EAbout Me\\u003C/a\u003E\\u003C/li\u003E\n\n\u0026#x20; \\u003Cli\u003E\\u003Ca class=\u0022nav-link\u0022 href=\u0022#skills\u0022\u003ESkills\\u003C/a\u003E\\u003C/li\u003E\n\n\u0026#x20; \\u003Cli\u003E\\u003Ca class=\u0022nav-link\u0022 href=\u0022#portfolio\u0022\u003EWorks\\u003C/a\u003E\\u003C/li\u003E\n\n\u0026#x20; \\u003Cli\u003E\\u003Ca class=\u0022nav-link\u0022 href=\u0022#testimonials\u0022\u003ETestimonials\\u003C/a\u003E\\u003C/li\u003E\n\n\u0026#x20; \\u003C!-- \\u003Cli\u003E\\u003Ca class=\u0022nav-link\u0022 href=\u0022blog.html\u0022 target=\u0022_blank\u0022\u003EBlog\\u003C/a\u003E\\u003C/li\u003E --\u003E\n\n\u0026#x20; \\u003Cli\u003E\\u003Ca class=\u0022nav-link\u0022 href=\u0022#contact\u0022\u003EContact\\u003C/a\u003E\\u003C/li\u003E\n\n\u0026#x20; \\u003C/ul\u003E\n\n\u0026#x20; \\u003C/div\u003E\n\n\u0026#x20; \\u003C/div\u003E\n\n\u0026#x20; \\u003C!-- .container --\u003E\n\n\u0026#x20; \\u003C/nav\u003E\n\n\u0026#x20; \\u003C/header\u003E\n'

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
  let cont
  if(post?.content){
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
            <ReactMarkdown children={cont} remarkPlugins={[remarkGfm]} />
          </Layout>
        </>
      )}
    </>
  )
}
