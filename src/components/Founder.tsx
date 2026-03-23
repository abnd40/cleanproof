import { motion } from 'framer-motion'

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.15 },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const stats = [
  { number: '5+', label: 'Projects Shipped' },
  { number: '100+', label: 'Hours Saved Monthly' },
  { number: '6', label: 'Cities Researched' },
] as const

const badges = ['AI Software', 'Automation', 'Consulting', 'Education'] as const

export function Founder() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg)',
        padding: '112px 40px',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <div
          className="grid md:grid-cols-5 items-start"
          style={{ gap: '64px' }}
        >
          {/* Left column — 60% */}
          <motion.div
            className="md:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Label */}
            <motion.p
              variants={fadeLeft}
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              About
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeLeft}
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '40px',
              }}
            >
              Built by a founder, for founders.
            </motion.h2>

            {/* Bio paragraphs */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}
            >
              I'm Albert. I didn't go to school for computer science. I don't write code in
              the traditional sense. I build software using AI — specifically Claude Code — and
              I ship tools that solve real problems for real businesses. That's not a limitation.
              It's an advantage.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}
            >
              Engineers build what they think is elegant. I build what business owners actually
              need. I've sat across from cleaning company owners, property managers, and auto
              shop operators. I know what a broken process looks like because I've watched people
              live inside them. I don't start with technology — I start with the pain. What's
              costing you time? What's costing you money? What falls apart when you're not watching?
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}
            >
              I've built lead generation pipelines that scraped and organized 900+ businesses
              across 6 cities. I've designed cold outreach engines, AI-powered content systems,
              and multi-channel sales operations — all from scratch, all with AI. I built a
              5-mission AI operations agent with custom skills for market research, sales
              enablement, and business automation. I didn't learn this in a classroom. I learned
              it by solving problems and shipping tools.
            </motion.p>

            {/* Punchy closer — bold/darker */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}
            >
              When you get on a call with me, you're not talking to a sales team. You're talking
              to the person who's going to scope your problem, design the fix, and build it. One
              person. One conversation. Delivered in weeks, not months.
            </motion.p>
          </motion.div>

          {/* Right column — 40% — Profile card */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeRight}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {/* Headshot */}
              <div style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden' }}>
                <img
                  src="/headshot.jpg"
                  alt="Albert, founder of CleanProof"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '28px' }}>
                {/* Name + title */}
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  Albert
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '24px',
                  }}
                >
                  Founder, CleanProof
                </p>

                {/* Stats row */}
                <div
                  className="flex"
                  style={{
                    gap: '24px',
                    marginBottom: '24px',
                    paddingBottom: '24px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p
                        style={{
                          fontSize: '24px',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          lineHeight: 1.1,
                        }}
                      >
                        {stat.number}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          marginTop: '4px',
                          lineHeight: 1.3,
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap" style={{ gap: '8px' }}>
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      style={{
                        display: 'inline-block',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-soft)',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section:nth-of-type(5) { padding: 80px 24px !important; }
          section:nth-of-type(5) .grid { gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
