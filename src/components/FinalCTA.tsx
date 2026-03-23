import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-soft)',
        padding: '128px 40px',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="mx-auto text-center"
        style={{ maxWidth: '640px' }}
      >
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}
        >
          Let's figure out what to build you.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto"
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            marginBottom: '40px',
          }}
        >
          30-minute call. No pitch deck. Just a conversation about what's costing you
          time and what we can do about it.
        </motion.p>

        <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
          <a
            href="https://calendly.com/al-consulting-nova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 600,
              padding: '16px 40px',
              borderRadius: '9999px',
              transition: 'background-color 200ms, transform 200ms, box-shadow 200ms',
              outlineColor: 'var(--accent)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,53,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Let's Talk
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
          }}
        >
          No commitment. No credit card. Just a conversation.
        </motion.p>
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          section:nth-of-type(6) { padding: 80px 24px !important; }
          section:nth-of-type(6) a[href*="calendly"] {
            display: block !important;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  )
}
