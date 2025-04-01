import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = genPageMetadata({
  title: 'Delta Quest - レーザータグ体験型イベント',
  description:
    'Delta Questは、eスポーツ大会やスタジアムイベント、アニメ・ゲーム系の大型イベント向けに提供される、ポータブルで没入感のあるレーザータグ体験です。ファンや家族連れの来場者に向けた次世代アトラクションを日本初上陸。',
})

export default function LaserTagPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-gray-900 dark:text-gray-100">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Delta Quest</h1>
        <p className="text-lg">ポータブルで高没入型のレーザータグを、日本のイベントに。</p>
      </section>

      <section className="mb-12">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/static/images/laser-tag-hero.png"
            alt="Delta Quest VR Laser Tag"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">🎯 コンセプト</h2>
        <p>
          Delta Questは、eスポーツ大会、スタジアムイベント、アニメ・ゲーム系の展示会など、
          あらゆる大型イベントに導入可能なポータブル型レーザータグ体験です。
          VRやIPコラボを通じて、これまでにない“リアルなゲーム”を提供します。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">🚀 特徴</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>持ち運び可能なセットアップ：イベント現場に合わせて柔軟に対応</li>
          <li>IPコラボによるブランド体験：アニメ・ゲームとの連携でファン層に刺さる</li>
          <li>競技性＆ファミリー向け：スコアリング、チーム戦、親子参加もOK</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">📍 対象イベント</h2>
        <p>
          eスポーツ大会やスポーツイベント、アニメ・ゲーム系の展示会など、大規模なイベントに幅広く対応可能です。
          来場者とのエンゲージメントを高めたい主催者に最適なアトラクションです。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">📞 お問い合わせ</h2>
        <p>
          本サービスに関するご質問・コラボレーションのご相談は、お気軽にご連絡ください。
          <br />
          📧{' '}
          <a href="mailto:your@email.com" className="text-orange-400 hover:underline">
            kevin.bulme@deltaquest.co.jp
          </a>
        </p>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          👨‍💻 ITサービスをご希望の方は{' '}
          <Link href="/" className="underline hover:text-gray-900 dark:text-gray-100">
            メインサイトへ
          </Link>
        </p>
      </footer>
    </main>
  )
}
