'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      if (window.innerWidth < 768) return
      const scrollY = window.pageYOffset ?? window.scrollY
      imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section" style={{
      position:   'relative',
      height:     '100vh',
      width:      '100%',
      overflow:   'hidden',
      background: '#080808',
    }}>

      {/* ── PHOTO with parallax ── */}
      <div ref={imgRef} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, height: '100%', willChange: 'transform', transform: 'translateZ(0)' }}>
        <Image
          src="/images/hero.jpeg"
          alt="DJ Rohan"
          fill priority sizes="100vw" quality={100}
          style={{ objectFit: 'cover', objectPosition: '60% 45%', filter: 'brightness(0.55) saturate(0.75)' }}
        />
      </div>

      {/* ── GRADIENTS ── */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.4) 40%, transparent 70%)', zIndex: 2 }}/>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'linear-gradient(to right, rgba(8,8,8,0.7) 0%, transparent 65%)', zIndex: 2 }}/>

      {/* ── GLASS CARD — Main content ── */}
      <div style={{
        position:            'absolute',
        bottom:              'clamp(5rem, 10vw, 8rem)',
        left:                'clamp(1rem, 4vw, 2.5rem)',
        zIndex:              10,
        maxWidth:            'clamp(280px, 65vw, 700px)',
        background:          'rgba(18,18,18,0.55)', /* fallback for browsers without backdrop-filter */
        backdropFilter:      'blur(20px)',
        WebkitBackdropFilter:'blur(20px)',
        border:              '1px solid rgba(255,255,255,0.08)',
        borderRadius:        '16px',
        padding:             'clamp(1.2rem, 3vw, 2rem) clamp(1.5rem, 4vw, 2.5rem)',
        boxShadow:           '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}>
        {/* Lime dot + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8f135', boxShadow: '0 0 8px rgba(200,241,53,0.8)', flexShrink: 0 }}/>
          <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(0.78rem, 2vw, 0.9rem)', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.9)', margin: 0 }}>
            Multi-genre DJ & Producer
          </p>
        </div>

        {/* Giant name */}
        <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(4.5rem, 18vw, 13rem)', lineHeight: 0.88, letterSpacing: '0.02em', color: '#ffffff', margin: 0, textShadow: '0 0 80px rgba(255,255,255,0.1)' }}>
          DJ<br/>
          <span style={{ color: '#ffffff', opacity: 0.95 }}>Rohan</span>
        </h1>

        {/* Since + motto */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Since 2016</span>
          <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.15)' }}/>
          <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>DJ is an Art only the best can conquer</span>
        </div>
      </div>

      {/* ── HOMETOWN PILL — hidden on mobile ── */}
      <div className="hometown-pill" style={{
        position:            'absolute',
        bottom:              'clamp(5rem, 10vw, 8rem)',
        right:               'clamp(1rem, 4vw, 2.5rem)',
        zIndex:              10,
        textAlign:           'right',
        background:          'rgba(18,18,18,0.5)', /* fallback for browsers without backdrop-filter */
        backdropFilter:      'blur(16px)',
        WebkitBackdropFilter:'blur(16px)',
        border:              '1px solid rgba(255,255,255,0.08)',
        borderRadius:        '999px',
        padding:             '0.8rem 1.4rem',
        boxShadow:           '0 4px 24px rgba(0,0,0,0.3)',
      }}>
        <p style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(200,241,53,0.6)', margin: '0 0 0.2rem 0' }}>
          Home Town
        </p>
        <a href="#events" style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', letterSpacing: '0.08em', color: '#f0f0f0', textDecoration: 'none', display: 'block', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#c8f135')}
          onMouseLeave={e => (e.currentTarget.style.color = '#f0f0f0')}>
          Ahmedabad
        </a>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <style>{`
        /* Bug fix: 100vh on mobile Safari includes browser chrome and causes overflow.
           100dvh (dynamic viewport height) excludes it. 100vh is the fallback for
           browsers that don't support dvh yet. */
        .hero-section {
          height: 100vh;
          height: 100dvh;
        }

        /* Bug fix: transform-origin cannot be changed mid-keyframe reliably across
           browsers (breaks in Safari, old Firefox). Split into two keyframes:
           one scales in from top, one fades out — no transform-origin swap needed. */
        @keyframes scrollLineGrow {
          0%   { transform: scaleY(0); opacity: 1; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes scrollLineFade {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
        .scroll-line {
          animation: scrollLineGrow 0.75s ease-in-out infinite alternate,
                     scrollLineFade 1.5s ease-in-out infinite;
          transform-origin: top;
        }

        @media (max-width: 768px) {
          .scroll-indicator { display: none !important; }
          .hometown-pill    { display: none !important; }
          .top-tag          { display: none !important; }
        }
      `}</style>

      <div className="scroll-indicator" style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
      }}>
        <span style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
          Scroll
        </span>
        <div className="scroll-line" style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #c8f135, transparent)' }}/>
      </div>

    </section>
  )
}