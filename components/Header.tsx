'use client'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'
import NavLink from './NavLink'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import logoImg from '@/data/logo.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { isLegalSubpage, isLaserTagPage, isSupportGamePage } from '@/utils/routeHelpers'

const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
}

const Header = () => {
  const pathname = usePathname()
  const hideNav =
    isLaserTagPage(pathname) || isLegalSubpage(pathname) || isSupportGamePage(pathname)
  const isLegalSubpageFlag = isLegalSubpage(pathname)
  const isSupportGamePageFlag = isSupportGamePage(pathname)

  const { scrollY } = useScroll()
  const shadowOffset = useTransform(scrollY as MotionValue<number>, [0, 50], [0, 5])
  const shadowOpacity = useTransform(scrollY as MotionValue<number>, [0, 50], [0, 0.3])

  const textShadow = useTransform(
    [shadowOffset, shadowOpacity],
    ([offset, opacity]: [number, number]) => `
      ${offset}px ${offset}px 0px rgba(0, 0, 0, ${opacity}),
      ${-offset}px ${-offset}px 0px rgba(255, 255, 255, ${opacity * 0.5})
    `
  )

  const dropShadow = useTransform(
    [shadowOffset, shadowOpacity],
    ([offset, opacity]: [number, number]) => `
      drop-shadow(${offset}px ${offset}px 0px rgba(0, 0, 0, ${opacity}))
    `
  )

  const logoY = useTransform(scrollY as MotionValue<number>, [0, 1200], [0, 20])
  const logoRotate = useTransform(scrollY as MotionValue<number>, [0, 1200], [0, 15])

  return (
    <>
      <motion.header
        className="fixed top-8 right-0 left-0 z-[10000] mx-auto h-16 w-[98%] max-w-[1920px] rounded-full border border-white/30 bg-white/5 px-6 shadow-xl backdrop-blur-[2px] transition-all duration-300 dark:border-white/20 dark:bg-gray-900/20"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-full opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n' x='0%' y='0%' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          }}
        />
        <div className="flex h-full items-center justify-between">
          {isLegalSubpageFlag || isSupportGamePageFlag ? (
            <div className="flex items-center">
              <motion.div style={{ filter: dropShadow, y: logoY, rotate: logoRotate }}>
                <Image src={logoImg} alt="Logo" className="h-10 w-10 object-contain" />
              </motion.div>
              {typeof siteMetadata.headerTitle === 'string' && (
                <motion.span
                  className="ml-2 text-xl font-semibold text-gray-900 dark:text-gray-100"
                  style={{ textShadow: textShadow }}
                >
                  {siteMetadata.headerTitle}
                </motion.span>
              )}
            </div>
          ) : (
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <motion.div className="flex items-center">
                <motion.div style={{ filter: dropShadow, y: logoY, rotate: logoRotate }}>
                  <Image src={logoImg} alt="Logo" className="h-10 w-10 object-contain" />
                </motion.div>
                {typeof siteMetadata.headerTitle === 'string' && (
                  <motion.span
                    className="ml-2 text-xl font-semibold text-gray-900 dark:text-gray-100"
                    style={{ textShadow: textShadow }}
                  >
                    {siteMetadata.headerTitle}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          )}

          <div className="flex items-center space-x-4">
            {!hideNav && (
              <div className="hidden items-center gap-x-4 sm:flex">
                {headerNavLinks.map((link) => (
                  <NavLink key={link.title} href={link.href} title={link.title} />
                ))}
              </div>
            )}
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </motion.header>

      <div className="h-24" aria-hidden />
    </>
  )
}

export default Header
