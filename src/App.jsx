import Hero from './components/Hero'
import InkReveal from './components/InkReveal'
import NoiseOverlay from './components/NoiseOverlay'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import ParallaxBanner from './components/ParallaxBanner'

function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <InkReveal />

      {/* Hero with Spline animation */}
      <Hero />

      {/* Parallax section evoking rainy Kyoto street */}
      <ParallaxBanner src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1974&auto=format&fit=crop" speed={0.25}>
        <div className="relative mx-auto max-w-5xl py-24 px-6">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6" style={{ writingMode: 'vertical-rl' }}>侘寂</h2>
          <p className="max-w-xl text-white/80">
            Imperfect textures, quiet motion, and patient space. A contemporary homage to tategaki layouts and sumi‑e reveal.
          </p>
        </div>
      </ParallaxBanner>

      {/* Minimal content sections to showcase ink transitions on navigation (future) */}
      <section id="explore" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {["Wabi", "Sabi", "Ma"].map((t, i) => (
            <div key={t} className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur hover:bg-white/10 transition" data-hover>
              <h3 className="text-2xl font-serif mb-3">{t}</h3>
              <p className="text-white/70 leading-relaxed">
                Subtle asymmetry, the silence between strokes, and the passage of time—rendered with fluid motion and tactile grain.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-16 px-6 text-center text-white/50">
        © {new Date().getFullYear()} Neo‑Trad — 静寂の美
      </footer>
    </div>
  )
}

export default App
