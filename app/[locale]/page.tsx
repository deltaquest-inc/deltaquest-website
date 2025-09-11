import Main from '../Main'

interface PageProps {
  params: { locale: string }
}

export default function HomePage({ params }: PageProps) {
  const { locale } = params
  return <Main locale={locale} />
}
