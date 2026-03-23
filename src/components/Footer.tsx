export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--surface-dark)',
        padding: '48px 40px',
      }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row items-center md:items-start justify-between"
        style={{ maxWidth: '1100px', gap: '24px' }}
      >
        <div className="flex flex-col items-center md:items-start" style={{ gap: '12px' }}>
          <svg
            viewBox="0 0 400 200"
            style={{ height: '48px', width: 'auto' }}
            aria-label="CleanProof"
          >
            <g transform="translate(200, 58)">
              <path
                d="M16,-22 C4,-28 -14,-24 -20,-10 C-26,4 -18,24 -2,28 C10,30 20,24 24,16"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M-4,6 L4,14 L20,-4"
                fill="none"
                stroke="#FFFFFF"
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
              fill="#FFFFFF"
            >
              CleanProof
            </text>
          </svg>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.5,
            }}
          >
            We build the software your industry forgot to make.
          </p>
        </div>

        <p
          className="text-center md:text-right"
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          &copy; 2026 CleanProof
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer { padding: 40px 24px !important; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
