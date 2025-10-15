import type { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title: string
    description: string
    url: string
    siteName: string
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
    locale: string
    type: string
  }
  twitter?: {
    card: string
    title: string
    description: string
    images: string[]
  }
}

export function genPageMetadata({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: PageSEOProps): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'DeltaQuest',
      images: openGraph?.images || [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: twitter?.images || ['/og-image.jpg'],
    },
  }
}
