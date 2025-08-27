'use client'
import { motion } from 'framer-motion'
import React from 'react'

type VisionCardProps = {
  text: string
  index?: number
}

const VisionCard = ({ text, index = 0 }: VisionCardProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        y: -6,
        scale: 1.04,
        transition: { type: 'spring', stiffness: 350, damping: 22 },
      }}
      className="flex items-center justify-center rounded-2xl bg-white/70 p-6 text-center shadow-lg shadow-blue-200 backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800/70 dark:text-gray-100 dark:shadow-blue-800"
    >
      <div className="mr-3 h-4 w-4 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"></div>
      <span className="font-medium text-gray-900 dark:text-gray-100">{text}</span>
    </motion.li>
  )
}

export default VisionCard
