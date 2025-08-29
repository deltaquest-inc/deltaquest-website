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
      className="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-[#fffef6] via-[#fffef9] to-[#fdfcf7] shadow-lg shadow-blue-300 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400 dark:border-none dark:bg-gray-800/70 dark:bg-none dark:shadow-blue-800"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Link href={`/blog/${slug}`} className="block p-6">
        <h3 className="mb-2 text-xl font-bold text-blue-800 dark:text-gray-100">{title}</h3>
        <p className="mb-4 text-sm text-blue-600 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
        <p className="line-clamp-3 text-gray-700 dark:text-gray-300">{summary}</p>
      </Link>
    </motion.div>
  )
}

export default BlogCard
