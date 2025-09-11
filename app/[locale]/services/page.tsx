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

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params
  return <ServicesPageClient locale={locale} />
}
