import Link from 'next/link'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${text}`} className="luxury-tag mb-2 mr-2">
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
