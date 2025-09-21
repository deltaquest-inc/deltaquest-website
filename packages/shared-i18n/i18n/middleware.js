const { NextResponse } = require('next/server')
const { locales, defaultLocale } = require('./config')

function createI18nMiddleware() {
  return function middleware(req) {
    const { pathname } = req.nextUrl

    // Skip middleware for static files, API routes, and Next.js internals
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.includes('.') ||
      pathname.startsWith('/static')
    ) {
      return NextResponse.next()
    }

    // Check if pathname already has a locale
    const pathLocale = pathname.split('/')[1]
    if (locales.includes(pathLocale)) {
      return NextResponse.next()
    }

    // Get locale from browser or default
    const acceptLang = req.headers.get('accept-language') || ''
    const browserLocale = acceptLang.split(',')[0].split('-')[0]
    const locale = locales.includes(browserLocale) ? browserLocale : defaultLocale

    // Redirect to locale-prefixed URL
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(url)
  }
}

module.exports = {
  createI18nMiddleware,
  config: {
    matcher: ['/((?!_next/|api/|static/).*)'],
  }
}


