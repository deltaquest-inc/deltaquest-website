import Main from '../Main'

interface HomePageProps {
  params: { locale: string } // synchronisé
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params
  return <Main locale={locale} />
}
