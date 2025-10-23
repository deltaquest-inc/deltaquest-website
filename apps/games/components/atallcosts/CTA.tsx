'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CTA = () => {
  const t = useTranslations('atallcosts.cta')

  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('title')}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToFeedback}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('primaryButton')}
            >
              {t('primaryButton')}
            </motion.button>
          </div>
          
          <p className="text-sm text-yellow-200 max-w-2xl mx-auto">
            {t('note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
