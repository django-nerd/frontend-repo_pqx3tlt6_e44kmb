import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const p = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const m = { x: p.x, y: p.y }

    const onMove = (e) => {
      m.x = e.clientX
      m.y = e.clientY
    }

    let raf
    const loop = () => {
      // Lerp ring towards mouse
      p.x += (m.x - p.x) * 0.12
      p.y += (m.y - p.y) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate3d(${p.x - 15}px, ${p.y - 15}px, 0)`
      }
      if (dot.current) {
        dot.current.style.transform = `translate3d(${m.x - 2}px, ${m.y - 2}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    // Magnetize hoverable elements
    const items = Array.from(document.querySelectorAll('a, button, [data-hover]'))
    const enter = () => {
      if (ring.current) ring.current.style.transform += ' scale(1.4)'
    }
    const leave = () => {
      if (ring.current) ring.current.style.transform = ring.current.style.transform.replace(' scale(1.4)', '')
    }
    items.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => items.forEach(el => {
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
    })
  }, [])

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed z-40 top-0 left-0 h-8 w-8 rounded-full border border-white/40 backdrop-blur-sm" />
      <div ref={dot} className="pointer-events-none fixed z-40 top-0 left-0 h-1.5 w-1.5 rounded-full bg-white" />
    </>
  )
}
