import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'お問い合わせ',
  description: 'デルタクエスト株式会社へのお問い合わせはこちら。',
})

const ENABLE_CONTACT_FORM = false

export default function Contact() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          お問い合わせ
        </h1>
      </div>
      <div className="prose dark:prose-dark max-w-none pt-10 pb-8 dark:text-gray-400">
        <p>
          デルタクエスト株式会社のITサービスに関するご質問・ご相談がございましたら、以下の方法でお気軽にお問い合わせください。
        </p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          お問い合わせ方法
        </h2>
        <ul>
          <li>
            📧 <strong className="text-gray-900 dark:text-gray-100">メール:</strong>{' '}
            <a
              href="mailto:info@deltaquest.co.jp"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              info@deltaquest.co.jp
            </a>
          </li>
          <li>
            🏢 <strong className="text-gray-900 dark:text-gray-100">所在地:</strong> 日本、札幌市
            (※詳細はお問い合わせ時にお伝えいたします)
          </li>
        </ul>
      </div>

      {ENABLE_CONTACT_FORM && (
        <div className="pt-10 pb-8">
          <h2 className="text-2xl leading-8 font-bold tracking-tight">お問い合わせフォーム</h2>
          <form
            className="mt-6 space-y-4"
            action="https://formspree.io/f/{your-form-id}" // Replace with actual Formspree or backend endpoint
            method="POST"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                お名前
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                メールアドレス
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                お問い合わせ内容
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800"
                />
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-lg font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
