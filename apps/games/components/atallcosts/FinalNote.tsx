'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const FinalNote = () => {
  const t = useTranslations('atallcosts.finalNote')

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('title')}
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-yellow-100 leading-relaxed">
            <p>{t('message1')}</p>
            <p>{t('message2')}</p>
            <p>{t('message3')}</p>
            <p>{t('message4')}</p>
            <p className="text-yellow-200 font-semibold">
              {t('message5')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalNote
