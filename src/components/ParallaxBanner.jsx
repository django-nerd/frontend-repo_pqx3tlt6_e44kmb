import { useEffect, useRef } from 'react'

export default function ParallaxBanner({ src = '/japan-hero.jpg', speed = 0.3, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const offset = rect.top
      const translate = offset * speed
      el.style.setProperty('--y', `${translate}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={ref} className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 will-change-transform" style={{ transform: 'translate3d(0,var(--y),0)' }}>
        <img src={src} alt="Japanese landscape" className="h-full w-full object-cover opacity-90" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
