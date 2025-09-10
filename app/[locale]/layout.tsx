import ClientLayout from './ClientLayout'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: 'fr' | 'en' | 'ja' }
}) {
  const messages = (await import(`../../i18n/messages/${locale}.json`)).default

  return (
    <ClientLayout locale={locale} messages={messages}>
      {children}
    </ClientLayout>
  )
}
