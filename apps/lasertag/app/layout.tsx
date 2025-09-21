import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProviders } from './theme-providers'
import { Analytics } from './analytics'
import { GTM } from './gtm'
import '@/css/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DeltaQuest LaserTag - Laser Tag Gaming Experience',
    template: '%s | DeltaQuest LaserTag'
  },
  description: 'Experience the ultimate laser tag gaming adventure with DeltaQuest. Professional laser tag equipment and immersive gaming experiences.',
  keywords: ['laser tag', 'gaming', 'DeltaQuest', 'laser tag equipment', 'gaming experience'],
  authors: [{ name: 'DeltaQuest' }],
  creator: 'DeltaQuest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lasertag.deltaquest.co.jp',
    siteName: 'DeltaQuest LaserTag',
    title: 'DeltaQuest LaserTag - Laser Tag Gaming Experience',
    description: 'Experience the ultimate laser tag gaming adventure with DeltaQuest.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeltaQuest LaserTag',
    description: 'Experience the ultimate laser tag gaming adventure with DeltaQuest.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/static/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/static/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/static/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=Inter:400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProviders>
          <GTM />
          <Analytics />
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}