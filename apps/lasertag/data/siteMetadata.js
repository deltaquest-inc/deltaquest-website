/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'DeltaQuest LaserTag - Laser Tag Gaming Experience',
  author: 'DeltaQuest',
  headerTitle: 'DeltaQuest LaserTag',
  description:
    'Experience the ultimate laser tag gaming adventure with DeltaQuest. Professional laser tag equipment and immersive gaming experiences.',
  language: 'en',
  theme: 'system', // system, dark or light
  siteUrl: 'https://lasertag.deltaquest.co.jp',
  siteRepo: 'https://github.com/KevinBulme/delta-quest',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-banner.png`,
  email: 'info@deltaquest.co.jp',
  locale: 'en-US',
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

