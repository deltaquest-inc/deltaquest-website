import { allAuthors } from 'contentlayer/generated'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

type Params = { locale: string; slug: string }
type Props = { params: Promise<Params> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const author = allAuthors.find((p) => p.slug === slug)
  if (!author) {
    return genPageMetadata({
      title: 'Author Not Found',
      description: 'The requested author could not be found.',
    })
  }
  return genPageMetadata({
    title: author.name,
    description: `${author.name} - ${author.occupation} at ${author.company}`,
  })
}

const LOCALES = ['fr', 'en', 'ja'] as const
export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allAuthors.map((author) => ({ locale, slug: author.slug })),
  )
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
      <div className="prose dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: author.body?.raw || 'No content available for this author.',
          }}
        />
      </div>
    </AuthorLayout>
  )
}