'use client'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { useState, useEffect } from 'react'
import apiService from 'utils/ApiService'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const [loading, setLoading] = useState(true)
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
  }, [tag])
  return <>{loading ? <LoadingSpinner /> : <ListLayout posts={posts} title={title} />}</>
}
