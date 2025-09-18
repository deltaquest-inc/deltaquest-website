import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from '../../tag-data.json'
import { getTranslations } from 'next-intl/server'

export default async function TagsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'tagsPage' })

  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14 dark:text-gray-100">
          {t('title')}
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {tagKeys.length === 0 && t('noTags')}
        {sortedTags.map((tKey) => (
          <div key={tKey} className="mt-2 mr-5 mb-2">
            <Tag text={tKey} />
            <Link
              href={`/${locale}/tags/${slug(tKey)}`}
              className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
              aria-label={`View posts tagged ${tKey}`}
            >
              {` (${tagCounts[tKey]})`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
