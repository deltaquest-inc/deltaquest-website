'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function LaserTagClient() {
  const t = useTranslations('laserTag')

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-gray-900 dark:text-gray-100">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Delta Quest</h1>
        <p className="text-lg">{t('tagline')}</p>
      </section>

      <section className="mb-12">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/static/images/laser-tag-hero.png"
            alt={t('imageAlt')}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">🎯 {t('concept.title')}</h2>
        <p>{t('concept.description')}</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">🚀 {t('features.title')}</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>{t('features.list.portable')}</li>
          <li>{t('features.list.ipCollaboration')}</li>
          <li>{t('features.list.competitive')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">📍 {t('targetEvents.title')}</h2>
        <p>{t('targetEvents.description')}</p>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-semibold">📞 {t('contact.title')}</h2>
        <p>
          {t('contact.description')}
          <br />
          📧{' '}
          <a href="mailto:your@email.com" className="text-orange-400 hover:underline">
            kevin.bulme@deltaquest.co.jp
          </a>
        </p>
      </section>
    </main>
  )
}
