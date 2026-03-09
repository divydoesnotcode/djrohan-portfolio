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

  // Mouse wheel → horizontal scroll
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

  // Click and drag → horizontal scroll
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let isDown   = false
    let startX   = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown  = true
      startX  = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
      el.style.cursor = 'grabbing'
    }
    const onMouseUp = () => {
      isDown = false
      el.style.cursor = 'grab'
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x    = e.pageX - el.offsetLeft
      const walk = (x - startX) * 2
      el.scrollLeft = scrollLeft - walk
    }

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
    <section style={{
      background: '#080808',
      padding:    '6rem 0 4rem 0',
      overflow:   'hidden',
    }}>

      {/* Section label */}
      <div style={{
        paddingLeft:  'clamp(1rem, 4vw, 2.5rem)',
        marginBottom: '2.5rem',
        display:      'flex',
        alignItems:   'center',
        gap:          '1.5rem',
      }}>
        <span style={{
          fontFamily:    'var(--font-barlow-condensed)',
          fontSize:      '2rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color:         '#c8f135',
        }}>
          Behind the Decks
        </span>
        <div style={{
          height:     '1px',
          width:      '60px',
          background: 'rgba(200,241,53,0.3)',
        }}/>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        style={{
          display:          'flex',
          gap:              '1rem',
          overflowX:        'auto',
          overflowY:        'hidden',
          cursor:           'grab',
          paddingLeft:      'clamp(1rem, 4vw, 2.5rem)',
          paddingRight:     'clamp(1rem, 4vw, 2.5rem)',
          paddingBottom:    '1rem',
          scrollbarWidth:   'none',
          msOverflowStyle:  'none',
        } as React.CSSProperties}>

        {PHOTOS.map((photo, i) => (
          <div key={i}
            style={{
              position:   'relative',
              flexShrink: 0,
              width:      'clamp(260px, 35vw, 480px)',
              height:     'clamp(340px, 55vh, 620px)',
              overflow:   'hidden',
              cursor:     'pointer',
            }}
            onMouseEnter={e => {
              const img     = e.currentTarget.querySelector('img') as HTMLImageElement
              const overlay = e.currentTarget.querySelector('.photo-overlay') as HTMLElement
              if (img)     img.style.transform     = 'scale(1.05)'
              if (overlay) overlay.style.opacity   = '0.2'
            }}
            onMouseLeave={e => {
              const img     = e.currentTarget.querySelector('img') as HTMLImageElement
              const overlay = e.currentTarget.querySelector('.photo-overlay') as HTMLElement
              if (img)     img.style.transform   = 'scale(1)'
              if (overlay) overlay.style.opacity = '0'
            }}>

            {/* Photo */}
            <img
              src={photo.src}
              alt={`DJ Rohan — ${photo.location}`}
              style={{
                width:          '100%',
                height:         '100%',
                objectFit:      'cover',
                objectPosition: 'center',
                transition:     'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
                display:        'block',
                userSelect:     'none',
                draggable:      false,
              } as React.CSSProperties}
              draggable={false}
            />

            {/* Lime overlay on hover */}
            <div className="photo-overlay" style={{
              position:     'absolute',
              inset:        0,
              background:   '#c8f135',
              opacity:      0,
              transition:   'opacity 0.4s ease',
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
            }}/>

            {/* Bottom gradient */}
            <div style={{
              position:      'absolute',
              bottom:        0, left: 0, right: 0,
              height:        '50%',
              background:    'linear-gradient(to top, rgba(8,8,8,0.9), transparent)',
              pointerEvents: 'none',
            }}/>

            {/* Location + year */}
            <div style={{
              position:      'absolute',
              bottom:        '1.2rem',
              left:          '1.2rem',
              zIndex:        10,
              pointerEvents: 'none',
            }}>
              <p style={{
                fontFamily:    'var(--font-barlow-condensed)',
                fontSize:      '0.62rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         'rgba(200,241,53,0.75)',
                margin:        0,
                marginBottom:  '0.15rem',
              }}>
                {photo.location}
              </p>
              <p style={{
                fontFamily:    'var(--font-bebas)',
                fontSize:      '1.6rem',
                letterSpacing: '0.06em',
                color:         '#f0f0f0',
                margin:        0,
                lineHeight:    1,
              }}>
                {photo.year}
              </p>
            </div>

            {/* Index number top right */}
            <div style={{
              position:      'absolute',
              top:           '1rem',
              right:         '1rem',
              fontFamily:    'var(--font-bebas)',
              fontSize:      '0.9rem',
              letterSpacing: '0.1em',
              color:         'rgba(200,241,53,0.4)',
              pointerEvents: 'none',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}