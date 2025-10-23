'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const DevMessage = () => {
  const t = useTranslations('atallcosts.devMessage')

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('title')}
          </h2>
          
          <blockquote className="text-lg md:text-xl text-yellow-100 leading-relaxed space-y-4">
            <p>{t('message1')}</p>
            <p>{t('message2')}</p>
            <p>{t('message3')}</p>
            <p>{t('message4')}</p>
            <p>{t('message5')}</p>
            <p>{t('message6')}</p>
            <p className="text-right text-yellow-200 font-semibold mt-6">
              — {t('signature')}
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default DevMessage
