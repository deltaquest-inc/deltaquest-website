// TypeScript declarations for contentlayer/generated

export interface BlogPost {
  _id: string
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: string
    flattenedPath: string
  }
  type: 'Blog'
  title: string
  date: string
  tags: string[]
  lastmod: string
  draft: boolean
  summary: string
  images: string[]
  authors: string[]
  layout: string
  bibliography: string
  canonicalUrl: string
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
  structuredData: {
    '@context': string
    '@type': string
    headline: string
    datePublished: string
    dateModified: string
    description: string
    image: string
    url: string
  }
}

export interface Author {
  _id: string
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: string
    flattenedPath: string
  }
  type: 'Authors'
  name: string
  avatar: string
  occupation: string
  company: string
  email: string
  twitter: string
  bluesky: string
  linkedin: string
  github: string
  layout: string
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
}

export declare const allBlogs: BlogPost[]
export declare const allAuthors: Author[]
export declare const allContent: (BlogPost | Author)[]
