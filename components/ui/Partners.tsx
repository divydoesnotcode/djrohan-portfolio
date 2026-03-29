'use client'

const PARTNERS = [
  'Pioneer DJ', 'Technics', 'Serato', 'Native Instruments', 'Roland', 'Shure',
  'Pioneer DJ', 'Technics', 'Serato', 'Native Instruments', 'Roland', 'Shure',
]

export default function Partners() {
  return (
    <section style={{
      background: '#080808',
      padding:    'clamp(3rem, 6vw, 5rem) 0',
      overflow:   'hidden',
      position:   'relative',
    }}>

      {/* Glass section container */}
      <div style={{
        margin:              '0 clamp(1rem, 4vw, 2.5rem)',
        background:          'rgba(255,255,255,0.03)',
        backdropFilter:      'blur(20px)',
        WebkitBackdropFilter:'blur(20px)',
        border:              '1px solid rgba(255,255,255,0.07)',
        borderRadius:        '20px',
        padding:             'clamp(2rem, 4vw, 3rem) 0',
        boxShadow:           '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        overflow:            'hidden',
      }}>

        {/* Glass pill label */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display:             'inline-flex',
            alignItems:          'center',
            gap:                 '0.7rem',
            background:          'rgba(255,255,255,0.05)',
            backdropFilter:      'blur(12px)',
            WebkitBackdropFilter:'blur(12px)',
            border:              '1px solid rgba(255,255,255,0.08)',
            borderRadius:        '999px',
            padding:             '0.45rem 1.2rem',
            boxShadow:           '0 4px 16px rgba(0,0,0,0.3)',
          }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8f135', boxShadow: '0 0 8px rgba(200,241,53,0.9)', flexShrink: 0 }}/>
            <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.8)' }}>
              Gear & Equipment
            </span>
          </div>
        </div>

        {/* Marquee track */}
        <div style={{ position: 'relative', display: 'flex', overflow: 'hidden' }}>

          {/* Left fade */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, rgba(8,8,8,0.6), transparent)', zIndex: 10, pointerEvents: 'none' }}/>
          {/* Right fade */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, rgba(8,8,8,0.6), transparent)', zIndex: 10, pointerEvents: 'none' }}/>

          {/* Scrolling strip */}
          <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap' }}>
            {PARTNERS.map((name, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>

                {/* Glass name pill */}
                <span
                  style={{
                    fontFamily:          'var(--font-bebas)',
                    fontSize:            'clamp(1.1rem, 2.5vw, 1.6rem)',
                    letterSpacing:       '0.14em',
                    textTransform:       'uppercase',
                    color:               'rgba(255,255,255,0.2)',
                    cursor:              'default',
                    padding:             '0.3rem 0.9rem',
                    borderRadius:        '999px',
                    border:              '1px solid transparent',
                    transition:          'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color            = '#c8f135'
                    e.currentTarget.style.background       = 'rgba(200,241,53,0.08)'
                    e.currentTarget.style.borderColor      = 'rgba(200,241,53,0.25)'
                    e.currentTarget.style.backdropFilter   = 'blur(10px)'
                    e.currentTarget.style.textShadow       = '0 0 12px rgba(200,241,53,0.6)'
                    e.currentTarget.style.boxShadow        = '0 0 16px rgba(200,241,53,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color            = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.background       = 'transparent'
                    e.currentTarget.style.borderColor      = 'transparent'
                    e.currentTarget.style.backdropFilter   = 'none'
                    e.currentTarget.style.textShadow       = 'none'
                    e.currentTarget.style.boxShadow        = 'none'
                  }}>
                  {name}
                </span>

                {/* Dot separator */}
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(200,241,53,0.2)', flexShrink: 0 }}/>
              </div>
            ))}
          </div>
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