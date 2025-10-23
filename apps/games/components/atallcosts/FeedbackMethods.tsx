'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ATC_CONFIG } from '@/lib/atallcosts/config'

const FeedbackMethods = () => {
  const t = useTranslations('atallcosts.feedback')

  const handleDiscordClick = () => {
    window.open(ATC_CONFIG.discordUrl, '_blank', 'noopener,noreferrer')
  }

  const handleXClick = () => {
    const text = encodeURIComponent('プレイ感想')
    const hashtags = encodeURIComponent(ATC_CONFIG.xHashtag)
    const url = `${ATC_CONFIG.xIntentBase}?text=${text}&hashtags=${hashtags}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleFormClick = () => {
    window.open(ATC_CONFIG.googleFormUrl, '_blank', 'noopener,noreferrer')
  }

  const methods = [
    {
      title: t('discord.title'),
      button: t('discord.button'),
      tooltip: t('discord.tooltip'),
      onClick: handleDiscordClick,
      icon: '💬'
    },
    {
      title: t('x.title'),
      button: t('x.button'),
      tooltip: t('x.tooltip'),
      onClick: handleXClick,
      icon: '🐦'
    },
    {
      title: t('form.title'),
      button: t('form.button'),
      tooltip: t('form.tooltip'),
      onClick: handleFormClick,
      icon: '📝'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-yellow-200">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {method.title}
              </h3>
              <motion.button
                onClick={method.onClick}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={method.tooltip}
                title={method.tooltip}
              >
                {method.button}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeedbackMethods
