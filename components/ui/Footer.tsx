'use client'

export default function Footer() {
  return (
    <footer style={{
      background: '#080808',
      padding:    'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 2.5rem) 2rem',
    }}>

      {/* ── Main glass panel ── */}
      <div style={{
        background:          'rgba(255,255,255,0.03)',
        backdropFilter:      'blur(24px)',
        WebkitBackdropFilter:'blur(24px)',
        border:              '1px solid rgba(255,255,255,0.07)',
        borderRadius:        '24px',
        padding:             'clamp(2rem, 5vw, 4rem)',
        boxShadow:           '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        marginBottom:        '2rem',
      }}>

        {/* Top row */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-start',
          flexWrap:       'wrap',
          gap:            '3rem',
          marginBottom:   'clamp(2rem, 5vw, 4rem)',
        }}>

          {/* Left — Big name */}
          <div>
            {/* Glass tag */}
            <div style={{
              display:             'inline-flex',
              alignItems:          'center',
              gap:                 '0.6rem',
              background:          'rgba(200,241,53,0.08)',
              backdropFilter:      'blur(10px)',
              WebkitBackdropFilter:'blur(10px)',
              border:              '1px solid rgba(200,241,53,0.18)',
              borderRadius:        '999px',
              padding:             '0.35rem 0.9rem',
              marginBottom:        '1.2rem',
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8f135', boxShadow: '0 0 8px rgba(200,241,53,0.9)' }}/>
              <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.8)' }}>
                Making people vibe · Since 2016
              </span>
            </div>

            <h2 style={{
              fontFamily:    'var(--font-bebas)',
              fontSize:      'clamp(3.5rem, 10vw, 8rem)',
              lineHeight:    0.9,
              letterSpacing: '0.02em',
              color:         '#f0f0f0',
              margin:        0,
              textShadow:    '0 0 60px rgba(255,255,255,0.06)',
            }}>
              DJ<br/>
              <span style={{ color: '#c8f135' }}>Rohan</span>
            </h2>
          </div>

          {/* Right — Links */}
          <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 5rem)', flexWrap: 'wrap' }}>

            {/* Follow */}
            <div>
              <div style={{
                display:             'inline-flex',
                alignItems:          'center',
                gap:                 '0.5rem',
                background:          'rgba(255,255,255,0.05)',
                backdropFilter:      'blur(10px)',
                WebkitBackdropFilter:'blur(10px)',
                border:              '1px solid rgba(255,255,255,0.08)',
                borderRadius:        '999px',
                padding:             '0.3rem 0.8rem',
                marginBottom:        '1.2rem',
              }}>
                <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.6)' }}>
                  Follow
                </span>
              </div>

              {[
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'YouTube',   href: 'https://youtube.com'   },
                { label: 'Spotify',   href: 'https://spotify.com'   },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display:       'block',
                    fontFamily:    'var(--font-barlow-condensed)',
                    fontSize:      '0.82rem',
                    fontWeight:    600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color:         'rgba(255,255,255,0.3)',
                    textDecoration:'none',
                    marginBottom:  '0.7rem',
                    padding:       '0.3rem 0',
                    transition:    'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color       = '#c8f135'
                    e.currentTarget.style.textShadow  = '0 0 10px rgba(200,241,53,0.5)'
                    e.currentTarget.style.letterSpacing = '0.24em'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color        = 'rgba(255,255,255,0.3)'
                    e.currentTarget.style.textShadow   = 'none'
                    e.currentTarget.style.letterSpacing = '0.18em'
                  }}>
                  {label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{
                display:             'inline-flex',
                alignItems:          'center',
                background:          'rgba(255,255,255,0.05)',
                backdropFilter:      'blur(10px)',
                WebkitBackdropFilter:'blur(10px)',
                border:              '1px solid rgba(255,255,255,0.08)',
                borderRadius:        '999px',
                padding:             '0.3rem 0.8rem',
                marginBottom:        '1.2rem',
              }}>
                <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.6)' }}>
                  Contact
                </span>
              </div>

              <a href="mailto:Info.rohanrao@gmail.com"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-barlow-condensed)',
                  fontSize:      '0.82rem',
                  fontWeight:    600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         'rgba(255,255,255,0.3)',
                  textDecoration:'none',
                  marginBottom:  '1.2rem',
                  transition:    'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color      = '#c8f135'
                  e.currentTarget.style.textShadow = '0 0 10px rgba(200,241,53,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color      = 'rgba(255,255,255,0.3)'
                  e.currentTarget.style.textShadow = 'none'
                }}>
                Info.rohanrao@gmail.com
              </a>

              {/* Book Now — glass pill CTA */}
              <a href="mailto:Info.rohanrao@gmail.com"
                style={{
                  display:             'inline-block',
                  fontFamily:          'var(--font-barlow-condensed)',
                  fontSize:            '0.78rem',
                  fontWeight:          700,
                  letterSpacing:       '0.2em',
                  textTransform:       'uppercase',
                  color:               '#c8f135',
                  textDecoration:      'none',
                  padding:             '0.65rem 1.8rem',
                  border:              '1px solid rgba(200,241,53,0.35)',
                  borderRadius:        '999px',
                  background:          'rgba(200,241,53,0.08)',
                  backdropFilter:      'blur(12px)',
                  WebkitBackdropFilter:'blur(12px)',
                  boxShadow:           '0 0 20px rgba(200,241,53,0.12)',
                  transition:          'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background  = '#c8f135'
                  e.currentTarget.style.color       = '#080808'
                  e.currentTarget.style.boxShadow   = '0 0 32px rgba(200,241,53,0.5)'
                  e.currentTarget.style.borderColor = '#c8f135'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background  = 'rgba(200,241,53,0.08)'
                  e.currentTarget.style.color       = '#c8f135'
                  e.currentTarget.style.boxShadow   = '0 0 20px rgba(200,241,53,0.12)'
                  e.currentTarget.style.borderColor = 'rgba(200,241,53,0.35)'
                }}>
                Book Now →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}/>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', margin: 0 }}>
            © {new Date().getFullYear()} DJ Rohan · All Rights Reserved
          </p>
          <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', margin: 0 }}>
            Ahmedabad · India
          </p>
        </div>
      </div>

    </footer>
  )
}