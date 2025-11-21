import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Iridescent Spline animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient mist overlay for depth; pointer-events-none to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />

      {/* Hero copy with vertical heading (tategaki style) */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="flex items-center justify-center lg:justify-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-white/90 text-6xl md:text-7xl font-serif tracking-tight leading-none"
              style={{ writingMode: 'vertical-rl' }}
            >
              静寂の美
            </motion.h1>
          </div>

          <div className="text-white/90 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-lg md:text-xl font-light"
            >
              Neo‑traditional aesthetics meet futuristic interaction. Wabi‑sabi restraint, chrome fluidity, and tactile motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1 }}
              className="mt-8 flex items-center gap-6"
            >
              <a href="#explore" className="relative inline-flex px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white transition">
                Explore
              </a>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-sm text-white/60">Scroll • 魂の流れ</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
