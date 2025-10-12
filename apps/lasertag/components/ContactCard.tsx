'use client'
import { motion } from 'framer-motion'
import React from 'react'

type ContactCardProps = {
  title: string
  description: string
  email: string
  icon: string
  index?: number
}

const ContactCard = ({ title, description, email, icon, index = 0 }: ContactCardProps) => {
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
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="flex items-center">
        <span className="mr-2 text-lg">📧</span>
        <a 
          href={`mailto:${email}`} 
          className="text-orange-400 hover:underline hover:text-orange-500 transition-colors duration-200"
        >
          {email}
        </a>
      </div>
    </motion.div>
  )
}

export default ContactCard
