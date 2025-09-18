import { genPageMetadata } from 'app/seo'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  const messages = (await import(`../../../i18n/messages/${locale}.json`)).default

  return genPageMetadata({
    title: messages.about.metaTitle,
    description: messages.about.metaDescription,
  })
}

import AboutPageClient from './page.client'

export default function AboutPage() {
  return <AboutPageClient />
}
