'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
type LinkButtonProps = {
  href: string
  label: string
  isPrimary?: boolean
}
const LinkButton = ({ href, label, isPrimary = true }: LinkButtonProps) => {
  const primaryClasses =
    'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
  const secondaryClasses =
    'border border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800'
  const classes = isPrimary ? primaryClasses : secondaryClasses

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link
        href={href}
        className={`rounded-md px-4 py-2 text-lg font-medium transition-colors duration-300 ease-in-out ${classes}`}
      >
        {label}
      </Link>
    </motion.div>
  )
}
export default LinkButton
