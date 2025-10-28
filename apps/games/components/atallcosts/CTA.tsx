'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CTA = () => {
  const t = useTranslations('atallcosts.cta')

  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-16 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/atallcosts/cta_bg.png)',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
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
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
              style={{ backgroundColor: '#1E90FF' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('primaryButton')}
            >
              {t('primaryButton')}
            </motion.button>
          </div>
          
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#F2C94C' }}>
            {t('note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
