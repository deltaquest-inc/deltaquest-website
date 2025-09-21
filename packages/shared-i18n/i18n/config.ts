export const locales = ['fr', 'en', 'ja'] as const
export const defaultLocale = 'fr' as const

export type Locale = typeof locales[number]

export const localeConfig = {
  locales,
  defaultLocale,
  messagesDirectory: './i18n/messages',
} as const


