'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Cover } from '@/components/ui/cover'

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  // Parallax effect — photo scrolls slower than page
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      if (window.innerWidth < 768) return
      const scrollY = window.scrollY
      imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: '#080808',
    }}>

      {/* ── PHOTO with parallax ── */}
      <div ref={imgRef} style={{
        position: 'absolute',
        inset: '0 0 0 0', // oversized so parallax doesn't show gaps
        height: '100%',
        willChange: 'transform',
      }}>
        <Image
          src="/images/hero.jpeg"
          alt="DJ Rohan"
          fill
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '60% 45%',  // changed from 'center top'
            filter: 'brightness(0.65) saturate(0.8)',  // slightly brighter
          }}
        />
      </div>

      {/* ── GRADIENT overlays ── */}
      {/* Bottom fade — text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 40%, transparent 70%)',
        zIndex: 2,
      }}/>
      {/* Left side fade */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(8,8,8,0.6) 0%, transparent 60%)',
        zIndex: 2,
      }}/>

      {/* ── TOP LEFT — tag line ── */}
      <div style={{
  position: 'absolute',
  top: 'clamp(5rem, 12vw, 8rem)',     // moves down on mobile below navbar
  left: 'clamp(1rem, 4vw, 2.5rem)',
  zIndex: 10,
}}>
        {/* <span style={{
          fontFamily: 'var(--font-barlow-condensed)',
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(200,241,53,0.7)',
        }}>
          multi-genre dj & producer since 2016
        </span> */}
      </div>

      {/* ── BOTTOM LEFT — Main name ── */}
      <div style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem, 5vw, 4rem)',    // responsive bottom
            left: 'clamp(1rem, 4vw, 2.5rem)',      // responsive left
            zIndex: 10,
            maxWidth: '90vw',                       // never overflows screen
        }}>
        {/* Sub label */}
        <p style={{
    fontFamily: 'var(--font-barlow-condensed)',
    fontSize: 'clamp(1rem, 4vw, 1rem)',
    fontWeight: 600,
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: '#c8f135',
    marginBottom: '0.3rem',
  }}>
    Multi-genre DJ & Producer
  </p>

        {/* Giant name */}
        <h1 style={{
    fontFamily: 'var(--font-bebas)',
    fontSize: 'clamp(4rem, 20vw, 14rem)',  // scales down on mobile
    lineHeight: 0.9,
    letterSpacing: '0.02em',
    color: '#f0f0f0',
    margin: 0,
  }}>
    DJ<br />
    <span style={{ color: '#ffffff' }}>Rohan</span>
  </h1>
</div>

      {/* ── BOTTOM RIGHT — Next gig pill ── */}
      <div style={{
  position: 'absolute',
  bottom: 'clamp(1.5rem, 5vw, 4rem)',
  right: 'clamp(1rem, 4vw, 2.5rem)',
  zIndex: 10,
  textAlign: 'right',
}}>
        <p style={{
          fontFamily: 'var(--font-barlow-condensed)',
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#666',
          marginBottom: '0.3rem',
        }}>
          Home Town
        </p>
        <a href="#events" style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          letterSpacing: '0.08em',
          color: '#f0f0f0',
          textDecoration: 'none',
          display: 'block',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#c8f135')}
        onMouseLeave={e => (e.currentTarget.style.color = '#f0f0f0')}>
          Ahmedabad<br />
          {/* <span style={{ color: '#c8f135', fontSize: '0.6em', letterSpacing: '0.2em' }}>Live</span> */}
        </a>
      </div>

      {/* ── SCROLL indicator ── */}
      <style>{`
        @media (max-width: 760px) {
          .scroll-indicator { display: none !important; }
        }
      `}</style>
      <div className="scroll-indicator" style={{
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.4rem',
  opacity: 1,
}}>
        <span style={{
          fontFamily: 'var(--font-barlow-condensed)',
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#444',
        }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #c8f135, transparent)',
          animation: 'scrollLine 1.5s ease-in-out infinite',
        }}/>
      </div>

    </section>
  )
}