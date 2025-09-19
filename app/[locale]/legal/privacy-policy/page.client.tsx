'use client'

import { useTranslations } from 'next-intl'

export default function PrivacyPolicyClient() {
  const t = useTranslations('privacyPolicy')

  const safeTranslate = (key: string, fallback: string = '') => {
    try {
      return t(key)
    } catch (error) {
      console.warn(`Translation key not found: ${key}`)
      return fallback
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">{t('title')}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>{t('effectiveDate')}</strong> {t('effectiveDateValue')}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {t('keyPointSummary.title')}
          </h2>
          <ul className="mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            {t.raw('keyPointSummary.points').map((point: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
          <p className="text-sm text-gray-600 italic dark:text-gray-400">
            {t('keyPointSummary.note')}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="section-1">
            {safeTranslate('sections.scope.title', '1. Portée')}
          </h2>
          <p
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: safeTranslate(
                'sections.scope.content',
                'Cette politique explique comment DeltaQuest, Inc. collecte, utilise et partage les données lorsque vous jouez à At All Costs sur Android ou iOS.'
              ),
            }}
          />
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="section-2">
            {safeTranslate('sections.dataCollection.title', '2. Données que nous collectons')}
          </h2>
          <p
            className="mb-4 text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: safeTranslate(
                'sections.dataCollection.intro',
                'Nous collectons et recevons les types de données suivants :'
              ),
            }}
          />
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            {t('sections.dataCollection.categories')}
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {t
              .raw('sections.dataCollection.dataTypes')
              .map((dataType: { name: string; description: string }, index: number) => (
                <li key={index}>
                  <strong>{dataType.name}</strong> - {dataType.description}
                </li>
              ))}
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {t('sections.dataCollection.usage')}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="section-3">
            {t('sections.thirdPartyServices.title')}
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t('sections.thirdPartyServices.intro')}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    {t('sections.thirdPartyServices.table.headers.partner')}
                  </th>
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    {t('sections.thirdPartyServices.table.headers.purpose')}
                  </th>
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    {t('sections.thirdPartyServices.table.headers.dataShared')}
                  </th>
                  <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                    {t('sections.thirdPartyServices.table.headers.optOut')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t
                  .raw('sections.thirdPartyServices.table.rows')
                  .map(
                    (
                      row: { partner: string; purpose: string; dataShared: string; optOut: string },
                      index: number
                    ) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2 dark:border-gray-600">
                          {row.partner}
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-600">
                          {row.purpose}
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-600">
                          {row.dataShared}
                        </td>
                        <td className="border border-gray-300 p-2 dark:border-gray-600">
                          <span dangerouslySetInnerHTML={{ __html: row.optOut }} />
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {t('sections.thirdPartyServices.internalReporting')}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="section-6">
            {t('sections.adPersonalization.title')}
          </h2>
          <ol className="space-y-4 text-gray-700 dark:text-gray-300">
            {t
              .raw('sections.adPersonalization.options')
              .map((option: { title: string; details: string[] }, index: number) => (
                <li key={index}>
                  <div dangerouslySetInnerHTML={{ __html: option.title }} />
                  {option.details.map((detail: string, detailIndex: number) => (
                    <div key={detailIndex} className="mt-1 ml-4">
                      {detail}
                    </div>
                  ))}
                </li>
              ))}
          </ol>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {t('sections.adPersonalization.note')}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="section-17">
            {t('sections.glossary.title')}
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {t
              .raw('sections.glossary.terms')
              .map((term: { term: string; definition: string }, index: number) => (
                <li key={index}>
                  <span dangerouslySetInnerHTML={{ __html: term.term }} /> - {term.definition}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
