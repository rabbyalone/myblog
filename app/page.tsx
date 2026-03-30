'use client'
import Main from './Main'
import { useEffect, useState } from 'react'
import apiService from 'utils/ApiService'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Page() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

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
  return <>{loading ? <LoadingSpinner /> : <Main posts={posts} />}</>
}
