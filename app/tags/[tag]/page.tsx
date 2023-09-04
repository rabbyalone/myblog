'use client'
import { slug } from 'github-slugger'
import { allCoreContent } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import apiService from 'utils/ApiService'
import LoadingSpinner from '@/components/LoadingSpinner'

// export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
//   const tag = params.tag
//   return genPageMetadata({
//     title: tag,
//     description: `${siteMetadata.title} ${tag} tagged content`,
//     alternates: {
//       canonical: './',
//       types: {
//         'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
//       },
//     },
//   })
// }

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: tag,
  }))
  return paths
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await apiService.get(`/api/posts/postbytag?tag=${tag}`)
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])
  return (
    <>
      {loading && <LoadingSpinner />}
      <ListLayout posts={posts} title={title} />
    </>
  )
}
