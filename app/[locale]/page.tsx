import Main from '../Main'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 0

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  return <Main locale={locale} />
}
