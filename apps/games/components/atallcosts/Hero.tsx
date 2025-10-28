'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const Hero = () => {
  const t = useTranslations('atallcosts.hero')
  const [showNotification, setShowNotification] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClose = () => {
    setIsExiting(true)
    // Délai avant de fermer la popup (réduit pour une animation plus rapide)
    setTimeout(() => setShowNotification(false), 2100)
  }

  // Position de l'explosion au centre du personnage

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/images/atallcosts/hero_main.png)',
        }}
      />

      {/* Secretary Notification Popup */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isExiting ? 
            { 
              opacity: 0, 
              x: 300, 
              y: -200, 
              rotate: 90,
              scale: 0.3 
            } : 
            { 
              opacity: 1, 
              y: 0, 
              scale: 1 
            }
          }
          transition={{ 
            duration: 0.6, 
            delay: isExiting ? 0.9 : 1, // Délai minimum pour voir l'explosion
            ease: "easeIn"
          }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-red-500 p-4 flex items-start gap-3">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 text-white font-bold text-lg flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>

            {/* Secretary Image with notification badge and explosion */}
            <motion.div 
              className="relative flex-shrink-0"
              animate={isExiting ? { rotate: 720 } : { rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            >
              {/* Single Explosion */}
              {isExiting && (
                <motion.img
                  src="/images/atallcosts/explosion.png"
                  alt="Explosion"
                  className="absolute w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    rotate: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1.5, 2],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                />
              )}
              
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center z-10">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <img 
                src="/images/atallcosts/character_02_Secretary.png"
                alt="Secretary"
                className="w-16 h-16 object-contain relative z-10"
              />
            </motion.div>

            {/* Speech bubble */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 shadow-inner border-2 border-blue-200">
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                {t('notificationMessage')}
              </p>
            </div>

            {/* Speech bubble tail */}
            <div className="absolute left-20 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-16 border-b-blue-100 transform rotate-45 translate-x-2 translate-y-2"></div>
          </div>
        </motion.div>
      )}
      
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
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#F2C94C' }}>
            {t('subtitle')}
          </p>
          
          <motion.button
            onClick={scrollToFeedback}
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style={{ backgroundColor: '#1E90FF' }}
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
