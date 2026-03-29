'use client'

import { useRef, useEffect } from 'react'

const PHOTOS = [
  { src: '/images/gallery/photo5.jpeg', location: 'Ahmedabad', year: '2024' },
  { src: '/images/gallery/photo4.jpeg', location: 'Mumbai',    year: '2023' },
  { src: '/images/gallery/photo3.jpeg', location: 'Pune',      year: '2023' },
  { src: '/images/gallery/photo2.jpeg', location: 'Surat',     year: '2022' },
  { src: '/images/gallery/photo1.jpeg', location: 'Delhi',     year: '2022' },
]

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY * 1.5
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let isDown = false, startX = 0, scrollLeft = 0
    const onMouseDown = (e: MouseEvent) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor = 'grabbing' }
    const onMouseUp   = () => { isDown = false; el.style.cursor = 'grab' }
    const onMouseMove = (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 2 }
    el.addEventListener('mousedown',  onMouseDown)
    el.addEventListener('mouseup',    onMouseUp)
    el.addEventListener('mouseleave', onMouseUp)
    el.addEventListener('mousemove',  onMouseMove)
    return () => {
      el.removeEventListener('mousedown',  onMouseDown)
      el.removeEventListener('mouseup',    onMouseUp)
      el.removeEventListener('mouseleave', onMouseUp)
      el.removeEventListener('mousemove',  onMouseMove)
    }
  }, [])

  return (
    <section style={{ background: '#080808', padding: '6rem 0 4rem 0', overflow: 'hidden' }}>

      {/* Section header */}
      <div style={{ paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ maxWidth: '120px', height: '1px', flex: 1, background: 'linear-gradient(to left, #c8f135, transparent)', animation: 'scrollLine 2.5s ease-in-out infinite' }}/>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.7rem',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '999px', padding: '0.5rem 1.2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}>

          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8f135', boxShadow: '0 0 8px rgba(200,241,53,0.9)', flexShrink: 0 }}/>
          <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c8f135' }}>
            Behind the Decks
          </span>

        </div>
          <div style={{ maxWidth: '120px', height: '1px', flex: 1, background: 'linear-gradient(to right, #c8f135, transparent)', animation: 'scrollLine 2.5s ease-in-out infinite' }}/>
      </div>

      {/* Scroll track */}
      <div ref={trackRef} style={{ display: 'flex', gap: '1rem', overflowX: 'auto', overflowY: 'hidden', cursor: 'grab', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)', paddingBottom: '1.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>

        {PHOTOS.map((photo, i) => (
          <div key={i}
            style={{
              position: 'relative', flexShrink: 0,
              width: 'clamp(260px, 35vw, 480px)', height: 'clamp(340px, 55vh, 620px)',
              overflow: 'hidden', cursor: 'pointer',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
            onMouseEnter={e => {
              const img     = e.currentTarget.querySelector('img') as HTMLImageElement
              const overlay = e.currentTarget.querySelector('.photo-overlay') as HTMLElement
              const label   = e.currentTarget.querySelector('.photo-label') as HTMLElement
              if (img)     img.style.transform   = 'scale(1.05)'
              if (overlay) overlay.style.opacity = '0.18'
              if (label)   { label.style.background = 'rgba(255,255,255,0.1)'; label.style.borderColor = 'rgba(200,241,53,0.3)' }
            }}
            onMouseLeave={e => {
              const img     = e.currentTarget.querySelector('img') as HTMLImageElement
              const overlay = e.currentTarget.querySelector('.photo-overlay') as HTMLElement
              const label   = e.currentTarget.querySelector('.photo-label') as HTMLElement
              if (img)     img.style.transform   = 'scale(1)'
              if (overlay) overlay.style.opacity = '0'
              if (label)   { label.style.background = 'rgba(255,255,255,0.06)'; label.style.borderColor = 'rgba(255,255,255,0.08)' }
            }}>

            {/* Photo */}
            <img src={photo.src} alt={`DJ Rohan — ${photo.location}`} draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)', display: 'block', userSelect: 'none' } as React.CSSProperties}
            />

            {/* Lime tint on hover */}
            <div className="photo-overlay" style={{ position: 'absolute', inset: 0, background: '#c8f135', opacity: 0, transition: 'opacity 0.4s ease', mixBlendMode: 'overlay', pointerEvents: 'none' }}/>

            {/* Bottom gradient */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(8,8,8,0.95), transparent)', pointerEvents: 'none' }}/>

            {/* Glass label card */}
            <div className="photo-label" style={{
              position: 'absolute', bottom: '1.2rem', left: '1.2rem', right: '1.2rem',
              zIndex: 10, pointerEvents: 'none',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px', padding: '0.7rem 1rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              transition: 'all 0.4s ease',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.8)', margin: 0, marginBottom: '0.15rem' }}>
                  {photo.location}
                </p>
                <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.06em', color: '#ffffff', margin: 0, lineHeight: 1 }}>
                  {photo.year}
                </p>
              </div>
              <div style={{ background: 'rgba(200,241,53,0.1)', border: '1px solid rgba(200,241,53,0.2)', borderRadius: '999px', padding: '0.2rem 0.6rem' }}>
                <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', letterSpacing: '0.1em', color: 'rgba(200,241,53,0.6)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{` div::-webkit-scrollbar { display: none; } `}</style>
    </section>
  )
}