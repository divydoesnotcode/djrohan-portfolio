'use client'

const PARTNERS = [
  'Pioneer DJ',
  'Technics',
  'Serato',
  'Native Instruments',
  'Roland',
  'Shure',
  'Pioneer DJ',
  'Technics',
  'Serato',
  'Native Instruments',
  'Roland',
  'Shure',
]

export default function Partners() {
  return (
    <section style={{
      background:   '#080808',
      padding:      'clamp(3rem, 6vw, 5rem) 0',
      borderTop:    '1px solid rgba(200,241,53,0.08)',
      borderBottom: '1px solid rgba(200,241,53,0.08)',
      overflow:     'hidden',
    }}>

      {/* Label */}
      <div style={{
        textAlign:    'center',
        marginBottom: '3rem',
      }}>
        <p style={{
          fontFamily:    'var(--font-barlow-condensed)',
          fontSize:      '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color:         'rgba(200,241,53,0.5)',
          margin:        0,
        }}>
          Trusted Gear & Partners
        </p>
      </div>

      {/* Marquee track */}
      <div style={{
        position:   'relative',
        display:    'flex',
        overflow:   'hidden',
      }}>
        {/* Left fade */}
        <div style={{
          position:   'absolute',
          left:       0, top: 0, bottom: 0,
          width:      '120px',
          background: 'linear-gradient(to right, #080808, transparent)',
          zIndex:     10,
          pointerEvents: 'none',
        }}/>

        {/* Right fade */}
        <div style={{
          position:   'absolute',
          right:      0, top: 0, bottom: 0,
          width:      '120px',
          background: 'linear-gradient(to left, #080808, transparent)',
          zIndex:     10,
          pointerEvents: 'none',
        }}/>

        {/* Scrolling strip */}
        <div style={{
          display:   'flex',
          gap:       '4rem',
          animation: 'marquee 20s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {PARTNERS.map((name, i) => (
            <div key={i} style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '4rem',
            }}>
              <span style={{
                fontFamily:    'var(--font-bebas)',
                fontSize:      'clamp(1.2rem, 3vw, 1.8rem)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         'rgba(240,240,240,0.2)',
                transition:    'color 0.3s ease',
                cursor:        'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c8f135')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,240,240,0.2)')}>
                {name}
              </span>
              {/* Dot separator */}
              <span style={{
                width:      '4px',
                height:     '4px',
                borderRadius: '50%',
                background: 'rgba(200,241,53,0.3)',
                display:    'inline-block',
                flexShrink: 0,
              }}/>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}