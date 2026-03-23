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

const cards = [
  {
    title: "You're running a business on group chat photos",
    body: "Your crews text 300 photos a week into a thread nobody can search. Which building? What day? What got cleaned? Nobody knows — including you.",
  },
  {
    title: "Clients ask for proof you don't have",
    body: "\"Did you clean the break room Thursday?\" And now you're scrolling through a week of texts, looking for a photo that may not exist. That's not a system. That's a liability.",
  },
  {
    title: "Money walks out the door every week",
    body: "Declined repairs. Missed follow-ups. Inspections filed late. Every manual process has a leak — and you're losing revenue through all of them.",
  },
  {
    title: "Enterprise software wasn't built for you",
    body: "The tools that exist cost $400/month, take 6 weeks to set up, and were designed for companies with 200 employees. You have 12 people and 15 sites.",
  },
] as const

export function Problem() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-soft)',
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
            The Problem
          </motion.p>

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
            Your industry has been ignored by software companies.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '640px',
            }}
          >
            The big SaaS companies build for tech, finance, and healthcare. They don't know
            what a fire inspection report looks like. They've never seen a cleaning crew's
            group chat at 2 AM. So you're stuck with tools that weren't made for you — or
            no tools at all.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid md:grid-cols-2"
          style={{ gap: '20px' }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '36px',
                transition: 'border-color 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#D5D5D5')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section:nth-of-type(2) { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
