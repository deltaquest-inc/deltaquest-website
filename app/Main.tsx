import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import { formatDate } from 'pliny/utils/formatDate'
import LinkButton from '@/components/LinkButton'

export const metadata = genPageMetadata({
  title: 'ホーム',
  description: '最先端のITソリューションを提供するデルタクエスト株式会社。',
})

export default function Home() {
  const posts = allBlogs.slice(0, 5) // Display latest 5 posts

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
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
        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          最新のブログ記事
        </h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && <p className="text-gray-500 dark:text-gray-400">投稿がありません。</p>}
          {posts.map((post) => {
            const { slug, date, title, summary } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">投稿日</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          続きを読む →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > 0 && (
          <div className="flex justify-end text-base leading-6 font-medium">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              すべての投稿を見る →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
