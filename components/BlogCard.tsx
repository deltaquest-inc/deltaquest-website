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
      className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800"
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`} className="block p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
        <p className="text-gray-700 dark:text-gray-300">{summary}</p>
      </Link>
    </motion.div>
  )
}

export default BlogCard
