import { genPageMetadata } from 'app/seo'
import ServiceCard from '@/components/ServiceCard'
import { servicesData } from '@/data/services/servicesData'

export const metadata = genPageMetadata({
  title: '会社概要',
  description: 'デルタクエスト株式会社の概要とミッションについてご紹介します。',
})

export default function About() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          会社概要
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-10 pb-8 dark:text-gray-400">
        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          会社情報
        </h2>
        <ul>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">会社名:</strong>{' '}
            デルタクエスト株式会社
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">所在地:</strong>{' '}
            札幌市中央区南5条西15丁目2-3
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">事業内容:</strong>{' '}
            フロントエンド開発、Webアプリケーション構築、SEO最適化、CI/CD導入支援、クラウドインフラ設計
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">代表:</strong> ブルメ ケヴィン
          </li>

          <li>
            <strong className="text-gray-900 dark:text-gray-100">設立:</strong> 2025年2月20日
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">資本金:</strong> 500万円
          </li>

          <li>
            <strong className="text-gray-900 dark:text-gray-100">お問い合わせ:</strong>{' '}
            <a href="mailto:info@deltaquest.co.jp">info@deltaquest.co.jp</a>
          </li>
        </ul>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          ミッション
        </h2>
        <p>
          デルタクエスト株式会社は、最先端のIT技術を活用し、企業がデジタル市場で成功するためのソリューションを提供します。
          私たちの目標は、直感的でスケーラブルなWebアプリケーションを構築し、ビジネスの成長を支援することです。
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          ビジョン
        </h2>
        <ul>
          <li>技術の力で企業の成長を加速する</li>
          <li>シンプルで拡張性のあるシステム設計を提供する</li>
          <li>ビジネスと技術の架け橋となる</li>
        </ul>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          代表メッセージ
        </h2>
        <p>
          「テクノロジーの力で、企業が市場で競争力を持つためのサポートをしたい。私たちは、フロントエンド開発とシステム設計の専門知識を活かし、
          企業がスケーラブルで持続可能な成長を遂げるための支援を行っています。」
        </p>
        <p>
          <strong className="text-gray-900 dark:text-gray-100">
            ケヴィン・ブルメ, デルタクエスト株式会社 代表
          </strong>
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          主要サービス
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
      </div>
    </div>
  )
}
