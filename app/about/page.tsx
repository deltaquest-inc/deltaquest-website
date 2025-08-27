import { genPageMetadata } from 'app/seo'
import ServiceCard from '@/components/ServiceCard'
import { servicesData } from '@/data/services/servicesData'
import CEOMessageBubble from '@/components/CEOMessageBubble'
import VisionCard from '@/components/VisionCard'
import CompanyInfo from '@/components/CompanyInfo'

export const metadata = genPageMetadata({
  title: '会社概要',
  description: 'デルタクエスト株式会社の概要とミッションについてご紹介します。',
})

export default function About() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-12 pb-12 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          会社概要
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-16 pb-16 dark:text-gray-400">
        <CompanyInfo />

        <h2 className="mt-12 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          ビジョン
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            '技術の力で企業の成長を加速する',
            'シンプルで拡張性のあるシステム設計を提供する',
            'ビジネスと技術の架け橋となる',
          ].map((v, i) => (
            <VisionCard key={i} text={v} index={i} />
          ))}
        </ul>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          代表メッセージ
        </h2>

        <CEOMessageBubble />

        <h2 className="mt-12 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          主要サービス
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-8 pt-6 pb-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
