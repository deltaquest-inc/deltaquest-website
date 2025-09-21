const { createNextConfig } = require('@deltaquest/shared-config')

const nextConfig = createNextConfig({
  domain: 'games.deltaquest.co.jp',
  subdomain: 'games'
})

module.exports = nextConfig


