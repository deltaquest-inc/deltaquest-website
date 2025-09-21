// Fallback for contentlayer/generated when not available
// This file is used when Contentlayer doesn't generate the file on Vercel

// Export types
export interface Blog {
  _id: string
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: 'mdx'
    flattenedPath: string
  }
  type: 'Blog'
  title: string
  date: string
  tags?: string[]
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  bibliography?: string
  canonicalUrl?: string
  locale: string
  slug: string
  path: string
  filePath: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  toc: any[]
  structuredData: any
  body: {
    raw: string
    code: string
  }
}

export interface Authors {
  _id: string
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: 'mdx'
    flattenedPath: string
  }
  type: 'Authors'
  name: string
  avatar?: string
  occupation?: string
  company?: string
  email?: string
  twitter?: string
  bluesky?: string
  linkedin?: string
  github?: string
  layout?: string
  slug: string
  path: string
  filePath: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  toc: any[]
  body: {
    raw: string
    code: string
  }
}

export const allBlogs = [
  {
    _id: 'blog/fr/media-1p-ads.mdx',
    _raw: {
      sourceFilePath: 'blog/fr/media-1p-ads.mdx',
      sourceFileName: 'media-1p-ads.mdx',
      sourceFileDir: 'blog/fr',
      contentType: 'mdx',
      flattenedPath: 'blog/fr/media-1p-ads',
    },
    type: 'Blog' as const,
    title: 'Media 1P Ads',
    date: '2024-01-15T00:00:00.000Z',
    tags: ['ad-tech', 'business-impact'],
    lastmod: '2024-01-15T00:00:00.000Z',
    draft: false,
    summary: 'Optimisation des campagnes publicitaires first-party pour maximiser le ROI.',
    images: [],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'fr',
    slug: 'media-1p-ads',
    path: 'blog/fr/media-1p-ads',
    filePath: 'blog/fr/media-1p-ads.mdx',
    readingTime: { text: '5 min read', minutes: 5, time: 300000, words: 1000 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Media 1P Ads',
      datePublished: '2024-01-15T00:00:00.000Z',
      dateModified: '2024-01-15T00:00:00.000Z',
      description: 'Optimisation des campagnes publicitaires first-party pour maximiser le ROI.',
      image: '',
      url: 'https://it.deltaquest.co.jp/blog/fr/media-1p-ads',
    },
    body: { raw: '', code: '' },
  },
  {
    _id: 'blog/fr/logistics-redesign.mdx',
    _raw: {
      sourceFilePath: 'blog/fr/logistics-redesign.mdx',
      sourceFileName: 'logistics-redesign.mdx',
      sourceFileDir: 'blog/fr',
      contentType: 'mdx',
      flattenedPath: 'blog/fr/logistics-redesign',
    },
    type: 'Blog' as const,
    title: 'Logistics Redesign',
    date: '2024-01-10T00:00:00.000Z',
    tags: ['logistics-tech', 'scalability'],
    lastmod: '2024-01-10T00:00:00.000Z',
    draft: false,
    summary: 'Refonte complète du système logistique pour améliorer la performance et la scalabilité.',
    images: [],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'fr',
    slug: 'logistics-redesign',
    path: 'blog/fr/logistics-redesign',
    filePath: 'blog/fr/logistics-redesign.mdx',
    readingTime: { text: '7 min read', minutes: 7, time: 420000, words: 1400 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Logistics Redesign',
      datePublished: '2024-01-10T00:00:00.000Z',
      dateModified: '2024-01-10T00:00:00.000Z',
      description: 'Refonte complète du système logistique pour améliorer la performance et la scalabilité.',
      image: '',
      url: 'https://it.deltaquest.co.jp/blog/fr/logistics-redesign',
    },
    body: { raw: '', code: '' },
  },
  {
    _id: 'blog/en/media-1p-ads.mdx',
    _raw: {
      sourceFilePath: 'blog/en/media-1p-ads.mdx',
      sourceFileName: 'media-1p-ads.mdx',
      sourceFileDir: 'blog/en',
      contentType: 'mdx',
      flattenedPath: 'blog/en/media-1p-ads',
    },
    type: 'Blog' as const,
    title: 'Media 1P Ads',
    date: '2024-01-15T00:00:00.000Z',
    tags: ['ad-tech', 'business-impact'],
    lastmod: '2024-01-15T00:00:00.000Z',
    draft: false,
    summary: 'First-party advertising campaign optimization to maximize ROI.',
    images: [],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'en',
    slug: 'media-1p-ads',
    path: 'blog/en/media-1p-ads',
    filePath: 'blog/en/media-1p-ads.mdx',
    readingTime: { text: '5 min read', minutes: 5, time: 300000, words: 1000 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Media 1P Ads',
      datePublished: '2024-01-15T00:00:00.000Z',
      dateModified: '2024-01-15T00:00:00.000Z',
      description: 'First-party advertising campaign optimization to maximize ROI.',
      image: '',
      url: 'https://it.deltaquest.co.jp/blog/en/media-1p-ads',
    },
    body: { raw: '', code: '' },
  },
  {
    _id: 'blog/en/logistics-redesign.mdx',
    _raw: {
      sourceFilePath: 'blog/en/logistics-redesign.mdx',
      sourceFileName: 'logistics-redesign.mdx',
      sourceFileDir: 'blog/en',
      contentType: 'mdx',
      flattenedPath: 'blog/en/logistics-redesign',
    },
    type: 'Blog' as const,
    title: 'Logistics Redesign',
    date: '2024-01-10T00:00:00.000Z',
    tags: ['logistics-tech', 'scalability'],
    lastmod: '2024-01-10T00:00:00.000Z',
    draft: false,
    summary: 'Complete logistics system redesign to improve performance and scalability.',
    images: [],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'en',
    slug: 'logistics-redesign',
    path: 'blog/en/logistics-redesign',
    filePath: 'blog/en/logistics-redesign.mdx',
    readingTime: { text: '7 min read', minutes: 7, time: 420000, words: 1400 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Logistics Redesign',
      datePublished: '2024-01-10T00:00:00.000Z',
      dateModified: '2024-01-10T00:00:00.000Z',
      description: 'Complete logistics system redesign to improve performance and scalability.',
      image: '',
      url: 'https://it.deltaquest.co.jp/blog/en/logistics-redesign',
    },
    body: { raw: '', code: '' },
  },
  {
    _id: 'blog/ja/media-1p-ads.mdx',
    _raw: {
      sourceFilePath: 'blog/ja/media-1p-ads.mdx',
      sourceFileName: 'media-1p-ads.mdx',
      sourceFileDir: 'blog/ja',
      contentType: 'mdx',
      flattenedPath: 'blog/ja/media-1p-ads',
    },
    type: 'Blog' as const,
    title: 'Media 1P Ads',
    date: '2024-01-15T00:00:00.000Z',
    tags: ['ad-tech', 'business-impact'],
    lastmod: '2024-01-15T00:00:00.000Z',
    draft: false,
    summary: 'ROI最大化のためのファーストパーティ広告キャンペーンの最適化。',
    images: [],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'ja',
    slug: 'media-1p-ads',
    path: 'blog/ja/media-1p-ads',
    filePath: 'blog/ja/media-1p-ads.mdx',
    readingTime: { text: '5 min read', minutes: 5, time: 300000, words: 1000 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Media 1P Ads',
      datePublished: '2024-01-15T00:00:00.000Z',
      dateModified: '2024-01-15T00:00:00.000Z',
      description: 'ROI最大化のためのファーストパーティ広告キャンペーンの最適化。',
      image: '',
      url: 'https://it.deltaquest.co.jp/blog/ja/media-1p-ads',
    },
    body: { raw: '', code: '' },
  },
  {
    _id: 'blog/ja/logistics-redesign.mdx',
    _raw: {
      sourceFilePath: 'blog/ja/logistics-redesign.mdx',
      sourceFileName: 'logistics-redesign.mdx',
      sourceFileDir: 'blog/ja',
      contentType: 'mdx',
      flattenedPath: 'blog/ja/logistics-redesign',
    },
    type: 'Blog' as const,
    title: 'Logistics Redesign',
    date: '2024-01-10T00:00:00.000Z',
    tags: ['logistics-tech', 'scalability'],
    lastmod: '2024-01-10T00:00:00.000Z',
    draft: false,
    summary: 'パフォーマンスとスケーラビリティを向上させるための完全な物流システムの再設計。',
    images: [],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'ja',
    slug: 'logistics-redesign',
    path: 'blog/ja/logistics-redesign',
    filePath: 'blog/ja/logistics-redesign.mdx',
    readingTime: { text: '7 min read', minutes: 7, time: 420000, words: 1400 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Logistics Redesign',
      datePublished: '2024-01-10T00:00:00.000Z',
      dateModified: '2024-01-10T00:00:00.000Z',
      description: 'パフォーマンスとスケーラビリティを向上させるための完全な物流システムの再設計。',
      image: '',
      url: 'https://it.deltaquest.co.jp/blog/ja/logistics-redesign',
    },
    body: { raw: '', code: '' },
  },
]

export const allAuthors = [
  {
    _id: 'authors/default.mdx',
    _raw: {
      sourceFilePath: 'authors/default.mdx',
      sourceFileName: 'default.mdx',
      sourceFileDir: 'authors',
      contentType: 'mdx',
      flattenedPath: 'authors/default',
    },
    type: 'Authors' as const,
    name: 'DeltaQuest Team',
    avatar: '',
    occupation: 'IT Solutions',
    company: 'DeltaQuest',
    email: 'contact@deltaquest.co.jp',
    twitter: '',
    bluesky: '',
    linkedin: '',
    github: '',
    layout: '',
    slug: 'default',
    path: 'authors/default',
    filePath: 'authors/default.mdx',
    readingTime: { text: '1 min read', minutes: 1, time: 60000, words: 200 },
    toc: [],
    body: { raw: '', code: '' },
  },
]

// Export all content
export const allContent = [...allBlogs, ...allAuthors]