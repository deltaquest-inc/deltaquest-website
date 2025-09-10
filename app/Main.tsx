'use client'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import LinkButton from '@/components/LinkButton'
import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { useTranslations } from 'next-intl'

export const metadata = genPageMetadata({
  title: 'ホーム',
  description: '最先端のITソリューションを提供するデルタクエスト株式会社。',
})
const blogContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const blogCardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}
const blogSlugs = ['media-1p-ads', 'logistics-redesign']
export default function Home() {
  const t = useTranslations('home')
  const tBlog = useTranslations('blogs')

  const posts = allBlogs
    .filter((post) => blogSlugs.includes(post.slug))
    .map((post) => ({
      ...post,
      title: tBlog(`${post.slug}.title`),
      summary: tBlog(`${post.slug}.summary`),
    }))
  return (
    <div className="divide-y divide-gray-200 pt-20 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t('welcome')}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t('description')}</p>
        <div className="flex space-x-4">
          <LinkButton href="/services" label={t('viewServices')} isPrimary={true} />
          <LinkButton href="/contact" label={t('contactUs')} isPrimary={false} />
        </div>
      </div>

      <div className="pt-10">
        <h2 className="pb-12 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t('latestPosts')}
        </h2>
        <motion.ul
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={blogContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {!posts.length && <p className="text-gray-500 dark:text-gray-400">{t('noPosts')}</p>}
          {posts.map((post) => (
            <motion.li key={post.slug} variants={blogCardVariants}>
              <BlogCard
                title={post.title}
                summary={post.summary}
                date={post.date}
                slug={post.slug}
              />
            </motion.li>
          ))}
        </motion.ul>
        {posts.length > 0 && (
          <div className="mt-2.5 flex justify-end pt-12 text-base leading-6 font-medium">
            <Link
              href="/blog"
              className="text-[#2563eb] hover:text-[#1e3a8a] dark:hover:text-[#1e3a8a]"
            >
              {t('viewAllPosts')}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
