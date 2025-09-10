import Main from '../Main'

interface PageProps {
  params: {
    locale: string
  }
}

export default function HomePage({ params }: { params: { locale: string } }) {
  return <Main />
}
