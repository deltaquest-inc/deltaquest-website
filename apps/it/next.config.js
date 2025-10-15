const { createNextConfig } = require('@deltaquest/shared-config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = createNextConfig({
  domain: 'it.deltaquest.co.jp',
  subdomain: 'it',
})

module.exports = withBundleAnalyzer(nextConfig)
