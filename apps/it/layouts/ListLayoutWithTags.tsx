'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from '../contentlayer/generated'
import Link from '@/components/Link'
import tagData from 'app/tag-data.json'
import BlogListCard from '@/components/BlogListCard'
import { getPagination, getBasePath } from '@/utils/getPagination'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}
function Pagination({ totalPages, currentPage }: PaginationProps) {
  const { prevPage, nextPage } = getPagination(currentPage, totalPages)
  const pathname = usePathname()
  const basePath = getBasePath(pathname)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage ? (
          <button className="cursor-auto disabled:opacity-50" disabled>
            Previous
          </button>
        ) : (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage ? (
          <button className="cursor-auto disabled:opacity-50" disabled>
            Next
          </button>
        ) : (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}
export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const t = useTranslations('tagModule')
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const params = useParams()
  const locale = params?.locale || 'ja'
  return (
    <div>
      <div className="pt-6 pb-6">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {title}
        </h1>
      </div>

      <div className="flex sm:space-x-24">
        <div className="hidden max-h-screen max-w-[280px] min-w-[280px] flex-col overflow-auto rounded-2xl bg-white/70 p-6 shadow-lg shadow-blue-200 backdrop-blur-md sm:flex dark:bg-gray-800/70 dark:shadow-blue-800">
          <div className="mb-6 px-2">
            {pathname === '/blog' ? (
              <h3 className="block text-lg font-bold text-[#111827] uppercase dark:text-gray-100">
                {title}
              </h3>
            ) : (
              <Link
                href={`/${locale}/blog`}
                className="block text-lg font-bold text-blue-500 uppercase transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                {title}
              </Link>
            )}
          </div>

          <ul className="flex flex-col gap-3">
            {sortedTags.map((tag) => {
              const isActive = pathname === `/tags/${slug(tag)}`
              return (
                <li key={tag}>
                  <Link
                    href={`/${locale}/tags/${slug(tag)}`}
                    className={`inline-block rounded-xl px-3 py-2 text-sm font-medium uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                    }`}
                  >
                    {tag} ({tagCounts[tag]})
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex-1">
          <ul className="space-y-6">
            {displayPosts.map((post, index) => {
              const cleanedSlug = post.slug.startsWith(post.locale + '/')
                ? post.slug.substring(post.locale.length + 1)
                : post.slug

              return (
                <BlogListCard
                  key={post.path}
                  title={post.title}
                  summary={post.summary ?? 'No summary available.'}
                  date={post.date}
                  slug={cleanedSlug}
                  tags={post.tags}
                  index={index}
                  locale={post.locale as 'en' | 'fr' | 'ja'}
                />
              )
            })}
          </ul>

          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}
