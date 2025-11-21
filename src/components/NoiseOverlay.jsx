export default function NoiseOverlay() {
  // CSS-only animated grain using multiple layered gradients
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 mix-blend-overlay opacity-[0.12]"
      style={{
        backgroundImage:
          `url('data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><filter id="n"><feTurbulence baseFrequency="0.8" numOctaves="2"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.35"/></svg>')`,
        backgroundSize: '200px 200px'
      }}
    />
  )
}
