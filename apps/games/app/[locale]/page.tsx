'use client'
import { useTranslations } from 'next-intl'

export default function GamesHome() {
  const t = useTranslations('games')

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            {t('welcome')}
          </h1>
          <p className="text-xl text-cyan-200 mb-12">
            {t('description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('techSupport')}</h3>
              <p className="text-cyan-200">Technical support and troubleshooting for all our games</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('community')}</h3>
              <p className="text-cyan-200">Connect with other players and share your experiences</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('guides')}</h3>
              <p className="text-cyan-200">Comprehensive guides to help you master our games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}