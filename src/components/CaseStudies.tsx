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

type CaseStudy = {
  readonly company: string
  readonly industry: string
  readonly metric: string
  readonly metricLabel: string
  readonly narrative: string
}

const caseStudies: readonly CaseStudy[] = [
  {
    company: 'Ridgeline Property Group',
    industry: 'Property Management — Boise, ID',
    metric: '40',
    metricLabel: 'hours/month saved',
    narrative:
      'A property management company managing 150+ units was spending 12 hours a week on move-in/move-out inspection reports. Paper forms, phone photos dumped in a group chat, manually typed into spreadsheets. We built them a custom inspection app that generates timestamped, photo-verified reports in under 2 minutes. They cut their admin time by 40 hours a month and stopped losing security deposit disputes.',
  },
  {
    company: 'Trident Auto Works',
    industry: 'Auto Service — Greenville, SC',
    metric: '$47K',
    metricLabel: 'recovered in 90 days',
    narrative:
      'An auto service shop had no system for following up on declined repairs. Customers would say "not today" to a $1,200 brake job and just disappear. We built a follow-up engine that automatically tracks every declined service and sends timed reminders. In the first 90 days, they recovered $47,000 in work that would\'ve walked out the door.',
  },
]

export function CaseStudies() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-warm)',
        padding: '112px 40px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="text-center"
          style={{ marginBottom: '64px' }}
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
            Don't take our word for it. Look at the numbers.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.company}
              variants={fadeUp}
              className="grid md:grid-cols-5"
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '56px',
                gap: '48px',
                alignItems: 'center',
              }}
            >
              {/* Metric */}
              <div className="md:col-span-2 text-center md:text-left">
                <p
                  style={{
                    fontSize: 'clamp(64px, 8vw, 96px)',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {cs.metric}
                </p>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    marginTop: '8px',
                  }}
                >
                  {cs.metricLabel}
                </p>
              </div>

              {/* Story */}
              <div className="md:col-span-3">
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  {cs.company}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  {cs.industry}
                </p>
                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {cs.narrative}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
          style={{
            marginTop: '48px',
            fontSize: '16px',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          These aren't hypotheticals. These are real businesses with real problems we fixed.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section:nth-of-type(4) { padding: 80px 24px !important; }
          section:nth-of-type(4) .grid { padding: 36px !important; }
        }
      `}</style>
    </section>
  )
}
