import { allAuthors } from '../../contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'About',
  description: 'Learn more about DeltaQuest team and our mission.',
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default')
  if (!author) {
    return <div>Author not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{author.name}</h1>
      <p className="mb-4 text-lg">{author.occupation}</p>
      <p className="text-gray-600">{author.company}</p>
    </div>
  )
}
