import { genPageMetadata } from 'app/seo'
import ServicesPageClient from './services.page.client'

export const generateMetadata = async (props: { params: Promise<{ locale: string }> }) => {
  const { locale } = await props.params
  const messages = (await import(`../../../i18n/messages/${locale}.json`)).default
  return genPageMetadata({
    title: messages.services.metaTitle,
    description: messages.services.metaDescription,
  })
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  return <ServicesPageClient />
}
