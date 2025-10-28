'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const TeamSection = () => {
  const t = useTranslations('atallcosts.team')

  const teamMembers = [
    {
      name: t('member1.name'),
      role: t('member1.role'),
      bio: t('member1.bio'),
    },
    {
      name: t('member2.name'),
      role: t('member2.role'),
      bio: t('member2.bio'),
    },
    {
      name: t('member3.name'),
      role: t('member3.role'),
      bio: t('member3.bio'),
    },
  ]


  return (
    <section className="relative py-16 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/atallcosts/world_preview.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-pixel text-neon-white-static">
            {t('title')}
          </h2>
        </motion.div>

        {/* Team Members Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 max-w-sm flex flex-col items-center"
            >
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full border-4 mb-4 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/30 to-purple-500/30 relative" style={{ borderColor: '#F2C94C' }}>
                  <img 
                    src={index === 0 ? "/images/atallcosts/Kevin.png" : index === 1 ? "/images/atallcosts/Charles.png" : "/images/atallcosts/Diego.png"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name with smartphone icon for first member (AINNA Design 3) */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white text-center font-pixel">
                    {member.name}
                  </h3>
                  {index === 0 && (
                    <div className="text-2xl animate-bounce" title="Listening to user input">
                      📱
                    </div>
                  )}
                </div>

                {/* Role */}
                <p className="text-blue-200 mb-4 text-center text-sm font-pixel">
                  {member.role}
                </p>

                {/* Bio */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 w-full">
                  <p className="text-white/80 text-sm text-center leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default TeamSection

