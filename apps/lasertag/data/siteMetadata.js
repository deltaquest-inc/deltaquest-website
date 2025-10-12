/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'デルタクエスト株式会社 | レーザータグ体験',
  author: 'デルタクエスト株式会社',
  headerTitle: 'DeltaQuest LaserTag',
  description:
    '最先端のレーザータグ体験を提供するデルタクエスト株式会社。ポータブルで没入感のあるレーザータグゲーム体験を日本のイベントに。',
  language: 'ja',
  theme: 'system', // system, dark or light
  siteUrl: 'https://lasertag.deltaquest.co.jp',
  siteRepo: 'https://github.com/KevinBulme/delta-quest',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-banner.png`,
  email: 'info@deltaquest.co.jp',
  locale: 'ja-JP',
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-YJL81SYBRR',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata

