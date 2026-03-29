'use client'

const CARDS = [
  {
    id:    'mixes',
    line1: 'MIXES',
    line2: '/ SETS',
    desc:  'Latest mixes, studio sets and tracks from the decks.',
    href:  'https://youtube.com/@djrohanrao?si=1VYYor2XiMPihznQ',
    img:   '/images/gallery/photo1.jpeg',
  },
  {
    id:    'events',
    line1: 'LIVE',
    line2: 'EVENTS',
    desc:  'Gigs, festivals and live performances across India.',
    href:  'https://youtube.com/@djrohanrao?si=1VYYor2XiMPihznQ',
    img:   '/images/gallery/photo2.jpeg',
  },
]

export default function SectionCards() {
  return (
    <>
      <section id="section-cards" style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
        {CARDS.map((card) => (
          <a key={card.id} id={card.id} href={card.href}
            style={{
              position: 'relative', flex: 1, minHeight: '100vh',
              overflow: 'hidden', textDecoration: 'none', cursor: 'pointer', display: 'block',
            }}
            onMouseEnter={e => {
              const img     = e.currentTarget.querySelector('.card-img')     as HTMLElement
              const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
              const arrow   = e.currentTarget.querySelector('.card-arrow')   as HTMLElement
              const panel   = e.currentTarget.querySelector('.card-panel')   as HTMLElement
              if (img)     { img.style.transform = 'scale(1.06)'; img.style.filter = 'brightness(0.45) saturate(0.7)' }
              if (overlay) overlay.style.opacity = '1'
              if (arrow)   { arrow.style.transform = 'translateX(6px)'; arrow.style.color = '#c8f135' }
              if (panel)   { panel.style.background = 'rgba(255,255,255,0.1)'; panel.style.borderColor = 'rgba(200,241,53,0.25)'; panel.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' }
            }}
            onMouseLeave={e => {
              const img     = e.currentTarget.querySelector('.card-img')     as HTMLElement
              const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
              const arrow   = e.currentTarget.querySelector('.card-arrow')   as HTMLElement
              const panel   = e.currentTarget.querySelector('.card-panel')   as HTMLElement
              if (img)     { img.style.transform = 'scale(1)'; img.style.filter = 'brightness(0.35) saturate(0.6)' }
              if (overlay) overlay.style.opacity = '0'
              if (arrow)   { arrow.style.transform = 'translateX(0)'; arrow.style.color = '#f0f0f0' }
              if (panel)   { panel.style.background = 'rgba(255,255,255,0.05)'; panel.style.borderColor = 'rgba(255,255,255,0.08)'; panel.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)' }
            }}
            onTouchStart={e => {
              const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
              const panel   = e.currentTarget.querySelector('.card-panel')   as HTMLElement
              if (overlay) overlay.style.opacity    = '1'
              if (panel)   panel.style.background   = 'rgba(255,255,255,0.1)'
            }}
            onTouchEnd={e => {
              const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement
              const panel   = e.currentTarget.querySelector('.card-panel')   as HTMLElement
              if (overlay) overlay.style.opacity  = '0'
              if (panel)   panel.style.background = 'rgba(255,255,255,0.05)'
            }}>

            {/* Background photo */}
            <div className="card-img" style={{
              position:           'absolute', inset: 0,
              backgroundImage:    `url(${card.img})`,
              backgroundSize:     'cover',
              backgroundPosition: 'center',
              filter:             'brightness(0.35) saturate(0.6)',
              transition:         'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease',
            }}/>

            {/* Divider line */}
            {card.id === 'mixes' && (
              <div className="divider-line" style={{
                position:   'absolute', top: 0, bottom: 0, right: 0,
                width:      '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(200,241,53,0.3), transparent)',
                zIndex:     10,
              }}/>
            )}

            {/* Lime overlay on hover */}
            <div className="card-overlay" style={{
              position:      'absolute', inset: 0,
              background:    'rgba(200,241,53,0.05)',
              opacity:       0,
              transition:    'opacity 0.4s ease',
              pointerEvents: 'none',
            }}/>

            {/* Bottom gradient */}
            <div style={{
              position:      'absolute', inset: 0,
              background:    'linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.4) 45%, transparent 100%)',
              zIndex:        2,
              pointerEvents: 'none',
            }}/>

            {/* ── GLASS CONTENT PANEL ── */}
            <div className="card-panel" style={{
              position:            'absolute',
              bottom:              'clamp(2rem, 5vw, 4rem)',
              left:                'clamp(1.5rem, 4vw, 3rem)',
              right:               'clamp(1.5rem, 4vw, 3rem)',
              zIndex:              10,
              // Glass
              background:          'rgba(255,255,255,0.05)',
              backdropFilter:      'blur(20px)',
              WebkitBackdropFilter:'blur(20px)',
              border:              '1px solid rgba(255,255,255,0.08)',
              borderRadius:        '16px',
              padding:             'clamp(1.2rem, 3vw, 2rem)',
              boxShadow:           '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
              transition:          'all 0.4s ease',
            }}>

              {/* Top lime tag */}
              <div style={{
                display:      'flex',
                alignItems:   'center',
                gap:          '0.6rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width:        '5px', height: '5px',
                  borderRadius: '50%',
                  background:   '#c8f135',
                  boxShadow:    '0 0 8px rgba(200,241,53,0.9)',
                }}/>
                <span style={{
                  fontFamily:    'var(--font-barlow-condensed)',
                  fontSize:      '1rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color:         'rgba(200, 241, 53, 0.7)',
                }}>
                  DJ Rohan
                </span>
              </div>

              {/* Giant title */}
              <h2 style={{
                fontFamily:    'var(--font-bebas)',
                fontSize:      'clamp(3.5rem, 7vw, 9rem)',
                lineHeight:    0.88,
                letterSpacing: '0.02em',
                color:         '#ffffff',
                margin:        0,
                marginBottom:  '1rem',
                textShadow:    '0 0 60px rgba(255,255,255,0.08)',
              }}>
                {card.line1}<br/>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>{card.line2}</span>
              </h2>

              {/* Divider */}
              <div style={{
                height:       '1px',
                background:   'rgba(255,255,255,0.06)',
                marginBottom: '1rem',
              }}/>

              {/* Description */}
              <p style={{
                fontFamily:    'var(--font-barlow-condensed)',
                fontSize:      'clamp(0.7rem, 1.5vw, 0.85rem)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.35)',
                margin:        0,
                marginBottom:  '1.2rem',
              }}>
                {card.desc}
              </p>

              {/* CTA — glass pill */}
              <div style={{
                display:             'inline-flex',
                alignItems:          'center',
                gap:                 '0.6rem',
                background:          'rgba(200,241,53,0.08)',
                backdropFilter:      'blur(10px)',
                WebkitBackdropFilter:'blur(10px)',
                border:              '1px solid rgba(200,241,53,0.2)',
                borderRadius:        '999px',
                padding:             '0.45rem 1.1rem',
              }}>
                <span style={{
                  fontFamily:    'var(--font-barlow-condensed)',
                  fontSize:      '0.72rem',
                  fontWeight:    700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color:         '#c8f135',
                }}>
                  Explore
                </span>
                <span className="card-arrow" style={{
                  fontSize:   '0.9rem',
                  color:      '#f0f0f0',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                }}>
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </section>

      <style>{`
        #section-cards { flex-direction: row; height: 100vh; }
        #section-cards > a { min-height: 100vh; }

        @media (max-width: 768px) {
          #section-cards { flex-direction: column !important; height: auto !important; }
          #section-cards > a { width: 100% !important; min-height: 75vh !important; flex: none !important; }
          .divider-line { display: none !important; }
          #section-cards h2 { font-size: clamp(4rem, 20vw, 7rem) !important; }
          .card-panel { left: 1rem !important; right: 1rem !important; }
        }
      `}</style>
    </>
  )
}