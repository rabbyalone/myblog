'use client'

import Link from '@/components/Link'
import LoadingSpinner from '@/components/LoadingSpinner'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import { useState, useEffect } from 'react'
import apiService from 'utils/ApiService'

// export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [tagsObject, setTagsObject] = useState([])

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        setLoading(true)
        const response = await apiService.get(`/api/posts/tags`)
        setTagsObject(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    // Call the fetchData function
    fetchData()
  }, [tagsObject.values])

  const tags = Object.keys(tagsObject)

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tags.length === 0 && 'No tags found.'}
          {tags.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2">
                <Tag text={t} />
                <Link
                  href={`/tags/${t}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagsObject[t]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
