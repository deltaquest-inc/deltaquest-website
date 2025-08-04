import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '利用規約',
  description: 'デルタクエスト株式会社の利用規約。',
})

export default function TermsAndConditions() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          利用規約
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-10 pb-8 dark:text-gray-400">
        <p>
          本ウェブサイトはデルタクエスト株式会社（以下、「当社」といいます）が運営しています。
          本ウェブサイトを利用される際には、以下の利用規約に同意したものとみなします。
        </p>
        <h3 className="text-gray-900 dark:text-gray-100">免責事項</h3>
        <p>
          当社は、本ウェブサイトに掲載される情報の正確性・最新性の確保に努めていますが、誤りや不備がある場合があります。
          本ウェブサイトの情報を利用することで発生したいかなる損害に対しても、当社は一切の責任を負いません。
        </p>
        <h3 className="text-gray-900 dark:text-gray-100">著作権</h3>
        <p>
          本ウェブサイトに掲載されているコンテンツ（文章、画像、デザイン、プログラム等）は、特別な記載がない限り、当社が著作権を有します。
          これらのコンテンツの無断転載・複製・配布を禁止します。
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          お問い合わせ
        </h2>
        <p>
          本利用規約に関するご質問がございましたら、以下までご連絡ください：
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