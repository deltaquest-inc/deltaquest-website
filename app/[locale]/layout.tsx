import ClientLayout from './ClientLayout'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: 'fr' | 'en' | 'ja' }>
}) {
  const { locale } = await params
  const messages = (await import(`../../i18n/messages/${locale}.json`)).default

  return (
    <ClientLayout locale={locale} messages={messages}>
      {children}
    </ClientLayout>
  )
}
