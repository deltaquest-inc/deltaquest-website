'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ATC_CONFIG } from '@/lib/atallcosts/config'

type StoreKind = 'app' | 'play'

const BADGE_DIM = { width: 155, height: 48 }
const SCALE_BY_BADGE: Record<StoreKind, number> = {
    app: 1.0,
    play: 1.3, 
  }

const StoreBadge = ({
  kind,
  onClick,
  disabled,
  src,
  alt,
  ariaLabel,
}: {
  kind: StoreKind
  onClick: () => void
  disabled: boolean
  src: string
  alt: string
  ariaLabel: string
}) => {
  const scale = SCALE_BY_BADGE[kind]
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      aria-label={ariaLabel}
      style={{
        display: 'block',
        height: `${BADGE_DIM.height}px`,
        width: `${BADGE_DIM.width}px`,
        padding: 0,
        margin: 0,
        border: 'none',
        background: 'transparent',
        overflow: 'hidden',
        borderRadius: 8,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          height: `${BADGE_DIM.height}px`,
          width: `${BADGE_DIM.width}px`,
          objectFit: 'contain',
          padding: 0,
          margin: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
    </motion.button>
  )
}

const CTA = () => {
  const t = useTranslations('atallcosts.cta')

  const handleAppStoreClick = () => {
    if (ATC_CONFIG.appStoreUrl) {
      window.open(ATC_CONFIG.appStoreUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handlePlayStoreClick = () => {
    if (ATC_CONFIG.playStoreUrl) {
      window.open(ATC_CONFIG.playStoreUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="relative py-16 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/atallcosts/cta_bg.webp)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-pixel text-neon-white-static">
            {t('title')}
          </h2>

          <div className="flex justify-center mb-8">
            <div className="p-2 md:p-4 rounded-2xl" style={{ backgroundColor: '#87CEEB' }}>
              <img
                src="/images/atallcosts/atallcostslogo.png"
                alt="At All Costs Logo"
                className="max-w-md md:max-w-xl"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <StoreBadge
              kind="app"
              onClick={handleAppStoreClick}
              disabled={!ATC_CONFIG.appStoreUrl}
              src="/images/atallcosts/AppStore_Badge_Blck.svg"
              alt="Download on the App Store"
              ariaLabel="Download on the App Store"
            />
            <StoreBadge
              kind="play"
              onClick={handlePlayStoreClick}
              disabled={!ATC_CONFIG.playStoreUrl}
              src="/images/atallcosts/PlayStore_Badge_Std.svg"
              alt="Get it on Google Play"
              ariaLabel="Get it on Google Play"
            />
          </div>

          <p className="text-sm max-w-2xl mx-auto font-pixel" style={{ color: '#F2C94C' }}>
            {t('note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA