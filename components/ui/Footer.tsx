export default function Footer() {
    return (
      <footer style={{
        background: '#080808',
        padding:    'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 2.5rem) 2rem',
        borderTop:  '1px solid rgba(200,241,53,0.08)',
      }}>
  
        {/* Top row */}
        <div style={{
          display:         'flex',
          justifyContent:  'space-between',
          alignItems:      'flex-start',
          flexWrap:        'wrap',
          gap:             '3rem',
          marginBottom:    'clamp(3rem, 6vw, 5rem)',
        }}>
  
          {/* Left — Big name */}
          <div>
            <h2 style={{
              fontFamily:    'var(--font-bebas)',
              fontSize:      'clamp(3.5rem, 10vw, 8rem)',
              lineHeight:    0.9,
              letterSpacing: '0.02em',
              color:         '#f0f0f0',
              margin:        0,
            }}>
              DJ<br/>
              <span style={{ color: '#c8f135' }}>Rohan</span>
            </h2>
            <p style={{
              fontFamily:    'var(--font-barlow-condensed)',
              fontSize:      '0.68rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         '#444',
              margin:        '1rem 0 0 0',
            }}>
              Multi-genre DJ & Producer · Since 2016
            </p>
          </div>
  
          {/* Right — Links */}
          <div style={{
            display:       'flex',
            gap:           'clamp(2rem, 5vw, 5rem)',
            flexWrap:      'wrap',
          }}>
            {/* Socials */}
            <div>
              <p style={{
                fontFamily:    'var(--font-barlow-condensed)',
                fontSize:      '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'rgba(200,241,53,0.5)',
                margin:        '0 0 1.2rem 0',
              }}>
                Follow
              </p>
              {[
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'YouTube',   href: 'https://youtube.com'   },
                { label: 'Spotify',   href: 'https://spotify.com'   },
              ].map(({ label, href }) => (
                <a key={label} href={href}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display:       'block',
                    fontFamily:    'var(--font-barlow-condensed)',
                    fontSize:      '0.82rem',
                    fontWeight:    600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color:         '#555',
                    textDecoration:'none',
                    marginBottom:  '0.7rem',
                    transition:    'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c8f135')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                  {label}
                </a>
              ))}
            </div>
  
            {/* Contact */}
            <div>
              <p style={{
                fontFamily:    'var(--font-barlow-condensed)',
                fontSize:      '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'rgba(200,241,53,0.5)',
                margin:        '0 0 1.2rem 0',
              }}>
                Contact
              </p>
              <a href="mailto:djrohan@gmail.com"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-barlow-condensed)',
                  fontSize:      '0.82rem',
                  fontWeight:    600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         '#555',
                  textDecoration:'none',
                  marginBottom:  '0.7rem',
                  transition:    'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c8f135')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                Info.rohanrao@gmail.com
              </a>
              <a href="#"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-barlow-condensed)',
                  fontSize:      '0.82rem',
                  fontWeight:    600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         '#c8f135',
                  textDecoration:'none',
                  padding:       '0.5rem 1.2rem',
                  border:        '1px solid rgba(200,241,53,0.4)',
                  borderRadius:  '999px',
                  background:    'rgba(200,241,53,0.06)',
                  backdropFilter:'blur(10px)',
                  transition:    'all 0.2s ease',
                  marginTop:     '1rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background  = '#c8f135'
                  e.currentTarget.style.color       = '#080808'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background  = 'rgba(200,241,53,0.06)'
                  e.currentTarget.style.color       = '#c8f135'
                }}>
                Book Now →
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom row */}
        <div style={{
          borderTop:   '1px solid rgba(255,255,255,0.05)',
          paddingTop:  '1.5rem',
          display:     'flex',
          justifyContent: 'space-between',
          alignItems:  'center',
          flexWrap:    'wrap',
          gap:         '1rem',
        }}>
          <p style={{
            fontFamily:    'var(--font-barlow-condensed)',
            fontSize:      '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         '#333',
            margin:        0,
          }}>
            © {new Date().getFullYear()} DJ Rohan · All Rights Reserved
          </p>
          <p style={{
            fontFamily:    'var(--font-barlow-condensed)',
            fontSize:      '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         '#333',
            margin:        0,
          }}>
            Ahmedabad · India
          </p>
        </div>
  
      </footer>
    )
  }