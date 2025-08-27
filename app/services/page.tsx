import { genPageMetadata } from 'app/seo'
import ServiceCard from '@/components/ServiceCard'
import { servicesData } from '@/data/services/servicesData'
import WhyDeltaQuest from '@/components/WhyDQ'

export const metadata = genPageMetadata({
  title: 'サービス',
  description: 'デルタクエスト株式会社が提供するITサービスをご紹介します。',
})

export default function Services() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-12 pb-12 text-center md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          サービス
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-12 pb-16 dark:text-gray-400">
        <p>
          デルタクエスト株式会社は、最先端のIT技術を活用し、お客様のビジネス課題を解決するための高品質なITサービスを提供します。
          フロントエンド開発からクラウドインフラの最適化まで、幅広いニーズに対応可能です。
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          提供するITサービス
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <WhyDeltaQuest />
      </div>

      <div className="relative mt-16 flex flex-col items-center">
        <div className="relative w-full max-w-md rounded-3xl bg-white/70 p-8 text-center shadow-xl shadow-blue-200 backdrop-blur-lg dark:bg-gray-800/70 dark:shadow-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ご相談・お問い合わせ
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            ご興味のある方は、お気軽にお問い合わせください。
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            お問い合わせはこちら
          </a>

          <div className="shadow-[0_10px_30px_rgba(59,130,246,0.3)] dark:shadow-[0_10px_30px_rgba(99,102,241,0.4)]"></div>
          <div className="shadow-[0_10px_30px_rgba(59,130,246,0.3)] dark:shadow-[0_10px_30px_rgba(99,102,241,0.4)]"></div>
        </div>
      </div>
    </div>
  )
}
