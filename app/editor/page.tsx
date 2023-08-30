'use client'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import CreatePostLayout from '@/layouts/CreatePostLayout'
import '@mdxeditor/editor/style.css'
import dynamic from 'next/dynamic'
import { MouseEventHandler, useState } from 'react'
import apiService from 'utils/ApiService'

const MDXEditor = dynamic(() => import('@mdxeditor/editor').then((mod) => mod.MDXEditor), {
  ssr: false,
})

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  let mark = ''
  const h1Styles: CSS.Properties = {
    border: '1px solid #000',
    height: 'auto',
    position: 'relative',
  }
  //const { markdown, setMarkdown } = useState(null)
  //const postBody =

  const editorOnchange = (markdown) => {
    console.log(markdown)
    mark = markdown
  }

  const save = async () => {
    console.log(mark)
    console.log(JSON.stringify(mark))
    //await apiService.post('/api/posts', mark)
  }

  return (
    <>
      <CreatePostLayout content={mainContent}>
        {/* <MDXLayoutRenderer code={author.body.code} /> */}
      </CreatePostLayout>
      <div style={h1Styles}>
        <MDXEditor markdown={'# Hello World'} onChange={(markdown) => editorOnchange(markdown)} />
      </div>
      <div>
        <button className="bg-primary-500 p-2 mt-1 rounded text-white" onClick={save}>
          {' '}
          Save Post{' '}
        </button>
      </div>
    </>
  )
}
