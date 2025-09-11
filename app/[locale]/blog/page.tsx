import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage({
  params,
}: {
  params: { locale: 'en' | 'fr' | 'ja'; page?: string }
}) {
  const locale = params.locale
  const pageNumber = params.page ? parseInt(params.page) : 1
  console.log(
    'All post locales:',
    allBlogs.map((post) => post.locale)
  )
  // 🔹 Filtrer les articles par locale
  const filteredPosts = allBlogs.filter((post) => post.locale === locale)

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={{ currentPage: pageNumber, totalPages }}
      title={locale === 'fr' ? 'Tous les articles' : locale === 'ja' ? '全ての記事' : 'All Posts'}
    />
  )
}
