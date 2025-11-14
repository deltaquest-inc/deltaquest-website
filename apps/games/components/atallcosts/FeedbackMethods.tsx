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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-pixel text-neon-white-static">
            {t('title')}
          </h2>
          <p className="text-xl font-pixel" style={{ color: '#F2C94C' }}>
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              {/* Speech bubble tail */}
              <div className={`absolute ${index === 0 ? 'bottom-0 left-8' : index === 1 ? 'bottom-0 left-1/2 -translate-x-1/2' : 'bottom-0 right-8'} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-16 border-b-blue-500/20 transform rotate-45 translate-y-4`}></div>
              
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4 font-pixel text-neon-white-static">
                {method.title}
              </h3>
              <motion.button
                onClick={method.onClick}
                className="w-full px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none font-pixel mt-auto cursor-pointer"
                style={{ backgroundColor: '#1E90FF' }}
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
