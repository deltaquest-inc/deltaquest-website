const { createNextConfig } = require('@deltaquest/shared-config')

const nextConfig = createNextConfig({
  domain: 'it.deltaquest.co.jp',
  subdomain: 'it'
})

module.exports = nextConfig

