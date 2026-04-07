import { ArrowRight } from 'lucide-react'

export default function Home({ setPage }) {
  return (
    <div className="home-page">
      <div className="home-wrapper">

        <span className="home-eyebrow">Solutions Engineer · Greenville, SC</span>
        <h1 className="home-title">
          Hi, I'm <em>Jenna.</em>
        </h1>
        <p className="home-tagline">I speak fluent tech — and fluent human.</p>
        <p className="home-blurb">
          I spend my days making a deeply complex product feel approachable — for clients, for teammates, for anyone who needs to understand it. I get excited about data, building tools, and the moment something finally clicks for someone.
        </p>

        <div className="home-cta">
          <button className="home-btn-primary" onClick={() => setPage('projects')}>
            View Projects
          </button>
          <button className="home-btn-secondary" onClick={() => setPage('about')}>
            About Me
          </button>
        </div>

        <div className="home-details">

          {/* ── Skills snapshot ── */}
          <div className="home-skills-section">
            <span className="home-section-label">Tech I work with</span>
            <div className="home-skills">
              {['dbt', 'AWS Athena', 'SQL', 'Python', 'Java', 'React', 'REST APIs', 'Git'].map(skill => (
                <span key={skill} className="home-skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          {/* ── Featured project ── */}
          <div className="home-featured-section">
            <span className="home-section-label">Featured project</span>
            <div className="home-featured-card" onClick={() => setPage('projects')}>
              <div className="home-featured-accent" />
              <div className="home-featured-body">
                <div className="home-featured-text">
                  <h3 className="home-featured-title">Octo-Fall Leaf Catcher Game</h3>
                  <p className="home-featured-desc">
                    A browser game where you catch falling leaves while dodging pinecones. Built for smooth, responsive gameplay across devices.
                  </p>
                  <div className="home-featured-tags">
                    <span className="home-featured-tag">JavaScript</span>
                    <span className="home-featured-tag">Canvas API</span>
                    <span className="home-featured-tag">Game Dev</span>
                  </div>
                </div>
                <ArrowRight size={18} strokeWidth={1.5} className="home-featured-arrow" />
              </div>
            </div>
          </div>

          {/* ── Currently peek ── */}
          <div className="home-currently">
            <div className="home-currently-dot" />
            <span className="home-currently-text">
              Currently: <strong>Solutions Engineer @ Eleos Technologies</strong> — playing <strong>Outer Wilds</strong>, reading whatever's next on the list
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}