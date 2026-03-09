'use client'

const CARDS = [
  {
    id:       'mixes',
    line1:    'MIXES',
    line2:    '/ SETS',
    desc:     'Latest mixes, studio sets and tracks from the decks.',
    href:     '#mixes',
    img:      '/images/gallery/photo1.jpeg',
  },
  {
    id:       'events',
    line1:    'LIVE',
    line2:    'EVENTS',
    desc:     'Gigs, festivals and live performances across India.',
    href:     '#events',
    img:      '/images/gallery/photo2.jpeg',
  },
]

export default function SectionCards() {
  return (
    <section id="mixes" style={{
      display:   'flex',
      height:    '100vh',
      width:     '100%',
      overflow:  'hidden',
    }}>
      {CARDS.map((card) => (
        <a key={card.id} href={card.href}
          style={{
            position:       'relative',
            flex:           1,
            overflow:       'hidden',
            textDecoration: 'none',
            cursor:         'pointer',
          }}
          onMouseEnter={e => {
            const img     = e.currentTarget.querySelector('.card-img') as HTMLElement
            const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
            const arrow   = e.currentTarget.querySelector('.card-arrow') as HTMLElement
            if (img)     img.style.transform        = 'scale(1.06)'
            if (img)     img.style.filter           = 'brightness(0.5) saturate(0.7)'
            if (overlay) overlay.style.opacity      = '1'
            if (arrow)   arrow.style.transform      = 'translateX(6px)'
            if (arrow)   arrow.style.color          = '#c8f135'
          }}
          onMouseLeave={e => {
            const img     = e.currentTarget.querySelector('.card-img') as HTMLElement
            const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
            const arrow   = e.currentTarget.querySelector('.card-arrow') as HTMLElement
            if (img)     img.style.transform        = 'scale(1)'
            if (img)     img.style.filter           = 'brightness(0.35) saturate(0.6)'
            if (overlay) overlay.style.opacity      = '0'
            if (arrow)   arrow.style.transform      = 'translateX(0)'
            if (arrow)   arrow.style.color          = '#f0f0f0'
          }}>

          {/* Background photo */}
          <div className="card-img" style={{
            position:   'absolute',
            inset:      0,
            backgroundImage:    `url(${card.img})`,
            backgroundSize:     'cover',
            backgroundPosition: 'center',
            filter:     'brightness(0.35) saturate(0.6)',
            transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease',
          }}/>

          {/* Divider line between cards */}
          {card.id === 'mixes' && (
            <div style={{
              position:   'absolute',
              top:        0, bottom: 0,
              right:      0,
              width:      '1px',
              background: 'rgba(200,241,53,0.15)',
              zIndex:     10,
            }}/>
          )}

          {/* Lime overlay on hover */}
          <div className="card-overlay" style={{
            position:     'absolute',
            inset:        0,
            background:   'rgba(200,241,53,0.06)',
            opacity:      0,
            transition:   'opacity 0.4s ease',
            pointerEvents:'none',
          }}/>

          {/* Bottom gradient */}
          <div style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)',
            zIndex:     2,
            pointerEvents: 'none',
          }}/>

          {/* Content */}
          <div style={{
            position: 'absolute',
            bottom:   'clamp(2rem, 5vw, 4rem)',
            left:     'clamp(1.5rem, 4vw, 3rem)',
            zIndex:   10,
          }}>

            {/* Big title */}
            <h2 style={{
              fontFamily:  'var(--font-bebas)',
              fontSize:    'clamp(4rem, 8vw, 10rem)',
              lineHeight:  0.88,
              letterSpacing: '0.02em',
              color:       '#f0f0f0',
              margin:      0,
              marginBottom: '1.2rem',
            }}>
              {card.line1}<br/>
              <span style={{ color: '#ffffff' }}>{card.line2}</span>
            </h2>

            {/* Description */}
            <p style={{
              fontFamily:    'var(--font-barlow-condensed)',
              fontSize:      'clamp(0.7rem, 1.5vw, 0.85rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color:         'rgba(240,240,240,0.5)',
              margin:        0,
              marginBottom:  '1.5rem',
              maxWidth:      '280px',
            }}>
              {card.desc}
            </p>

            {/* CTA */}
            <div style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '0.6rem',
            }}>
              <span style={{
                fontFamily:    'var(--font-barlow-condensed)',
                fontSize:      '0.7rem',
                fontWeight:    700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color:         '#c8f135',
              }}>
                Explore
              </span>
              <span className="card-arrow" style={{
                fontSize:   '1rem',
                color:      '#f0f0f0',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}>
                →
              </span>
            </div>
          </div>

        </a>
      ))}

      {/* Mobile — stack vertically */}
      <style>{`
        @media (max-width: 640px) {
          #mixes { flex-direction: column; height: auto; }
          #mixes > a { min-height: 60vh; }
        }
      `}</style>
    </section>
  )
}