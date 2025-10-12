'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ConceptCard from '@/components/ConceptCard'
import FeatureCard from '@/components/FeatureCard'
import ContactCard from '@/components/ContactCard'

export default function LaserTagClient() {
  const t = useTranslations('laserTag')

  const features = [
    t('features.list.portable'),
    t('features.list.ipCollaboration'),
    t('features.list.competitive')
  ]

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

      <div className="grid gap-8">
        <ConceptCard
          title={t('concept.title')}
          description={t('concept.description')}
          icon="🎯"
          index={0}
        />

        <FeatureCard
          title={t('features.title')}
          features={features}
          icon="🚀"
          index={1}
        />

        <ConceptCard
          title={t('targetEvents.title')}
          description={t('targetEvents.description')}
          icon="📍"
          index={2}
        />

        <ContactCard
          title={t('contact.title')}
          description={t('contact.description')}
          email="kevin.bulme@deltaquest.co.jp"
          icon="📞"
          index={3}
        />
      </div>
    </main>
  )
}
