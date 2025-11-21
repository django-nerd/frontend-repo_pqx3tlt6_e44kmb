import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

// InkReveal: a full-screen overlay that uses an SVG mask with animated turbulence
// to create an organic sumi-e style reveal on initial load.
export default function InkReveal() {
  const controls = useAnimation()
  const [done, setDone] = useState(false)
  const seedRef = useRef(0)

  useEffect(() => {
    let raf
    const animateSeed = () => {
      seedRef.current += 0.01
      if (!done) raf = requestAnimationFrame(animateSeed)
    }
    animateSeed()

    // Start reveal animation
    controls.start({
      r: 1600,
      transition: { duration: 2.4, ease: [0.2, 0.8, 0.2, 1] }
    }).then(() => {
      // Fade the overlay out after the spread completes
      setTimeout(() => setDone(true), 300)
    })

    return () => cancelAnimationFrame(raf)
  }, [controls, done])

  if (done) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Turbulence and displacement to get organic, feathery ink edges */}
          <filter id="inkNoise" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="8" result="turb" />
            <feGaussianBlur in="turb" stdDeviation="0.6" result="blur" />
            <feDisplacementMap in="SourceGraphic" in2="blur" scale="6" />
          </filter>

          {/* Inverted mask: black hides, white shows. We draw a white circle that grows. */}
          <mask id="revealMask">
            <rect x="0" y="0" width="100" height="100" fill="black" />
            <motion.circle
              cx="50"
              cy="50"
              initial={{ r: 0 }}
              animate={controls}
              style={{ filter: 'url(#inkNoise)' }}
              fill="white"
            />
          </mask>
        </defs>

        {/* Black sumi ink layer that uses the mask to reveal the page underneath */}
        <rect x="0" y="0" width="100" height="100" fill="black" mask="url(#revealMask)" />
      </svg>
    </div>
  )
}
