import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import type { Metadata } from 'next'

const POSTS_PER_PAGE = 5

export async function generateMetadata({ params }: { params: Promise<BlogPageParams> }): Promise<Metadata> {
  const { locale } = await params
  
  // Simple title mapping based on locale
  const titles = {
    fr: 'Blog - Delta Quest',
    en: 'Blog - Delta Quest',
    ja: 'ブログ - Delta Quest'
  }
  
  return genPageMetadata({
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: 'Read our latest articles and insights',
  })
}

type BlogPageParams = {
  locale: 'en' | 'fr' | 'ja'
  page?: string
}

type BlogPageProps = {
  params: Promise<BlogPageParams>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale, page } = await params
  const pageNumber = page ? parseInt(page, 10) : 1

  const filteredPosts = allBlogs.filter((post) => post.locale === locale)

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const pageTitle =
    locale === 'fr' ? 'Tous les articles' : locale === 'ja' ? '全ての記事' : 'All Posts'

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title={pageTitle}
    />
  )
}
