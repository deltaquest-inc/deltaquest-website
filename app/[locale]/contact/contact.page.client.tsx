'use client'

import { useTranslations } from 'next-intl'
import ContactForm from '@/components/ContactForm'

export default function ContactPageClient() {
  const t = useTranslations('contactPage')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {t('title')}
        </h1>
      </div>

      <div className="prose dark:prose-dark max-w-none pt-10 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p>{t('intro')}</p>

            <h2 className="mt-8 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {t('contactMethodsTitle')}
            </h2>
            <ul className="list-none p-0">
              <li className="mt-4">
                <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <span className="text-lg">📧</span>
                </span>
                <strong className="ml-2 text-gray-900 dark:text-gray-100">
                  {t('emailLabel')}:
                </strong>
                <a
                  href={`mailto:${t('email')}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ml-2"
                >
                  {t('email')}
                </a>
              </li>

              <li className="mt-4">
                <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <span className="text-lg">🏢</span>
                </span>
                <strong className="ml-2 text-gray-900 dark:text-gray-100">
                  {t('locationLabel')}:
                </strong>
                <span className="ml-2">{t('location')}</span>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('locationNote')}</p>
              </li>
            </ul>
          </div>

          <div className="mt-8 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
