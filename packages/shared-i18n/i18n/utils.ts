import { locales, defaultLocale, type Locale } from './config'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/')
  const locale = segments[1]
  return isValidLocale(locale) ? locale : null
}

export function getDefaultLocale(): Locale {
  return defaultLocale
}

export function getSupportedLocales(): readonly Locale[] {
  return locales
}


