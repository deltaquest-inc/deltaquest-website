import Main from '../Main'

interface HomePageProps {
  params: { locale: string }
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params

  return <Main locale={locale} />
}
