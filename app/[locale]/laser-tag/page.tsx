import { genPageMetadata } from 'app/seo'
import LaserTagClient from './LaserTagClient'

export const metadata = genPageMetadata({
  title: 'Delta Quest - レーザータグ体験型イベント',
  description:
    'Delta Questは、eスポーツ大会やスタジアムイベント、アニメ・ゲーム系の大型イベント向けに提供される、ポータブルで没入感のあるレーザータグ体験です。ファンや家族連れの来場者に向けた次世代アトラクションを日本初上陸。',
})

export default function LaserTagPage() {
  return <LaserTagClient />
}
