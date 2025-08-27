'use client'
import { motion } from 'framer-motion'
import React from 'react'

type ServiceCardProps = {
  title: string
  description: string
  icon: string
  index?: number
}

const ServiceCard = ({ title, description, icon, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { type: 'spring', stiffness: 500, damping: 25 },
      }}
      className="flex cursor-pointer flex-col items-center rounded-2xl bg-white/70 p-6 text-center shadow-lg shadow-blue-200 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-300 dark:bg-gray-800/70 dark:shadow-blue-800"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-3xl text-white shadow-md">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

export default ServiceCard
