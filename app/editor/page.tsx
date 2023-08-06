'use client'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import CreatePostLayout from '@/layouts/CreatePostLayout'
import MdEditor from '@/components/MdEditor'

export const metadata = genPageMetadata({ title: 'About' })


export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const h1Styles: CSS.Properties = {
    border: '1px solid #000',
    height: '300px'
  };
  return (
    <>
      <CreatePostLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </CreatePostLayout>
    <div style={h1Styles}>
      <MdEditor />      
    </div>
    <div>
      <button> Save Post </button>
    </div>
    </>
  )
}