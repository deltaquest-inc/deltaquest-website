import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

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
