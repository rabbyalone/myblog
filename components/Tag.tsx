import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${text}`}
      className="bg-blue-100 text-blue-800 text-xs font-medium mr-3 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300  hover:border hover:border-blue-500 "
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
