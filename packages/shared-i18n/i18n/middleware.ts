import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './config'

export function createI18nMiddleware() {
  return function middleware(req: NextRequest) {
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
    if (locales.includes(pathLocale as any)) {
      return NextResponse.next()
    }

    // Get locale from browser or default
    const acceptLang = req.headers.get('accept-language') || ''
    const browserLocale = acceptLang.split(',')[0].split('-')[0]
    const locale = locales.includes(browserLocale as any) ? browserLocale : defaultLocale

    // Redirect to locale-prefixed URL
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/((?!_next/|api/|static/).*)'],
}


