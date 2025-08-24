'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'

type BlogCardProps = {
  title: string
  summary: string
  date: string
  slug: string
}

const BlogCard = ({ title, summary, date, slug }: BlogCardProps) => {
  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`} className="block p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
        <p className="text-gray-700 dark:text-gray-300">{summary}</p>
      </Link>
    </motion.div>
  )
}

export default BlogCard