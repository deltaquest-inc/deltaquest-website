'use client'
import { motion } from 'framer-motion'
import React from 'react'

type FeatureCardProps = {
  title: string
  features: string[]
  icon: string
  index?: number
}

const FeatureCard = ({ title, features, icon, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 350, damping: 22 },
      }}
      className="rounded-2xl bg-white/70 p-6 shadow-lg shadow-blue-200 backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800/70 dark:shadow-blue-800"
    >
      <div className="mb-4 flex items-center">
        <span className="mr-3 text-2xl">{icon}</span>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
      </div>
      <ul className="space-y-2">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index * 0.15) + (featureIndex * 0.1) }}
            className="flex items-start"
          >
            <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default FeatureCard
