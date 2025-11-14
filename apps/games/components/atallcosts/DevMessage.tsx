'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

const DevMessage = () => {
  const t = useTranslations('atallcosts.devMessage')
  const [isTvOn, setIsTvOn] = useState(true)
  const [isStartingUp, setIsStartingUp] = useState(false)

  const handlePowerToggle = () => {
    if (!isTvOn) {
      // Allumer la TV avec animation de démarrage
      setIsStartingUp(true)
      setIsTvOn(true)
      
      // Arrêter l'animation de démarrage après 3 secondes
      setTimeout(() => {
        setIsStartingUp(false)
      }, 3000)
    } else {
      // Éteindre la TV directement
      setIsTvOn(false)
      setIsStartingUp(false)
    }
  }

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-blue-800/40 backdrop-blur-xl rounded-3xl p-6 md:p-12 border-4 border-white/30 shadow-2xl"
        >
          {/* Header with pixel font and neon effect */}
          <div className="text-center mb-4 md:mb-8">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-white font-pixel text-neon-white-static mb-4 md:mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              {t('title')}
            </motion.h2>
            
            {/* Gaming-style divider */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="text-yellow-400 font-pixel text-lg">⚡</div>
              <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </div>
          </div>
          
          
          {/* Retro TV Screen Message Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-8"
          >
            {/* Retro TV Frame */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-2xl border-4 border-gray-600">
              {/* TV Screen Glow Effect */}
              <div className={`absolute inset-0 rounded-lg transition-all duration-1000 ${isTvOn ? 'bg-gradient-to-br from-blue-400/10 to-yellow-400/10' : 'bg-gray-900/50'}`}></div>
              
              {/* Scanlines Effect */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${isTvOn ? 'opacity-20 retro-tv-scanlines-blue' : 'opacity-0'}`}></div>
              
              {/* TV Screen Content */}
              <div className={`relative z-10 rounded-lg p-6 md:p-8 border-2 transition-all duration-1000 ${isTvOn ? 'bg-black/80 border-blue-400/30 retro-tv-glow-blue retro-tv-flicker' : 'bg-gray-900 border-gray-600'}`}>
                {/* Retro TV Header */}
                {isTvOn && (
                  <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-blue-400/30 pb-3 md:pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-blue-400 font-mono text-sm">
                      DELTAQUEST DEV CHANNEL
                    </div>
                    <div className="text-blue-400 font-mono text-sm">
                      LIVE
                    </div>
                  </div>
                )}
                
                {/* Consolidated Message Content */}
                {isTvOn ? (
                  isStartingUp ? (
                    // Animation de démarrage avec logo
                    <div className="flex flex-col items-center justify-center h-64">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                      >
                        <Image
                          src="/images/atallcosts/logo.png"
                          alt="DeltaQuest Logo"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="text-blue-400 font-mono text-lg mb-2">DELTAQUEST</div>
                        <div className="text-yellow-400 font-mono text-sm">Initialisation...</div>
                      </motion.div>
                      
                      {/* Loading dots */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex space-x-1 mt-4"
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  ) : (
                    // Contenu normal avec scroll sur mobile
                    <div className="max-h-[70vh] md:max-h-none overflow-y-auto retro-tv-scrollbar space-y-2 md:space-y-4 text-blue-300 font-mono text-xs md:text-sm leading-normal md:leading-relaxed pr-2">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center text-sm md:text-lg font-bold text-yellow-300 mb-3 md:mb-6"
                      >
                        📺 {t('tvTitle')} 📺
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-2 md:space-y-3"
                      >
                        <p className="text-center">"{t('message1')}"</p>
                        <p className="text-center">"{t('message2')}"</p>
                        <p className="text-center">"{t('message3')}"</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-2 md:space-y-3 mt-4 md:mt-6"
                      >
                        <p className="text-center">"{t('message4')}"</p>
                        <p className="text-center">"{t('message5')}"</p>
                        <p className="text-center">"{t('message6')}"</p>
                      </motion.div>
                      
                      {/* Team Photo - Retro TV Style */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center mt-5 md:mt-8"
                      >
                        <div className="relative">
                          <img
                            src="/images/atallcosts/team_photo.png"
                            alt="Équipe de développement"
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-400/50 shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              console.log('Image failed to load:', target.src);
                              // Fallback to a placeholder
                              target.style.display = 'none';
                            }}
                          />
                          {/* Retro TV scanline effect on image */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
                        </div>
                      </motion.div>
                      
                      {/* Retro Cursor Blink - Hidden on mobile */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="hidden md:block text-center mt-4 md:mt-6"
                      >
                        <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse">_</span>
                      </motion.div>
                    </div>
                  )
                ) : (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center text-gray-500 font-mono">
                      <div className="text-6xl mb-4">📺</div>
                      <p className="text-lg">{t('tvOff')}</p>
                      <p className="text-sm mt-2">{t('tvOffMessage')}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* TV Antenna */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-8 bg-gray-600"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-600 rounded-full"></div>
              </div>
              
              {/* TV Stand */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-700 rounded-b-lg">
                {/* Power Button - Centered on the stand */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.button
                    onClick={handlePowerToggle}
                    className={`relative w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110 cursor-pointer ${
                      isTvOn 
                        ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/30' 
                        : 'bg-gray-600 border-gray-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={isTvOn ? "Éteindre la TV" : "Allumer la TV"}
                  >
                    {/* Power Symbol */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
                        isTvOn 
                          ? 'border-white bg-white' 
                          : 'border-gray-400 bg-gray-400'
                      }`}>
                        <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                          isTvOn ? 'bg-green-500' : 'bg-gray-600'
                        }`}></div>
                      </div>
                    </div>
                    
                    {/* Button Glow Effect */}
                    {isTvOn && (
                      <div className="absolute inset-0 rounded-full bg-green-400/20 animate-pulse"></div>
                    )}
                  </motion.button>
                  
                  {/* Power Label */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-mono whitespace-nowrap">
                    POWER
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Signature with enhanced styling */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-blue-400/20 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-yellow-400/30">
              <p className="text-yellow-200 font-pixel text-lg font-bold">
                — {t('signature')} 🎮
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevMessage