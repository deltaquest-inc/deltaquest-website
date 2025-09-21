import Link from 'next/link'
import { slug } from 'github-slugger'

type Props = {
  text: string
  className?: string
}

const Tag = ({ text, className }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400 ${className ?? ''}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
