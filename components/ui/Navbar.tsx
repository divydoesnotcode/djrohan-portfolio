'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube',   href: 'https://youtube.com'   },
  { label: 'Spotify',   href: 'https://spotify.com'   },
]


// Reusable touch+mouse hover handler
function useGlowHover() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => applyGlow(e.currentTarget),
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => removeGlow(e.currentTarget),
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => applyGlow(e.currentTarget),
    onTouchEnd:   (e: React.TouchEvent<HTMLElement>) => removeGlow(e.currentTarget),
  }
}

function applyGlow(el: HTMLElement) {
  el.style.color          = '#c8f135'
  el.style.textShadow     = '0 0 14px rgba(200,241,53,0.8)'
  el.style.background     = 'rgba(200,241,53,0.08)'
  el.style.backdropFilter = 'blur(10px)'
  el.style.borderColor    = 'rgba(200,241,53,0.35)'
  el.style.boxShadow      = '0 0 18px rgba(200,241,53,0.2)'
}

function removeGlow(el: HTMLElement) {
  el.style.color          = '#555'
  el.style.textShadow     = 'none'
  el.style.background     = 'transparent'
  el.style.backdropFilter = 'none'
  el.style.borderColor    = 'transparent'
  el.style.boxShadow      = 'none'
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const glowHover               = useGlowHover()
  const menuRef                 = useRef<HTMLDivElement>(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Animate menu links in staggered on open
  useEffect(() => {
    if (!menuRef.current) return
    const links = menuRef.current.querySelectorAll<HTMLElement>('.menu-link')
    links.forEach((el, i) => {
      el.style.transition = `opacity 0.4s ease ${i * 0.07 + 0.15}s, transform 0.4s ease ${i * 0.07 + 0.15}s`
      if (open) {
        el.style.opacity   = '1'
        el.style.transform = 'translateY(0)'
      } else {
        el.style.opacity   = '0'
        el.style.transform = 'translateY(24px)'
      }
    })
  }, [open])

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav style={{
        position:       'fixed',
        top: 0, left: 0, right: 0,
        zIndex:         100,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        scrolled ? '0.7rem 2.5rem' : '1.3rem 2.5rem',
        background:     scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
        borderBottom:   scrolled ? '1px solid rgba(200,241,53,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition:     'all 0.4s ease',
      }}>

        {/* Logo */}
        <Link href="/"
          style={{
            fontFamily:     'var(--font-bebas)',
            fontSize:       'clamp(1.4rem, 3vw, 1.8rem)',
            letterSpacing:  '0.1em',
            color:          '#f0f0f0',
            textDecoration: 'none',
            transition:     'all 0.25s ease',
            zIndex:         110,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color       = '#c8f135'
            e.currentTarget.style.textShadow  = '0 0 20px rgba(200,241,53,0.6)'
            e.currentTarget.style.letterSpacing = '0.16em'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color        = '#f0f0f0'
            e.currentTarget.style.textShadow   = 'none'
            e.currentTarget.style.letterSpacing = '0.1em'
          }}>
          DJ <span style={{ color: '#c8f135' }}>Rohan</span>
        </Link>

        {/* Desktop — Centre socials */}
        <div className="hidden-mobile" style={{
          position:   'absolute',
          left:       '50%',
          transform:  'translateX(-50%)',
          display:    'flex',
          alignItems: 'center',
          gap:        '3rem',
        }}>
          {SOCIALS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily:     'var(--font-barlow-condensed)',
                fontSize:       '0.85rem',
                fontWeight:     600,
                letterSpacing:  '0.22em',
                textTransform:  'uppercase',
                color:          '#555',
                textDecoration: 'none',
                padding:        '0.4rem 0.9rem',
                borderRadius:   '999px',
                border:         '1px solid transparent',
                transition:     'all 0.3s ease',
              }}
              {...glowHover}>
              {label}
            </a>
          ))}
        </div>

        {/* Desktop — Bookings CTA */}
        <div className="hidden-mobile">
          <a href="mailto:Info.rohanrao@gmail.com"
            style={{
              fontFamily:          'var(--font-barlow-condensed)',
              fontSize:            '0.82rem',
              fontWeight:          700,
              letterSpacing:       '0.2em',
              textTransform:       'uppercase',
              color:               '#c8f135',
              padding:             '0.6rem 1.8rem',
              textDecoration:      'none',
              borderRadius:        '999px',
              border:              '1px solid rgba(200,241,53,0.4)',
              background:          'rgba(200,241,53,0.08)',
              backdropFilter:      'blur(10px)',
              WebkitBackdropFilter:'blur(10px)',
              boxShadow:           '0 0 12px rgba(200,241,53,0.15)',
              transition:          'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background  = '#c8f135'
              e.currentTarget.style.color       = '#080808'
              e.currentTarget.style.boxShadow   = '0 0 28px rgba(200,241,53,0.55)'
              e.currentTarget.style.borderColor = '#c8f135'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background  = 'rgba(200,241,53,0.08)'
              e.currentTarget.style.color       = '#c8f135'
              e.currentTarget.style.boxShadow   = '0 0 12px rgba(200,241,53,0.15)'
              e.currentTarget.style.borderColor = 'rgba(200,241,53,0.4)'
            }}>
            Bookings
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="show-mobile"
          aria-label="Toggle menu"
          style={{
            display:        'none',
            flexDirection:  'column',
            gap:            '5px',
            background:     'none',
            border:         'none',
            cursor:         'pointer',
            padding:        '8px',
            zIndex:         200,
            borderRadius:   '8px',
            transition:     'background 0.2s',
          }}
          onTouchStart={e => (e.currentTarget.style.background = 'rgba(200,241,53,0.08)')}
          onTouchEnd={e   => (e.currentTarget.style.background = 'transparent')}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display:      'block',
              width:        '26px',
              height:       '2px',
              background:   open ? '#c8f135' : '#f0f0f0',
              borderRadius: '2px',
              transition:   'all 0.35s cubic-bezier(0.77,0,0.18,1)',
              transformOrigin: 'center',
              transform: open
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 1 ? 'scaleX(0) translateX(-10px)'
                : 'translateY(-7px) rotate(-45deg)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </nav>

      {/* ── MOBILE FULL SCREEN MENU ── */}
      <div ref={menuRef} style={{
        position:       'fixed',
        inset:          0,
        zIndex:         90,
        background:     'rgba(6,6,6,0.97)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '0',
        transform:      open ? 'translateY(0)' : 'translateY(-100%)',
        transition:     'transform 0.55s cubic-bezier(0.77,0,0.18,1)',
        padding:        '2rem',
        // Subtle lime gradient top edge
        borderBottom:   open ? '1px solid rgba(200,241,53,0.12)' : 'none',
      }}>

        {/* Decorative lime line top */}
        <div style={{
          position:   'absolute',
          top:        0, left: 0, right: 0,
          height:     '2px',
          background: 'linear-gradient(to right, transparent, rgba(200,241,53,0.6), transparent)',
          opacity:    open ? 1 : 0,
          transition: 'opacity 0.5s ease 0.3s',
        }}/>

        {/* Nav links
        <ul style={{ listStyle: 'none', textAlign: 'center', padding: 0, marginBottom: '2.5rem' }}>
          {MOBILE_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="menu-link"
                onClick={() => setOpen(false)}
                style={{
                  fontFamily:     'var(--font-bebas)',
                  fontSize:       'clamp(3rem, 15vw, 6rem)',
                  letterSpacing:  '0.04em',
                  color:          '#f0f0f0',
                  textDecoration: 'none',
                  lineHeight:     1.15,
                  display:        'block',
                  padding:        '0.25rem 1.5rem',
                  borderRadius:   '10px',
                  border:         '1px solid transparent',
                  opacity:        0,
                  transform:      'translateY(24px)',
                  transition:     'all 0.3s ease',
                  // active state on touch
                }}
                onTouchStart={e => {
                  e.currentTarget.style.color          = '#c8f135'
                  e.currentTarget.style.background     = 'rgba(200,241,53,0.07)'
                  e.currentTarget.style.borderColor    = 'rgba(200,241,53,0.25)'
                  e.currentTarget.style.backdropFilter = 'blur(10px)'
                  e.currentTarget.style.textShadow     = '0 0 30px rgba(200,241,53,0.5)'
                  e.currentTarget.style.letterSpacing  = '0.08em'
                }}
                onTouchEnd={e => {
                  e.currentTarget.style.color          = '#f0f0f0'
                  e.currentTarget.style.background     = 'transparent'
                  e.currentTarget.style.borderColor    = 'transparent'
                  e.currentTarget.style.backdropFilter = 'none'
                  e.currentTarget.style.textShadow     = 'none'
                  e.currentTarget.style.letterSpacing  = '0.04em'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color          = '#c8f135'
                  e.currentTarget.style.background     = 'rgba(200,241,53,0.07)'
                  e.currentTarget.style.borderColor    = 'rgba(200,241,53,0.25)'
                  e.currentTarget.style.backdropFilter = 'blur(10px)'
                  e.currentTarget.style.textShadow     = '0 0 30px rgba(200,241,53,0.5)'
                  e.currentTarget.style.letterSpacing  = '0.08em'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color          = '#f0f0f0'
                  e.currentTarget.style.background     = 'transparent'
                  e.currentTarget.style.borderColor    = 'transparent'
                  e.currentTarget.style.backdropFilter = 'none'
                  e.currentTarget.style.textShadow     = 'none'
                  e.currentTarget.style.letterSpacing  = '0.04em'
                }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
*/}
        {/* Divider */}
        {/* <div className="menu-link" style={{
          width:      '40px',
          height:     '1px',
          background: 'rgba(200,241,53,0.25)',
          marginBottom: '2rem',
          opacity:    0,
          transform:  'translateY(24px)',
        }}/> */}

        {/* Socials */}
        <div className="menu-link" style={{
          display:        'flex-row',
          gap:            '1rem',
          marginBottom:   '2rem',
          flexWrap:       'wrap',
          justifyContent: 'center',
          opacity:        0,
          transform:      'translateY(24px)',
        }}>
          {SOCIALS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily:     'var(--font-barlow-condensed)',
                fontSize:       '0.78rem',
                fontWeight:     600,
                letterSpacing:  '0.22em',
                textTransform:  'uppercase',
                color:          '#444',
                textDecoration: 'none',
                padding:        '0.5rem 1.1rem',
                borderRadius:   '999px',
                border:         '1px solid rgba(200,241,53,0.15)',
                background:     'rgba(200,241,53,0.04)',
                transition:     'all 0.2s ease',
              }}
              onTouchStart={e => {
                e.currentTarget.style.color       = '#c8f135'
                e.currentTarget.style.background  = 'rgba(200,241,53,0.12)'
                e.currentTarget.style.borderColor = 'rgba(200,241,53,0.45)'
                e.currentTarget.style.boxShadow   = '0 0 16px rgba(200,241,53,0.25)'
                e.currentTarget.style.textShadow  = '0 0 10px rgba(200,241,53,0.7)'
              }}
              onTouchEnd={e => {
                e.currentTarget.style.color       = '#444'
                e.currentTarget.style.background  = 'rgba(200,241,53,0.04)'
                e.currentTarget.style.borderColor = 'rgba(200,241,53,0.15)'
                e.currentTarget.style.boxShadow   = 'none'
                e.currentTarget.style.textShadow  = 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color       = '#c8f135'
                e.currentTarget.style.background  = 'rgba(200,241,53,0.12)'
                e.currentTarget.style.borderColor = 'rgba(200,241,53,0.45)'
                e.currentTarget.style.boxShadow   = '0 0 16px rgba(200,241,53,0.25)'
                e.currentTarget.style.textShadow  = '0 0 10px rgba(200,241,53,0.7)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color       = '#444'
                e.currentTarget.style.background  = 'rgba(200,241,53,0.04)'
                e.currentTarget.style.borderColor = 'rgba(200,241,53,0.15)'
                e.currentTarget.style.boxShadow   = 'none'
                e.currentTarget.style.textShadow  = 'none'
              }}>
              {label}
            </a>
          ))}
        </div>

        {/* Booking CTA */}
        <a
          href="mailto:djrohan@gmail.com"
          className="menu-link"
          style={{
            fontFamily:          'var(--font-barlow-condensed)',
            fontSize:            '0.85rem',
            fontWeight:          700,
            letterSpacing:       '0.24em',
            textTransform:       'uppercase',
            color:               '#c8f135',
            border:              '1px solid rgba(200,241,53,0.45)',
            padding:             '0.9rem 3.5rem',
            textDecoration:      'none',
            borderRadius:        '999px',
            background:          'rgba(200,241,53,0.08)',
            backdropFilter:      'blur(12px)',
            WebkitBackdropFilter:'blur(12px)',
            boxShadow:           '0 0 20px rgba(200,241,53,0.18)',
            transition:          'all 0.25s ease',
            opacity:             0,
            transform:           'translateY(24px)',
          }}
          onTouchStart={e => {
            e.currentTarget.style.background  = '#c8f135'
            e.currentTarget.style.color       = '#080808'
            e.currentTarget.style.boxShadow   = '0 0 36px rgba(200,241,53,0.6)'
            e.currentTarget.style.transform   = 'scale(0.97)'
          }}
          onTouchEnd={e => {
            e.currentTarget.style.background  = 'rgba(200,241,53,0.08)'
            e.currentTarget.style.color       = '#c8f135'
            e.currentTarget.style.boxShadow   = '0 0 20px rgba(200,241,53,0.18)'
            e.currentTarget.style.transform   = 'translateY(0)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background  = '#c8f135'
            e.currentTarget.style.color       = '#080808'
            e.currentTarget.style.boxShadow   = '0 0 36px rgba(200,241,53,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background  = 'rgba(200,241,53,0.08)'
            e.currentTarget.style.color       = '#c8f135'
            e.currentTarget.style.boxShadow   = '0 0 20px rgba(200,241,53,0.18)'
          }}>
          Book DJ Rohan
        </a>

        {/* Footer tag */}
        <span style={{
          position:      'absolute',
          bottom:        '1.8rem',
          fontFamily:    'var(--font-barlow-condensed)',
          fontSize:      '0.58rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color:         'rgba(200,241,53,0.2)',
        }}>
          Multi-genre · Producer · Since 2016
        </span>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (max-width: 860px) {
          nav { padding-left: 1.2rem !important; padding-right: 1.2rem !important; }
        }
        /* Remove tap highlight on mobile */
        a, button { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </>
  )
}