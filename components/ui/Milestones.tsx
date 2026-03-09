'use client'

const MILESTONES = [
  {
    title: 'Best DJ Award',
    year: '2023',
    location: 'Ahmedabad',
    base: '/images/gallery/photo1.jpeg',
    hover: '/images/gallery/photo2.jpeg',
  },
  {
    title: 'Festival Headline',
    year: '2023',
    location: 'Mumbai',
    base: '/images/gallery/photo2.jpeg',
    hover: '/images/gallery/photo3.jpeg',
  },
  {
    title: 'Studio Release',
    year: '2022',
    location: 'Pune',
    base: '/images/gallery/photo3.jpeg',
    hover: '/images/gallery/photo4.jpeg',
  },
  {
    title: 'Club Residency',
    year: '2022',
    location: 'Surat',
    base: '/images/gallery/photo4.jpeg',
    hover: '/images/gallery/photo5.jpeg',
  },
  {
    title: 'Pioneer Collab',
    year: '2021',
    location: 'Delhi',
    base: '/images/gallery/photo5.jpeg',
    hover: '/images/gallery/photo1.jpeg',
  },
  {
    title: 'First International Gig',
    year: '2020',
    location: 'Dubai',
    base: '/images/gallery/photo1.jpeg',
    hover: '/images/gallery/photo3.jpeg',
  },
]

export default function Milestones() {
  return (
    <section style={{
      background: '#080808',
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2.5rem)',
    }}>

      {/* Header */}
      <div style={{
        marginBottom: 'clamp(3rem, 6vw, 5rem)',
      }}>
        <p style={{
          fontFamily: 'var(--font-barlow-condensed)',
          fontSize: '2.75rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#c8f135',
          margin: 0,
          marginBottom: '1rem',
        }}>
          Career
        </p>
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(3.5rem, 8vw, 8rem)',
          lineHeight: 0.9,
          letterSpacing: '0.02em',
          color: '#f0f0f0',
          margin: 0,
        }}>
          Milestones<br />
          <span style={{ color: 'rgba(240,240,240,0.2)' }}>Hall of Fame</span>
        </h2>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1px',
        background: 'rgba(200,241,53,0.08)',
        border: '1px solid rgba(200,241,53,0.08)',
      }}>
        {MILESTONES.map((m, i) => (
          <div key={i}
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              background: '#080808',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              const base = e.currentTarget.querySelector('.base-img') as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              const title = e.currentTarget.querySelector('.card-title') as HTMLElement
              const year = e.currentTarget.querySelector('.card-year') as HTMLElement
              if (base) base.style.opacity = '0'
              if (hover) hover.style.opacity = '1'
              if (title) title.style.color = '#c8f135'
              if (year) year.style.color = '#c8f135'
            }}
            onMouseLeave={e => {
              const base = e.currentTarget.querySelector('.base-img') as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              const title = e.currentTarget.querySelector('.card-title') as HTMLElement
              const year = e.currentTarget.querySelector('.card-year') as HTMLElement
              if (base) base.style.opacity = '1'
              if (hover) hover.style.opacity = '0'
              if (title) title.style.color = '#f0f0f0'
              if (year) year.style.color = 'rgba(200,241,53,0.6)'
            }}
            onTouchStart={e => {
              const base = e.currentTarget.querySelector('.base-img') as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              if (base) base.style.opacity = '0'
              if (hover) hover.style.opacity = '1'
            }}
            onTouchEnd={e => {
              const base = e.currentTarget.querySelector('.base-img') as HTMLElement
              const hover = e.currentTarget.querySelector('.hover-img') as HTMLElement
              if (base) base.style.opacity = '1'
              if (hover) hover.style.opacity = '0'
            }}>

            {/* Base image */}
            <img className="base-img" src={m.base} alt={m.title}
              draggable={false}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.4) saturate(0.5)',
                opacity: 1,
                transition: 'opacity 0.5s ease',
              }} />

            {/* Hover image */}
            <img className="hover-img" src={m.hover} alt={m.title}
              draggable={false}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.55) saturate(0.8)',
                opacity: 0,
                transition: 'opacity 0.5s ease',
              }} />

            {/* Lime fade — bottom */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 55%)',
              pointerEvents: 'none',
              zIndex: 2,
            }} />

            {/* Lime top fade on hover */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(200,241,53,0.08) 0%, transparent 40%)',
              pointerEvents: 'none',
              zIndex: 2,
            }} />

            {/* Content */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              zIndex: 10,
            }}>
              <p className="card-year" style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: '0.8rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(200,241,53,0.6)',
                margin: 0,
                marginBottom: '0.3rem',
                transition: 'color 0.3s ease',
              }}>
                {m.location} · {m.year}
              </p>
              <h3 className="card-title" style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                letterSpacing: '0.04em',
                color: '#f0f0f0',
                margin: 0,
                lineHeight: 1.1,
                transition: 'color 0.3s ease',
              }}>
                {m.title}
              </h3>
            </div>

            {/* Index */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color: 'rgba(200,241,53,0.25)',
              zIndex: 10,
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}