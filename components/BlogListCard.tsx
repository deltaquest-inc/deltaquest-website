'use client'

import { motion } from 'framer-motion'
import { formatDate } from 'pliny/utils/formatDate'
import Tag from './Tag'
import siteMetadata from '@/data/siteMetadata'

type BlogListCardProps = {
  title: string
  summary: string
  date: string
  slug: string
  tags?: string[]
  index?: number
}

const BlogListCard = ({ title, summary, date, slug, tags, index = 0 }: BlogListCardProps) => {
  return (
    <motion.div
      whileHover={{ x: -5 }}
      className="flex cursor-pointer flex-col justify-between rounded-2xl bg-white/70 p-6 shadow-lg shadow-blue-200 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-300 dark:bg-gray-800/70 dark:shadow-blue-800"
      onClick={() => (window.location.href = `/blog/${slug}`)}
    >
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{summary}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>

      <p className="mt-auto text-xs text-gray-500 dark:text-gray-400">
        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
      </p>
    </motion.div>
  )
}

export default BlogListCard
