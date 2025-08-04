import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'プライバシーポリシー',
  description: 'デルタクエスト株式会社のプライバシーポリシー。',
})

export default function PrivacyPolicy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          プライバシーポリシー
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-10 pb-8 dark:text-gray-400">
        <p>
          当社は、お客様の個人情報を適切に管理し、以下のプライバシーポリシーに基づいて取り扱います。
        </p>
        <h3 className="text-gray-900 dark:text-gray-100">収集する情報</h3>
        <p>本ウェブサイトでは、以下の目的のために、お客様の個人情報を収集する場合があります：</p>
        <ul>
          <li>お問い合わせフォームの利用</li>
          <li>サービス向上のための分析</li>
          <li>その他、お客様へのご連絡</li>
        </ul>
        <h3 className="text-gray-900 dark:text-gray-100">個人情報の保護</h3>
        <p>
          当社は、お客様の個人情報を第三者に提供・開示することはありません。ただし、法律の適用を受ける場合や公的機関からの要請があった場合を除きます。
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          お問い合わせ
        </h2>
        <p>
          本プライバシーポリシーに関するご質問がございましたら、以下までご連絡ください：
        </p>
        <p>
          📧 <strong className="text-gray-900 dark:text-gray-100">メール:</strong>{' '}
          <a
            href="mailto:info@deltaquest.co.jp"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            info@deltaquest.co.jp
          </a>
        </p>
      </div>
    </div>
  )
} 