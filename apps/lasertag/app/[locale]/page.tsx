'use client'
import { useTranslations } from 'next-intl'

export default function LaserTagHome() {
  const t = useTranslations('lasertag')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            {t('welcome')}
          </h1>
          <p className="text-xl text-blue-200 mb-12">
            {t('description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('equipment')}</h3>
              <p className="text-blue-200">State-of-the-art laser tag gear for the ultimate gaming experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('arenas')}</h3>
              <p className="text-blue-200">Multiple themed environments designed for maximum excitement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('teambuilding')}</h3>
              <p className="text-blue-200">Perfect for corporate events and group activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}