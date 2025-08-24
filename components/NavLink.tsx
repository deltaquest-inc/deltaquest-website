'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  title: string
}

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div className="relative">
      <motion.div
        className="relative inline-block font-medium text-gray-900 transition-colors duration-200 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        whileTap={{ scale: 0.9 }}
      >
        <Link href={href} className={isActive ? 'text-primary-500 dark:text-primary-400' : ''}>
          {title}
        </Link>
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-primary-500 dark:bg-primary-400"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
  )
}

export default NavLink