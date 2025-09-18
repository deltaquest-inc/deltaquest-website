import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const supportedLocales = ['fr', 'en', 'ja']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const pathLocale = pathname.split('/')[1]
  if (supportedLocales.includes(pathLocale)) {
    return NextResponse.next()
  }

  const acceptLang = req.headers.get('accept-language') || ''
  const browserLocale = acceptLang.split(',')[0].split('-')[0]
  const locale = supportedLocales.includes(browserLocale) ? browserLocale : 'ja'

  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/|api/).*)'],
}
