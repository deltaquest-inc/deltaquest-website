'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const GameIntro = () => {
  const t = useTranslations('atallcosts.gameIntro')

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
            <img 
              src="/images/atallcosts/world_preview.png" 
              alt="Game World Preview" 
              className="w-full h-auto rounded-lg shadow-2xl"
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
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
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img 
                    src={`/images/atallcosts/character_0${index + 1}_${character.role}.png`}
                    alt={character.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {character.name}
                </h4>
                <p className="text-sm text-blue-200 mb-2">
                  {character.role}
                </p>
                <p className="text-sm text-yellow-100">
                  {character.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GameIntro

