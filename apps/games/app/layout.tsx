import type { Metadata } from 'next'
import { Space_Grotesk, Press_Start_2P } from 'next/font/google'
import { ThemeProviders } from './theme-providers'
import { Analytics } from './analytics'
import { GTM } from './gtm'
import '@/css/tailwind.css'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const press_start_2p = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-press-start-2p',
})

export const metadata: Metadata = {
  title: {
    default: 'DeltaQuest Games - Gaming Support & Community',
    template: '%s | DeltaQuest Games'
  },
  description: 'Get support for your favorite DeltaQuest games. Find guides, community, and technical support for all our gaming titles.',
  keywords: ['gaming support', 'DeltaQuest games', 'gaming community', 'game guides', 'technical support'],
  authors: [{ name: 'DeltaQuest' }],
  creator: 'DeltaQuest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://games.deltaquest.co.jp',
    siteName: 'DeltaQuest Games',
    title: 'DeltaQuest Games - Gaming Support & Community',
    description: 'Get support for your favorite DeltaQuest games.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeltaQuest Games',
    description: 'Get support for your favorite DeltaQuest games.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} ${press_start_2p.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/static/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/static/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/static/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=Inter:400,500,600,700&family=Noto+Sans+JP:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <GTM />
          <Analytics />
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}