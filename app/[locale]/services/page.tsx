import { genPageMetadata } from 'app/seo'
import ServicesPageClient from './services.page.client'

export const generateMetadata = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const messages = (await import(`../../../i18n/messages/${locale}.json`)).default
  return genPageMetadata({
    title: messages.services.metaTitle,
    description: messages.services.metaDescription,
  })
}

interface ServicesPageProps {
  params: Promise<{ locale: string }>
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  return <ServicesPageClient locale={locale} />
}
