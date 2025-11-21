import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(1, Math.max(0, scrolled)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-30 h-1">
      <div
        className="h-full bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        style={{ width: `${progress * 100}%`, maskImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 10\'><path d=\'M0,5 Q20,0 40,5 T80,5 T120,5\' stroke=\'black\' stroke-width=\'10\' fill=\'none\' stroke-linecap=\'round\'/></svg>")', WebkitMaskImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 10\'><path d=\'M0,5 Q20,0 40,5 T80,5 T120,5\' stroke=\'black\' stroke-width=\'10\' fill=\'none\' stroke-linecap=\'round\'/></svg>")', maskSize: 'auto 100%', WebkitMaskSize: 'auto 100%'} }
      />
    </div>
  )
}
