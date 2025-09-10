'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function CompanyInfo() {
  const t = useTranslations('about.companyInfo')

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-blue-100 bg-white/70 bg-gradient-to-b via-[#fffef9] to-[#fdfcf7] p-6 shadow-lg shadow-blue-300 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400 dark:border-none dark:bg-gray-800/70 dark:bg-none dark:shadow-blue-800"
      >
        <h3 className="mb-4 text-xl font-bold text-blue-800 dark:text-gray-100">{t('title')}</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('companyNameLabel')}:</strong>{' '}
            {t('companyName')}
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('locationLabel')}:</strong>{' '}
            {t('location')}
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('activitiesLabel')}:</strong>{' '}
            {t('activities')}
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('ceoLabel')}:</strong>{' '}
            {t('ceo')}
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('foundedLabel')}:</strong>{' '}
            {t('founded')}
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('capitalLabel')}:</strong>{' '}
            {t('capital')}
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">{t('contactLabel')}:</strong>{' '}
            <a
              href={`mailto:${t('contact')}`}
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t('contact')}
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="from-bg-white/70 rounded-2xl border border-blue-100 bg-gradient-to-b via-[#fffef9] to-[#fdfcf7] p-6 shadow-lg shadow-blue-300 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400 dark:border-none dark:bg-gray-800/70 dark:bg-none dark:shadow-blue-800"
      >
        <h3 className="mb-4 text-xl font-bold text-blue-800 dark:text-gray-100">
          {t('missionTitle')}
        </h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          {t('missionDescription')}
        </p>
      </motion.div>
    </div>
  )
}
