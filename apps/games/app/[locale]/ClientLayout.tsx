'use client'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'

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
      <Header />
      <main>{children}</main>
    </NextIntlClientProvider>
  )
}

