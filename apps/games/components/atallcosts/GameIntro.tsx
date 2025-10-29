'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const GameIntro = () => {
  const t = useTranslations('atallcosts.gameIntro')
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleCharacterClick = (index: number) => {
    setSelectedCharacter(index)
  }

  const closeCard = () => {
    setSelectedCharacter(null)
  }

  // 3D Tilt effect - only when clicking/touching
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    let isInteracting = false

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) { // Left click only
        isInteracting = true
        card.classList.add('interacting')
        e.preventDefault() // Prevent text selection
      }
    }

    const handleMouseUp = () => {
      isInteracting = false
      card.classList.remove('interacting')
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isInteracting) return
      e.preventDefault() // Prevent text selection during drag

      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      
      const rotateX = (mouseY / rect.height) * -20
      const rotateY = (mouseX / rect.width) * 20
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      
      // Update shine position
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }

    const handleMouseLeave = () => {
      isInteracting = false
      card.classList.remove('interacting')
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      isInteracting = true
      card.classList.add('interacting')
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isInteracting) return
      e.preventDefault()

      const touch = e.touches[0]
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const touchX = touch.clientX - centerX
      const touchY = touch.clientY - centerY
      
      const rotateX = (touchY / rect.height) * -20
      const rotateY = (touchX / rect.width) * 20
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      
      // Update shine position
      const x = ((touch.clientX - rect.left) / rect.width) * 100
      const y = ((touch.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }

    const handleTouchEnd = () => {
      isInteracting = false
      card.classList.remove('interacting')
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    // Add event listeners
    card.addEventListener('mousedown', handleMouseDown)
    card.addEventListener('mouseup', handleMouseUp)
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    card.addEventListener('touchstart', handleTouchStart, { passive: false })
    card.addEventListener('touchmove', handleTouchMove, { passive: false })
    card.addEventListener('touchend', handleTouchEnd)

    return () => {
      card.removeEventListener('mousedown', handleMouseDown)
      card.removeEventListener('mouseup', handleMouseUp)
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
      card.removeEventListener('touchstart', handleTouchStart)
      card.removeEventListener('touchmove', handleTouchMove)
      card.removeEventListener('touchend', handleTouchEnd)
    }
  }, [selectedCharacter])

  const characters = [
    { name: t('character1.name'), role: t('character1.role'), description: t('character1.description') },
    { name: t('character2.name'), role: t('character2.role'), description: t('character2.description') },
    { name: t('character3.name'), role: t('character3.role'), description: t('character3.description') },
    { name: t('character4.name'), role: t('character4.role'), description: t('character4.description') }
  ]

  return (
    <section className="relative py-16 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: 'url(/images/atallcosts/character_grid_bg.png)',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('title')}
          </h2>
          <p className="text-xl text-yellow-200 max-w-3xl mx-auto mb-8">
            {t('description')}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Image 
              src="/images/atallcosts/world_preview.png" 
              alt="Game World Preview" 
              width={800}
              height={450}
              className="w-full h-auto rounded-lg shadow-2xl"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center font-pixel text-neon-white-static">
            {t('charactersTitle')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="game-card p-6 cursor-pointer transition-all duration-300"
                onClick={() => handleCharacterClick(index)}
              >
                {/* Rarity Stars */}
                <div className="rarity-stars">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rarity-star"></div>
                  ))}
                </div>

                {/* Type Badge */}
                <div className={`type-badge ${
                  character.role === 'Diplomat' ? 'type-diplomat' :
                  character.role === 'PeoplesFlame' ? 'type-peoplesflame' :
                  character.role === 'GreenArchitect' ? 'type-architect' :
                  character.role === 'OldGuard' ? 'type-guard' : ''
                }`}>
                  {character.role}
                </div>

                {/* Character Image */}
                <div className="w-20 h-20 mx-auto mb-4 mt-8">
                  <img 
                    src={`/images/atallcosts/character_0${index + 1}_${character.role}.png`}
                    alt={character.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Character Name */}
                <h4 className="text-lg font-semibold text-white mb-2 text-center font-pixel text-neon-white-static">
                  {character.name}
                </h4>

                {/* Description */}
                <p className="text-sm text-yellow-100 line-clamp-2 text-center mb-4">
                  {character.description}
                </p>

                {/* Power Level Bar */}
                <div className="power-bar">
                  <div 
                    className="power-fill" 
                    style={{ width: `${75 + (index * 8)}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pokémon-style Card Modal */}
      {selectedCharacter !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCard}
        >
          <motion.div
            ref={cardRef}
            initial={{ scale: 0.5, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-4 border-white/30 max-h-[80vh] overflow-y-auto relative card-modal-3d"
          >
            {/* Card shine effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-3xl"></div>
            
            {/* Dynamic shine effect */}
            <div className="card-shine"></div>
            
            {/* Rarity Stars */}
            <div className="absolute top-4 right-4 flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  ★
                </div>
              ))}
            </div>

            {/* Type Badge */}
            <div className={`absolute top-4 left-4 type-badge ${
              characters[selectedCharacter].role === 'Diplomat' ? 'type-diplomat' :
              characters[selectedCharacter].role === 'PeoplesFlame' ? 'type-peoplesflame' :
              characters[selectedCharacter].role === 'GreenArchitect' ? 'type-architect' :
              characters[selectedCharacter].role === 'OldGuard' ? 'type-guard' : ''
            } text-xs`}>
              {characters[selectedCharacter].role}
            </div>

            {/* Separator Line */}
            <div className="absolute top-10 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>


            {/* Character Name */}
            <div className="text-center mb-4 mt-6">
              <h3 className="character-title text-2xl md:text-3xl lg:text-4xl font-bold text-white font-pixel text-neon-white-static">
                {characters[selectedCharacter].name}
              </h3>
            </div>

            {/* Character Image */}
                     <div className="flex justify-center mb-4">
                       <motion.div
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ delay: 0.3, type: 'spring' }}
                         className="character-image w-32 h-32 md:w-48 md:h-48"
                       >
                         <Image
                           src={`/images/atallcosts/character_0${selectedCharacter + 1}_${characters[selectedCharacter].role}.png`}
                           alt={characters[selectedCharacter].name}
                           width={192}
                           height={192}
                           className="w-full h-full object-contain drop-shadow-2xl"
                           priority={false}
                         />
                       </motion.div>
                     </div>

            {/* Card Content */}
            <div className="space-y-4">
              
              <div className="description-box bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-white/20">
                <p className="text-base md:text-lg font-semibold text-yellow-300 mb-3 md:mb-4 text-center font-pixel">
                  {characters[selectedCharacter].role}
                </p>
                <div className="description-scroll max-h-24 md:max-h-32 overflow-y-auto">
                  <p className="text-sm md:text-base text-white/90 text-left leading-relaxed">
                    {characters[selectedCharacter].description}
                  </p>
                </div>
              </div>

              {/* Power Stats */}
              <div className="stats-section space-y-2 md:space-y-3">
                <h4 className="text-base md:text-lg font-semibold text-white text-center font-pixel">Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-blue-300 font-pixel">Power</span>
                    <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-blue-300 font-pixel">Strategy</span>
                    <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-blue-300 font-pixel">Influence</span>
                    <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-400 to-pink-400 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default GameIntro

