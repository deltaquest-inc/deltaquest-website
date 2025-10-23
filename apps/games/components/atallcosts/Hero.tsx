'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('atallcosts.hero')

  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/images/atallcosts/hero.svg)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {t('title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-yellow-200 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          
          <motion.button
            onClick={scrollToFeedback}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('ctaButton')}
          >
            {t('ctaButton')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
