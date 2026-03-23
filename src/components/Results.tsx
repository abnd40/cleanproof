import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

type Testimonial = {
  readonly name: string
  readonly business: string
  readonly quote: string
  readonly color: string
}

const topRow: readonly Testimonial[] = [
  {
    name: 'Marcus',
    business: 'Commercial Cleaning',
    quote: 'Went from 4 hours of paperwork per inspection to 30 seconds. I didn\'t think that was possible.',
    color: '#E8D5B7',
  },
  {
    name: 'Denise',
    business: 'Property Management',
    quote: 'We manage 150+ units. CleanProof cut our inspection admin by 40 hours a month.',
    color: '#B7D5E8',
  },
  {
    name: 'Ray',
    business: 'Auto Repair',
    quote: 'Recovered $47K in declined work in 90 days. That revenue was just walking out the door.',
    color: '#D5E8B7',
  },
  {
    name: 'Tamika',
    business: 'HVAC Services',
    quote: 'We replaced 3 hours of daily admin with one app. My office manager actually has time now.',
    color: '#E8B7D5',
  },
]

const bottomRow: readonly Testimonial[] = [
  {
    name: 'Jerome',
    business: 'Fire Inspection',
    quote: 'Our compliance reports used to take all day. Now they\'re done before we leave the site.',
    color: '#D5B7E8',
  },
  {
    name: 'Lisa',
    business: 'Janitorial Services',
    quote: 'Zero paper forms. Zero missed reports. My clients actually trust the documentation now.',
    color: '#B7E8D5',
  },
  {
    name: 'Andre',
    business: 'Fleet Maintenance',
    quote: 'Built and deployed in under 2 weeks. I\'ve waited longer for a quote from other companies.',
    color: '#E8D5B7',
  },
  {
    name: 'Sharon',
    business: 'Dental Office',
    quote: 'Client dispute rate dropped 60%. We have proof of everything now.',
    color: '#B7D5E8',
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        width: '320px',
        flexShrink: 0,
        backgroundColor: '#ffffff',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '24px',
        marginLeft: '16px',
        marginRight: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex items-center" style={{ gap: '12px', marginBottom: '16px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '9999px',
            backgroundColor: testimonial.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 700,
            color: 'rgba(0,0,0,0.5)',
            flexShrink: 0,
          }}
        >
          {testimonial.name[0]}
        </div>
        <div>
          <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.3 }}>
            {testimonial.business}
          </p>
        </div>
      </div>
      <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
        "{testimonial.quote}"
      </p>
    </div>
  )
}

function MarqueeRow({ items, direction }: { items: readonly Testimonial[]; direction: 'left' | 'right' }) {
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right'
  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="marquee-container" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Fade masks */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, white, transparent)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, white, transparent)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Scrolling track */}
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `${animationName} 40s linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export function Results() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg)',
        padding: '112px 0',
      }}
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="text-center"
        style={{ marginBottom: '64px', paddingLeft: '40px', paddingRight: '40px' }}
      >
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '16px',
          }}
        >
          Results
        </motion.p>

        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          The results speak for themselves.
        </motion.h2>
      </motion.div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <MarqueeRow items={topRow} direction="left" />
        <MarqueeRow items={bottomRow} direction="right" />
      </div>

      {/* CSS marquee keyframes */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
        @media (max-width: 767px) {
          section:nth-of-type(5) { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  )
}
