import ClientLayout from './ClientLayout'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: 'fr' | 'en' | 'ja' }>
}) {
  const { locale } = await params
  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <ClientLayout locale={locale} messages={messages}>
      {children}
    </ClientLayout>
  )
}

