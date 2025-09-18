import { genPageMetadata } from 'app/seo'
import ServicesPageClient from './services.page.client'

interface ServicesPageProps {
  params: Promise<{ locale: string }>
}

export const generateMetadata = async ({ params }: ServicesPageProps) => {
  const { locale } = await params
  const messages = (await import(`../../../i18n/messages/${locale}.json`)).default

  return genPageMetadata({
    title: messages.services.metaTitle,
    description: messages.services.metaDescription,
  })
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  return <ServicesPageClient locale={locale} />
}
