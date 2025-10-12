import Main from '../Main'
import type { Metadata } from 'next'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  
  // Simple title mapping based on locale
  const titles = {
    fr: 'Accueil - Delta Quest',
    en: 'Home - Delta Quest',
    ja: 'ホーム - Delta Quest'
  }
  
  return {
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: 'IT solutions and services by Delta Quest',
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  return <Main />
}