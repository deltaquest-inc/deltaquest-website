'use client'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { isLegalSubpage, isLaserTagPage, isSupportGamePage } from '@/utils/routeHelpers'

export default function Footer() {
  const pathname = usePathname()
  const isLaserTag = isLaserTagPage(pathname)
  const isLegal = isLegalSubpage(pathname)
  const isSupportGame = isSupportGamePage(pathname)
  const t = useTranslations('footer')
  if (isLegal || isSupportGame) {
    return null
  }

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>

        <div className="mb-2 flex flex-wrap justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          {!isLaserTag && (
            <>
              <div>{` • `}</div>
              <Link
                href="https://lasertag.deltaquest.co.jp"
                className="hover:text-primary-500 dark:hover:text-primary-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('laserTag')}
              </Link>
            </>
          )}
          {isLaserTag && (
            <>
              <div>{` • `}</div>
              <Link
                href="/"
                className="hover:text-primary-500 dark:hover:text-primary-400 underline"
              >
                ITソリューション / IT Solutions
              </Link>
            </>
          )}
        </div>

        <div className="mt-4 mb-8 max-w-2xl px-4 text-center">
          <blockquote className="font-serif text-xl text-gray-700 italic dark:text-gray-300">
            Lighthouses don’t go running all over an island looking for boats to save; they just
            stand there shining.
          </blockquote>
          <cite className="mt-2 block text-sm font-light text-gray-500 dark:text-gray-400">
            - Anne Lamott
          </cite>
        </div>

        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            {t('themeLink')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
