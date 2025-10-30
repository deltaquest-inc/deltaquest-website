'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const DevMessage = () => {
  const t = useTranslations('atallcosts.devMessage')

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
          className="bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-blue-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-4 border-white/30 shadow-2xl"
        >
          {/* Header with pixel font and neon effect */}
          <div className="text-center mb-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white font-pixel text-neon-white-static mb-4"
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
          
          {/* Team photo with enhanced styling */}
          <motion.div 
            className="mb-8 text-center"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="relative inline-block">
              <Image 
                src="/images/atallcosts/team_photo.JPG" 
                alt="開発チームの写真" 
                width={160}
                height={160}
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-yellow-400 shadow-2xl"
                loading="lazy"
                sizes="(max-width: 768px) 160px, 160px"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Message cards layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left column messages */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-300"
              >
                <p className="text-yellow-100 font-pixel text-sm leading-relaxed">{t('message1')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-400/30 hover:border-blue-400/70 transition-all duration-300"
              >
                <p className="text-yellow-100 font-pixel text-sm leading-relaxed">{t('message2')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-300"
              >
                <p className="text-yellow-100 font-pixel text-sm leading-relaxed">{t('message3')}</p>
              </motion.div>
            </div>

            {/* Right column messages */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-400/30 hover:border-blue-400/70 transition-all duration-300"
              >
                <p className="text-yellow-100 font-pixel text-sm leading-relaxed">{t('message4')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-300"
              >
                <p className="text-yellow-100 font-pixel text-sm leading-relaxed">{t('message5')}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-400/30 hover:border-blue-400/70 transition-all duration-300"
              >
                <p className="text-yellow-100 font-pixel text-sm leading-relaxed">{t('message6')}</p>
              </motion.div>
            </div>
          </div>
          
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