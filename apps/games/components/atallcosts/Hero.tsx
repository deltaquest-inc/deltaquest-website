'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const t = useTranslations('atallcosts.hero')
  const [showNotification, setShowNotification] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [useFallbackImage, setUseFallbackImage] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)

  const scrollToFeedback = () => {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClose = () => {
    setIsExiting(true)
    // Délai avant de fermer la popup (réduit pour une animation plus rapide)
    setTimeout(() => setShowNotification(false), 2100)
  }

  const handleImageError = () => {
    setUseFallbackImage(true)
    setIsImageLoaded(true) // Consider loaded even if error (fallback will be used)
  }

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  // Preload the secretary image
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const img = document.createElement('img')
    img.onload = () => {
      setIsImageLoaded(true)
    }
    img.onerror = () => {
      // Try fallback image
      const fallbackImg = document.createElement('img')
      fallbackImg.onload = () => {
        setUseFallbackImage(true)
        setIsImageLoaded(true)
      }
      fallbackImg.onerror = () => {
        // Even if both fail, consider loaded to show popup
        setUseFallbackImage(true)
        setIsImageLoaded(true)
      }
      fallbackImg.src = "/images/atallcosts/character_02_Secretary.png"
    }
    img.src = "/images/atallcosts/character_Secretary_Animated.gif"
  }, [])

  // Wait for page to be fully loaded before showing notification
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLoad = () => {
        setIsPageLoaded(true)
      }
      
      if (document.readyState === 'complete') {
        setIsPageLoaded(true)
      } else {
        window.addEventListener('load', handleLoad)
        return () => {
          window.removeEventListener('load', handleLoad)
        }
      }
    }
  }, [])

  // Show notification only when both page and image are loaded
  useEffect(() => {
    if (isPageLoaded && isImageLoaded) {
      // Small delay to ensure smooth appearance
      const timer = setTimeout(() => {
        setShowNotification(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isPageLoaded, isImageLoaded])

  // Position de l'explosion au centre du personnage

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Bold Blue Gradient Background (AINNA Design 1) - Adjusted */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-900/40"
      />
      
      {/* Background Image - Optimized for LCP */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/atallcosts/hero_main.png"
          alt="Hero background"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Confetti Animation (AINNA Design 1) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-confetti-1"></div>
        <div className="absolute top-0 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-confetti-2"></div>
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-confetti-3"></div>
        <div className="absolute top-0 left-2/3 w-1 h-1 bg-green-400 rounded-full animate-confetti-4"></div>
        <div className="absolute top-0 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-confetti-1"></div>
        <div className="absolute top-0 left-1/6 w-1 h-1 bg-pink-400 rounded-full animate-confetti-2"></div>
        <div className="absolute top-0 left-5/6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-confetti-3"></div>
        <div className="absolute top-0 left-1/12 w-1 h-1 bg-cyan-400 rounded-full animate-confetti-4"></div>
        <div className="absolute top-0 left-11/12 w-2 h-2 bg-lime-400 rounded-full animate-confetti-1"></div>
      </div>

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
                src={useFallbackImage 
                  ? "/images/atallcosts/character_02_Secretary.png" 
                  : "/images/atallcosts/character_Secretary_Animated.gif"
                }
                alt="Secretary"
                className="w-16 h-16 object-contain relative z-10"
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
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
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-pixel text-neon-white-static">
            {t('title')}
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-pixel" style={{ color: '#F2C94C' }}>
            {t('subtitle')}
          </p>
          
          <motion.button
            onClick={scrollToFeedback}
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none font-pixel text-lg"
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
