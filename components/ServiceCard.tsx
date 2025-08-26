'use client'
import { motion } from 'framer-motion'
import React from 'react'

type ServiceCardProps = {
  title: string
  description: string
  icon: string
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div
      className="flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
      whileHover={{ y: -5 }}
    >
      <div className="text-primary-500 mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

export default ServiceCard
