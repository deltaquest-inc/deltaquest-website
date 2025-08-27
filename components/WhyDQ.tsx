'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { reasons } from '@/data/ReasonsWhyDQ/Reasons'

export default function WhyDeltaQuest() {
  return (
    <div className="mx-auto mt-16 max-w-5xl space-y-12 py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">なぜデルタクエスト？</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center rounded-2xl bg-white/70 p-6 text-center shadow-lg shadow-blue-200 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800/70 dark:shadow-blue-800"
          >
            <div className="mb-4 text-5xl">{reason.icon}</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {reason.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
