'use client'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import LinkButton from '@/components/LinkButton'
import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'

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
export default function Home() {
  const posts = allBlogs.slice(0, 5)

  return (
    <div className="divide-y divide-gray-200 pt-20 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          デルタクエストへようこそ
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          デルタクエスト株式会社は、最先端のITサービスを提供する企業です。フロントエンド開発、Next.js/React、SEO最適化、クラウドインフラ構築など、ビジネスの成長をサポートします。
        </p>
        <div className="flex space-x-4">
          <LinkButton href="/services" label="サービスを見る" isPrimary={true} />
          <LinkButton href="/contact" label="お問い合わせ" isPrimary={false} />
        </div>
      </div>

      <div className="pt-10">
        <h2 className="pb-12 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          最新のブログ記事
        </h2>
        <motion.ul
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={blogContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {!posts.length && <p className="text-gray-500 dark:text-gray-400">投稿がありません。</p>}
          {posts.map((post) => {
            const { slug, date, title, summary } = post
            return (
              <motion.li key={slug} variants={blogCardVariants}>
                <BlogCard title={title} summary={summary || ''} date={date} slug={slug} />
              </motion.li>
            )
          })}
        </motion.ul>
        {posts.length > 0 && (
          <div className="mt-2.5 flex justify-end pt-12 text-base leading-6 font-medium">
            <Link
              href="/blog"
              className="text-[#2563eb] hover:text-[#1e3a8a] dark:hover:text-[#1e3a8a]"
            >
              すべての投稿を見る →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
