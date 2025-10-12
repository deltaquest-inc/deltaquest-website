import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['ja', 'fr', 'en'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, static files, and images
    '/((?!_next|api|favicon.ico|static|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.ico).*)',
  ]
}
