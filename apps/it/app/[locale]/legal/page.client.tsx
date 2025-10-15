'use client'
import { useTranslations } from 'next-intl'

export default function Legal() {
  const t = useTranslations('legalPage')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t('title')}
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-10 pb-8 dark:text-gray-400">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('termsTitle')}</h2>
        <p>{t('termsText')}</p>

        <h3 className="text-gray-900 dark:text-gray-100">{t('disclaimerTitle')}</h3>
        <p>{t('disclaimerText')}</p>

        <h3 className="text-gray-900 dark:text-gray-100">{t('copyrightTitle')}</h3>
        <p>{t('copyrightText')}</p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('privacyTitle')}</h2>
        <p>{t('privacyText')}</p>

        <h3 className="text-gray-900 dark:text-gray-100">{t('infoCollectedTitle')}</h3>
        <p>{t('infoCollectedText')}</p>
        <ul>
          {t('infoCollectedList')
            .split('|')
            .map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
        </ul>

        <h3 className="text-gray-900 dark:text-gray-100">{t('dataProtectionTitle')}</h3>
        <p>{t('dataProtectionText')}</p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('contactTitle')}</h2>
        <p>{t('contactText')}</p>
        <p>
          📧 <strong className="text-gray-900 dark:text-gray-100">Email:</strong>{' '}
          <a href={`mailto:${t('email')}`}>{t('email')}</a>
        </p>
      </div>
    </div>
  )
}
