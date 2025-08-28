'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export interface Project {
  title: string
  description: string
  imgSrc?: string
  href: string
}

const ProjectCard = ({ title, description, imgSrc, href }: Project) => {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl bg-white/70 shadow-lg shadow-blue-200 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-300 dark:bg-gray-800/70 dark:shadow-blue-800"
      whileHover={{ y: -5 }}
    >
      <Link href={href ?? '#'} className="block p-6">
        {imgSrc && (
          <div className="relative mb-4 h-48 w-full">
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="rounded-lg object-cover"
              priority={true}
            />
          </div>
        )}
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="line-clamp-3 text-gray-700 dark:text-gray-300">{description}</p>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
