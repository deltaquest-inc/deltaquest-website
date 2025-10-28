import { Metadata } from 'next'
import { ATC_CONFIG } from '@/lib/atallcosts/config'
import Hero from '@/components/atallcosts/Hero'
import DevMessage from '@/components/atallcosts/DevMessage'
import TeamSection from '@/components/atallcosts/TeamSection'
import CTA from '@/components/atallcosts/CTA'
import FeedbackMethods from '@/components/atallcosts/FeedbackMethods'
import GameIntro from '@/components/atallcosts/GameIntro'
import FinalNote from '@/components/atallcosts/FinalNote'
import SnowOverlay from '@/components/atallcosts/SnowOverlay'

export const metadata: Metadata = {
  title: 'プレイヤーと一緒にゲームを育てよう｜At All Costs',
  description: '開発中のテスト版をプレイして、あなたの声でゲームを育ててください。バグ報告・アイデア・感想、なんでも歓迎。',
  openGraph: {
    title: ATC_CONFIG.ogTitle,
    description: ATC_CONFIG.ogDesc,
    images: [ATC_CONFIG.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: ATC_CONFIG.ogTitle,
    description: ATC_CONFIG.ogDesc,
    images: [ATC_CONFIG.ogImage],
  },
}

export default function AtAllCostsPage() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D1B2A' }}>
      <SnowOverlay />
      
      <div className="relative z-10">
        <Hero />
        <DevMessage />
        <TeamSection />
        <CTA />
        <div id="feedback">
          <FeedbackMethods />
        </div>
        {ATC_CONFIG.showGameIntro && <GameIntro />}
        <FinalNote />
        
        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/20 py-8 text-center text-white/70">
          <div className="container mx-auto px-4">
            <p>© 2025 Delta Quest Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
