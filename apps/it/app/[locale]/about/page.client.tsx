'use client'

import { useTranslations } from 'next-intl'
import ServiceCard from '@/components/ServiceCard'
import { servicesData } from '@/data/services/servicesData'
import CEOMessageBubble from '@/components/CEOMessageBubble'
import VisionCard from '@/components/VisionCard'
import CompanyInfo from '@/components/CompanyInfo'

export default function AboutPageClient() {
  const t = useTranslations('about')
  const tServices = useTranslations('services')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-12 pb-12 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-6xl dark:text-gray-100">
          {t('title')}
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-16 pb-16 dark:text-gray-400">
        <CompanyInfo />

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t('visionTitle')}
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.raw('visionStatements').map((v: string, i: number) => (
            <VisionCard key={i} text={v} index={i} />
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t('ceoMessageTitle')}
        </h2>
        <CEOMessageBubble />

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t('servicesTitle')}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-8 pt-6 pb-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  )
}
