import { genPageMetadata } from 'app/seo'

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default

  return genPageMetadata({
    title: messages.projects.metaTitle,
    description: messages.projects.metaDescription,
  })
}
import ProjectsClient from './ProjectsClient'

export default function Projects() {
  return <ProjectsClient />
}
