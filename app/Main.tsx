import Link from '@/components/Link'
import LoadingSpinner from '@/components/LoadingSpinner'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import { useEffect, useState } from 'react'
import apiService from 'utils/ApiService'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const [loading, setLoading] = useState(false)

  const handleRouteChangeStart = () => setLoading(true)
  const handleRouteChangeComplete = () => setLoading(false)
  const handleRouteChangeError = () => setLoading(false)

  useEffect(() => {
    window.addEventListener('routeChangeStart', handleRouteChangeStart)
    window.addEventListener('routeChangeComplete', handleRouteChangeComplete)
    window.addEventListener('routeChangeError', handleRouteChangeError)
    return () => {
      window.removeEventListener('routeChangeStart', handleRouteChangeStart)
      window.removeEventListener('routeChangeComplete', handleRouteChangeComplete)
      window.removeEventListener('routeChangeError', handleRouteChangeError)
    }
  }, [])

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

  const allTags = Object.keys(tagsObject)

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex items-center justify-between mt-7">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                <span className="wave">Hi, I'm </span>
                <span className="text-gray-500 dark:text-blue-400">Md Rabby Hasan</span>
              </h1>
              <p className="text-indigo-600 text-xl">
                Insights from an experienced senior full stack engineer who loves to develop
                applications from passion.
              </p>
              <a
                type="button"
                href="mailto:rabbyalone@gmail.com"
                target="_blank"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                I am an email away!
              </a>
              <a
                type="button"
                href="https://www.rabbyhasan.com.bd/"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                See my portfolio
              </a>
            </div>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-row space-x-2">
              <div className="space-y-2 pb-6 pt-6 md:space-y-2">
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl sm:leading-10 md:text-5xl md:leading-14">
                  Recent
                </h1>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                  {siteMetadata.description}
                </p>
              </div>
              <div className="pt-10 pl-5">
                {allTags.length === 0 && 'No tags found.'}
                <div className="flex flex-wrap mb-3">
                  {allTags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { id, createDate, title, summary, tags } = post
                return (
                  <li key={id} className="py-12">
                    <Link href={`/blog/${id}`} className="text-gray-900 dark:text-gray-100">
                      <article className="hover:-translate-y-1 hover:scale-110 duration-300 ...">
                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 pl-5">
                              <time dateTime={createDate}>
                                {formatDate(createDate, siteMetadata.locale)}
                              </time>
                            </dd>
                          </dl>
                          <div className="space-y-5 xl:col-span-3 p-3">
                            <div className="space-y-6">
                              <div>
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                  {title}
                                </h2>
                                <div className="flex flex-wrap">
                                  {tags.map((tag) => (
                                    <Tag key={tag} text={tag} />
                                  ))}
                                </div>
                              </div>
                              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {summary}
                              </div>
                            </div>
                            <div className="text-base font-medium leading-6">
                              <Link
                                href={`/blog/${id}`}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label={`Read "${title}"`}
                              >
                                Read more &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
          {siteMetadata.newsletter?.provider && (
            <div className="flex items-center justify-center">
              <NewsletterForm />
            </div>
          )}
        </>
      )}
    </>
  )
}
