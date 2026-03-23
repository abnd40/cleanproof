import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay: d },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 animate-aurora opacity-50"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, var(--white) 0%, var(--white) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--white) 16%),
              repeating-linear-gradient(100deg, var(--orange-200) 10%, var(--orange-100) 15%, var(--orange-50) 20%, var(--orange-100) 25%, var(--orange-200) 30%)
            `,
            backgroundSize: '300% 200%, 200% 200%',
            filter: 'blur(60px) saturate(1.2)',
          }}
        />
        {/* Fade to white at the bottom */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '50%',
            background: 'linear-gradient(to bottom, transparent, white 80%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: '1200px', paddingTop: '240px', paddingBottom: '120px', gap: '32px', paddingLeft: '40px', paddingRight: '40px' }}
      >
        {/* Badge */}
        <motion.div variants={fade} custom={0} initial="hidden" animate="visible">
          <span
            style={{
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              backgroundColor: 'var(--accent-soft)',
              padding: '8px 16px',
              borderRadius: '9999px',
            }}
          >
            For businesses in boring industries
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fade}
          custom={0.1}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: 'clamp(40px, 5.5vw, 80px)',
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            maxWidth: '900px',
          }}
        >
          We build the software your industry{' '}
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: '1.15em',
              color: 'var(--accent)',
            }}
          >
            forgot
          </span>{' '}
          to make.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fade}
          custom={0.2}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#373a46',
            opacity: 0.8,
            maxWidth: '620px',
          }}
        >
          Fire inspectors filing paper reports. Cleaning crews texting photos to a group chat.
          Auto shops losing thousands in declined repairs nobody follows up on. Your industry
          runs on duct tape and spreadsheets. We build the tool that replaces them.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fade} custom={0.3} initial="hidden" animate="visible">
          <a
            href="https://calendly.com/al-consulting-nova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]"
            style={{
              background: 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 50%, #0a0a0a 100%)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 500,
              padding: '14px 36px',
              borderRadius: '9999px',
              transition: 'opacity 200ms, transform 200ms',
              outlineColor: 'var(--accent)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Fine print */}
        <motion.p
          variants={fade}
          custom={0.4}
          initial="hidden"
          animate="visible"
          style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
            fontWeight: 400,
          }}
        >
          Free call. 30 minutes. No pitch deck.
        </motion.p>
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 767px) {
          section:first-of-type > div:nth-child(2) {
            padding-top: 160px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
