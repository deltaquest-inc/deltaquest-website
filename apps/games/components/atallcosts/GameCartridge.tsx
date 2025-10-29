'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const GameCartridge = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Enhanced animated background particles - Optimized */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 80, damping: 15 }}
          viewport={{ once: true }}
          className="relative mx-auto"
          style={{ perspective: '1200px' }}
        >
          {/* Enhanced cartouche principale */}
          <div className="relative mx-auto w-96 h-56 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-3xl shadow-2xl border-4 border-yellow-400/60 hover:border-yellow-400 transition-all duration-700 hover:scale-105 hover:shadow-yellow-400/20 hover:shadow-3xl">
            
            {/* Enhanced relief effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent"></div>
            
            {/* Multiple border layers for depth */}
            <div className="absolute inset-3 rounded-2xl border-2 border-gray-600/40"></div>
            <div className="absolute inset-4 rounded-xl border border-gray-500/30"></div>
            
            {/* Logo and text section */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              {/* Enhanced logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1, type: 'spring', stiffness: 120 }}
                className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-2xl border-2 border-yellow-300/50 overflow-hidden"
              >
                {/* Logo inner glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                {/* AtAllCosts Logo */}
                <Image
                  src="/images/atallcosts/atallcostslogo.png"
                  alt="At All Costs Logo"
                  width={64}
                  height={64}
                  className="relative z-10 object-contain"
                />
                {/* Logo shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              {/* Enhanced title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
                className="text-3xl font-bold text-white font-pixel text-neon-white-static text-center tracking-wider"
              >
                AT ALL COSTS
              </motion.h2>
              
              {/* Enhanced subtitle */}
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-sm text-yellow-300 font-pixel text-center tracking-wide"
              >
                POLITICAL STRATEGY GAME
              </motion.p>
              
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              ></motion.div>
            </div>
            
            {/* Enhanced connectors */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-b-3xl border-t-2 border-gray-600 shadow-inner">
              <div className="flex justify-center space-x-3 pt-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full shadow-inner"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full shadow-inner"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full shadow-inner"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full shadow-inner"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full shadow-inner"></div>
              </div>
            </div>
            
            {/* Enhanced shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-400/30 rounded-full"></div>
          </div>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-yellow-400/30 blur-3xl scale-110 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Additional outer glow */}
          <div className="absolute inset-0 rounded-3xl bg-blue-400/20 blur-2xl scale-125 opacity-0 hover:opacity-50 transition-opacity duration-700"></div>
        </motion.div>
        
        {/* Enhanced descriptive text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-blue-400/20 backdrop-blur-sm rounded-full px-8 py-4 border border-yellow-400/30">
            <p className="text-yellow-300 font-pixel text-lg tracking-wide">
              🎮 Help us shape the future of political gaming 🎮
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GameCartridge