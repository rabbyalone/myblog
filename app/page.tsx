'use client'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { useEffect, useState } from 'react'
import apiService from 'utils/ApiService'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Page() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await apiService.get('/api/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])
  const sortedPosts = sortPosts(allBlogs)
  //const posts = allCoreContent(sortedPosts)
  // const posts = [
  //   {
  //     title: 'Sample .md file',
  //     date: '2016-03-08T00:00:00.000Z',
  //     tags: ['markdown', 'code', 'features'],
  //     draft: false,
  //     summary: 'Example of a markdown file with code blocks and syntax highlighting',
  //     slug: 'github-markdown-guide',
  //   },
  // ]
  return (
    <>
      {loading && <LoadingSpinner />}
      <Main posts={posts} />
    </>
  )
}
