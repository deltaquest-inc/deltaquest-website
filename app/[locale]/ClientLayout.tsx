'use client'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ClientLayoutProps {
  children: ReactNode
  locale: 'ja' | 'en' | 'fr'
  messages: Record<string, any>
}

export default function ClientLayout({ children, locale, messages }: ClientLayoutProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
