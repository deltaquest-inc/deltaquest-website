import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'The tags of the post',
      default: [],
    },
    lastmod: {
      type: 'date',
      description: 'The date the post was last modified',
    },
    draft: {
      type: 'boolean',
      description: 'If the post is a draft',
      default: false,
    },
    summary: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    images: {
      type: 'list',
      of: { type: 'string' },
      description: 'The images of the post',
      default: [],
    },
    authors: {
      type: 'list',
      of: { type: 'string' },
      description: 'The authors of the post',
      default: [],
    },
    layout: {
      type: 'string',
      description: 'The layout of the post',
    },
    bibliography: {
      type: 'string',
      description: 'The bibliography of the post',
    },
    canonicalUrl: {
      type: 'string',
      description: 'The canonical URL of the post',
    },
    locale: {
      type: 'string',
      description: 'The locale of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
    path: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    filePath: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFilePath,
    },
  },
}))

export default makeSource({
  contentDirPath: './data',
  documentTypes: [Blog],
})

