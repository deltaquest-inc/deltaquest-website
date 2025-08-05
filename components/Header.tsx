'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import logoImg from '@/data/logo.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { isLegalSubpage, isLaserTagPage, isSupportGamePage } from '@/utils/routeHelpers'

const Header = () => {
  const pathname = usePathname()
  const hideNav =
    isLaserTagPage(pathname) || isLegalSubpage(pathname) || isSupportGamePage(pathname)
  const isLegalSubpageFlag = isLegalSubpage(pathname)
  const isSupportGamePageFlag = isSupportGamePage(pathname)

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {isLegalSubpageFlag || isSupportGamePageFlag ? (
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Image src={logoImg} alt="Logo" className="h-30 w-30 object-contain" />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-2xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      ) : (
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={logoImg} alt="Logo" className="h-30 w-30 object-contain" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      )}

      {!hideNav && (
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-140">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      )}
      {hideNav && isLegalSubpageFlag && (
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <ThemeSwitch />
        </div>
      )}
    </header>
  )
}

export default Header
