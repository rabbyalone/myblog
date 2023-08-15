'use client'
import '@mdxeditor/editor/style.css'
import '@mdxeditor/editor/style.css'
import dynamic from 'next/dynamic'

const MDXEditor = dynamic(() => import('@mdxeditor/editor').then((mod) => mod.MDXEditor), {
  ssr: false,
})

export default function App() {
  return <MDXEditor markdown={'# Hello World'} />
}
