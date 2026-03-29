'use client'

const MILESTONES = [
  { title: 'Best DJ Award',         year: '2023', location: 'Ahmedabad', base: '/images/gallery/photo1.jpeg', hover: '/images/gallery/photo2.jpeg' },
  { title: 'Festival Headline',     year: '2023', location: 'Mumbai',    base: '/images/gallery/photo2.jpeg', hover: '/images/gallery/photo3.jpeg' },
  { title: 'Studio Release',        year: '2022', location: 'Pune',      base: '/images/gallery/photo3.jpeg', hover: '/images/gallery/photo4.jpeg' },
  { title: 'Club Residency',        year: '2022', location: 'Surat',     base: '/images/gallery/photo4.jpeg', hover: '/images/gallery/photo5.jpeg' },
  { title: 'Pioneer Collab',        year: '2021', location: 'Delhi',     base: '/images/gallery/photo5.jpeg', hover: '/images/gallery/photo1.jpeg' },
  { title: 'First International Gig', year: '2020', location: 'Dubai',  base: '/images/gallery/photo1.jpeg', hover: '/images/gallery/photo3.jpeg' },
]

export default function Milestones() {
  return (
    <section style={{
      background: '#080808',
      padding:    'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2.5rem)',
    }}>

      {/* ── Glass Header ── */}
      <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>

        {/* Glass pill label */}
        <div style={{
          display:             'inline-flex',
          alignItems:          'center',
          gap:                 '0.7rem',
          background:          'rgba(255,255,255,0.04)',
          backdropFilter:      'blur(16px)',
          WebkitBackdropFilter:'blur(16px)',
          border:              '1px solid rgba(255,255,255,0.08)',
          borderRadius:        '999px',
          padding:             '0.45rem 1.1rem',
          marginBottom:        '1.5rem',
          boxShadow:           '0 4px 20px rgba(0,0,0,0.3)',
        }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8f135', boxShadow: '0 0 8px rgba(200,241,53,0.9)', flexShrink: 0 }}/>
          <span style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8f135' }}>
            Career
          </span>
        </div>


        {/* Big heading */}
        <h2 style={{
          fontFamily:    'var(--font-bebas)',
          fontSize:      'clamp(3.5rem, 8vw, 8rem)',
          lineHeight:    0.9,
          letterSpacing: '0.02em',
          color:         '#f0f0f0',
          margin:        0,
        }}>
          Milestones<br/>
          <span style={{ color: 'rgba(240,240,240,0.15)' }}>Hall of Fame</span>
        </h2>
      </div>

      {/* ── Glass Grid ── */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap:                 '1rem',
      }}>
        {MILESTONES.map((m, i) => (
          <div key={i}
            style={{
              position:    'relative',
              aspectRatio: '3/4',
              overflow:    'hidden',
              cursor:      'pointer',
              borderRadius:'16px',
              border:      '1px solid rgba(255,255,255,0.07)',
              boxShadow:   '0 8px 32px rgba(0,0,0,0.5)',
              background:  '#0a0a0a',
            }}
            onMouseEnter={e => {
              const base  = e.currentTarget.querySelector('.base-img')  as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              const panel = e.currentTarget.querySelector('.m-panel')   as HTMLElement
              const title = e.currentTarget.querySelector('.card-title') as HTMLElement
              const year  = e.currentTarget.querySelector('.card-year') as HTMLElement
              if (base)  base.style.opacity  = '0'
              if (hover) hover.style.opacity = '1'
              if (title) title.style.color   = '#c8f135'
              if (year)  year.style.color    = '#c8f135'
              if (panel) {
                panel.style.background   = 'rgba(255,255,255,0.1)'
                panel.style.borderColor  = 'rgba(200,241,53,0.25)'
                panel.style.boxShadow    = '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
              }
            }}
            onMouseLeave={e => {
              const base  = e.currentTarget.querySelector('.base-img')  as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              const panel = e.currentTarget.querySelector('.m-panel')   as HTMLElement
              const title = e.currentTarget.querySelector('.card-title') as HTMLElement
              const year  = e.currentTarget.querySelector('.card-year') as HTMLElement
              if (base)  base.style.opacity  = '1'
              if (hover) hover.style.opacity = '0'
              if (title) title.style.color   = '#f0f0f0'
              if (year)  year.style.color    = 'rgba(200,241,53,0.6)'
              if (panel) {
                panel.style.background  = 'rgba(255,255,255,0.05)'
                panel.style.borderColor = 'rgba(255,255,255,0.08)'
                panel.style.boxShadow   = '0 4px 16px rgba(0,0,0,0.3)'
              }
            }}
            onTouchStart={e => {
              const base  = e.currentTarget.querySelector('.base-img')  as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              const panel = e.currentTarget.querySelector('.m-panel')   as HTMLElement
              if (base)  base.style.opacity  = '0'
              if (hover) hover.style.opacity = '1'
              if (panel) panel.style.background = 'rgba(255,255,255,0.1)'
            }}
            onTouchEnd={e => {
              const base  = e.currentTarget.querySelector('.base-img')  as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              const panel = e.currentTarget.querySelector('.m-panel')   as HTMLElement
              if (base)  base.style.opacity  = '1'
              if (hover) hover.style.opacity = '0'
              if (panel) panel.style.background = 'rgba(255,255,255,0.05)'
            }}>

            {/* Base image */}
            <img className="base-img" src={m.base} alt={m.title} draggable={false}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.4) saturate(0.5)', opacity: 1, transition: 'opacity 0.5s ease' }}
            />

            {/* Hover image */}
            <img className="hover-img" src={m.hover} alt={m.title} draggable={false}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.5) saturate(0.8)', opacity: 0, transition: 'opacity 0.5s ease' }}
            />

            {/* Bottom gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.97) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 2 }}/>

            {/* Top lime tint */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(200,241,53,0.06) 0%, transparent 40%)', pointerEvents: 'none', zIndex: 2 }}/>

            {/* Index glass badge — top right */}
            <div style={{
              position:            'absolute',
              top:                 '1rem',
              right:               '1rem',
              zIndex:              10,
              background:          'rgba(255,255,255,0.07)',
              backdropFilter:      'blur(10px)',
              WebkitBackdropFilter:'blur(10px)',
              border:              '1px solid rgba(255,255,255,0.1)',
              borderRadius:        '999px',
              padding:             '0.15rem 0.55rem',
            }}>
              <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'rgba(200,241,53,0.5)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* ── Glass content panel ── */}
            <div className="m-panel" style={{
              position:            'absolute',
              bottom:              '1.2rem',
              left:                '1.2rem',
              right:               '1.2rem',
              zIndex:              10,
              background:          'rgba(255,255,255,0.05)',
              backdropFilter:      'blur(20px)',
              WebkitBackdropFilter:'blur(20px)',
              border:              '1px solid rgba(255,255,255,0.08)',
              borderRadius:        '12px',
              padding:             '0.9rem 1rem',
              boxShadow:           '0 4px 16px rgba(0,0,0,0.3)',
              transition:          'all 0.4s ease',
            }}>
              <p className="card-year" style={{
                fontFamily:    'var(--font-barlow-condensed)',
                fontSize:      '0.6rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         'rgba(200,241,53,0.6)',
                margin:        0,
                marginBottom:  '0.3rem',
                transition:    'color 0.3s ease',
              }}>
                {m.location} · {m.year}
              </p>
              <h3 className="card-title" style={{
                fontFamily:    'var(--font-bebas)',
                fontSize:      'clamp(1.4rem, 3vw, 2rem)',
                letterSpacing: '0.04em',
                color:         '#f0f0f0',
                margin:        0,
                lineHeight:    1.1,
                transition:    'color 0.3s ease',
              }}>
                {m.title}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}