import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.04)' : 'none',
        transition: 'background-color 300ms, border-color 300ms, backdrop-filter 300ms, box-shadow 300ms',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: '1100px', height: '72px', padding: '0 40px' }}
      >
        <a href="#" aria-label="CleanProof home" className="flex items-center">
          <svg
            viewBox="0 0 400 200"
            style={{ height: '84px', width: 'auto' }}
            aria-hidden="true"
          >
            <g transform="translate(200, 58)">
              <path
                d="M16,-22 C4,-28 -14,-24 -20,-10 C-26,4 -18,24 -2,28 C10,30 20,24 24,16"
                fill="none"
                stroke="var(--text-primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M-4,6 L4,14 L20,-4"
                fill="none"
                stroke="var(--text-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text
              x="200"
              y="140"
              textAnchor="middle"
              fontFamily="'Geist','SF Pro Display','Helvetica Neue',sans-serif"
              fontWeight="600"
              fontSize="40"
              letterSpacing="-1.5"
              fill="var(--text-primary)"
            >
              CleanProof
            </text>
          </svg>
        </a>

        <a
          href="https://calendly.com/al-consulting-nova"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: 'var(--accent)',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 600,
            padding: '10px 24px',
            borderRadius: '9999px',
            transition: 'background-color 200ms',
            outlineColor: 'var(--accent)',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
        >
          Let's Talk
        </a>
      </div>

      {/* Mobile: smaller height */}
      <style>{`
        @media (max-width: 767px) {
          nav > div { height: 60px !important; padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  )
}
