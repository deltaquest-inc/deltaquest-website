'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import ServiceCard from '@/components/ServiceCard'
import { servicesData } from '@/data/services/servicesData'
import WhyDeltaQuest from '@/components/WhyDQ'

export default function ServicesPageClient() {
  const t = useTranslations('servicesPage')
  const tServices = useTranslations('services')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-12 pb-12 text-center md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t('title')}
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-12 pb-16 dark:text-gray-400">
        <p>{t('intro')}</p>

        <h2 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t('ourServicesTitle')}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.key}
              title={tServices(`${service.key}.title`)}
              description={tServices(`${service.key}.description`)}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        <WhyDeltaQuest />
      </div>

      <div className="relative mt-16 flex flex-col items-center">
        <div className="relative w-full max-w-md rounded-3xl bg-white/70 p-8 text-center shadow-xl shadow-blue-200 backdrop-blur-lg dark:bg-gray-800/70 dark:shadow-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('contactTitle')}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('contactDescription')}</p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {t('contactButton')}
          </Link>
        </div>
      </div>
    </div>
  )
}
