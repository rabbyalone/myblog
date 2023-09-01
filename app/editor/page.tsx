'use client'
import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import CreatePostLayout from '@/layouts/CreatePostLayout'
import '@mdxeditor/editor/style.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import apiService from 'utils/ApiService'
import MDEditor from '@uiw/react-md-editor'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

const MDXEditor = dynamic(() => import('@mdxeditor/editor').then((mod) => mod.MDXEditor), {
  ssr: false,
})

// export const metadata = genPageMetadata({ title: 'About' })

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  let mark = ''
  const h1Styles = {
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
  const [value, setValue] = useState(mkdStr)
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [tags, setTags] = useState([])

  const save = async (e) => {
    e.preventDefault()
    console.log(value)
    console.log(JSON.stringify(value))
    const post = {
      title: title,
      summary: summary,
      layout: 'PostSimple',
      tags: tags,
      author: 'Mohammed Rabby Hasan',
      content: JSON.stringify(value),
    }
    console.log(post)
    await apiService.post('/api/posts', post)
  }

  const handleTagsChange = (tags) => {
    setTags(tags)
  }

  const handleEditorChange = (value, event, state) => {
    // Do something with the updated 'value' state
    setValue(value)
  }

  return (
    <>
      <CreatePostLayout content={mainContent}>
        {/* <MDXLayoutRenderer code={author.body.code} /> */}
      </CreatePostLayout>
      <div className="container mb-4">
        <div className="p-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title goes here"
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary goes here"
          />
        </div>
        <div>
          <div className="p-2">
            <TagsInput value={tags} onChange={handleTagsChange} />
          </div>
        </div>
      </div>
      <h1>Post Body</h1>
      <hr />
      <div>
        {/* <MDXEditor markdown={'# Hello World'} onChange={(markdown) => editorOnchange(markdown)} /> */}
        <MDEditor height={500} value={value} onChange={handleEditorChange} />
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
