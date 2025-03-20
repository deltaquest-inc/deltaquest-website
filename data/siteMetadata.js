/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'デルタクエスト株式会社 | ITソリューション',
  author: 'デルタクエスト株式会社',
  headerTitle: 'Delta Quest',
  description:
    '最先端のITソリューションを提供するデルタクエスト株式会社。Next.js、React、クラウドインフラ構築などのITサービスを提供。',
  language: 'ja',
  theme: 'system', // system, dark or light
  siteUrl: 'https://deltaquest.co.jp',
  siteRepo: 'https://github.com/KevinBulme/delta-quest',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-banner.png`,
  email: 'info@deltaquest.co.jp',
  // github: 'https://github.com/deltaquest',
  // x: 'https://twitter.com/deltaquest',
  // linkedin: 'https://www.linkedin.com/company/deltaquest',
  locale: 'ja-JP',
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-XXXXXXXXXX', // Add your GA ID if applicable
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
