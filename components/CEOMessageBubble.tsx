'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function CEOMessageBubble() {
  const t = useTranslations('about')
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mx-auto mt-6 max-w-xl"
      whileHover={{ rotate: [0, -2, 2, -1, 1, 0], transition: { duration: 0.5 } }}
    >
      <div className="relative rounded-xl bg-blue-400 p-5 pr-6 pl-6 text-white shadow-lg before:absolute before:bottom-2 before:left-0 before:h-3 before:w-3 before:-translate-x-1/2 before:rotate-45 before:rounded-sm before:bg-blue-400 before:content-['']">
        <p className="text-base leading-6">{t('ceoMessage')} </p>
        <p className="mt-3 text-sm font-bold text-white">{t('ceoName')}</p>
      </div>
    </motion.div>
  )
}
