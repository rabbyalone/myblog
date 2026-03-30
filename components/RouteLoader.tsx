'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import LoadingSpinner from '@/components/LoadingSpinner'

const ROUTE_LOADING_EVENT = 'app:navigation-start'

export default function RouteLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const startLoading = () => setLoading(true)

    window.addEventListener(ROUTE_LOADING_EVENT, startLoading)

    return () => {
      window.removeEventListener(ROUTE_LOADING_EVENT, startLoading)
    }
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [pathname, searchParams])

  return loading ? <LoadingSpinner /> : null
}
