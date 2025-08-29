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
        className={`relative inline-block font-medium text-gray-900 transition-colors duration-200 ease-in-out hover:text-[#2563eb] dark:text-gray-100 dark:hover:text-[#2563eb] ${isActive ? 'text-[#2563eb] dark:text-[#1e3a8a]' : ''}`}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={href} className={isActive ? 'text-[#2563eb] dark:text-[#1e3a8a]' : ''}>
          {title}
        </Link>
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-[#2563eb] dark:bg-[#1e3a8a]"
            initial={false}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
  )
}

export default NavLink
