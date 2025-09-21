'use client'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

type Messages = {
  [key: string]: string | Messages
}

interface ClientLayoutProps {
  children: ReactNode
  locale: 'ja' | 'en' | 'fr'
  messages: Messages
}

export default function ClientLayout({ children, locale, messages }: ClientLayoutProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={'Asia/Tokyo'}>
      <main>{children}</main>
    </NextIntlClientProvider>
  )
}

