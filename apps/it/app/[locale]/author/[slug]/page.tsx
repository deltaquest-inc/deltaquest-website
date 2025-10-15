import { allAuthors } from '../../../../contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from '@/app/seo'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const author = allAuthors.find((p) => p.slug === slug)
  if (!author) {
    return genPageMetadata({ title: 'Author Not Found' })
  }

  return genPageMetadata({
    title: author.name,
    description: `${author.name} - ${author.occupation} at ${author.company}`,
  })
}

export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    slug: author.slug,
  }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const author = allAuthors.find((p) => p.slug === slug)
  
  if (!author) {
    notFound()
  }

  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} components={{}} />
    </AuthorLayout>
  )
}
