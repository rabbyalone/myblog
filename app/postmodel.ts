import { IsoDateTimeString } from 'contentlayer/core'

export type Post = {
  id: string
  type: 'Blog'
  title: string
  createDate: IsoDateTimeString
  tags: string[]
  lastmod?: IsoDateTimeString | undefined
  draft?: boolean | undefined
  summary?: string | undefined
  images?: string[] | undefined
  authors?: string[] | undefined
  layout?: string | undefined
  bibliography?: string | undefined
  canonicalUrl?: string | undefined
  /** MDX file body */
  content: string
  readingTime?: JSON
  slug: string
  path?: string
  filePath?: string
  toc: string
  structuredData: JSON
}
