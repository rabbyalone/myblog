import { Blog } from 'contentlayer/generated'
import { useEffect } from 'react'
import apiService from 'utils/ApiService'

export function getPostById(id: string) {
  const fetchPosts = async () => {
    try {
      const response = await apiService.get(`/api/posts/${id}`)
      return response.data as Blog
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }
}
