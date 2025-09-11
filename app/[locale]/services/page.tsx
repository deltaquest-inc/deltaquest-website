import { genPageMetadata } from 'app/seo'
import ServicesPageClient from './services.page.client'

interface ServicesPageProps {
  params: { locale: 'en' | 'fr' | 'ja' }
}

export const generateMetadata = async ({ params }: ServicesPageProps) => {
  const { locale } = params
  const messages = (await import(`../../../i18n/messages/${locale}.json`)).default

  return genPageMetadata({
    title: messages.services.metaTitle,
    description: messages.services.metaDescription,
  })
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = params
  return <ServicesPageClient locale={locale} />
}
