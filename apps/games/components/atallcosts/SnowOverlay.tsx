'use client'
import { useEffect, useState } from 'react'

const SnowOverlay = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Snow particles using CSS-only approach */}
      <div className="absolute inset-0">
        {/* Snowflake 1 */}
        <div 
          className="absolute text-white/30 text-2xl animate-snowfall-1"
          style={{
            left: '10%',
            animationDelay: '0s',
            animationDuration: '8s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/20 text-lg animate-snowfall-2"
          style={{
            left: '20%',
            animationDelay: '2s',
            animationDuration: '10s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/25 text-xl animate-snowfall-3"
          style={{
            left: '30%',
            animationDelay: '4s',
            animationDuration: '12s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/15 text-sm animate-snowfall-1"
          style={{
            left: '40%',
            animationDelay: '1s',
            animationDuration: '9s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/30 text-2xl animate-snowfall-2"
          style={{
            left: '50%',
            animationDelay: '3s',
            animationDuration: '11s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/20 text-lg animate-snowfall-3"
          style={{
            left: '60%',
            animationDelay: '5s',
            animationDuration: '13s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/25 text-xl animate-snowfall-1"
          style={{
            left: '70%',
            animationDelay: '2.5s',
            animationDuration: '10s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/15 text-sm animate-snowfall-2"
          style={{
            left: '80%',
            animationDelay: '4.5s',
            animationDuration: '8s'
          }}
        >
          ❄
        </div>
        <div 
          className="absolute text-white/30 text-2xl animate-snowfall-3"
          style={{
            left: '90%',
            animationDelay: '1.5s',
            animationDuration: '12s'
          }}
        >
          ❄
        </div>
      </div>
    </div>
  )
}

export default SnowOverlay
