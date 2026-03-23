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

const services = [
  {
    num: '01',
    title: 'Custom Software',
    description:
      "The tool your industry doesn't have yet. We scope it, build it, and hand it to your team — designed around the way you actually work, not the way some product manager imagined you work.",
  },
  {
    num: '02',
    title: 'Automation',
    description:
      "The stuff you're doing manually that a machine should be doing. Follow-up emails, report generation, scheduling, data entry. We find the bottleneck and eliminate it.",
  },
  {
    num: '03',
    title: 'Consulting',
    description:
      "Sometimes you don't need software — you need someone to look at your operation and tell you where you're bleeding time and money. We do that, then build the fix if you want one.",
  },
  {
    num: '04',
    title: 'Training',
    description:
      "Your team doesn't need to understand AI. They need to understand the tool we built them. We train your people until they're faster than they were before, not confused.",
  },
] as const

export function WhatWeBuild() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg)',
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
            What We Do
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
            Custom tools. Real results. Built for your operation.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '32px' }}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.num}
              variants={fadeUp}
              style={{
                backgroundColor: 'var(--bg-soft)',
                borderRadius: '16px',
                padding: '36px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-soft)',
                  padding: '4px 12px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}
              >
                {svc.num}
              </span>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                {svc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section:nth-of-type(3) { padding: 80px 24px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          section:nth-of-type(3) .grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
