export const locales = ['ja', 'fr', 'en'] as const
export const defaultLocale = 'ja' as const

export type Locale = typeof locales[number]

export const localeConfig = {
  locales,
  defaultLocale,
  messagesDirectory: './i18n/messages',
} as const


