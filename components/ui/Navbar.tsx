'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/djrohanrao?igsh=MXZ5ZXU4ZzQyamZqcw==' },
  { label: 'YouTube', href: 'https://youtube.com/@djrohanrao?si=1VYYor2XiMPihznQ' },
  //   { label: 'Spotify',   href: 'https://spotify.com'   },
]


// Reusable touch+mouse hover handler
function useGlowHover() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => applyGlow(e.currentTarget),
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => removeGlow(e.currentTarget),
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => applyGlow(e.currentTarget),
    onTouchEnd: (e: React.TouchEvent<HTMLElement>) => removeGlow(e.currentTarget),
  }
}

function applyGlow(el: HTMLElement) {
  el.style.color = '#c8f135'
  el.style.textShadow = 'none'
  el.style.background = 'rgba(200,241,53,0.1)'
  el.style.backdropFilter = 'blur(12px)'
  el.style.borderColor = 'rgba(255,255,255,0.1)'
  el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.07)'
}

function removeGlow(el: HTMLElement) {
  el.style.color = 'rgba(255,255,255,0.5)'
  el.style.textShadow = 'none'
  el.style.background = 'rgba(255,255,255,0.05)'
  el.style.backdropFilter = 'blur(12px)'
  el.style.borderColor = 'rgba(255,255,255,0.1)'
  el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.07)'
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const glowHover = useGlowHover()
  const menuRef = useRef<HTMLDivElement>(null)

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
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      } else {
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
      }
    })
  }, [open])

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '0.3rem 1.2rem' : '0.4rem 1.4rem',
        width: 'calc(100vw - 2rem)',
        maxWidth: '860px',
        background: 'rgba(20, 20, 20, 0.55)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        borderRadius: '999px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
        transition: 'all 0.4s ease',
      }}>

        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          zIndex: 110,
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '999px',
          padding: '0.05rem 0.8rem',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          transition: 'all 0.3s ease',
        }}>
          <img
            src="/images/DJROHAN-logo.PNG"
            alt="DJ Rohan"
            style={{
              height: 'clamp(28px, 4.5vw, 44px)',
              width: 'auto',
              filter: 'invert(1)',
              opacity: 0.9,
              transition: 'filter 0.5s ease',
            }}
          />
        </Link>

        {/* Desktop — Centre socials */}
        <div className="hidden-mobile" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
        }}>
          {SOCIALS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                padding: '0.28rem 0.8rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                transition: 'all 0.3s ease',
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
              display: 'inline-block',
              fontFamily: 'var(--font-barlow-condensed)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c8f135',
              textDecoration: 'none',
              padding: '0.45rem 1.3rem',
              border: '1px solid rgba(200,241,53,0.35)',
              borderRadius: '999px',
              background: 'rgba(200,241,53,0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 0 20px rgba(200,241,53,0.12)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#c8f135'
              e.currentTarget.style.color = '#080808'
              e.currentTarget.style.boxShadow = '0 0 32px rgba(200,241,53,0.5)'
              e.currentTarget.style.borderColor = '#c8f135'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(200,241,53,0.08)'
              e.currentTarget.style.color = '#c8f135'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(200,241,53,0.12)'
              e.currentTarget.style.borderColor = 'rgba(200,241,53,0.35)'
            }}>
            Book Now →
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="show-mobile"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: open ? 'transparent' : 'rgba(255,255,255,0.06)',
            backdropFilter: open ? 'none' : 'blur(12px)',
            WebkitBackdropFilter: open ? 'none' : 'blur(12px)',
            border: open ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '0.4rem 0.7rem',
            cursor: 'pointer',
            zIndex: 200,
            boxShadow: open ? 'none' : 'inset 0 1px 0 rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
          }}
          onTouchStart={e => {
            e.currentTarget.style.background = 'rgba(200,241,53,0.1)'
            e.currentTarget.style.color = '#c8f135'
            e.currentTarget.style.borderColor = 'rgba(200,241,53,0.35)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(200,241,53,0.3), 0 0 40px rgba(200,241,53,0.15), inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
          onTouchEnd={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(200,241,53,0.1)'
            e.currentTarget.style.color = '#c8f135'
            e.currentTarget.style.borderColor = 'rgba(200,241,53,0.35)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(200,241,53,0.3), 0 0 40px rgba(200,241,53,0.15), inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08)'
          }}>
          {/* 3 dots instead of lines */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: open ? '#c8f135' : 'rgba(255,255,255,0.8)',
              transition: 'all 0.3s ease',
              transform: open ? 'scale(1.3)' : 'scale(1)',
              boxShadow: open ? '0 0 6px rgba(200,241,53,0.8)' : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* ── MOBILE FULL SCREEN MENU ── */}
      <div ref={menuRef} style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(10,10,10,0.75)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        transform: open ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.55s cubic-bezier(0.77,0,0.18,1)',
        padding: '2rem',
        borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>

        {/* Glass top highlight line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.5s ease 0.3s',
        }} />

        {/* Lime accent line */}
        <div style={{
          position: 'absolute',
          top: 0, left: '20%', right: '20%',
          height: '2px',
          background: 'linear-gradient(to right, transparent, rgba(200,241,53,0.5), transparent)',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.5s ease 0.4s',
          borderRadius: '999px',
        }} />

        {/* Subtle inner vignette for depth */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,241,53,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

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
          display: 'flex',
          gap: '0.7rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: 0,
          transform: 'translateY(24px)',
        }}>
          {SOCIALS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-barlow-condensed)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                padding: '0.55rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                transition: 'all 0.25s ease',
              }}
              onTouchStart={e => applyGlow(e.currentTarget)}
              onTouchEnd={e => removeGlow(e.currentTarget)}
              onMouseEnter={e => applyGlow(e.currentTarget)}
              onMouseLeave={e => removeGlow(e.currentTarget)}>
              {label}
            </a>
          ))}
        </div>

        {/* Booking CTA */}
        <a
          href="mailto:Info.rohanrao@gmail.com"
          className="menu-link"
          style={{
            fontFamily: 'var(--font-barlow-condensed)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '0.9rem 3.5rem',
            textDecoration: 'none',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)' as string,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            transition: 'all 0.25s ease',
            opacity: 0,
            transform: 'translateY(24px)',
          }}
          onTouchStart={e => {
            e.currentTarget.style.background = 'rgba(200,241,53,0.1)'
            e.currentTarget.style.color = '#c8f135'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
          onTouchEnd={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(200,241,53,0.1)'
            e.currentTarget.style.color = '#c8f135'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}>
          Book DJ Rohan
        </a>

        {/* Footer tag */}
        <span style={{
          position: 'absolute',
          bottom: '1.8rem',
          fontFamily: 'var(--font-barlow-condensed)',
          fontSize: '1rem',
          letterSpacing: '0.125em',
          textTransform: 'uppercase',
          color: 'rgba(200,241,53,0.2)',
        }}>
          DJ · Producer · Since 2016
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