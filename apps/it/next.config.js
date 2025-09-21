const { createNextConfig } = require('@deltaquest/shared-config')
const { withContentlayer } = require('next-contentlayer2')

const nextConfig = createNextConfig({
  domain: 'it.deltaquest.co.jp',
  subdomain: 'it'
})

module.exports = withContentlayer(nextConfig)

