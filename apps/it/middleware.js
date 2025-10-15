const { createI18nMiddleware, config } = require('@deltaquest/shared-i18n')

const middleware = createI18nMiddleware()
middleware.config = config

module.exports = middleware
module.exports.default = middleware
