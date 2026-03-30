/* eslint-disable jsx-a11y/anchor-has-content */
'use client'

import NextLink from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, MouseEvent } from 'react'

const ROUTE_LOADING_EVENT = 'app:navigation-start'

const hrefToString = (href: LinkProps['href']) => {
  if (typeof href === 'string') {
    return href
  }

  if (href && typeof href === 'object') {
    const pathname = href.pathname ?? ''
    const search = href.query
      ? `?${new URLSearchParams(
          Object.entries(href.query).reduce<Record<string, string>>((acc, [key, value]) => {
            if (value !== undefined) {
              acc[key] = String(value)
            }
            return acc
          }, {})
        ).toString()}`
      : ''
    const hash = href.hash ? `#${href.hash}` : ''

    return `${pathname}${search}${hash}`
  }

  return ''
}

const shouldStartNavigationLoader = (
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    target === '_blank'
  ) {
    return false
  }

  try {
    const nextUrl = new URL(href, window.location.origin)
    const currentUrl = new URL(window.location.href)

    return nextUrl.href !== currentUrl.href
  } catch {
    return false
  }
}

const CustomLink = ({
  href,
  onClick,
  target,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const hrefString = hrefToString(href)
  const isInternalLink = hrefString.startsWith('/')
  const isAnchorLink = hrefString.startsWith('#')

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (isInternalLink && shouldStartNavigationLoader(event, hrefString, target)) {
      window.dispatchEvent(new CustomEvent(ROUTE_LOADING_EVENT))
    }
  }

  if (isInternalLink) {
    return <NextLink href={href} onClick={handleClick} target={target} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={hrefString} onClick={onClick} target={target} {...rest} />
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={hrefString} onClick={onClick} {...rest} />
  )
}

export default CustomLink
