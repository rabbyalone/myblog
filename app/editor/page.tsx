'use client'
import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import '@mdxeditor/editor/style.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import apiService, { setAuthToken } from 'utils/ApiService'
import MDEditor from '@uiw/react-md-editor'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import LoadingSpinner from '@/components/LoadingSpinner'
import toast, { Toaster } from 'react-hot-toast'

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
  const [blogId, setBlog] = useState('')
  const [IsSaved, setSaved] = useState(false)
  const [IsDraft, setDraft] = useState(false)
  const [secret, setSecret] = useState('')
  const [summary, setSummary] = useState('')
  const [tags, setTags] = useState([])
  const [IsAuthorized, setAuthorized] = useState(false)
  const [IsEdit, setIsEdit] = useState(false)
  const [loading, setIsLoading] = useState(false)

  const save = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const post = {
        title: title,
        summary: summary,
        layout: 'PostSimple',
        isDraft: IsDraft,
        tags: tags,
        author: 'Mohammed Rabby Hasan',
        content: JSON.stringify(value),
      }
      if (IsEdit) {
        await apiService.put(`/api/posts/${blogId}`, post)
        toast.success('UPDATED')
      } else {
        await apiService.post('/api/posts', post)
        toast.success('Success')
      }
      setSaved(true)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  const loadPost = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const response = await apiService.get(`/api/posts/${blogId}`)
      if (!response.data.id) {
        setIsLoading(false)
        return
      }
      const parsedContent = JSON.parse(response.data.content)
      setValue(parsedContent)
      setTitle(response.data.title)
      setSummary(response.data.summary)
      setDraft(response.data.isDraft)
      setTags(response.data.tags)
      setIsEdit(true)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  const authorize = async (e) => {
    e.preventDefault()
    try {
      const response = await apiService.get(`/api/Auth/token?userSecret=${secret}`)
      await setAuthToken(response.data)
      setAuthorized(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleTagsChange = (tags) => {
    setTags(tags)
  }

  const handleDraftChange = () => {
    setDraft(!IsDraft)
  }

  const handleEditorChange = (value, event, state) => {
    // Do something with the updated 'value' state
    setValue(value)
  }

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="">
        <div className="mb-4">
          <div className="p-2">
            <input
              type="text"
              value={blogId}
              onChange={(e) => setBlog(e.target.value)}
              placeholder="Blog Id for update"
            />
            <button
              className="bg-primary-500 p-2 ml-3 rounded text-white disabled:opacity-50"
              onClick={loadPost}
              disabled={blogId === ''}
            >
              {' '}
              Load Post{' '}
            </button>
          </div>
          <div className="p-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title goes here"
            />
            <input
              type="checkbox"
              className="ml-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={IsDraft}
              onChange={handleDraftChange}
            />{' '}
            Is Draft
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
          <MDEditor height={500} value={value} onChange={handleEditorChange} />
        </div>
        <div className="mt-3">
          {!IsAuthorized ? (
            <div>
              <input
                type="text"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Secret goes here"
              />
              <button
                className="ml-2 mr-2 bg-green-500 p-2 mt-1 rounded text-white"
                onClick={authorize}
              >
                {' '}
                Authorize{' '}
              </button>
            </div>
          ) : (
            <p>Authorized</p>
          )}
          {IsAuthorized && (
            <>
              (
              <button className="bg-primary-500 p-2 mt-1 rounded text-white" onClick={save}>
                {IsEdit ? 'Update Post' : 'Save Post'}
              </button>
              <button className="bg-sky-500 p-2 mt-1 rounded text-white">See Drafts</button>)
            </>
          )}
          {IsSaved && <Toaster position="bottom-right" reverseOrder={false}></Toaster>}
        </div>
      </div>
    </>
  )
}
