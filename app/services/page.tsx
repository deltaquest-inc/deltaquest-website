import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'サービス',
  description: 'デルタクエスト株式会社が提供するITサービスをご紹介します。',
})

export default function Services() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          サービス
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-10 pb-8 dark:text-gray-400">
        <p>
          デルタクエスト株式会社は、最先端のIT技術を活用し、お客様のビジネス課題を解決するための高品質なITサービスを提供します。
          フロントエンド開発からクラウドインフラの最適化まで、幅広いニーズに対応可能です。
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          提供するITサービス
        </h2>
        <ul>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">フロントエンド開発:</strong>{' '}
            高速で直感的なWebアプリケーションの開発
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">Next.js / React 開発:</strong>{' '}
            高性能なモダンWebサイトやアプリの構築
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">SEO最適化:</strong>{' '}
            Webサイトの検索エンジン最適化（SEO）とパフォーマンス向上
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">CI/CDパイプライン構築:</strong>{' '}
            DevOpsを活用した開発プロセスの自動化
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">クラウドインフラ設計:</strong>{' '}
            AWSやGCPを活用したスケーラブルなシステム構築
          </li>
          <li>
            <strong className="text-gray-900 dark:text-gray-100">
              パフォーマンスチューニング:
            </strong>{' '}
            Webアプリの速度・UX改善
          </li>
        </ul>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          なぜデルタクエスト？
        </h2>
        <p>
          私たちは最先端の技術と豊富な経験を活かし、お客様のニーズに最適なソリューションを提供します。
          高品質な開発とスピーディな対応で、プロジェクト成功をサポートします。
        </p>
      </div>

      <div className="pt-10">
        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          ご相談・お問い合わせ
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          ご興味のある方は、お気軽にお問い合わせください。
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="rounded-md bg-blue-600 px-4 py-2 text-lg font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </div>
  )
}
